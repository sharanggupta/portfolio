import { THEME_STORAGE_KEY } from "./theme.ts";

/**
 * Runs in the browser before the page paints: applies the saved theme, otherwise the operating
 * system's, and marks <html> with "js" so CSS can tell scripts are running.
 * It must stay self-contained: it is serialised into an inline <script>.
 */
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
  document.documentElement.classList.add("js");
}

/** The inline script for the document head. */
export const themeScript = `(${applyInitialTheme.toString()})(${JSON.stringify(THEME_STORAGE_KEY)})`;
