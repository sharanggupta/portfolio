// Builds public/cv.pdf from content/site.ts, the same data the web page uses.
// Run with:  npm run cv   (Node 22.18+ reads the .ts data file directly)
//
// Layout follows the previous CV: name and tagline on top, a dark contact band,
// experience and education on the left, skills, projects and open source on the right.
import { mkdirSync } from "node:fs";
import { createElement as h } from "react";
import {
  Circle,
  Document,
  Line,
  Page,
  Path,
  Rect,
  StyleSheet,
  Svg,
  Text,
  View,
  renderToFile,
} from "@react-pdf/renderer";
import {
  LINKS,
  PERSON,
  alsoProjects,
  education,
  experience,
  featuredProjects,
  openSourceFixes,
  skills,
} from "../content/site.ts";

const SLATE = "#343f56"; // headings and the contact band
const SLATE_SOFT = "#4a5775"; // role line
const CHIP = "#9aa1ac";
const GREY = "#6b7280";
const INK = "#16191d";

const s = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 9, color: INK, lineHeight: 1.35 },
  top: { paddingTop: 30, paddingHorizontal: 34, paddingBottom: 12 },
  name: { fontSize: 27, lineHeight: 1.1, color: INK },
  role: { fontSize: 12.5, color: SLATE_SOFT, marginTop: 4 },
  tagline: { fontSize: 9.5, marginTop: 5 },
  band: { backgroundColor: SLATE, color: "#ffffff", paddingVertical: 11, paddingHorizontal: 34, flexDirection: "row", flexWrap: "wrap" },
  bandItem: { width: "50%", flexDirection: "row", alignItems: "center", paddingVertical: 4 },
  bandText: { marginLeft: 8, fontSize: 9.5, color: "#ffffff" },
  columns: { flexDirection: "row", paddingHorizontal: 34, paddingTop: 14 },
  left: { width: "56%", paddingRight: 22 },
  right: { width: "44%" },
  heading: { fontSize: 14.5, fontWeight: "bold", color: SLATE, textTransform: "uppercase", marginBottom: 9 },
  entry: { marginBottom: 11 },
  tick: { position: "absolute", left: -34, top: 8, width: 14, borderTopWidth: 1, borderTopColor: INK },
  title: { fontSize: 11.5, fontWeight: "bold" },
  company: { fontSize: 10.5 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 1 },
  meta: { fontSize: 8, fontStyle: "italic", color: GREY },
  bullet: { flexDirection: "row", marginTop: 2.5 },
  bulletDot: { width: 11, paddingTop: 3.5 },
  grow: { flexGrow: 1, flexShrink: 1, fontSize: 8.6 },
  chips: { flexDirection: "row", flexWrap: "wrap", marginBottom: 14 },
  chip: { backgroundColor: CHIP, color: "#ffffff", fontSize: 8.4, paddingVertical: 3.5, paddingHorizontal: 8, borderRadius: 3, marginRight: 5, marginBottom: 5 },
  project: { marginBottom: 7 },
  projectName: { fontSize: 10.2 },
  projectText: { fontSize: 8.4, color: "#333333" },
  section: { marginBottom: 12 },
});

const text = (style, children) => h(Text, { style }, children);
const dash = (period) => period.replace(" to ", " - ");
const firstSentence = (description) => description.split(". ")[0].replace(/\.$/, "") + ".";

