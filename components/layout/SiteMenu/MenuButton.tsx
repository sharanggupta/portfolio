import type { Ref } from "react";
import { cx } from "@/lib/classNames";

const LINE = "absolute inset-x-0 h-0.5 rounded-sm bg-current transition-all duration-400 ease-brand";

/** The round floating button, top right, that opens and closes the menu. Its three lines become a cross. */
export default function MenuButton({
  open,
  onClick,
  controls,
  buttonRef,
}: {
  open: boolean;
  onClick: () => void;
  controls: string;
  buttonRef: Ref<HTMLButtonElement>;
}) {
  return (
    <div className="fixed right-6 top-5 z-60 motion-safe:animate-pop-in motion-safe:[animation-delay:0.7s]">
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={controls}
        className={cx(
          "grid size-14 cursor-pointer place-items-center rounded-full border-0 shadow-[0_10px_30px_-8px_rgb(0_0_0/0.45)]",
          "transition duration-350 ease-brand hover:scale-[1.08] hover:shadow-[0_14px_34px_-8px_color-mix(in_srgb,var(--accent)_70%,transparent)]",
          open ? "bg-white text-ink" : "bg-fg text-bg",
        )}
      >
        <span className="relative h-4 w-[1.4rem]" aria-hidden="true">
          <span className={cx(LINE, open ? "top-[calc(50%-1px)] rotate-45" : "top-0")} />
          <span className={cx(LINE, "top-[calc(50%-1px)]", open && "opacity-0")} />
          <span className={cx(LINE, open ? "top-[calc(50%-1px)] -rotate-45" : "top-[calc(100%-2px)]")} />
        </span>
      </button>
    </div>
  );
}
