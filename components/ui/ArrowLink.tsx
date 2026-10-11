import type { ReactNode } from "react";
import styles from "./ArrowLink.module.css";

/**
 * A bold accent label ending in an arrow that slides right on hover.
 * Inside a Card, hovering the card slides it too (the card carries `data-card`).
 */
export function ArrowLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`${styles.arrowLink} ${className}`}>
      {children} <span className={styles.arrow} aria-hidden="true">→</span>
    </span>
  );
}

export default function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className={styles.arrowLink} href={href}>
      {children} <span className={styles.arrow} aria-hidden="true">→</span>
    </a>
  );
}
