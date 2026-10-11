import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DISSERTATION } from "@/content/background";
import BackgroundSection from "./BackgroundSection";

describe("BackgroundSection", () => {
  it("links the MSc dissertation to its DOI, once", () => {
    render(<BackgroundSection />);
    const links = screen.getAllByRole("link", { name: DISSERTATION.label });
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute("href", "https://doi.org/10.5281/zenodo.23299984");
  });
});
