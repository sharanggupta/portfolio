import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "frosted";
type Size = "regular" | "large";

/** A link that looks like a button. "frosted" is the outline style for use over a tinted panel. */
export default function Button({
  href,
  variant = "primary",
  size = "regular",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <a className={`${styles.button} ${styles[variant]} ${styles[size]}`} href={href}>
      {children}
    </a>
  );
}
