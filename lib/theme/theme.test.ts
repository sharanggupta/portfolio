import { afterEach, describe, expect, it, vi } from "vitest";
import { THEME_STORAGE_KEY, applyTheme, oppositeTheme, readTheme } from "./theme";

afterEach(() => {
  delete document.documentElement.dataset.theme;
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("theme", () => {
  it("reads light when nothing is set", () => {
    expect(readTheme()).toBe("light");
  });

  it("flips between light and dark", () => {
    expect(oppositeTheme("light")).toBe("dark");
    expect(oppositeTheme("dark")).toBe("light");
  });

  it("applies the theme to the page and remembers it", () => {
    applyTheme("dark");
    expect(readTheme()).toBe("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
  });

  it("still changes the theme when storage is blocked", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    applyTheme("dark");
    expect(readTheme()).toBe("dark");
  });
});
