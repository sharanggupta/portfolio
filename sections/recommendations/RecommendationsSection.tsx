import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal/Reveal";
import { STAGGER_MS } from "@/lib/motion";
import Section from "@/components/ui/Section/Section";
import { LINKS } from "@/content/person";
import { recommendations } from "@/content/recommendations";
import { SECTION, sectionKicker } from "@/content/sections";
import { initials } from "@/lib/format";
import styles from "./RecommendationsSection.module.css";

export default function RecommendationsSection() {
  return (
    <Section
      id={SECTION.recommendations}
      band
      kicker={sectionKicker(SECTION.recommendations, "Recommendations")}
      title="What colleagues say"
      intro="From LinkedIn recommendations; names and context as shown there."
    >
      <ul className="grid gap-6">
        {recommendations.map((recommendation, index) => (
          <li key={recommendation.name}>
            <Reveal delay={index * STAGGER_MS.quote}>
              <figure
                className={`${styles.quote} group relative border-l-[3px] border-accent bg-surface/70 px-9 py-8 backdrop-blur-[10px] transition-colors duration-400 hover:bg-surface/90`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`${styles.avatar} grid size-14 flex-none place-items-center font-bold tracking-[0.04em] text-bg transition-transform duration-[450ms] ease-brand group-hover:scale-110`}
                    aria-hidden="true"
                  >
                    {initials(recommendation.name)}
                  </div>
                  <blockquote className="text-lg">
                    <p>“{recommendation.quote}”</p>
                  </blockquote>
                </div>
                {/* Indented by the avatar and gap, so the caption lines up under the quote. */}
                <figcaption className="mt-4 pl-[4.75rem] text-sm text-muted">
                  <span className="font-semibold text-fg">{recommendation.name}</span>, {recommendation.year},{" "}
                  {recommendation.relationship}
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <ArrowLink href={LINKS.recommendations}>See all recommendations on LinkedIn</ArrowLink>
      </p>
    </Section>
  );
}
