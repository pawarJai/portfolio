import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  experimental: {
    forceSwcTransforms: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
// chnagedfdf
export default nextConfig;


