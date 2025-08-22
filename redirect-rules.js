// redirect-rules.js
// Centralized redirect rules for the Las Vegas Home Expert Next.js website

const redirects = [
  // CRITICAL: Block legacy WordPress URLs that may still be crawled
  // These are likely from old redirects or external links
  {
    source: '/wp-admin/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/wp-login.php',
    destination: '/',
    permanent: true,
  },
  {
    source: '/wp-login.php?action=:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/wp-includes/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/wp-content/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/wp-json/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/xmlrpc.php',
    destination: '/',
    permanent: true,
  },
  {
    source: '/feed',
    destination: '/',
    permanent: true,
  },
  {
    source: '/feed/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/rss',
    destination: '/',
    permanent: true,
  },
  {
    source: '/rss/:path*',
    destination: '/',
    permanent: true,
  },
  
  // Redirect duplicate content patterns (common in migrations)
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
  {
    source: '/:path*-4',
    destination: '/:path*',
    permanent: true,
  },
  
  // Redirect attachment pages to homepage
  {
    source: '/attachment/:path*',
    destination: '/',
    permanent: true,
  },
  
  // Redirect author pages to main content
  {
    source: '/author/:path*',
    destination: '/about-dr-jan-duffy',
    permanent: true,
  },
  
  // Redirect date archives to main content
  {
    source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})',
    destination: '/',
    permanent: true,
  },
  {
    source: '/:year(\\d{4})/:month(\\d{2})',
    destination: '/',
    permanent: true,
  },
  {
    source: '/:year(\\d{4})',
    destination: '/',
    permanent: true,
  },
  
  // Redirect image/media files to homepage
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
  
  // Redirect old service URLs to new structure
  {
    source: '/services/luxuryhomes',
    destination: '/luxury-homes-for-sale-las-vegas',
    permanent: true,
  },
  {
    source: '/services/dr-jan-duffy',
    destination: '/about-dr-jan-duffy',
    permanent: true,
  },
  {
    source: '/services/firsttimehomebuyer',
    destination: '/first-time-home-buyer-las-vegas',
    permanent: true,
  },
  {
    source: '/services/real-estate-investment',
    destination: '/investment-properties-las-vegas',
    permanent: true,
  },
  
  // Redirect old community URLs to neighborhood structure
  {
    source: '/communities/:path*',
    destination: '/neighborhoods/:path*',
    permanent: true,
  },
  
  // Redirect old blog URLs to main content
  {
    source: '/blog/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/insights/:path*',
    destination: '/',
    permanent: true,
  },
];

module.exports = { redirects };
