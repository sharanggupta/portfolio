import styles from "./Tag.module.css";

/** A small rounded technology label. */
export default function Tag({ label, strong = false }: { label: string; strong?: boolean }) {
  return <span className={`${styles.tag} ${strong ? styles.strong : ""}`}>{label}</span>;
}

/** Tags as a list, so assistive technology announces "n items". */
export function TagList({ labels, ariaLabel, className = "" }: { labels: readonly string[]; ariaLabel: string; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={ariaLabel}>
      {labels.map((label) => (
        <li key={label}>
          <Tag label={label} />
        </li>
      ))}
    </ul>
  );
}
