import ArrowLink from "@/components/ui/ArrowLink";
import Reveal, { STAGGER_MS } from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
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
              <figure className={styles.quote}>
                <div className="flex items-start gap-5">
                  <div className={styles.avatar} aria-hidden="true">
                    {initials(recommendation.name)}
                  </div>
                  <div>
                    <blockquote className="text-lg">
                      <p>“{recommendation.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-muted">
                      <span className="font-semibold text-fg">{recommendation.name}</span>, {recommendation.year},{" "}
                      {recommendation.relationship}
                    </figcaption>
                  </div>
                </div>
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
