"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#what", label: "Was" },
  { href: "#projects", label: "Projekte" },
  { href: "#contact", label: "Kontakt" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Header-Schatten beim Scrollen
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aktiven Menüpunkt beim Scrollen markieren
  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  // Menü mit Escape schließen
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="container">
        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#home" className="logo" aria-label="tinybrickboy – Startseite">
            <span className="logo-text">tinybrickboy</span>
          </a>
          <div className="nav-right">
            <div className="nav-links">
              {links.map((l) => {
                const isActive = l.href === `#${active}`;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={isActive ? "nav-link active" : "nav-link"}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
            <ThemeToggle />
            <button
              className="icon-btn mobile-menu-btn"
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
            >
              {menuOpen ? <X className="icon" aria-hidden="true" /> : <Menu className="icon" aria-hidden="true" />}
            </button>
          </div>
        </nav>
        <div className={menuOpen ? "mobile-menu open" : "mobile-menu"} id="mobileMenu">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
