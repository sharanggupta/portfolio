import type { ReactNode } from "react";
import { cx } from "@/lib/classNames";

/** The small uppercase label above a heading. */
export default function Kicker({
  as: Element = "p",
  className,
  children,
}: {
  as?: "p" | "h3" | "span";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Element className={cx("font-mono text-[0.8rem] font-semibold uppercase tracking-[0.32em] text-accent", className)}>
      {children}
    </Element>
  );
}
