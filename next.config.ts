import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.roteirovip.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
