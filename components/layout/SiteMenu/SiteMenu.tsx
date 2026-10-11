"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { MenuItem } from "@/content/sections";
import { cssVar } from "@/lib/cssVar";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/lib/hooks/useEscapeKey";
import { useFocusCycle } from "@/lib/hooks/useFocusCycle";
import { useIsClient } from "@/lib/hooks/useIsClient";
import MenuButton from "./MenuButton";
import styles from "./SiteMenu.module.css";

const MENU_ID = "site-menu";
const ITEM_STAGGER_SECONDS = 0.08;

/**
 * A round floating button, fixed top right on every screen size, opens a full-screen menu that
 * grows as a hexagon from the button. The same button closes it; so does Escape or choosing a link.
 * While it is open the page behind does not scroll and Tab stays on the button and the links.
 */
export default function SiteMenu({ items }: { items: readonly MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  const tabOrder = useCallback(() => [buttonRef.current, ...linkRefs.current], []);

  useBodyScrollLock(open);
  useEscapeKey(open, close);
  useFocusCycle(open, tabOrder);

  // Once the menu is visible, keyboard users start at its first link.
  useEffect(() => {
    if (open) linkRefs.current[0]?.focus();
  }, [open]);

  function toggle() {
    if (open) close();
    else setOpen(true);
  }

  return (
    <>
      <MenuButton open={open} onClick={toggle} controls={MENU_ID} buttonRef={buttonRef} />
      {isClient &&
        createPortal(
          <div
            id={MENU_ID}
            className={`${styles.overlay} fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 overflow-y-auto pb-8 pt-20`}
            data-open={open}
            // A div with role="dialog" rather than <dialog>: a native modal dialog would make the menu button inert.
            // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            aria-hidden={!open}
          >
            <nav aria-label="Sections (menu)">
              <ul>
                {items.map((item, index) => (
                  <li key={item.href}>
                    <a
                      ref={(element) => {
                        linkRefs.current[index] = element;
                      }}
                      className={styles.link}
                      style={cssVar("--stagger", `${index * ITEM_STAGGER_SECONDS}s`)}
                      href={item.href}
                      download={item.download}
                      tabIndex={open ? 0 : -1}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
