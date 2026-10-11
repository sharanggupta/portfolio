import type { ReactNode } from "react";

/** An underlined accent link inside running text. `me` marks the link as another profile of the site owner. */
export default function TextLink({ href, me = false, children }: { href: string; me?: boolean; children: ReactNode }) {
  return (
    <a className="text-accent underline underline-offset-[3px] hover:decoration-2" href={href} rel={me ? "me" : undefined}>
      {children}
    </a>
  );
}
