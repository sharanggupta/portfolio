import type { Metadata, Viewport } from "next";
import { BRAND_COLORS } from "@/components/brand/brand-colors";
import { PERSON, SITE_URL } from "@/content/person";
import { SEO } from "@/content/seo";

const LOCALE = "en_GB";
const THEME_COLORS = { light: "#ffffff", dark: BRAND_COLORS.background };

/** Next.js builds the <head> (title, description, canonical, social tags) from this. */
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: SEO.titleTemplate },
  description: SEO.description,
  applicationName: PERSON.name,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  keywords: [...SEO.keywords],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: PERSON.name,
    locale: LOCALE,
    url: "/",
    title: SEO.title,
    description: SEO.description,
    // The image comes from app/opengraph-image.tsx automatically.
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    // The image comes from app/twitter-image.tsx automatically.
  },
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: THEME_COLORS.dark },
  ],
  colorScheme: "light dark",
};
