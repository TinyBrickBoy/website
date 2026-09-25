/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import {
  ArrowRight,
  Box,
  Code,
  ExternalLink,
  Mail,
  Search,
  Send,
  Server,
  ShieldHalf,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { DiscordIcon, GithubIcon, InstagramIcon } from "@/components/Icons";
import HomeEffects from "@/components/HomeEffects";
import SiteHeader from "@/components/SiteHeader";
import "./home.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Leo | tinybrickboy",
    description: "Minecraft-Entwicklung und Netzwerksicherheit. onthepixel.net & fastasfuck.",
    url: "https://tinybrickboy.de/",
    locale: "de_DE",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Leo (tinybrickboy) – Minecraft-Entwicklung & Netzwerksicherheit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo | tinybrickboy",
    description: "Minecraft-Entwicklung und Netzwerksicherheit. onthepixel.net & fastasfuck.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Leo",
      alternateName: "tinybrickboy",
      url: "https://tinybrickboy.de/",
      jobTitle: "Software & Network Security Developer",
      knowsAbout: ["Minecraft", "Java", "Go", "Node.js", "DDoS Protection", "Reverse Proxy", "System Management"],
      sameAs: ["https://github.com/tinybrickboy", "https://www.instagram.com/tinybrickboy"],
    },
    {
      "@type": "WebSite",
      url: "https://tinybrickboy.de/",
      name: "tinybrickboy",
      inLanguage: "de-DE",
    },
  ],
};

const techStack = ["Java", "Go", "Node.js", "DDoS Protection", "Minecraft"];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Box,
    title: "Minecraft-Entwicklung",
    text: "Plugins, Minigames und Server-Infrastruktur für eine aktive Community.",
  },
  {
    icon: ShieldHalf,
    title: "DDoS-Protection",
    text: "Reverse-Proxy-Systeme mit Fokus auf Performance, Filter-Logik und Latenz.",
  },
  {
    icon: Server,
    title: "System Management",
    text: "24/7-Betrieb, Monitoring, Automation und alles was nicht ausfallen darf.",
  },
  {
    icon: Code,
    title: "Backend Engineering",
    text: "Saubere APIs in Go, Java oder Node.js — robust, dokumentiert, schnell.",
  },
  {
    icon: Search,
    title: "Security Research",
    text: "Schwachstellen-Analyse, Angriffsmuster und das Melden von Abuse-IPs.",
  },
];

const projects = [
  {
    title: "onthepixel.net",
    text: "Ein Minecraft-Minigames-Server mit verschiedenen Spielmodi und einer aktiven Community.",
    image: "/img/projects/onthepixel.png",
    alt: "onthepixel.net Minecraft Server",
    tags: ["Java", "System Management", "Node.js"],
    url: "https://onthepixel.net",
    warm: false,
  },
  {
    title: "fastasfuck",
    text: "Spezialisierte DDoS-Protection und Reverse-Proxy-Lösung für Minecraft-Server mit Fokus auf Performance und Sicherheit.",
    image: "/img/projects/fastasfuck.jpg",
    alt: "fastasfuck DDoS Protection",
    tags: ["Go", "Reverse Proxy", "Support"],
    url: "https://fastasfuck.net",
    warm: true,
  },
];

const delay = (i: number) => (i > 0 ? ` reveal-d${i}` : "");

export default function Home() {
  return (
    <div className="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a href="#main" className="skip-link">Zum Inhalt springen</a>
      <HomeEffects />

      <div className="ambient" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <img
              className="photo"
              src="/img/holidays/jamboree/korea/28.jpg"
              alt=""
              fetchPriority="high"
              decoding="async"
            />
            <div className="aurora" />
            <div className="scrim" />
          </div>
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">
                <span className="pulse" aria-hidden="true" />
                Verfügbar für Projekte
              </span>
              <h1>
                Hey, ich bin
                <br />
                <span className="name">Leo.</span>
              </h1>
              <p>
                Minecraft-Entwicklung und Netzwerksicherheit sind meine Leidenschaft. Ich betreibe den
                Minigames-Server <strong>onthepixel.net</strong> und entwickle <strong>fastasfuck</strong> – eine
                DDoS-Protection für Minecraft.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                  Meine Projekte
                  <ArrowRight className="icon arrow" aria-hidden="true" />
                </a>
                <a href="#contact" className="btn btn-ghost">
                  <Send className="icon" aria-hidden="true" />
                  Kontakt
                </a>
              </div>
              <div className="tech-pills" aria-label="Tech-Stack">
                {techStack.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I DO */}
        <section id="what" className="section">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Was ich mache</span>
              <h2>Build. Protect. Scale.</h2>
              <p>
                Von Minigame-Plugins bis zu Reverse-Proxy-Systemen — ich bewege mich gerne dort, wo Code auf
                Netzwerk trifft.
              </p>
            </div>
            <div className="features">
              {features.map((f, i) => (
                <article key={f.title} className={`feature reveal${delay(i)}`} data-spot>
                  <div className="ico" aria-hidden="true">
                    <f.icon className="icon" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section section-projects">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Portfolio</span>
              <h2>Aktuelle Projekte</h2>
              <p>Zwei Projekte, die ich aktiv betreibe und weiterentwickle.</p>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article key={p.title} className={`project${p.warm ? " project--warm" : ""} reveal${delay(i + 1)}`}>
                  <div className="project-media">
                    <img src={p.image} alt={p.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <a href={p.url} className="project-link" target="_blank" rel="noopener noreferrer">
                      Website besuchen
                      <ExternalLink className="icon arrow" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-contact">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Kontakt</span>
              <h2>Lass uns reden</h2>
              <p>Ob Projekt, Frage oder einfach nur ein Hi — meine Inbox ist offen.</p>
            </div>
            <div className="contact-card reveal reveal-d1">
              <a href="mailto:hello@tinybrickboy.de" className="contact-item">
                <div className="contact-ico" aria-hidden="true">
                  <Mail className="icon" />
                </div>
                <div className="contact-meta">
                  <span className="contact-label">E-Mail</span>
                  <span className="contact-value">hello@tinybrickboy.de</span>
                </div>
              </a>
              <a
                href="https://discordapp.com/users/860985894436601857/"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-ico" aria-hidden="true">
                  <DiscordIcon />
                </div>
                <div className="contact-meta">
                  <span className="contact-label">Discord</span>
                  <span className="contact-value">TinyBrickBoy</span>
                </div>
              </a>
              <div className="social-section">
                <div className="social-label">Social Media</div>
                <div className="social-row">
                  <a
                    href="https://github.com/tinybrickboy"
                    className="social-link"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/tinybrickboy"
                    className="social-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
              <div className="badge-section">
                <div className="social-label">Security Contributions</div>
                <div className="badge-row">
                  <a
                    href="https://www.abuseipdb.com/user/316437"
                    className="badge-link"
                    title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Lokales Badge statt extern geladenem Bild */}
                    <span className="badge-text">
                      <ShieldHalf className="icon" aria-hidden="true" />
                      AbuseIPDB Contributor
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">
              <span className="logo-text">tinybrickboy</span>
            </div>
            <nav className="footer-nav" aria-label="Footer-Navigation">
              <a href="#home">Home</a>
              <a href="#what">Was</a>
              <a href="#projects">Projekte</a>
              <a href="#contact">Kontakt</a>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </nav>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} tinybrickboy. Made with{" "}
              <span className="heart" aria-hidden="true">&hearts;</span> &amp; beer.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
