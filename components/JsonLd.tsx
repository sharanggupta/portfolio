import { LINKS, PERSON, SEO, SITE_URL } from "@/content/site";

// Structured data for search engines: who this site is about, and the site itself.
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PERSON.name,
        jobTitle: PERSON.jobTitle,
        url: SITE_URL,
        email: `mailto:${PERSON.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: PERSON.locality,
          addressCountry: PERSON.country,
        },
        alumniOf: { "@type": "CollegeOrUniversity", name: "University of Southampton" },
        knowsAbout: SEO.knowsAbout,
        sameAs: [LINKS.github, LINKS.linkedin, LINKS.medium],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: PERSON.name,
        inLanguage: "en-GB",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // The data is static and ours, so serialising it directly is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
