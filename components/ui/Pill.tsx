import type { ReactNode } from "react";

/** A small rounded link, for a row of profiles. `me` marks it as another profile of the site owner. */
export default function Pill({ href, me = false, children }: { href: string; me?: boolean; children: ReactNode }) {
  return (
    <a
      className="inline-block rounded-full border border-border px-[1.1rem] py-[0.45rem] font-medium text-fg transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      href={href}
      rel={me ? "me" : undefined}
    >
      {children}
    </a>
  );
}
