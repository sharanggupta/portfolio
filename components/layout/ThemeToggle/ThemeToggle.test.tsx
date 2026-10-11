import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, it } from "vitest";
import ThemeToggle from "./ThemeToggle";

afterEach(() => {
  delete document.documentElement.dataset.theme;
  localStorage.clear();
});

it("offers the opposite of the current theme and switches to it", async () => {
  document.documentElement.dataset.theme = "light";
  render(<ThemeToggle />);

  await userEvent.click(await screen.findByRole("button", { name: "Switch to dark theme" }));

  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(localStorage.getItem("theme")).toBe("dark");
  expect(await screen.findByRole("button", { name: "Switch to light theme" })).toBeInTheDocument();
});
