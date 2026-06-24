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
      {
        source: "/static/:path*",
        destination: "https://coreml.pages.dev/static/:path*",
      },
    ];
  },
};

export default nextConfig;
