import { afterEach, describe, expect, it, vi } from "vitest";
import { applyInitialTheme, markScriptsRunning, themeScript } from "./theme-script";

const KEY = "theme";

function pretendSystemPrefers(scheme: "light" | "dark") {
  vi.stubGlobal("matchMedia", (query: string) => ({ matches: scheme === "dark" && query.includes("dark") }));
}

afterEach(() => {
  delete document.documentElement.dataset.theme;
  document.documentElement.classList.remove("js");
  localStorage.clear();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("applyInitialTheme", () => {
  it("uses the saved theme over the system's", () => {
    pretendSystemPrefers("dark");
    localStorage.setItem(KEY, "light");
    applyInitialTheme(KEY);
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("follows the system when nothing is saved", () => {
    pretendSystemPrefers("dark");
    applyInitialTheme(KEY);
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("ignores a saved value that is not a theme", () => {
    pretendSystemPrefers("light");
    localStorage.setItem(KEY, "sepia");
    applyInitialTheme(KEY);
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("does not throw when storage is blocked", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    expect(() => applyInitialTheme(KEY)).not.toThrow();
  });
});

describe("markScriptsRunning", () => {
  it("adds the js class to the page", () => {
    markScriptsRunning();
    expect(document.documentElement.classList.contains("js")).toBe(true);
  });
});

describe("themeScript", () => {
  it("is self-contained: evaluated on its own, it does the same", () => {
    pretendSystemPrefers("dark");
    new Function(themeScript)();
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement.classList.contains("js")).toBe(true);
  });
});
