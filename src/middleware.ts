import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // CRITICAL: Immediately redirect legacy URLs that may still be crawled
  // These are likely from external links or search engine cache
  const legacyUrlPatterns = [
    /^\/wp-admin/,
    /^\/wp-login\.php/,
    /^\/wp-includes/,
    /^\/wp-content/,
    /^\/wp-json/,
    /^\/xmlrpc\.php/,
    /^\/feed/,
    /^\/rss/,
    // Legacy WordPress admin patterns that Google is still finding
    /^\/wp-admin\/post\.php\?post=\d+&action=/,
    /^\/wp-admin\/admin-ajax\.php/,
    /^\/wp-admin\/admin-post\.php/,
  ];

  if (legacyUrlPatterns.some((pattern) => pattern.test(pathname))) {
    url.pathname = '/';
    return NextResponse.redirect(url, { status: 301 });
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
  if (pathname.startsWith('/blog/') || pathname.startsWith('/insights/')) {
    url.pathname = '/';
    return NextResponse.redirect(url, { status: 301 });
  }

  // Add noindex header for low-value legacy pages
  const noindexPatterns = [
    /^\/page\//,
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
