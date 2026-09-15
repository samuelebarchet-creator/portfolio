import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Apex → www. Vercel already does this when www is the Primary domain;
      // kept here so the canonical host holds on any other host setup too.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'samuelebarchet.com' }],
        destination: 'https://www.samuelebarchet.com/:path*',
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["gsap"],
  },
  compiler: {
    removeConsole: { exclude: ["error"] },
  },
};

export default nextConfig;
