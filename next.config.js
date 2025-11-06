// next.config.js
const { redirects } = require('./redirect-rules');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Use all redirects from centralized redirect-rules.js
    return redirects;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all',
          },
        ],
      },
      // Noindex for specific paths
      {
        source: '/page/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots.txt',
      },
      {
        source: '/sitemap-index.xml',
        destination: '/api/sitemap-index.xml',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
      {
        source: '/image-sitemap.xml',
        destination: '/api/image-sitemap.xml',
      },
    ];
  },
};

module.exports = nextConfig;
