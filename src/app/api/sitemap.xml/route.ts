import { NextResponse } from 'next/server';

// Enhanced page definitions with better SEO structure for real estate
const legitimatePages = [
  // Homepage - highest priority
  { slug: '', priority: '1.0', changefreq: 'daily', lastmod: '2025-01-21' },

  // Core service pages - high priority (local SEO gold)
  {
    slug: 'luxury-homes-for-sale-las-vegas',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  { slug: 'neighborhoods', priority: '0.9', changefreq: 'weekly', lastmod: '2025-01-21' },
  { slug: 'services', priority: '0.9', changefreq: 'weekly', lastmod: '2025-01-21' },

  // About and contact - medium-high priority
  { slug: 'about-dr-jan-duffy', priority: '0.8', changefreq: 'monthly', lastmod: '2025-01-21' },
  { slug: 'contact', priority: '0.8', changefreq: 'monthly', lastmod: '2025-01-21' },

  // Guide pages - medium priority
  { slug: 'buying-guide-las-vegas', priority: '0.7', changefreq: 'monthly', lastmod: '2025-01-21' },
  {
    slug: 'selling-guide-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'investment-properties-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'first-time-home-buyer-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },

  // Neighborhood pages - HIGH priority for local SEO
  {
    slug: 'neighborhoods/summerlin-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/red-rock-country-club-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/the-ridges-summerlin-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/tournament-hills-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/southern-highlands-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/henderson-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/macdonald-highlands-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/spring-valley-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'neighborhoods/north-las-vegas-homes',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2025-01-21',
  },

  // Service detail pages
  {
    slug: 'services/luxury-home-buyer-agent',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'services/luxury-home-selling-agent',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'services/home-staging-services-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },

  // Specialized service pages
  {
    slug: 'relocation-specialist-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'modern-homes-las-vegas-expert',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
  {
    slug: '55-plus-communities-las-vegas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },

  // Market reports and reviews
  {
    slug: 'las-vegas-luxury-home-market-report',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
  {
    slug: 'best-realtor-las-vegas-reviews',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: '2025-01-21',
  },
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${legitimatePages
    .map(({ slug, priority, changefreq, lastmod }) => {
      const url =
        slug === '' ? 'https://lasvegashomeexpert.com' : `https://lasvegashomeexpert.com/${slug}`;
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
