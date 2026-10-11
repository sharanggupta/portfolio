import { useSyncExternalStore } from "react";
import { readTheme, subscribeToTheme, type Theme } from "./theme.ts";

/** The current theme, or null on the server and during hydration, when it is not known yet. */
export function useTheme(): Theme | null {
  return useSyncExternalStore(subscribeToTheme, readTheme, () => null);
}
