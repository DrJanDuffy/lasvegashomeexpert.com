import { NextResponse } from 'next/server';

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Sitemap index that references all sitemaps
// This is the master sitemap that Google Search Console should submit
function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.lasvegashomeexpert.com/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.lasvegashomeexpert.com/image-sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

export async function GET() {
  const sitemapIndex = generateSitemapIndex();

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

