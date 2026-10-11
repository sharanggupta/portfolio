import type { ReactNode } from "react";
import { cx } from "@/lib/classNames";

const VARIANT = {
  primary: "bg-accent text-bg hover:opacity-90",
  outline: "border border-border hover:border-accent",
  /** The outline style for use over a tinted panel. */
  frosted: "border border-border bg-bg/60 hover:border-accent",
};
const SIZE = { regular: "px-5", large: "px-6" };

/** A link that looks like a button. */
export default function Button({
  href,
  variant = "primary",
  size = "regular",
  children,
}: {
  href: string;
  variant?: keyof typeof VARIANT;
  size?: keyof typeof SIZE;
  children: ReactNode;
}) {
  return (
    <a
      className={cx("rounded-md py-3 font-semibold transition hover:-translate-y-0.5", SIZE[size], VARIANT[variant])}
      href={href}
    >
      {children}
    </a>
  );
}
