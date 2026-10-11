import type { ComponentProps } from "react";
import { cx } from "@/lib/classNames";

// `data-card` is the hook other components use to react to the card being hovered
// (see ArrowLink and ProjectCard).
const CARD = cx(
  "relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/80 backdrop-blur-[6px]",
  "transition duration-400 ease-brand",
  "hover:-translate-y-1.5 hover:border-accent hover:shadow-lift",
  "focus-within:-translate-y-1.5 focus-within:border-accent focus-within:shadow-lift",
);

/** A frosted card that lifts on hover. */
export function Card({ className, ...rest }: ComponentProps<"article">) {
  return <article data-card className={cx(CARD, className)} {...rest} />;
}

/** The same card, as a single link. */
export function CardLink({ className, ...rest }: ComponentProps<"a">) {
  // The caller supplies href and the link text, so the content check cannot see them here.
  // oxlint-disable-next-line jsx-a11y/anchor-has-content
  return <a data-card className={cx(CARD, className)} {...rest} />;
}
