import type { Metadata, Viewport } from "next";
// Inter liegt lokal im Build (Fontsource) – keine externen Font-Server
import "@fontsource-variable/inter/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tinybrickboy.de"),
  title: "Leo | tinybrickboy – Minecraft & Netzwerksicherheit",
  description:
    "Leo (tinybrickboy) – Minecraft-Entwicklung und DDoS-Protection. Betreiber von onthepixel.net und Entwickler von fastasfuck, einer Reverse-Proxy-Lösung für Minecraft-Server.",
  authors: [{ name: "Leo (tinybrickboy)" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060912" },
    { media: "(prefers-color-scheme: light)", color: "#eef2f9" },
  ],
};

// Setzt das Theme vor dem ersten Paint, damit nichts flackert
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.add(d?'dark':'light');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
