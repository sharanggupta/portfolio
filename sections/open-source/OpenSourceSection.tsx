import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal/Reveal";
import { STAGGER_MS } from "@/lib/motion";
import Section from "@/components/ui/Section/Section";
import TextLink from "@/components/ui/TextLink";
import { openSourceFixes } from "@/content/open-source";
import { LINKS } from "@/content/person";
import { SECTION, sectionHeading } from "@/content/sections";

export default function OpenSourceSection() {
  return (
    <Section {...sectionHeading(SECTION.openSource)} tuck>
      {/* A list, not a table: each row stacks on phones and becomes two columns from "sm" up. */}
      <ul className="border-t border-border">
        {openSourceFixes.map((fix, index) => (
          <li key={fix.pullRequest} className="border-b border-border">
            <Reveal delay={index * STAGGER_MS.listRow} className="py-4 sm:grid sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
              <ArrowLink href={fix.pullRequest}>{fix.project}</ArrowLink>
              <p className="mt-1 text-sm text-muted sm:mt-0">{fix.change}</p>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-muted">
        More are in review: <TextLink href={LINKS.openPullRequests}>open pull requests on GitHub</TextLink>.
      </p>
    </Section>
  );
}
