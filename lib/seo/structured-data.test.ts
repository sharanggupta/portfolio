import { describe, expect, it } from "vitest";
import { LINKS, PERSON, SITE_URL } from "@/content/person";
import { buildStructuredData, toScriptSafeJson } from "./structured-data";

describe("buildStructuredData", () => {
  const [person, website] = buildStructuredData()["@graph"];

  it("describes the person with their profiles", () => {
    expect(person.name).toBe(PERSON.name);
    expect(person.sameAs).toEqual([LINKS.github, LINKS.linkedin, LINKS.medium]);
  });

  it("makes the website's publisher the person", () => {
    expect(website.publisher).toEqual({ "@id": person["@id"] });
    expect(person["@id"]).toBe(`${SITE_URL}/#person`);
  });
});

describe("toScriptSafeJson", () => {
  it("escapes < so text cannot close the script tag", () => {
    const json = toScriptSafeJson({ note: "</script><script>alert(1)</script>" });
    expect(json).not.toContain("<");
    expect(JSON.parse(json).note).toBe("</script><script>alert(1)</script>");
  });
});
