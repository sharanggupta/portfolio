import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Served at /sitemap.xml. One page today; add entries here if the site grows.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 }];
}
