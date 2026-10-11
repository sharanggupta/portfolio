import type { ReactNode } from "react";
import styles from "./Container.module.css";

/** The centred, padded column every section sits in. */
export default function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
