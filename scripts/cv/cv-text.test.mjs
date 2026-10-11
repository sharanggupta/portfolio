import { describe, expect, it } from "vitest";
import { dash, firstSentence, withoutScheme } from "./cv-text.mjs";

describe("CV text helpers", () => {
  it("writes a period with a dash", () => {
    expect(dash("Jan 2023 to present")).toBe("Jan 2023 - present");
  });

  it("keeps only the first sentence, ending in a full stop", () => {
    expect(firstSentence("One idea. Another idea.")).toBe("One idea.");
    expect(firstSentence("Only one.")).toBe("Only one.");
    expect(firstSentence("No full stop")).toBe("No full stop.");
  });

  it("shows a link without its scheme, www and trailing slash", () => {
    expect(withoutScheme("https://www.linkedin.com/in/sharanggupta/")).toBe("linkedin.com/in/sharanggupta");
    expect(withoutScheme("https://github.com/sharanggupta")).toBe("github.com/sharanggupta");
  });
});
