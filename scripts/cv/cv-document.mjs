// Builds the CV as a react-pdf document from the site's content. No file or network access here:
// `generate-cv.mjs` passes the content in and writes the result to public/cv.pdf.

import { createElement as h } from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { contactBand } from "./cv-contact-band.mjs";
import { styles } from "./cv-styles.mjs";
import { dash, firstSentence, withoutScheme } from "./cv-text.mjs";

const text = (style, children) => h(Text, { style }, children);

const jobEntry = (job) =>
  h(
    View,
    { key: `${job.company}-${job.period}`, style: styles.entry, wrap: false },
    h(View, { style: styles.tick }),
    text(styles.title, job.title),
    text(styles.company, job.company),
    h(View, { style: styles.metaRow }, text(styles.meta, dash(job.period)), text(styles.meta, job.location)),
    ...job.highlights.map((line) =>
      h(View, { key: line, style: styles.bullet }, text(styles.bulletDot, "•"), text(styles.grow, line)),
    ),
  );

const educationEntry = (item) =>
  h(
    View,
    { key: item.qualification, style: styles.entry, wrap: false },
    h(View, { style: styles.tick }),
    text(styles.title, item.qualification),
    text(styles.company, item.institution),
    h(View, { style: styles.metaRow }, text(styles.meta, dash(item.period))),
  );

const projectEntry = (project) =>
  h(
    View,
    { key: project.repo, style: styles.project, wrap: false },
    text(styles.projectName, project.status ? `${project.name} (${project.status.toLowerCase()})` : project.name),
    text(styles.projectText, firstSentence(project.description)),
  );

const leftColumn = ({ experience, education }) =>
  h(
    View,
    { style: styles.left },
    text(styles.heading, "Work experience"),
    ...experience.map(jobEntry),
    h(View, { style: { marginTop: 4 } }, text(styles.heading, "Education"), ...education.map(educationEntry)),
  );

const rightColumn = ({ skills, projects, writingNote }) =>
  h(
    View,
    { style: styles.right },
    text(styles.heading, "Skills"),
    h(View, { style: styles.chips }, ...skills.flatMap((group) => group.items).map((item) => text(styles.chip, item))),
    text(styles.heading, "Projects"),
    ...projects.map(projectEntry),
    h(View, { style: styles.section }, text(styles.heading, "Writing"), text(styles.projectText, writingNote)),
  );

/**
 * @param content what the CV says: person, links, siteUrl, experience, education, skills,
 *   projects (featured then also) and writingNote.
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
        email: person.email,
        website: new URL(siteUrl).host,
        linkedin: withoutScheme(links.linkedin),
        github: withoutScheme(links.github),
      }),
      h(View, { style: styles.columns }, leftColumn(content), rightColumn(content)),
    ),
  );
}
