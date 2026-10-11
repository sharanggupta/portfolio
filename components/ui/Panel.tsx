import type { ReactNode } from "react";
import styles from "./Panel.module.css";

/** A quiet bordered box for facts that belong together. Padding is the caller's choice. */
export default function Panel({
  as: Element = "div",
  className = "",
  children,
}: {
  as?: "div" | "li";
  className?: string;
  children: ReactNode;
}) {
  return <Element className={`${styles.panel} ${className}`}>{children}</Element>;
}
