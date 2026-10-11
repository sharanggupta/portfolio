/** Joins class names, skipping anything falsy: cx("a", isOpen && "b") */
export function cx(...names: Array<string | false | null | undefined>): string {
  return names.filter(Boolean).join(" ");
}
