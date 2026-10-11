import HexPattern from "@/components/brand/HexPattern";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import Kicker from "@/components/ui/Kicker";
import { PERSON, PROFILES } from "@/content/person";
import { SECTION, SECTION_COPY, sectionKicker } from "@/content/sections";
import styles from "./ContactSection.module.css";

const ART_SEED = 9;
const copy = SECTION_COPY[SECTION.contact];

/** The closing panel. Its heading is bespoke (centred, larger), so it does not use Section. */
export default function ContactSection() {
  return (
    <section id={SECTION.contact} aria-labelledby="contact-heading" className="scroll-mt-20 pt-section">
      <Container>
        <div
          className={`${styles.panel} relative overflow-hidden rounded-[1.25rem] border border-border px-5 py-12 text-center sm:rounded-3xl sm:px-6 sm:py-[4.5rem]`}
        >
          <div className={`${styles.art} absolute inset-0 text-accent opacity-[0.22] [&_svg]:size-full`} aria-hidden="true">
            <HexPattern seed={ART_SEED} />
          </div>
          <div className="relative">
            <Kicker>{sectionKicker(SECTION.contact)}</Kicker>
            <h2 id="contact-heading" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{copy.intro}</p>
            <p className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={PERSON.mailto} size="large">
                {PERSON.email}
              </Button>
              <Button href={PERSON.phoneHref} variant="frosted" size="large">
                {PERSON.phoneDisplay}
              </Button>
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Profiles">
              {PROFILES.map((profile) => (
                <li key={profile.label}>
                  <Pill href={profile.href} me>
                    {profile.label}
                  </Pill>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">{PERSON.location}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
