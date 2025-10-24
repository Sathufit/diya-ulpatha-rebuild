import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ensure Turbopack uses this project folder as the root
  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Add quality configuration to fix the warning
    qualities: [75, 85, 90, 95],
    formats: ['image/webp', 'image/avif'],
  },
  /* other config options here */
};

export default nextConfig;
