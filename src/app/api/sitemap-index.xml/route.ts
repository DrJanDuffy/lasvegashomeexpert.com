import { NextResponse } from 'next/server';

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Sitemap index that references all sitemaps
// This is the master sitemap that Google Search Console should submit
// Using non-www URLs as canonical (www redirects to non-www via middleware)
function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://lasvegashomeexpert.com/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://lasvegashomeexpert.com/image-sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

export async function GET() {
  try {
    const sitemapIndex = generateSitemapIndex();

    return new NextResponse(sitemapIndex, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return new NextResponse(
      '<?xml version="1.0" encoding="UTF-8"?><error>Error generating sitemap</error>',
      {
        status: 500,
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
        },
      }
    );
  }
}

