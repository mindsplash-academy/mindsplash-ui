import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
