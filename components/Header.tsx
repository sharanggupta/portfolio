import HexMark from "./HexMark";
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
    <header className="sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold text-accent">
          <HexMark size={26} />
          <span className="text-fg">{PERSON.name}</span>
        </a>
        <nav aria-label="Sections" className="order-3 w-full sm:order-none sm:ml-auto sm:w-auto">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto sm:ml-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
