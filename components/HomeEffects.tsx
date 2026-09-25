"use client";

import { useEffect, useRef } from "react";

// Scroll-Fortschritt, Reveal-Animationen und Spotlight auf den Feature-Karten
export default function HomeEffects() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? window.scrollY / total : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${ratio})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            reveal.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const cleanups: (() => void)[] = [];
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>("[data-spot]").forEach((card) => {
        const onMove = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        card.addEventListener("pointermove", onMove);
        cleanups.push(() => card.removeEventListener("pointermove", onMove));
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      reveal.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return <div className="scroll-progress" ref={progress} aria-hidden="true" />;
}
