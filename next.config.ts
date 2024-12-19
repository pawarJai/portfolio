import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
// chnage
export default nextConfig;


