/** "Charlotte Cozens" becomes "CC". Any run of whitespace separates the words. */
export function initials(fullName: string): string {
  return fullName
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("");
}
