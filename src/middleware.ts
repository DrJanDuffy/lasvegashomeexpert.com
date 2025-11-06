import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const hostname = request.headers.get('host') || '';

  // CRITICAL: www to non-www canonicalization (must be first)
  // Vercel handles HTTPS redirects automatically, so we only need to handle www
  if (hostname && hostname.startsWith('www.')) {
    const cleanHostname = hostname.replace(/^www\./, '');
    // Construct redirect URL properly using the request URL to avoid loops
    const redirectUrl = new URL(request.url);
    redirectUrl.hostname = cleanHostname;
    redirectUrl.protocol = 'https:';
    redirectUrl.port = ''; // Clear port to use default HTTPS port
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // CRITICAL: Immediately redirect legacy URLs that may still be crawled
  // These are likely from external links or search engine cache
  
  // Redirect feed URLs (can appear at any path level: /feed/, /path/feed/, etc.)
  if (pathname.includes('/feed') || pathname.endsWith('/feed') || pathname.endsWith('/feed/')) {
    url.pathname = '/';
    url.search = '';
    return NextResponse.redirect(url, { status: 301 });
  }

  // Redirect RSS URLs
  if (pathname.includes('/rss') || pathname.endsWith('/rss') || pathname.endsWith('/rss/')) {
    url.pathname = '/';
    url.search = '';
    return NextResponse.redirect(url, { status: 301 });
  }

  const legacyUrlPatterns = [
    /^\/wp-admin/,
    /^\/wp-login\.php/,
    /^\/wp-includes/,
    /^\/wp-content/,
    /^\/wp-json/,
    /^\/xmlrpc\.php/,
    // Legacy WordPress admin patterns that Google is still finding
    /^\/wp-admin\/post\.php\?post=\d+&action=/,
    /^\/wp-admin\/admin-ajax\.php/,
    /^\/wp-admin\/admin-post\.php/,
  ];

  if (legacyUrlPatterns.some((pattern) => pattern.test(pathname))) {
    url.pathname = '/';
    return NextResponse.redirect(url, { status: 301 });
  }

  // Redirect orphaned blog posts FIRST (before other redirects)
  // These are WordPress slugs that no longer exist but Google is still crawling
  // Only match if it's a single path segment (no forward slashes) and looks like a blog post slug
  // Handle both with and without trailing slashes
  const pathnameWithoutTrailingSlash = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const blogPostSlugPattern = /^\/[a-z0-9]+(?:-[a-z0-9]+)+$/;
  if (blogPostSlugPattern.test(pathnameWithoutTrailingSlash)) {
    // Check if it's NOT a known valid route
    const knownRoutes = [
      '/contact',
      '/about-dr-jan-duffy',
      '/luxury-homes-for-sale-las-vegas',
      '/luxury-realtor-las-vegas',
      '/luxury-homes-summerlin',
      '/first-time-home-buyer-las-vegas',
      '/investment-properties-las-vegas',
      '/buying-guide-las-vegas',
      '/selling-guide-las-vegas',
      '/las-vegas-luxury-home-market-report',
      '/best-realtor-las-vegas-reviews',
      '/modern-homes-las-vegas-expert',
      '/relocation-specialist-las-vegas',
      '/divorce-real-estate-las-vegas',
      '/55-plus-communities-las-vegas',
      '/real-estate-agent-near-red-rock-casino',
      '/privacy-policy',
      '/terms-of-service',
      '/sitemap',
      '/locations',
    ];
    
    // If it's not a known route, redirect to homepage (it's an orphaned blog post)
    // Check both with and without trailing slash
    if (!knownRoutes.includes(pathnameWithoutTrailingSlash) && 
        !knownRoutes.includes(pathname) &&
        !pathnameWithoutTrailingSlash.startsWith('/neighborhoods/') && 
        !pathnameWithoutTrailingSlash.startsWith('/services/') &&
        !pathname.startsWith('/neighborhoods/') && 
        !pathname.startsWith('/services/')) {
      url.pathname = '/';
      url.search = '';
      return NextResponse.redirect(url, { status: 301 });
    }
  }

  // Handle query parameters that shouldn't be indexed (WordPress cron, UTM, etc.)
  const unwantedParams = ['doing_wp_cron', 'utm_source', 'utm_medium', 'utm_campaign'];
  let hasUnwantedParams = false;
  const cleanedUrl = url.clone();
  
  unwantedParams.forEach((param) => {
    if (cleanedUrl.searchParams.has(param)) {
      cleanedUrl.searchParams.delete(param);
      hasUnwantedParams = true;
    }
  });

  // If we removed query params, redirect to clean URL
  if (hasUnwantedParams) {
    return NextResponse.redirect(cleanedUrl, { status: 301 });
  }

  // Redirect duplicate content patterns (common in site migrations)
  if (pathname.match(/-[2-9]$/)) {
    url.pathname = pathname.replace(/-[2-9]$/, '');
    return NextResponse.redirect(url, { status: 301 });
  }

  // Redirect legacy service URLs to new structure
  if (pathname.startsWith('/services/luxuryhomes')) {
    url.pathname = '/luxury-homes-for-sale-las-vegas';
    return NextResponse.redirect(url, { status: 301 });
  }

  if (pathname.startsWith('/services/dr-jan-duffy')) {
    url.pathname = '/about-dr-jan-duffy';
    return NextResponse.redirect(url, { status: 301 });
  }

  if (pathname.startsWith('/services/firsttimehomebuyer')) {
    url.pathname = '/first-time-home-buyer-las-vegas';
    return NextResponse.redirect(url, { status: 301 });
  }

  if (pathname.startsWith('/services/real-estate-investment')) {
    url.pathname = '/investment-properties-las-vegas';
    return NextResponse.redirect(url, { status: 301 });
  }

  // Redirect legacy community URLs to neighborhood structure
  if (pathname.startsWith('/communities/')) {
    url.pathname = pathname.replace('/communities/', '/neighborhoods/');
    return NextResponse.redirect(url, { status: 301 });
  }

  // Redirect legacy blog URLs to main content
  if (pathname === '/blog' || pathname.startsWith('/blog/') || pathname.startsWith('/insights/')) {
    url.pathname = '/';
    url.search = ''; // Remove query parameters
    return NextResponse.redirect(url, { status: 301 });
  }

  // Handle trailing slashes - redirect to non-trailing slash version (except for root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  // Add noindex header for low-value legacy pages
  // Note: /page/ is redirected, not noindexed
  const noindexPatterns = [
    /^\/author\//,
    /^\/tag\//,
    /^\/attachment\//,
    /^\d{4}(\/\d{2})?(\/\d{2})?$/,
  ];

  if (noindexPatterns.some((pattern) => pattern.test(pathname))) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, follow');
    return response;
  }

  // Add security headers for all responses
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
