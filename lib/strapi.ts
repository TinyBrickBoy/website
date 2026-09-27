// Inhalte aus Strapi. Wird nur auf dem Server abgefragt, der Browser spricht nie direkt mit Strapi.

const STRAPI_URL = (
  process.env.STRAPI_URL ?? "https://strapi-noyeihlycx2g1j1axowqn9ov.web01.onthepixel.net"
).replace(/\/$/, "");

// Wie oft (Sekunden) Inhalte neu aus Strapi geholt werden
export const REVALIDATE = 300;

type StrapiMedia = { url: string; alternativeText?: string | null } | null;

export type Organization = {
  id: number;
  Name: string;
  description: string | null;
  link: string | null;
  image?: StrapiMedia;
};

export type Project = {
  id: number;
  name: string;
  description: string | null;
  type: string | null;
  link: string | null;
  image?: StrapiMedia;
};

// Single Type "imprint" – fehlende Felder werden als Platzhalter angezeigt
export type Imprint = {
  name?: string | null;
  street?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string | null;
  phone?: string | null;
};

async function get<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}`, {
      headers: process.env.STRAPI_TOKEN ? { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` } : undefined,
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data: T };
    return json.data;
  } catch {
    // Strapi nicht erreichbar: Seite trotzdem ausliefern
    return null;
  }
}

export async function getOrganizations() {
  return (await get<Organization[]>("organization?populate=*&sort=id&pagination[pageSize]=100")) ?? [];
}

export async function getProjects() {
  return (await get<Project[]>("projekt?populate=*&sort=id&pagination[pageSize]=100")) ?? [];
}

export async function getImprint() {
  return (await get<Imprint>("imprint")) ?? {};
}

// Strapi-Uploads laufen über /cms/..., damit Bilder vom eigenen Server kommen
export function mediaUrl(media: StrapiMedia | undefined) {
  if (!media?.url) return null;
  const path = media.url.startsWith("http") ? new URL(media.url).pathname : media.url;
  return path.startsWith("/uploads/") ? `/cms${path}` : null;
}

export function strapiUploadUrl(path: string) {
  return `${STRAPI_URL}/uploads/${path}`;
}
