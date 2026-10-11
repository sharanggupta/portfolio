import { render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Reveal from "./Reveal";

const noObserverYet = () => {};

type ObserverCallback = (entries: Array<{ isIntersecting: boolean; target: Element }>) => void;

function stubIntersectionObserver() {
  let notify: ObserverCallback = noObserverYet;
  class FakeObserver {
    constructor(callback: ObserverCallback) {
      notify = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  vi.stubGlobal("IntersectionObserver", FakeObserver);
  return (target: Element, isIntersecting: boolean) => act(() => notify([{ isIntersecting, target }]));
}

afterEach(() => vi.unstubAllGlobals());

describe("Reveal", () => {
  it("stays hidden until it scrolls into view, then shows once", () => {
    const intersect = stubIntersectionObserver();
    render(<Reveal>hello</Reveal>);
    const box = screen.getByText("hello");
    expect(box).not.toHaveAttribute("data-visible");

    intersect(box, false);
    expect(box).not.toHaveAttribute("data-visible");

    intersect(box, true);
    expect(box).toHaveAttribute("data-visible", "true");
  });

  it("passes its delay to the CSS", () => {
    stubIntersectionObserver();
    render(<Reveal delay={90}>hello</Reveal>);
    expect(screen.getByText("hello").style.getPropertyValue("--delay")).toBe("90ms");
  });

  it("shows immediately where IntersectionObserver does not exist", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    render(<Reveal>hello</Reveal>);
    expect(screen.getByText("hello")).toHaveAttribute("data-visible", "true");
  });
});
