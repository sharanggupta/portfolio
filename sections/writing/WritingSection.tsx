import { ArrowLabel } from "@/components/ui/ArrowLink";
import { CardLink } from "@/components/ui/Card";
import Kicker from "@/components/ui/Kicker";
import Reveal, { STAGGER_MS } from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";
import { LINKS } from "@/content/person";
import { SECTION, sectionKicker } from "@/content/sections";
import { SERIES_TITLE, articles, seriesIntro } from "@/content/writing";

export default function WritingSection() {
  return (
    <Section id={SECTION.writing} kicker={sectionKicker(SECTION.writing, "Writing")} title={SERIES_TITLE} intro={seriesIntro()}>
      <ol className="grid gap-4 sm:grid-cols-2">
        {articles.map((article, index) => {
          const part = index + 1;
          return (
            <li key={article.url}>
              <Reveal delay={(index % 2) * STAGGER_MS.twoColumns}>
                <CardLink className="p-6 no-underline" href={article.url} aria-label={`Part ${part}: ${article.title}`}>
                  <Kicker as="span">Part {part}</Kicker>
                  <span className="mt-2 block text-lg font-semibold">{article.title}</span>
                  <ArrowLabel className="mt-4">Read on Medium</ArrowLabel>
                </CardLink>
              </Reveal>
            </li>
          );
        })}
      </ol>
      <p className="mt-6">
        <TextLink href={LINKS.medium} me>
          All articles on Medium
        </TextLink>
      </p>
    </Section>
  );
}
