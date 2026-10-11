import type { ReactNode } from "react";
import { cx } from "@/lib/classNames";

/** The centred, padded column every section sits in. */
export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto max-w-5xl px-6", className)}>{children}</div>;
}
