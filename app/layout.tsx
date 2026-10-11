import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { LINKS, PERSON, REPO_NAME, SEO, SITE_URL } from "@/content/site";

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

// Runs before the page paints: apply a saved theme, otherwise follow the operating system.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body>
        <Header />
        {children}
        <footer className="mt-16 border-t border-border">
          <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-muted">
            <p>
              © {new Date().getFullYear()} {PERSON.name}. Built with Next.js.{" "}
              <a className="link" href={LINKS.repo} rel="noopener">
                Source on GitHub ({REPO_NAME})
              </a>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
