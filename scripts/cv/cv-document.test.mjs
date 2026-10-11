import { expect, it } from "vitest";
import { education, skills } from "../../content/background.ts";
import { experience } from "../../content/experience.ts";
import { LINKS, PERSON, SITE_URL } from "../../content/person.ts";
import { alsoProjects, featuredProjects } from "../../content/projects.ts";
import { buildCvDocument } from "./cv-document.mjs";

it("builds a one-page document titled with the person's name and role", () => {
  const document = buildCvDocument({
    person: PERSON,
    links: LINKS,
    siteUrl: SITE_URL,
    experience,
    education,
    skills,
    projects: [...featuredProjects, ...alsoProjects],
    writingNote: "note",
  });
  expect(document.props.title).toBe("Sharang Gupta - Software Engineer");
  expect(document.props.author).toBe(PERSON.name);
  expect(document.props.children.props.size).toBe("A4");
});