// --- small icons, drawn with SVG shapes so no image files are needed ---
const iconProps = { width: 12, height: 12, viewBox: "0 0 12 12" };
const mailIcon = h(
  Svg,
  iconProps,
  h(Rect, { x: 0.8, y: 2, width: 10.4, height: 8, rx: 1, stroke: "#ffffff", strokeWidth: 1, fill: "none" }),
  h(Path, { d: "M1 3 L6 7 L11 3", stroke: "#ffffff", strokeWidth: 1, fill: "none" }),
);
const globeIcon = h(
  Svg,
  iconProps,
  h(Circle, { cx: 6, cy: 6, r: 5, stroke: "#ffffff", strokeWidth: 1, fill: "none" }),
  h(Path, { d: "M6 1 C3 4 3 8 6 11 C9 8 9 4 6 1 Z", stroke: "#ffffff", strokeWidth: 0.8, fill: "none" }),
  h(Line, { x1: 1, y1: 6, x2: 11, y2: 6, stroke: "#ffffff", strokeWidth: 0.8 }),
);
const tileIcon = (label) =>
  h(
    View,
    { style: { width: 12, height: 12, borderRadius: 2, backgroundColor: "#ffffff", alignItems: "center", justifyContent: "center" } },
    text({ fontSize: 6.5, fontWeight: "bold", color: SLATE }, label),
  );

const contact = (icon, label) =>
  h(View, { style: s.bandItem }, icon, text(s.bandText, label));

// --- left column ---
const jobEntry = (job) =>
  h(
    View,
    { key: `${job.company}-${job.period}`, style: s.entry, wrap: false },
    h(View, { style: s.tick }),
    text(s.title, job.title),
    text(s.company, job.company),
    h(View, { style: s.metaRow }, text(s.meta, dash(job.period)), text(s.meta, job.location)),
    ...job.highlights.map((line) =>
      h(View, { key: line, style: s.bullet }, text(s.bulletDot, "•"), text(s.grow, line)),
    ),
  );

const educationEntry = (item) =>
  h(
    View,
    { key: item.qualification, style: s.entry, wrap: false },
    h(View, { style: s.tick }),
    text(s.title, item.qualification),
    text(s.company, item.institution),
    h(View, { style: s.metaRow }, text(s.meta, dash(item.period))),
  );

const skillChips = skills.flatMap((group) => group.items);
const projects = [...featuredProjects, ...alsoProjects];

const left = h(
  View,
  { style: s.left },
  text(s.heading, "Work experience"),
  ...experience.map(jobEntry),
  h(View, { style: { marginTop: 4 } }, text(s.heading, "Education"), ...education.map(educationEntry)),
);

const right = h(
  View,
  { style: s.right },
  text(s.heading, "Skills"),
  h(View, { style: s.chips }, ...skillChips.map((item) => text({ ...s.chip }, item))),
  text(s.heading, "Projects"),
  ...projects.map((p) =>
    h(
      View,
      { key: p.repo, style: s.project, wrap: false },
      text(s.projectName, p.status ? `${p.name} (${p.status.toLowerCase()})` : p.name),
      text(s.projectText, firstSentence(p.description)),
    ),
  ),
  h(
    View,
    { style: s.section },
    text(s.heading, "Open source"),
    text(s.projectText, `Fixes merged upstream in ${openSourceFixes.map((f) => f.project).join(", ")}.`),
  ),
  h(
    View,
    { style: s.section },
    text(s.heading, "Writing"),
    text(s.projectText, "A four-part series on OAuth2 with Spring Boot, each part with a working app: sharanggupta.medium.com"),
  ),
);

const doc = h(
  Document,
  { title: `${PERSON.name} - ${PERSON.jobTitle}`, author: PERSON.name },
  h(
    Page,
    { size: "A4", style: s.page },
    h(
      View,
      { style: s.top },
      text(s.name, PERSON.name),
      text(s.role, PERSON.jobTitle),
      text(s.tagline, PERSON.tagline),
    ),
    h(
      View,
      { style: s.band },
      contact(mailIcon, PERSON.email),
      contact(globeIcon, "www.sharanggupta.dev"),
      contact(tileIcon("in"), LINKS.linkedin.replace("https://www.", "").replace(/\/$/, "")),
      contact(tileIcon("GH"), LINKS.github.replace("https://", "")),
    ),
    h(View, { style: s.columns }, left, right),
  ),
);

mkdirSync("public", { recursive: true });
await renderToFile(doc, "public/cv.pdf");
console.log("Wrote public/cv.pdf");
