import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ReadingProgress from "@/components/layout/ReadingProgress/ReadingProgress";
import Header from "@/components/layout/Header";
import { themeScript } from "@/lib/theme/theme-script";
import JsonLd from "@/components/JsonLd";
import { PERSON, SITE_URL } from "@/content/person";
import { SEO } from "@/content/seo";

// Next.js builds the <head> from this object (title, description, canonical, social tags...).
export const metadata: Metadata = {
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
    locale: "en_GB",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body>
        <ReadingProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
