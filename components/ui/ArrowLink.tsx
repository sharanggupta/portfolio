import type { ReactNode } from "react";
import { cx } from "@/lib/classNames";

const LABEL = "group inline-flex items-center gap-[0.4rem] font-semibold text-accent";

// A card (marked data-card) that is hovered makes the arrows inside it slide too, not just the arrow under the pointer.
const SLIDE_WHEN_CARD_HOVERED = "[[data-card]:hover_&]:translate-x-1.5";
const SLIDE_WHEN_LINK_HOVERED = "group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5";
const ARROW = cx("transition-transform duration-350 ease-brand", SLIDE_WHEN_LINK_HOVERED, SLIDE_WHEN_CARD_HOVERED);

function Arrow() {
  return (
    <span className={ARROW} aria-hidden="true">
      →
    </span>
  );
}

/** The label part of an arrow link, for when the surrounding element is already the link (a whole-card link). */
export function ArrowLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cx(LABEL, className)}>
      {children} <Arrow />
    </span>
  );
}

export default function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className={LABEL} href={href}>
      {children} <Arrow />
    </a>
  );
}
