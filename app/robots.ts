import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Served at /robots.txt. Everything may be crawled; the sitemap is announced.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
