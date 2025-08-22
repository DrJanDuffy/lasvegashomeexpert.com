// next.config.js
const { redirects } = require('./redirect-rules');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect duplicate content
      {
        source: '/:path*-2',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*-3',
        destination: '/:path*',
        permanent: true,
      },
      // Redirect attachment pages
      {
        source: '/attachment/:path*',
        destination: '/',
        permanent: true,
      },
      // Redirect author pages to blog
      {
        source: '/author/:path*',
        destination: '/blog',
        permanent: true,
      },
      // Redirect date archives
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})',
        destination: '/blog',
        permanent: true,
      },
      // Redirect image/media files
      {
        source: '/:path*.webp',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*.png',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*.jpg',
        destination: '/',
        permanent: true,
      },
    ];
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
