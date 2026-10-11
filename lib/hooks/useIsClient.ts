import { useSyncExternalStore } from "react";

const subscribeToNothing = () => () => {};

/** False while rendering on the server and during hydration, true afterwards. */
export function useIsClient(): boolean {
  return useSyncExternalStore(subscribeToNothing, () => true, () => false);
}
