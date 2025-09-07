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
  },
  /* other config options here */
};

export default nextConfig;
