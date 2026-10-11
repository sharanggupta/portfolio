import Panel from "@/components/ui/Panel";
import Kicker from "@/components/ui/Kicker";
import Section from "@/components/ui/Section/Section";
import Tag from "@/components/ui/Tag";
import TextLink from "@/components/ui/TextLink";
import { education, skills } from "@/content/background";
import { SECTION, sectionHeading } from "@/content/sections";

export default function BackgroundSection() {
  return (
    <Section {...sectionHeading(SECTION.education)} tuck>
      <h3 className="text-xl font-semibold">Education</h3>
      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <Panel as="li" key={item.qualification} className="p-6">
            <Kicker>{item.period}</Kicker>
            <p className="mt-2 text-lg font-semibold">{item.qualification}</p>
            <p className="mt-1 text-muted">{item.institution}</p>
            {item.dissertation && (
              <p className="mt-2 text-sm">
                <TextLink href={item.dissertation.url}>{item.dissertation.label}</TextLink>
              </p>
            )}
          </Panel>
        ))}
      </ul>
      <h3 className="mt-12 text-xl font-semibold">Skills</h3>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <Panel key={group.group} className="p-5">
            <dt className="text-sm text-muted">{group.group}</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item} label={item} strong />
              ))}
            </dd>
          </Panel>
        ))}
      </dl>
    </Section>
  );
}
