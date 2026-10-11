import { useEffect } from "react";

/**
 * Keeps Tab and Shift+Tab inside a fixed list of elements while `active`:
 * Tab on the last one goes to the first, Shift+Tab on the first goes to the last.
 */
export function useFocusCycle(active: boolean, getElements: () => Array<HTMLElement | null>): void {
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const elements = getElements().filter((element): element is HTMLElement => element !== null);
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, getElements]);
}
