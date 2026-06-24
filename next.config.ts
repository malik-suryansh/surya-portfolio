import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/notes",
        destination: "https://coreml.pages.dev/",
      },
      {
        source: "/notes/:path*",
        destination: "https://coreml.pages.dev/:path*",
      },
    ];
  },
};

export default nextConfig;
