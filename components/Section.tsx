import type { ReactNode } from "react";

// A titled section. Every section heading is an h2; the page has exactly one h1 (the hero).
// "band" sections get a tinted background with diagonal edges.
export default function Section({
  id,
  kicker,
  title,
  intro,
  band = false,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  band?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={band ? "band" : "plain"}>
      <div className="mx-auto max-w-5xl px-6">
        <p className="kicker">{kicker}</p>
        <h2 id={`${id}-heading`} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
