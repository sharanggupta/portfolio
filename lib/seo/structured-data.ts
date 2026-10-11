import { education } from "@/content/background";
import { LANGUAGE, LINKS, PERSON, SITE_URL } from "@/content/person";
import { SEO } from "@/content/seo";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** schema.org data for search engines: who this site is about, and the site itself. */
export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PERSON.name,
        jobTitle: PERSON.jobTitle,
        url: SITE_URL,
        email: PERSON.mailto,
        address: {
          "@type": "PostalAddress",
          addressLocality: PERSON.locality,
          addressCountry: PERSON.country,
        },
        alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.institution })),
        knowsAbout: SEO.knowsAbout,
        sameAs: [LINKS.github, LINKS.linkedin, LINKS.medium],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: PERSON.name,
        inLanguage: LANGUAGE.tag,
        publisher: { "@id": PERSON_ID },
      },
    ],
  };
}

/** JSON that is safe inside a <script> tag: "<" is escaped so no text can close the tag early. */
export function toScriptSafeJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
