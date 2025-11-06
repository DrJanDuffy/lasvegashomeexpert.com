# Pages Discovered But Not Indexed - Fix Guide

## Issue
16 legitimate pages are discovered by Google but not being indexed. These pages are in the sitemap but lack proper metadata exports.

## Root Cause
Many pages are client components (`'use client'`) without metadata exports. In Next.js App Router, client components cannot export metadata directly.

## Affected Pages
1. `/55-plus-communities-las-vegas`
2. `/buying-guide-las-vegas`
3. `/contact`
4. `/divorce-real-estate-las-vegas` ✅ (has metadata)
5. `/first-time-home-buyer-las-vegas`
6. `/las-vegas-luxury-home-market-report`
7. `/luxury-homes-summerlin` ✅ (has metadata)
8. `/neighborhoods/green-valley-homes`
9. `/neighborhoods/mountains-edge`
10. `/neighborhoods/red-rock-country-club`
11. `/neighborhoods/red-rock-country-club-homes`
12. `/neighborhoods/southern-highlands-homes`
13. `/neighborhoods/sun-city-communities`
14. `/real-estate-agent-near-red-rock-casino` ✅ (has metadata)
15. `/services/luxury-home-buyer-agent`
16. `/terms-of-service`

## Solution

### Option 1: Add Layout Files (Recommended)
Create a `layout.tsx` file in each route directory that exports metadata:

```typescript
// src/app/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Las Vegas Home Expert',
  description: 'Get in touch with Dr. Jan Duffy for expert real estate services in Las Vegas. Phone, email, and text available 24/7.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Las Vegas Home Expert',
    description: 'Get in touch with Dr. Jan Duffy for expert real estate services.',
    url: 'https://lasvegashomeexpert.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

### Option 2: Request Manual Indexing
1. Go to Google Search Console
2. Use "URL Inspection" tool
3. Enter each URL
4. Click "Request Indexing"

### Option 3: Add Internal Links
Ensure these pages are linked from:
- Homepage
- Navigation menu
- Footer
- Related pages

## Immediate Actions

1. **Request Indexing** in Google Search Console for all 16 pages
2. **Add metadata** to critical pages (contact, buying-guide, first-time-home-buyer)
3. **Verify sitemap** includes all pages (✅ already done)
4. **Check internal linking** - ensure pages are linked from homepage and navigation

## Metadata Template

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '[Page Title] | Las Vegas Home Expert | Dr. Jan Duffy',
  description: '[150-160 character description]',
  keywords: '[relevant keywords]',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '[Page Title] | Las Vegas Home Expert',
    description: '[OG description]',
    url: 'https://lasvegashomeexpert.com/[page-slug]',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/[page-slug]',
  },
};
```

## Expected Timeline
- **Immediate**: Request indexing in Search Console
- **1-2 weeks**: Google re-crawls and indexes pages
- **2-4 weeks**: Pages appear in search results

## Notes
- Pages are in sitemap ✅
- Pages are not blocked in robots.txt ✅
- Pages need proper metadata for better indexing
- Manual indexing request will speed up the process

