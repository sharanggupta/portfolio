import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The old site had separate pages and served the CV here: keep old links, search results
    // and LinkedIn working by sending them to the matching part of the new one-page site.
    return [
      { source: "/resume_latest.pdf", destination: "/cv.pdf", permanent: true },
      { source: "/resume", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
    ];
  },
};

export default nextConfig;
