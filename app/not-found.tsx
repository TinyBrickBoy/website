import type { Metadata } from "next";
import Link from "next/link";
import "./not-found.css";

export const metadata: Metadata = {
  title: "404 – Seite nicht gefunden | tinybrickboy",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="nf">
      <div className="wrap">
        <div className="code">404</div>
        <h1>Hier ist nichts.</h1>
        <p>Diese Seite gibt&apos;s nicht (mehr). Vielleicht ein Tippfehler, vielleicht ein verlorener Link.</p>
        <Link href="/" className="btn">&larr; Zur Startseite</Link>
      </div>
    </div>
  );
}
