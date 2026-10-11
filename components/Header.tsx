import HexMark from "./HexMark";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { PERSON } from "@/content/person";

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#open-source", label: "Open source" },
  { href: "#writing", label: "Writing" },
  { href: "#experience", label: "Experience" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#contact", label: "Contact" },
  { href: "/cv.pdf", label: "Download CV", download: "Sharang-Gupta-CV.pdf" },
];

// No top bar: just the mark in the corner (it scrolls away) and a floating round button
// that opens the full-screen menu, on every screen size.
export default function Header() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-5">
          <a href="#top" className="logo-in flex items-center gap-2 font-semibold text-accent">
            <HexMark size={30} />
            <span className="text-fg">{PERSON.name}</span>
          </a>
        </div>
      </header>
      {/* A sibling, not a child: the button must stack above the open menu, the logo above the hero. */}
      <MobileMenu items={NAV} />
      {/* A preference, not navigation: it lives in the opposite corner from the menu button. */}
      <div className="theme-dock">
        <ThemeToggle />
      </div>
    </>
  );
}
