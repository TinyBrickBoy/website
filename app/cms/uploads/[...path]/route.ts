import { strapiUploadUrl } from "@/lib/strapi";

// Liefert Bilder aus Strapi über den eigenen Server aus
export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  if (path.some((p) => p === ".." || p.includes("/"))) return new Response("Not found", { status: 404 });

  const upstream = await fetch(strapiUploadUrl(path.map(encodeURIComponent).join("/")), {
    next: { revalidate: 86400 },
  }).catch(() => null);
  const type = upstream?.headers.get("content-type") ?? "";
  if (!upstream?.ok || !type.startsWith("image/")) return new Response("Not found", { status: 404 });

  return new Response(upstream.body, {
    headers: { "Content-Type": type, "Cache-Control": "public, max-age=86400" },
  });
}
