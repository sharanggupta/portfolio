import Reveal from "@/components/ui/Reveal/Reveal";
import Section from "@/components/ui/Section/Section";
import { experience } from "@/content/experience";
import { SECTION, sectionKicker } from "@/content/sections";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  return (
    <Section id={SECTION.experience} kicker={sectionKicker(SECTION.experience, "Experience")} title="Where I have worked">
      <ol className={`${styles.timeline} space-y-10`}>
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className={styles.entry}>
            <Reveal>
              <h3 className="text-xl font-semibold">
                {job.title}, {job.company}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {job.period} · {job.location}
              </p>
              {job.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
