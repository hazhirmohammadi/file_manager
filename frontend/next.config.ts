import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  webpack(config, { isServer }) {
    if (isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
};

export default nextConfig;
