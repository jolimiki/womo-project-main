import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/womo-project-main' : '',
  assetPrefix: isProd ? '/womo-project-main/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'd1q14jmvwk39e0.cloudfront.net',
      'womo_front.dymain.com',
      'i.meee.com.tw',
    ],
  },
};

export default nextConfig;
