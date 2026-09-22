import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/capabilities", permanent: true },
      { source: "/practice-areas", destination: "/capabilities", permanent: true },
      { source: "/impact", destination: "/work", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;

if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}
