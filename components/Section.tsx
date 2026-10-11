import type { ReactNode } from "react";

// A titled section. Every section heading is an h2; the page has exactly one h1 (the hero).
export default function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-16">
      <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {intro && <p className="mt-2 text-muted">{intro}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
