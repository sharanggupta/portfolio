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
    <section id={SECTION.contact} aria-labelledby="contact-heading" className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.art} aria-hidden="true">
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
                  <a className={styles.pill} href={profile.href} rel="me">
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
