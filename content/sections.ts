// The sections of the one-page site, in reading order, and the menu that links to them.
// Section ids live here only: the page, the menu and the redirects in next.config.ts all read them.

import { CV } from "./person.ts";

export const SECTION = {
  work: "work",
  openSource: "open-source",
  writing: "writing",
  experience: "experience",
  recommendations: "recommendations",
  background: "education",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION)[keyof typeof SECTION];

const READING_ORDER: readonly SectionId[] = Object.values(SECTION);

/** The small numbered label above a section heading, for example "01 · Work". */
export function sectionKicker(id: SectionId, label: string): string {
  const number = READING_ORDER.indexOf(id) + 1;
  return `${String(number).padStart(2, "0")} · ${label}`;
}

export type MenuItem = { href: string; label: string; download?: string };

export const MENU_ITEMS: readonly MenuItem[] = [
  { href: `#${SECTION.work}`, label: "Work" },
  { href: `#${SECTION.openSource}`, label: "Open source" },
  { href: `#${SECTION.writing}`, label: "Writing" },
  { href: `#${SECTION.experience}`, label: "Experience" },
  { href: `#${SECTION.recommendations}`, label: "Recommendations" },
  { href: `#${SECTION.contact}`, label: "Contact" },
  { href: CV.path, label: CV.menuLabel, download: CV.downloadName },
];
