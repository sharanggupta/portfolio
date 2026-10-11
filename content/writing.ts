// The article series on Medium. A new article is one more entry in `articles`.

import { LINKS } from "./person.ts";

export type Article = { title: string; url: string };

export const SERIES_TITLE = "OAuth2 with Spring Boot";

export const articles: Article[] = [
  {
    title: "Demystifying OAuth2",
    url: `${LINKS.medium}/demystifying-oauth2-a-step-by-step-guide-to-building-a-resource-server-with-spring-boot-tdd-6da6912411a5`,
  },
  {
    title: "Building an OAuth2 Resource Server",
    url: `${LINKS.medium}/building-an-oauth2-resource-server-in-spring-boot-tdd-621a34999410`,
  },
  {
    title: "Building an OAuth2 Client",
    url: `${LINKS.medium}/part-3-building-an-oauth2-client-in-spring-boot-tdd-91b0ba8ee5ae`,
  },
  {
    title: "Running the System End-to-End",
    url: `${LINKS.medium}/part-4-running-the-system-end-to-end-spring-multi-module-docker-86a41a128e46`,
  },
];

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

/** The number of articles in words, for example "four". It follows `articles`. */
export function articleCountWord(): string {
  return NUMBER_WORDS[articles.length] ?? String(articles.length);
}

/** For example "A four-part series on OAuth2, each part with a working app" (no full stop). */
export function seriesDescription(topic?: string): string {
  const subject = topic ? ` on ${topic}` : "";
  return `A ${articleCountWord()}-part series${subject}, each part with a working app`;
}

export function seriesIntro(): string {
  return `${seriesDescription()}.`;
}
