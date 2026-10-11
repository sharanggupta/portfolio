import type { MetadataRoute } from "next";
import { PERSON } from "@/content/person";

// Served at /manifest.webmanifest: lets phones show a proper name and colours.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PERSON.name,
    short_name: PERSON.name,
    description: "Software engineer. Java and Spring, built test-first.",
    start_url: "/",
    display: "browser",
    background_color: "#0d1117",
    theme_color: "#0d1117",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
