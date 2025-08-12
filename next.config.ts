import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  //output: 'export',

  trailingSlash: true,
  images: {
    //unoptimized: true, // 若是 output: 'export' 再打開
    domains: [
      'images.unsplash.com',
      'd1q14jmvwk39e0.cloudfront.net',
      'womo_front.dymain.com',
      'i.meee.com.tw',
    ],
    remotePatterns: [{ protocol: 'https', hostname: 'd1q14jmvwk39e0.cloudfront.net' }],
  },
  eslint: { ignoreDuringBuilds: true }, // 👈 先上線救急用
};

export default nextConfig;
