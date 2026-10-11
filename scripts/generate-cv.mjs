// Builds public/cv.pdf from the content/ modules, the same data the web page uses.
// Run with:  npm run cv   (Node 22.18+ reads the .ts content files directly)
//
// Layout follows the previous CV: name and tagline on top, a dark contact band,
// experience and education on the left, skills, projects and open source on the right.
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { renderToFile } from "@react-pdf/renderer";
import { education, initiatives, skills } from "../content/background.ts";
import { experience } from "../content/experience.ts";
import { CV, LINKS, PERSON, SITE_URL } from "../content/person.ts";
import { alsoProjects, featuredProjects } from "../content/projects.ts";
import { SERIES_TITLE, seriesDescription } from "../content/writing.ts";
import { buildCvDocument } from "./cv/cv-document.mjs";

const OUTPUT_PATH = join("public", CV.path);

const writingNote = `${seriesDescription(SERIES_TITLE)}.`;

const document = buildCvDocument({
  person: PERSON,
  links: LINKS,
  siteUrl: SITE_URL,
  experience,
  education,
  initiatives,
  skills,
  projects: [...featuredProjects, ...alsoProjects],
  writingNote,
});

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
await renderToFile(document, OUTPUT_PATH);
console.log(`Wrote ${OUTPUT_PATH}`);
