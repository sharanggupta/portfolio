import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import SiteMenu from "./SiteMenu";

const ITEMS = [
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
  { href: "/cv.pdf", label: "Download CV", download: "CV.pdf" },
];

afterEach(() => {
  document.body.style.overflow = "";
});

async function openMenu() {
  const user = userEvent.setup();
  render(<SiteMenu items={ITEMS} />);
  await user.click(await screen.findByRole("button", { name: "Open menu" }));
  return user;
}

describe("SiteMenu", () => {
  it("starts closed: links cannot be tabbed to", async () => {
    render(<SiteMenu items={ITEMS} />);
    const link = (await screen.findAllByText("Work", { ignore: "button" }))[0].closest("a");
    expect(link).toHaveAttribute("tabindex", "-1");
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("opens with the first link focused and the page behind locked", async () => {
    await openMenu();
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Work" })).toHaveFocus();
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("closes on Escape, returns focus to the button and unlocks the page", async () => {
    const user = await openMenu();
    await user.keyboard("{Escape}");
    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button).toHaveFocus();
    expect(document.body.style.overflow).toBe("");
  });

  it("closes when a link is chosen", async () => {
    const user = await openMenu();
    await user.click(screen.getByRole("link", { name: "Contact" }));
    expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument();
  });

  it("keeps Tab inside the button and the links", async () => {
    const user = await openMenu();
    screen.getByRole("link", { name: "Download CV" }).focus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveFocus();
    await user.tab({ shift: true });
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveFocus();
  });

  it("offers the CV as a download", async () => {
    await openMenu();
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute("download", "CV.pdf");
  });
});
