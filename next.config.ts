import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The old site served the CV here; keep old links (and LinkedIn) working.
    return [{ source: "/resume_latest.pdf", destination: "/cv.pdf", permanent: true }];
  },
};

export default nextConfig;
