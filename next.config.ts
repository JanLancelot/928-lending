import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ['127.0.0.1', '192.168.56.1'],
  experimental: {
    serverActions: {
      bodySizeLimit: "7mb",
    },
  },
};

export default nextConfig;
