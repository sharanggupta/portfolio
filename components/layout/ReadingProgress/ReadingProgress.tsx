import styles from "./ReadingProgress.module.css";

/** A hairline across the top of the page that grows as you scroll. */
export default function ReadingProgress() {
  return <div className={`${styles.progress} fixed inset-x-0 top-0 z-70 h-[3px] origin-left scale-x-0 bg-accent`} aria-hidden="true" />;
}
