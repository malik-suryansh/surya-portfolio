import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/notes/",
        destination: "https://coreml.pages.dev/",
      },
      {
        source: "/notes/:path*/",
        destination: "https://coreml.pages.dev/:path*",
      },
      {
        source: "/notes/:path*",
        destination: "https://coreml.pages.dev/:path*",
      },
    ];
  },
};

export default nextConfig;
