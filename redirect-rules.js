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
    source: '/blog',
    destination: '/',
    permanent: true,
  },
  {
    source: '/blog/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/blog-1',
    destination: '/',
    permanent: true,
  },
  {
    source: '/blog-1/',
    destination: '/',
    permanent: true,
  },
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

  // Redirect blog pagination pages
  {
    source: '/blog/page/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/page/:path*',
    destination: '/',
    permanent: true,
  },

  // Redirect category/taxonomy pages
  {
    source: '/las-vegas-homes/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/series/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/tag/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/category/:path*',
    destination: '/',
    permanent: true,
  },

  // Redirect legacy home page variations
  {
    source: '/home',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home-4',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home-4/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home-example-4',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home-example-4/',
    destination: '/',
    permanent: true,
  },

  // Redirect legacy service URLs
  {
    source: '/services/:path*',
    destination: '/',
    permanent: true,
  },

  // Redirect legacy resource pages
  {
    source: '/resources',
    destination: '/',
    permanent: true,
  },
  {
    source: '/resources/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/info',
    destination: '/',
    permanent: true,
  },
  {
    source: '/info/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/real-estate',
    destination: '/',
    permanent: true,
  },
  {
    source: '/real-estate/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/real-estate-tips',
    destination: '/',
    permanent: true,
  },
  {
    source: '/real-estate-tips/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/team',
    destination: '/about-dr-jan-duffy',
    permanent: true,
  },
  {
    source: '/team/',
    destination: '/about-dr-jan-duffy',
    permanent: true,
  },
  {
    source: '/about',
    destination: '/about-dr-jan-duffy',
    permanent: true,
  },
  {
    source: '/about/',
    destination: '/about-dr-jan-duffy',
    permanent: true,
  },
  {
    source: '/contact-2',
    destination: '/contact',
    permanent: true,
  },
  {
    source: '/contact-2/',
    destination: '/contact',
    permanent: true,
  },

  // Redirect legacy category pages
  {
    source: '/fashion',
    destination: '/',
    permanent: true,
  },
  {
    source: '/fashion/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/sports',
    destination: '/',
    permanent: true,
  },
  {
    source: '/sports/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/travel',
    destination: '/',
    permanent: true,
  },
  {
    source: '/travel/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/technology',
    destination: '/',
    permanent: true,
  },
  {
    source: '/technology/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/entertainment',
    destination: '/',
    permanent: true,
  },
  {
    source: '/entertainment/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/food-and-drinks',
    destination: '/',
    permanent: true,
  },
  {
    source: '/food-and-drinks/',
    destination: '/',
    permanent: true,
  },

  // Redirect legacy layout pages
  {
    source: '/layout-a/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/layout-f',
    destination: '/',
    permanent: true,
  },
  {
    source: '/layout-f/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/shortcodes',
    destination: '/',
    permanent: true,
  },
  {
    source: '/shortcodes/',
    destination: '/',
    permanent: true,
  },

  // Redirect legacy neighborhood variations
  {
    source: '/las-vegas-neighborhood-insights',
    destination: '/neighborhoods',
    permanent: true,
  },
  {
    source: '/las-vegas-neighborhood-insights/',
    destination: '/neighborhoods',
    permanent: true,
  },
  {
    source: '/communities-luxury',
    destination: '/luxury-homes-for-sale-las-vegas',
    permanent: true,
  },
  {
    source: '/communities-luxury/',
    destination: '/luxury-homes-for-sale-las-vegas',
    permanent: true,
  },

  // Redirect legacy market pages
  {
    source: '/market-updates',
    destination: '/',
    permanent: true,
  },
  {
    source: '/market-updates/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/market-trends-analysis',
    destination: '/',
    permanent: true,
  },
  {
    source: '/market-trends-analysis/',
    destination: '/',
    permanent: true,
  },

  // Redirect legacy guide pages
  {
    source: '/selling-guide',
    destination: '/selling-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/selling-guide/',
    destination: '/selling-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/home-buying-guide',
    destination: '/buying-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/home-buying-guide/',
    destination: '/buying-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/home-buying-guide/:path*',
    destination: '/buying-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/buyers-guide',
    destination: '/buying-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/buyers-guide/',
    destination: '/buying-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/home-buying-tips',
    destination: '/buying-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/home-buying-tips/',
    destination: '/buying-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/home-selling-strategies',
    destination: '/selling-guide-las-vegas',
    permanent: true,
  },
  {
    source: '/home-selling-strategies/',
    destination: '/selling-guide-las-vegas',
    permanent: true,
  },

  // Redirect legacy neighborhood pages
  {
    source: '/neighborhoods/anthem',
    destination: '/neighborhoods/anthem-homes',
    permanent: true,
  },
  {
    source: '/neighborhoods/summerlin',
    destination: '/neighborhoods/summerlin-homes',
    permanent: true,
  },
  {
    source: '/neighborhoods/tournament-hills',
    destination: '/neighborhoods/tournament-hills-homes',
    permanent: true,
  },
  {
    source: '/neighborhoods/the-ridges',
    destination: '/neighborhoods/the-ridges-summerlin',
    permanent: true,
  },
  {
    source: '/neighborhoods/macdonald-highlands',
    destination: '/neighborhoods',
    permanent: true,
  },
  {
    source: '/neighborhoods/tpc-summerlin',
    destination: '/neighborhoods/summerlin-homes',
    permanent: true,
  },
  {
    source: '/neighborhoods/eagle-hills',
    destination: '/neighborhoods',
    permanent: true,
  },
  {
    source: '/neighborhoods/southern-highlands',
    destination: '/neighborhoods/southern-highlands-homes',
    permanent: true,
  },

  // Redirect legacy investment pages
  {
    source: '/investment-opportunities',
    destination: '/investment-properties-las-vegas',
    permanent: true,
  },
  {
    source: '/investment-opportunities/',
    destination: '/investment-properties-las-vegas',
    permanent: true,
  },

  // Redirect legacy offer pages
  {
    source: '/offer',
    destination: '/contact',
    permanent: true,
  },
  {
    source: '/offer/',
    destination: '/contact',
    permanent: true,
  },

  // Redirect legacy attorneys page
  {
    source: '/attorneys',
    destination: '/',
    permanent: true,
  },
  {
    source: '/attorneys/',
    destination: '/',
    permanent: true,
  },

  // Redirect legacy market pages
  {
    source: '/market-reports',
    destination: '/las-vegas-luxury-home-market-report',
    permanent: true,
  },
  {
    source: '/market-reports/',
    destination: '/las-vegas-luxury-home-market-report',
    permanent: true,
  },

  // Redirect legacy neighborhood variations
  {
    source: '/summerlin-homes-for-sale',
    destination: '/neighborhoods/summerlin-homes',
    permanent: true,
  },
  {
    source: '/summerlin-homes-for-sale/',
    destination: '/neighborhoods/summerlin-homes',
    permanent: true,
  },

  // Redirect all non-existent blog posts to homepage
  // These are WordPress slugs that no longer exist
  // Since we can't match all possible slugs, we'll handle this in middleware
  // But add specific ones that are high-traffic
];

module.exports = { redirects };
