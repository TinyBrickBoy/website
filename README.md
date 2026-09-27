# tinybrickboy.de

Persönliche Website von Leo (tinybrickboy), gebaut mit Next.js (App Router), Inhalte aus Strapi.

Alles wird vom eigenen Server ausgeliefert: Schrift (Inter über Fontsource), Icons (Lucide und Simple Icons als Inline SVG) und Bilder liegen im Projekt. Es gibt keine Google Fonts, keine CDNs und keine externen APIs.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start          # Produktionsserver
npm run typecheck
```

## Inhalte aus Strapi

Organisationen, Projekte und die Angaben im Impressum kommen aus Strapi. Der Next.js Server holt sie alle 5 Minuten neu, der Browser verbindet sich nie direkt mit Strapi. Bilder aus Strapi werden über `/cms/uploads/...` vom eigenen Server ausgeliefert.

| Strapi API | Typ | Felder |
| --- | --- | --- |
| `/api/organization` | Collection | `Name`, `description`, `link`, optional `image` (Media) |
| `/api/projekt` | Collection | `name`, `description`, `type` (`finished`, `in-progress`, `planned`, `archived`), `link`, optional `image` (Media) |
| `/api/imprint` | Single Type | `name`, `street`, `city` (PLZ und Ort), `country`, `email`, `phone` |

Für alle drei muss bei Settings → Users & Permissions → Public die Aktion `find` erlaubt sein. Ist Strapi nicht erreichbar, bleibt die Seite online, dann fehlen nur diese Bereiche bzw. das Impressum zeigt Platzhalter.

Umgebungsvariablen:

- `STRAPI_URL` (Standard: die onthepixel Strapi Instanz)
- `STRAPI_TOKEN` optional, falls die Inhalte nicht öffentlich sind

## Deployment mit Docker

```bash
docker build -t tinybrickboy-web .
docker run -d -p 3000:3000 --restart unless-stopped tinybrickboy-web
```

Das Image enthält nur den Next.js Standalone Server (Port 3000). Content Security Policy und weitere Sicherheits Header setzt `next.config.ts`.

## Struktur

- `app/page.tsx` Startseite, Styles in `app/home.css`
- `app/(legal)/impressum` und `app/(legal)/datenschutz` Rechtliches, Styles in `app/legal.css`
- `app/not-found.tsx` 404 Seite
- `components/` Header, Theme Umschalter, Scroll Effekte, Icons
