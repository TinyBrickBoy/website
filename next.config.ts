import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export (out/) – läuft weiterhin auf GitHub Pages
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
