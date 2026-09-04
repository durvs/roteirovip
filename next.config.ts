import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 exige allowlist. 60 = hero (imagens grandes de fundo, sem perda perceptível).
    qualities: [60, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
