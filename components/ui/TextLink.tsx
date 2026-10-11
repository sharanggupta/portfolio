import type { ReactNode } from "react";
import styles from "./TextLink.module.css";

/** An underlined accent link inside running text. `me` marks the link as another profile of the site owner. */
export default function TextLink({ href, me = false, children }: { href: string; me?: boolean; children: ReactNode }) {
  return (
    <a className={styles.link} href={href} rel={me ? "me" : undefined}>
      {children}
    </a>
  );
}
