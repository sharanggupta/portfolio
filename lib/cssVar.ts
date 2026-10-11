import type { CSSProperties } from "react";

/** An inline style that sets one CSS custom property: style={cssVar("--delay", "90ms")} */
export function cssVar(name: `--${string}`, value: string): CSSProperties {
  return { [name]: value } as CSSProperties;
}
