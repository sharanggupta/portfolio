"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// A quiet icon button: shows the sun when the site is dark (click for light) and the moon when light.
// The theme was already applied before first paint by the inline script in layout.tsx;
// this component only reads it, flips it and remembers the choice.
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

  const label = theme === null ? "Switch theme" : `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="theme-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="theme-svg" data-mode={theme ?? "light"}>
        {/* sun */}
        <g className="sun" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
        </g>
        {/* moon */}
        <path className="moon" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
