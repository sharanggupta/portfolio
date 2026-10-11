import HexMark from "./HexMark";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { PERSON } from "@/content/site";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#open-source", label: "Open source" },
  { href: "#writing", label: "Writing" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-5 px-6 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold text-accent">
          <HexMark size={26} />
          <span className="text-fg">{PERSON.name}</span>
        </a>
        <nav aria-label="Sections" className="ml-auto hidden sm:block">
          <ul className="flex gap-6 text-sm text-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="navlink hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-3 sm:ml-0">
          <ThemeToggle />
          <MobileMenu items={NAV} />
        </div>
      </div>
    </header>
  );
}
