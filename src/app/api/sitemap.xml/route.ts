import { NextResponse } from 'next/server';

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Enhanced page definitions with better SEO structure for real estate
// Includes all actual pages from the app directory
const legitimatePages = [
  // Homepage - highest priority
  { slug: '', priority: '1.0', changefreq: 'daily', lastmod: today },

  // Core service pages - high priority (local SEO gold)
  {
    slug: 'luxury-homes-for-sale-las-vegas',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'luxury-realtor-las-vegas',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'best-realtor-las-vegas-reviews',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'modern-homes-las-vegas-expert',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },

  // About and contact - medium-high priority
  { slug: 'about-dr-jan-duffy', priority: '0.8', changefreq: 'monthly', lastmod: today },
  { slug: 'contact', priority: '0.8', changefreq: 'monthly', lastmod: today },

  // Guide pages - medium priority
  { slug: 'buying-guide-las-vegas', priority: '0.7', changefreq: 'monthly', lastmod: today },
  {
    slug: 'selling-guide-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: 'investment-properties-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: 'first-time-home-buyer-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },

  // Specialized service pages
  {
    slug: 'relocation-specialist-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: '55-plus-communities-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: 'divorce-real-estate-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: 'real-estate-agent-near-red-rock-casino',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: 'luxury-homes-summerlin',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: today,
  },

  // Neighborhood pages - HIGH priority for local SEO
  {
    slug: 'neighborhoods/summerlin-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/red-rock-country-club-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/red-rock-country-club',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/the-ridges-summerlin-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/the-ridges-summerlin',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/tournament-hills-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/tournament-hills',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/southern-highlands-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/southern-highlands',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/henderson-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/green-valley-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/anthem-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/mountains-edge',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/sun-city-communities',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/del-webb-communities',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },
  {
    slug: 'neighborhoods/downtown-las-vegas',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today,
  },

  // Service detail pages
  {
    slug: 'services/luxury-home-buyer-agent',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: 'services/luxury-home-selling-agent',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },
  {
    slug: 'services/home-staging-services-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  },

  // Market reports and reviews
  {
    slug: 'las-vegas-luxury-home-market-report',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: today,
  },

  // Legal and utility pages
  {
    slug: 'privacy-policy',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: today,
  },
  {
    slug: 'terms-of-service',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: today,
  },
  {
    slug: 'sitemap',
    priority: '0.3',
    changefreq: 'monthly',
    lastmod: today,
  },
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${legitimatePages
    .map(({ slug, priority, changefreq, lastmod }) => {
      const url =
        slug === '' ? 'https://www.lasvegashomeexpert.com' : `https://www.lasvegashomeexpert.com/${slug}`;
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n')}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
