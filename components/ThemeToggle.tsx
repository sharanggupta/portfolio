"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// The theme was already applied before first paint by the inline script in layout.tsx.
// This component only reads it and lets the visitor flip it.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private windows); the theme still changes for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === null ? "Switch theme" : `Switch to ${theme === "dark" ? "light" : "dark"} theme`
      }
      className="rounded-md border border-border px-3 py-1.5 text-sm text-fg hover:border-accent"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
