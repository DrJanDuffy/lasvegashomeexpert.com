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
};

module.exports = nextConfig;
