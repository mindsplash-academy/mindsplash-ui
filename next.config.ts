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
      {
        source: '/programs/ib-mvp',
        destination: '/programs/ib-myp',
        permanent: true,
      },
      {
        source: '/programs/1b-dp',
        destination: '/programs/ib-dp',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
