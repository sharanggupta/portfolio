import type { ReactNode } from "react";
import styles from "./Kicker.module.css";

/** The small uppercase label above a heading. */
export default function Kicker({
  as: Element = "p",
  className = "",
  children,
}: {
  as?: "p" | "h3" | "span";
  className?: string;
  children: ReactNode;
}) {
  return <Element className={`${styles.kicker} ${className}`}>{children}</Element>;
}
