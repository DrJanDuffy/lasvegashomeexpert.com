import { NextResponse } from 'next/server';

// Route segment config - ensure this route is always dynamic and accessible
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const robotsTxt = `# Allow all search engines and AI crawlers (including Grok, GPTBot, ChatGPT, etc.)
User-agent: *
Allow: /

# Explicitly allow AI crawlers for Grokipedia and knowledge graph indexing
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

# NOTE: Legacy WordPress URLs are now handled via 301 redirects (better for SEO)
# Middleware redirects all wp-admin, wp-content, feeds, etc. to homepage
# This allows Google to follow redirects and preserves link equity
# Redirects happen at server level before any content is served, so it's secure
# Only truly sensitive paths and file extensions are blocked below

# Block only truly sensitive paths that should never be accessed
Disallow: /attachment/
Disallow: /search
Disallow: /404

# Explicitly allow valid sitemaps (must come before Disallow rules)
Allow: /sitemap-index.xml
Allow: /sitemap.xml
Allow: /image-sitemap.xml

# Block legacy WordPress sitemaps (redirects don't make sense for these)
Disallow: /post-sitemap.xml
Disallow: /page-sitemap.xml
Disallow: /category-sitemap.xml
Disallow: /author-sitemap.xml
Disallow: /tag-sitemap.xml
Disallow: /date-sitemap.xml
Disallow: /series-sitemap.xml
Disallow: /wprss_feed_template-sitemap.xml
Disallow: /*.xsl

# Block file extensions (images, PDFs, etc.) - these shouldn't be indexed
Disallow: /*.webp
Disallow: /*.png
Disallow: /*.jpg
Disallow: /*.jpeg
Disallow: /*.gif
Disallow: /*.pdf

# Allow legitimate Next.js pages
Allow: /luxury-homes-for-sale-las-vegas
Allow: /neighborhoods/
Allow: /services/
Allow: /about-dr-jan-duffy
Allow: /contact
Allow: /buying-guide-las-vegas
Allow: /selling-guide-las-vegas
Allow: /investment-properties-las-vegas
Allow: /first-time-home-buyer-las-vegas
Allow: /relocation-specialist-las-vegas
Allow: /modern-homes-las-vegas-expert
Allow: /55-plus-communities-las-vegas
Allow: /las-vegas-luxury-home-market-report
Allow: /best-realtor-las-vegas-reviews

# Sitemaps (using non-www as canonical - www redirects to non-www)
Sitemap: https://grokipedia.com/sitemap-index.xml
Sitemap: https://grokipedia.com/sitemap.xml
Sitemap: https://grokipedia.com/image-sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
