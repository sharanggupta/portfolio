import type { ReactNode } from "react";
import Container from "./Container";
import Kicker from "./Kicker";
import styles from "./Section.module.css";

/**
 * A titled section of the page. Every section heading is an h2; the page has exactly one h1 (the hero).
 * A "band" has a tinted background with diagonal edges. "tuck" lifts the section under the diagonal
 * edge above it, so ask for it on a section that follows the hero or a band.
 */
export default function Section({
  id,
  kicker,
  title,
  intro,
  band = false,
  tuck = false,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  band?: boolean;
  tuck?: boolean;
  children: ReactNode;
}) {
  const classes = [styles.section, band ? styles.band : styles.plain, tuck ? styles.tuck : ""].join(" ");
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={classes}>
      <Container>
        <Kicker>{kicker}</Kicker>
        <h2 id={`${id}-heading`} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
