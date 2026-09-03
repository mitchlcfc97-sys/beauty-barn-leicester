import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 301 Permanent Redirects to preserve Google SEO juice from old Wix URLs
      {
        source: '/blank-page',
        destination: '/gift-vouchers',
        permanent: true,
      },
      {
        source: '/copy-of-facials',
        destination: '/treatments/facials',
        permanent: true,
      },
      {
        source: '/facials',
        destination: '/treatments/facials',
        permanent: true,
      },
      {
        source: '/team-4',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/general-9',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/signature-treatments',
        destination: '/treatments',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com', 'static.wixstatic.com'],
  },
};

export default nextConfig;
