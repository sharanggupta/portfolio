import { describe, expect, it } from "vitest";
import { initials } from "./format";

describe("initials", () => {
  it("takes the first letter of each word", () => {
    expect(initials("Charlotte Cozens")).toBe("CC");
  });

  it("treats any run of whitespace as one separator", () => {
    expect(initials("Steve   Moss")).toBe("SM");
  });

  it("ignores leading and trailing whitespace", () => {
    expect(initials("  Ahmad Aussaili ")).toBe("AA");
  });
});
