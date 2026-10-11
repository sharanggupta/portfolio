import type { ReactNode } from "react";
import { cx } from "@/lib/classNames";

/** A quiet bordered box for facts that belong together. Padding is the caller's choice. */
export default function Panel({
  as: Element = "div",
  className,
  children,
}: {
  as?: "div" | "li";
  className?: string;
  children: ReactNode;
}) {
  return <Element className={cx("rounded-xl border border-border bg-surface/70", className)}>{children}</Element>;
}
