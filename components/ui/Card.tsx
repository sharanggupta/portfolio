import type { ComponentProps } from "react";
import styles from "./Card.module.css";

/**
 * A frosted card that lifts on hover. It carries `data-card`, the hook other components use
 * to react to the card being hovered (see ArrowLink and ProjectCard).
 */
export function Card({ className = "", ...rest }: ComponentProps<"article">) {
  return <article data-card className={`${styles.card} ${className}`} {...rest} />;
}

/** The same card, as a single link. */
export function CardLink({ className = "", ...rest }: ComponentProps<"a">) {
  return <a data-card className={`${styles.card} ${className}`} {...rest} />;
}
