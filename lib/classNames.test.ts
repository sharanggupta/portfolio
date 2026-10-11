import { expect, it } from "vitest";
import { cx } from "./classNames";

it("joins the names and skips anything falsy", () => {
  expect(cx("a", false, undefined, null, "b")).toBe("a b");
});
