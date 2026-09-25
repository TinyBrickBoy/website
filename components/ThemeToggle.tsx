"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function applyTheme(dark: boolean) {
  const html = document.documentElement;
  html.classList.toggle("dark", dark);
  html.classList.toggle("light", !dark);
}

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches);
        setDark(e.matches);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    applyTheme(next);
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const label = dark ? "Zu hellem Theme wechseln" : "Zu dunklem Theme wechseln";

  return (
    <button
      className="icon-btn"
      type="button"
      onClick={toggle}
      aria-label={dark === null ? "Theme wechseln" : label}
      aria-pressed={dark ?? undefined}
      title="Theme wechseln"
    >
      {dark ? <Sun className="icon" aria-hidden="true" /> : <Moon className="icon" aria-hidden="true" />}
    </button>
  );
}
