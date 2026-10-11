import { cx } from "@/lib/classNames";

/** A small rounded technology label. */
export default function Tag({ label, strong = false }: { label: string; strong?: boolean }) {
  return (
    <span
      className={cx(
        "block rounded-full border border-border px-[0.6rem] py-[0.2rem] font-mono text-[0.75rem]",
        strong ? "text-fg" : "text-muted",
      )}
    >
      {label}
    </span>
  );
}

/** Tags as a list, so assistive technology announces "n items". */
export function TagList({ labels, ariaLabel, className }: { labels: readonly string[]; ariaLabel: string; className?: string }) {
  return (
    <ul className={cx("flex flex-wrap gap-2", className)} aria-label={ariaLabel}>
      {labels.map((label) => (
        <li key={label}>
          <Tag label={label} />
        </li>
      ))}
    </ul>
  );
}
