"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { MenuItem } from "@/content/sections";

// A round floating button, fixed top-right on every screen size, opens a full-screen menu that
// grows as a hexagon from the button. The same button closes it; Escape works too.
export default function MobileMenu({ items }: { items: readonly MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="fab-dock" data-open={open}>
        <button
          ref={fabRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          data-open={open}
          className="fab"
        >
          <span className="fab-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      {mounted &&
        createPortal(
          <div
            id="site-menu"
            className="menu-overlay"
            data-open={open}
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
                      ref={index === 0 ? firstLinkRef : undefined}
                      className="menu-link"
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
