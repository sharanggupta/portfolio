"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Item = { href: string; label: string };

// Phone navigation: a round button that opens a full-screen hexagon-shaped menu.
// Keyboard: Escape closes it, focus moves into the menu and returns to the button.
export default function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // The overlay is rendered on document.body: the header has a blur effect, which would otherwise
  // trap a position:fixed child inside the header's own box.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="site-menu"
        className="grid h-10 w-10 place-items-center rounded-full border border-border bg-bg"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
          <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {mounted && createPortal(
      <div
        id="site-menu"
        className="menu-overlay"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => {
            setOpen(false);
            openerRef.current?.focus();
          }}
          aria-label="Close menu"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-[#0d1117]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <nav aria-label="Sections (menu)">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  className="menu-link"
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
        ,
        document.body,
      )}
    </div>
  );
}
