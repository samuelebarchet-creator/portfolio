import type { NextConfig } from "next";

/* Content-Security-Policy, REPORT-ONLY for now: violations show up in the browser
   console without blocking anything. Once a week of real traffic shows no
   violations, switch the header key to 'Content-Security-Policy'. */
const CSP = [
  "default-src 'self'",
  // Inline scripts: consent default, GTM bootstrap, JSON-LD. GTM/GA/Iubenda/Cal/Vercel loaders.
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com https://*.iubenda.com https://cal.eu https://*.cal.eu https://va.vercel-scripts.com https://connect.facebook.net https://www.instagram.com",
  "style-src 'self' 'unsafe-inline' https://*.iubenda.com https://cal.eu https://*.cal.eu",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://*.iubenda.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.iubenda.com https://cal.eu https://*.cal.eu https://vitals.vercel-insights.com https://*.facebook.com",
  "frame-src 'self' https://www.googletagmanager.com https://*.iubenda.com https://cal.eu https://*.cal.eu https://www.instagram.com https://www.youtube.com https://www.facebook.com",
  "media-src 'self' blob: https:",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join('; ');

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
          { key: 'Content-Security-Policy-Report-Only', value: CSP },
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
