# tinybrickboy.de

Persönliche Website von Leo (tinybrickboy), gebaut mit Next.js (App Router) und statisch exportiert.

Alles wird vom eigenen Server ausgeliefert: Schrift (Inter über Fontsource), Icons (Lucide und Simple Icons als Inline SVG) und Bilder liegen im Projekt. Es gibt keine Google Fonts, keine CDNs und keine externen APIs.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statischer Export nach out/
npm run typecheck
```

## Deployment mit Docker

```bash
docker build -t tinybrickboy-web .
docker run -d -p 80:80 --restart unless-stopped tinybrickboy-web
```

Das Image baut die Seite mit Node und liefert danach nur `out/` über nginx aus (siehe `nginx.conf`, inklusive Content Security Policy, die nur den eigenen Server erlaubt).

## Struktur

- `app/page.tsx` Startseite, Styles in `app/home.css`
- `app/(legal)/impressum` und `app/(legal)/datenschutz` Rechtliches, Styles in `app/legal.css`
- `app/not-found.tsx` 404 Seite
- `components/` Header, Theme Umschalter, Scroll Effekte, Icons
