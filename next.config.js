/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old WordPress home variations
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
        source: '/home-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home-4',
        destination: '/',
        permanent: true,
      },

      // Old about pages
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
        source: '/about-us',
        destination: '/about-dr-jan-duffy',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about-dr-jan-duffy',
        permanent: true,
      },

      // Old community/neighborhood pages
      {
        source: '/communities/red-rock-country-club',
        destination: '/neighborhoods/red-rock-country-club-homes',
        permanent: true,
      },
      {
        source: '/communities/the-ridges',
        destination: '/neighborhoods/the-ridges-summerlin-homes',
        permanent: true,
      },
      {
        source: '/communities/tournament-hills',
        destination: '/neighborhoods/tournament-hills-homes',
        permanent: true,
      },
      {
        source: '/communities/southern-highlands',
        destination: '/neighborhoods/southern-highlands-homes',
        permanent: true,
      },
      {
        source: '/communities/summerlin',
        destination: '/neighborhoods/summerlin-homes',
        permanent: true,
      },
      {
        source: '/communities/henderson',
        destination: '/neighborhoods/henderson-homes',
        permanent: true,
      },
      {
        source: '/communities/macdonald-highlands',
        destination: '/neighborhoods/henderson-homes',
        permanent: true,
      },
      {
        source: '/communities/tpc-summerlin',
        destination: '/neighborhoods/summerlin-homes',
        permanent: true,
      },
      {
        source: '/communities/eagle-hills',
        destination: '/neighborhoods/summerlin-homes',
        permanent: true,
      },

      // Old neighborhood variations
      {
        source: '/red-rock-country-club',
        destination: '/neighborhoods/red-rock-country-club-homes',
        permanent: true,
      },
      {
        source: '/the-ridges',
        destination: '/neighborhoods/the-ridges-summerlin-homes',
        permanent: true,
      },
      {
        source: '/southern-highlands',
        destination: '/neighborhoods/southern-highlands-homes',
        permanent: true,
      },
      {
        source: '/summerlin-homes-for-sale',
        destination: '/neighborhoods/summerlin-homes',
        permanent: true,
      },

      // Old service pages
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
        source: '/services/first-time-home-buyer',
        destination: '/first-time-home-buyer-las-vegas',
        permanent: true,
      },
      {
        source: '/services/mortgage-pre-approval',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/services/real-estate-investment',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/services/nevada-real-estate',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/property-values',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/services/home-selling-tips',
        destination: '/selling-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/services/las-vegas-realtor',
        destination: '/luxury-realtor-las-vegas',
        permanent: true,
      },
      {
        source: '/services/real-estate-financing',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/services/real-estate-listings',
        destination: '/luxury-homes-for-sale-las-vegas',
        permanent: true,
      },
      {
        source: '/services/home-equity',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/services/north-las-vegas-homes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/desert-living',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/real-estate-trends',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/services/las-vegas-housing-market',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },

      // Old guide pages
      {
        source: '/buying-guide',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/buying-guide/',
        destination: '/buying-guide-las-vegas',
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
        source: '/buyers-guide',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/selling-guide',
        destination: '/selling-guide-las-vegas',
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

      // Old contact pages
      {
        source: '/contact-2',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/get-a-free-consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },

      // Old market/investment pages
      {
        source: '/market-trends-analysis',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/market-trends-analysis/',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/market-updates',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/investment-opportunities',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/north-las-vegas-real-estate',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sky-canyon-homes',
        destination: '/neighborhoods/summerlin-homes',
        permanent: true,
      },
      {
        source: '/aliante-real-estate',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sell-your-house-las-vegas',
        destination: '/selling-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/home-valuation',
        destination: '/',
        permanent: true,
      },

      // Old team/author pages
      {
        source: '/team',
        destination: '/about-dr-jan-duffy',
        permanent: true,
      },
      {
        source: '/author',
        destination: '/about-dr-jan-duffy',
        permanent: true,
      },
      {
        source: '/author/',
        destination: '/about-dr-jan-duffy',
        permanent: true,
      },
      {
        source: '/author/drduffybhhsnv-com/page/1',
        destination: '/about-dr-jan-duffy',
        permanent: true,
      },

      // Old blog/series pages (redirect to main content)
      {
        source: '/series/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog-post-title-:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/whats-motivating-homeowners-to-move-right-now',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/take-advantage-of-different-weather-forecasts',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/the-surprising-amount-of-home-equity-youve-gained-over-the-years-2',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/qa-how-do-presidential-elections-impact-the-housing-market-simplifying-the-market-2',
        destination: '/las-vegas-luxury-home-market-report',
        permanent: true,
      },
      {
        source: '/what-homebuyers-need-to-know-about-credit-scores/:path*',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },

      // Old category pages
      {
        source: '/las-vegas-homes/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/las-vegas-neighborhood-insights/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/real-estate-tips',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/travel/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/technology',
        destination: '/',
        permanent: true,
      },
      {
        source: '/food-and-drinks',
        destination: '/',
        permanent: true,
      },
      {
        source: '/entertainment',
        destination: '/',
        permanent: true,
      },
      {
        source: '/attorneys',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fashion/:path*',
        destination: '/',
        permanent: true,
      },

      // Old layout/placeholder pages
      {
        source: '/layout-f',
        destination: '/',
        permanent: true,
      },
      {
        source: '/layout-a/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-page-example',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shortcodes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/info',
        destination: '/',
        permanent: true,
      },
      {
        source: '/offer',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/api/placeholder/:path*',
        destination: '/',
        permanent: true,
      },

      // Old numbered pages (likely test content)
      {
        source: '/hm:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/h:path*',
        destination: '/',
        permanent: true,
      },

      // CRITICAL: Block WordPress RSS feeds and admin pages
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
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
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
        source: '/comments/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/',
        permanent: true,
      },
      {
        source: '/search/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/insights/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/expert-advice:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/series-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/wprss_feed_template-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },

      // CRITICAL: Redirect old blog posts and category pages
      {
        source: '/author/drduffybhhsnv-com',
        destination: '/about-dr-jan-duffy',
        permanent: true,
      },
      {
        source: '/author/drduffybhhsnv-com/',
        destination: '/about-dr-jan-duffy',
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
        source: '/page/:path*',
        destination: '/',
        permanent: true,
      },

      // Redirect old blog posts to relevant new content
      {
        source: '/is-wall-street-really-buying-all-the-homes',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/the-latest-mortgage-rate-forecasts',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/the-u-s-foreclosure-map-you-need-to-see',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/why-the-average-homeowner-has-319k-in-equity-3',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/why-the-average-homeowner-has-319k-in-equity-4',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/home-projects-that-add-the-most-value',
        destination: '/selling-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/discover-your-dream-home-at-silverstone-ranch',
        destination: '/neighborhoods/summerlin-homes',
        permanent: true,
      },
      {
        source: '/the-surprising-amount-of-home-equity-youve-gained-over-the-years',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/real-estate-is-voted-the-best-long-term-investment-12-years-in-a-row',
        destination: '/investment-properties-las-vegas',
        permanent: true,
      },
      {
        source: '/lennar-new-homes-las-vegas-new-construction-dr-jan-duffy',
        destination: '/modern-homes-las-vegas-expert',
        permanent: true,
      },
      {
        source: '/when-will-mortgage-rates-come-down',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/are-you-saving-up-to-buy-a-home-your-tax-refund-can-help',
        destination: '/first-time-home-buyer-las-vegas',
        permanent: true,
      },
      {
        source: '/pre-approval-isnt-commitment-its-clarity',
        destination: '/buying-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/selling-and-buying-at-the-same-time-heres-what-you-need-to-know',
        destination: '/selling-guide-las-vegas',
        permanent: true,
      },
      {
        source: '/the-rooms-that-matter-most-when-you-sell',
        destination: '/selling-guide-las-vegas',
        permanent: true,
      },

      // Block numbered pages and random IDs
      {
        source: '/3391-2',
        destination: '/',
        permanent: true,
      },

      // CRITICAL: Block malformed WordPress RSS URLs with template variables
      {
        source: '/feed/%post_link%',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/%site_link%',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/admin-ajax.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/insights/:path*/feed/%post_link%',
        destination: '/',
        permanent: true,
      },
      {
        source: '/insights/:path*/feed/%site_link%',
        destination: '/',
        permanent: true,
      },
      {
        source: '/las-vegas-homes/:path*/feed/%post_link%',
        destination: '/',
        permanent: true,
      },
      {
        source: '/las-vegas-homes/:path*/feed/%site_link%',
        destination: '/',
        permanent: true,
      },

      // Catch-all for any remaining malformed URLs
      {
        source: '/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Additional Next.js configuration
  // App router is now default in Next.js 13+
};

module.exports = nextConfig;
