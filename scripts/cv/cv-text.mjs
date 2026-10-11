// Small text helpers for the CV. Pure, so they can be tested without rendering a PDF.

/** "Jan 2023 to present" becomes "Jan 2023 - present". */
export const dash = (period) => period.replace(" to ", " - ");

/** The first sentence of a description, always ending in a full stop. */
export const firstSentence = (description) => description.split(". ")[0].replace(/\.$/, "") + ".";

/** "https://www.linkedin.com/in/x/" becomes "linkedin.com/in/x". */
export const withoutScheme = (url) => url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");
