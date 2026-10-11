import HexPattern from "@/components/brand/HexPattern";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Kicker from "@/components/ui/Kicker";
import { PERSON, PROFILES } from "@/content/person";
import { SECTION, sectionKicker } from "@/content/sections";
import styles from "./ContactSection.module.css";

const ART_SEED = 9;

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
            <Kicker>{sectionKicker(SECTION.contact, "Contact")}</Kicker>
            <h2 id="contact-heading" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">Open to hearing about interesting engineering roles.</p>
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
                  <a
                    className="inline-block rounded-full border border-border px-[1.1rem] py-[0.45rem] font-medium text-fg transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    href={profile.href}
                    rel="me"
                  >
                    {profile.label}
                  </a>
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
