import { THEME_STORAGE_KEY } from "./theme.ts";

// Both functions run in the browser before the page paints and are serialised into one inline
// <script>, so each must be self-contained: no imports, no helpers, only browser globals.

/** Applies the saved theme, otherwise the operating system's. */
export function applyInitialTheme(storageKey: string): void {
  try {
    let theme = localStorage.getItem(storageKey);
    if (theme !== "light" && theme !== "dark") {
      theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.dataset.theme = theme;
  } catch {
    // Storage or matchMedia unavailable: the CSS falls back to prefers-color-scheme.
  }
}

/** Marks <html> with "js", so CSS can tell that scripts are running (see Reveal). */
export function markScriptsRunning(): void {
  document.documentElement.classList.add("js");
}

/** The inline script for the document head. */
export const themeScript = `(${applyInitialTheme.toString()})(${JSON.stringify(THEME_STORAGE_KEY)});(${markScriptsRunning.toString()})();`;
