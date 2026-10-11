"use client";

import { applyTheme, oppositeTheme } from "@/lib/theme/theme";
import { useTheme } from "@/lib/theme/useTheme";
import { cx } from "@/lib/classNames";

const SUN_AND_MOON_TRANSITION = "[transition:opacity_0.35s,transform_0.5s_var(--ease-out)]";
const HIDDEN_ICON = "opacity-0 -rotate-[70deg] scale-60";

/**
 * A quiet round icon in the bottom-left corner: the sun while the site is dark (click for light),
 * the moon while it is light. The theme itself was applied before first paint by the inline
 * script (lib/theme/theme-script.ts); this only reads it, flips it and remembers the choice.
 */
export default function ThemeToggle() {
  const theme = useTheme();
  const label = theme === null ? "Switch theme" : `Switch to ${oppositeTheme(theme)} theme`;
  const showSun = theme === "dark";

  return (
    <div className="fixed bottom-[0.9rem] left-[0.9rem] z-(--z-theme-toggle) motion-safe:animate-pop-in motion-safe:[animation-delay:1s] sm:bottom-6 sm:left-6">
      <button
        type="button"
        onClick={() => applyTheme(oppositeTheme(theme ?? "light"))}
        aria-label={label}
        title={label}
        className="grid size-9 cursor-pointer place-items-center rounded-full border border-border bg-bg/70 text-muted backdrop-blur-[8px] transition-colors duration-300 hover:border-accent hover:text-accent sm:size-10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <g
            className={cx("origin-center", SUN_AND_MOON_TRANSITION, !showSun && HIDDEN_ICON)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
          </g>
          <path
            className={cx("origin-center", SUN_AND_MOON_TRANSITION, showSun && HIDDEN_ICON)}
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
