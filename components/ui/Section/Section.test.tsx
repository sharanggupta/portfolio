import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Section from "./Section";

describe("Section", () => {
  it("is a landmark named by its own heading", () => {
    render(
      <Section id="work" kicker="01 · Work" title="Selected work">
        content
      </Section>,
    );
    const region = screen.getByRole("region", { name: "Selected work" });
    expect(region).toHaveAttribute("id", "work");
    expect(screen.getByRole("heading", { level: 2, name: "Selected work" })).toBeInTheDocument();
  });

  it("shows the intro only when given one", () => {
    const { rerender } = render(
      <Section id="a" kicker="k" title="t">
        x
      </Section>,
    );
    expect(screen.queryByText("An intro")).not.toBeInTheDocument();
    rerender(
      <Section id="a" kicker="k" title="t" intro="An intro">
        x
      </Section>,
    );
    expect(screen.getByText("An intro")).toBeInTheDocument();
  });
});
