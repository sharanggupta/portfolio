// Builds the CV as a react-pdf document from the site's content. No file or network access here:
// `generate-cv.mjs` passes the content in and writes the result to public/cv.pdf.

import { createElement as h } from "react";
import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import { contactBand } from "./cv-contact-band.mjs";
import { styles } from "./cv-styles.mjs";
import { dash, withoutScheme } from "./cv-text.mjs";

const text = (style, children) => h(Text, { style }, children);

/** One entry of the left column: a tick on the timeline, title, company, dates and optional bullets. */
const timelineEntry = ({ key, title, company, period, location, bullets = [] }) =>
  h(
    View,
    { key, style: styles.entry, wrap: false },
    h(View, { style: styles.tick }),
    text(styles.title, title),
    text(styles.company, company),
    h(View, { style: styles.metaRow }, text(styles.meta, dash(period)), ...(location ? [text(styles.meta, location)] : [])),
    ...bullets.map((line) =>
      h(View, { key: line, style: styles.bullet }, text(styles.bulletDot, "•"), text(styles.grow, line)),
    ),
  );

const jobEntry = (job) =>
  timelineEntry({
    key: `${job.company}-${job.period}`,
    title: job.title,
    company: job.company,
    period: job.period,
    location: job.location,
    bullets: job.highlights,
  });

// Education sits in the right column, which has no timeline line, so its entries have no tick.
const educationEntry = (item) =>
  h(
    View,
    { key: item.qualification, style: styles.project, wrap: false },
    text(styles.title, item.qualification),
    text(styles.company, item.institution),
    h(View, { style: styles.metaRow }, text(styles.meta, dash(item.period))),
    ...(item.dissertation ? [h(Link, { src: item.dissertation.url, style: styles.link }, item.dissertation.label)] : []),
  );

const projectEntry = (project) =>
  h(
    View,
    { key: project.repo, style: styles.project, wrap: false },
    h(
      Link,
      { src: project.cvUrl, style: styles.projectLink },
      project.status ? `${project.name} (${project.status.toLowerCase()})` : project.name,
    ),
    text(styles.projectText, project.cvSummary),
  );

const leftColumn = ({ experience }) =>
  h(
    View,
    { style: styles.left },
    text(styles.heading, "Work experience"),
    ...experience.map(jobEntry),
  );

const initiativeEntry = (item) =>
  h(
    View,
    { key: item.title, style: styles.project, wrap: false },
    text(styles.projectName, item.title),
    text(styles.projectText, item.detail),
  );

const rightColumn = ({ skills, projects, githubUrl, githubLabel, education, initiatives, writingNote, mediumUrl, mediumLabel }) =>
  h(
    View,
    { style: styles.right },
    text(styles.heading, "Skills"),
    h(View, { style: styles.chips }, ...skills.flatMap((group) => group.items).map((item) => text(styles.chip, item))),
    text(styles.heading, "Projects"),
    h(Link, { src: githubUrl, style: styles.projectsNote }, `All on ${githubLabel}`),
    ...projects.map(projectEntry),
    h(
      View,
      { style: styles.section },
      text(styles.heading, "Writing"),
      text(styles.projectText, writingNote),
      h(Link, { src: mediumUrl, style: styles.link }, mediumLabel),
    ),
    h(View, { style: styles.section }, text(styles.heading, "Education"), ...education.map(educationEntry)),
    h(View, { style: styles.section }, text(styles.heading, "Hackathon and teaching"), ...initiatives.map(initiativeEntry)),
  );

/**
 * @param content what the CV says: person, links, siteUrl, experience, education, skills,
 *   projects (featured then also, each with the `cvUrl` its name links to), initiatives and writingNote (the series sentence; the Medium link is added from `links`).
 */
export function buildCvDocument(content) {
  const { person, links, siteUrl } = content;
  return h(
    Document,
    { title: `${person.name} - ${person.jobTitle}`, author: person.name },
    h(
      Page,
      { size: "A4", style: styles.page },
      h(
        View,
        { style: styles.top },
        text(styles.name, person.name),
        text(styles.role, person.jobTitle),
        text(styles.tagline, person.tagline),
      ),
      contactBand({
        email: { label: person.email, url: person.mailto },
        website: { label: new URL(siteUrl).host, url: siteUrl },
        linkedin: { label: withoutScheme(links.linkedin), url: links.linkedin },
        github: { label: withoutScheme(links.github), url: links.github },
      }),
      h(
        View,
        { style: styles.columns },
        leftColumn(content),
        rightColumn({ ...content, githubUrl: links.github, githubLabel: withoutScheme(links.github), mediumUrl: links.medium, mediumLabel: `Medium: ${withoutScheme(links.medium)}` }),
      ),
    ),
  );
}
