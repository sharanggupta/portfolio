import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { featuredProjects, alsoProjects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

const orderly = featuredProjects.find((project) => project.repo === "orderly")!;
const thiasil = alsoProjects.find((project) => project.repo === "thiasil")!;

describe("ProjectCard", () => {
  it("links to the repository", () => {
    render(<ProjectCard project={orderly} artSeed={0} />);
    expect(screen.getByRole("link", { name: /View Orderly on GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/sharanggupta/orderly",
    );
  });

  it("tells screen readers about a project's status", () => {
    render(<ProjectCard project={orderly} artSeed={0} />);
    expect(screen.getByRole("heading", { name: /Orderly/ })).toHaveTextContent("Orderly (Work in progress)");
  });

  it("lists the technologies", () => {
    render(<ProjectCard project={orderly} artSeed={0} />);
    expect(screen.getByRole("list", { name: "Orderly technologies" })).toHaveTextContent("Hexagonal architecture");
  });

  it("offers the live site only for projects that have one", () => {
    const { unmount } = render(<ProjectCard project={orderly} artSeed={0} />);
    expect(screen.queryByRole("link", { name: /Live site/ })).not.toBeInTheDocument();
    unmount();
    render(<ProjectCard project={thiasil} artSeed={5} />);
    expect(screen.getByRole("link", { name: /Live site/ })).toHaveAttribute("href", "https://www.thiasil.com/");
  });
});
