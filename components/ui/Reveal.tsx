"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.css";

/** Delay steps between neighbouring items, so a group reveals one after another. */
export const STAGGER_MS = { twoColumns: 90, listRow: 40, quote: 80 } as const;

const VISIBLE_FRACTION = 0.12;
const BOTTOM_MARGIN = "0px 0px -6% 0px";

/**
 * Fades and lifts its children into view the first time they scroll on screen.
 * The CSS hides them only when JavaScript is running and motion is allowed,
 * so without either, content is simply visible.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const show = (target: HTMLElement) => {
      target.dataset.visible = "true";
    };
    if (typeof IntersectionObserver === "undefined") {
      show(element);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { threshold: VISIBLE_FRACTION, rootMargin: BOTTOM_MARGIN },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.reveal} ${className}`} style={{ ["--delay" as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}
