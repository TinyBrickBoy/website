import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import "../legal.css";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="legal-page">
      <div className="ambient" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
      </div>

      <header className="header">
        <nav className="nav" aria-label="Hauptnavigation">
          <Link href="/" className="logo" aria-label="tinybrickboy – Startseite">
            <span>tinybrickboy</span>
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <div className="container legal">
          <Link href="/" className="back-link">
            <ArrowLeft className="icon" aria-hidden="true" /> Zurück zur Startseite
          </Link>
          <div className="legal-card">{children}</div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <nav className="footer-nav" aria-label="Footer-Navigation">
              <Link href="/">Home</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </nav>
            <p className="footer-copy">&copy; {new Date().getFullYear()} tinybrickboy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
