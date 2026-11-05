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
      {
        // Files in public/ keep their name when replaced, so one day, not one year.
        // _next/ is excluded: its assets are hashed and already immutable.
        source: '/((?!_next/).*\\.(?:jpg|jpeg|png|webp|avif|svg|ico))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  experimental: {
    optimizePackageImports: ["gsap"],
  },
  compiler: {
    removeConsole: { exclude: ["error"] },
  },
};

export default nextConfig;
