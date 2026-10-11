import type { MetadataRoute } from "next";
import { BRAND_COLORS } from "@/components/brand/brand-colors";
import { PERSON } from "@/content/person";

// Served at /manifest.webmanifest: lets phones show a proper name and colours.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PERSON.name,
    short_name: PERSON.name,
    description: `${PERSON.jobTitle}. ${PERSON.tagline}`,
    start_url: "/",
    display: "browser",
    background_color: BRAND_COLORS.background,
    theme_color: BRAND_COLORS.background,
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
