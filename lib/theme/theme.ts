// The site theme: "light" or "dark", kept in the data-theme attribute of <html> and remembered in
// localStorage. The inline script from theme-script.ts sets it before first paint; this module
// reads and changes it afterwards.

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export function readTheme(root: HTMLElement = document.documentElement): Theme {
  return root.dataset.theme === "dark" ? "dark" : "light";
}

export function oppositeTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}

/** Applies the theme to the page and remembers it. Storage can be blocked, then it lasts for this visit only. */
export function applyTheme(theme: Theme, root: HTMLElement = document.documentElement): void {
  root.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private windows may refuse storage; the theme still changes.
  }
}

/** For useSyncExternalStore: calls `onChange` whenever the data-theme attribute changes. */
export function subscribeToTheme(onChange: () => void, root: HTMLElement = document.documentElement): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
