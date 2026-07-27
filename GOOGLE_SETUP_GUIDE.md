# Google Search Console Setup Guide

This guide will help you prepare your Las Vegas Home Expert website for Google Search and set up Google Search Console.

## Table of Contents
1. [Google Search Console Setup](#google-search-console-setup)
2. [Submit Sitemaps](#submit-sitemaps)
3. [Required Images for SEO](#required-images-for-seo)
4. [Verify SEO Configuration](#verify-seo-configuration)
5. [Monitor Performance](#monitor-performance)
6. [Troubleshooting](#troubleshooting)

---

## 1. Google Search Console Setup

### Step 1: Add Your Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Choose **"URL prefix"** method
4. Enter: `https://lasvegashomeexpert.com`

### Step 2: Verify Ownership

You have **two verification options**:

#### Option A: HTML Tag Verification (Recommended - Easier)

1. In Google Search Console, select **"HTML tag"** verification method
2. Copy the verification code from the meta tag (it looks like this):
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
3. Edit `src/app/layout.tsx` (line 81)
4. Replace `'your-google-verification-code-here'` with your actual code
5. Deploy to Vercel
6. Return to Google Search Console and click **"Verify"**

#### Option B: HTML File Verification (Alternative)

1. In Google Search Console, select **"HTML file"** verification method
2. Download the verification file (e.g., `google1234567890abcdef.html`)
3. Place the file in `/public/` directory
4. The file will be accessible at: `https://lasvegashomeexpert.com/google1234567890abcdef.html`
5. Deploy to Vercel
6. Return to Google Search Console and click **"Verify"**

**Example HTML file content:**
```html
google-site-verification: google1234567890abcdef.html
```

---

## 2. Submit Sitemaps

Once verified, submit your sitemaps to Google:

### Sitemap URLs to Submit:

1. **Primary Sitemap Index**
   - URL: `https://lasvegashomeexpert.com/sitemap-index.xml`
   - Contains references to all other sitemaps

2. **Main Sitemap**
   - URL: `https://lasvegashomeexpert.com/sitemap.xml`
   - Contains all 47+ pages of your site

3. **Image Sitemap**
   - URL: `https://lasvegashomeexpert.com/image-sitemap.xml`
   - Helps Google discover and index your property images

### How to Submit:

1. In Google Search Console, go to **"Sitemaps"** (left sidebar)
2. Enter each sitemap URL one at a time
3. Click **"Submit"**
4. Google will process them (can take a few hours to a few days)

**Recommended:** Submit the sitemap index first, as it references the others.

---

## 3. Required Images for SEO

Your site references several images that need to be created for optimal SEO:

### Priority 1: Open Graph Image (REQUIRED)

**File:** `/public/og-image.jpg`

**Specifications:**
- Size: **1200 x 630 pixels** (required by Facebook/LinkedIn/Twitter)
- Format: JPG or PNG
- Max file size: 8 MB (recommended: < 1 MB)
- Content: Should include your brand name and a compelling image

**What it does:**
- Shows when your site is shared on social media
- Appears in Google search results
- Used by LinkedIn, Facebook, Twitter, Slack, etc.

**Design suggestions:**
- Include "Las Vegas Home Expert" text
- Add "Dr. Jan Duffy" branding
- Use a high-quality Las Vegas skyline or luxury home image
- Include contact info or tagline

### Priority 2: Profile Image

**File:** `/public/dr-jan-duffy.jpg`

**Specifications:**
- Size: 800 x 800 pixels (square)
- Format: JPG
- Professional headshot or branded photo

**Used on:**
- Homepage
- About page
- Structured data (helps Google show author info)

### Priority 3: Neighborhood & Property Images

Your image sitemap references these images:

- `/public/images/luxury-home.jpg`
- `/public/images/summerlin-homes.jpg`
- `/public/images/red-rock-homes.jpg`
- `/public/images/ridges-homes.jpg`
- `/public/images/tournament-hills.jpg`
- `/public/images/southern-highlands.jpg`
- `/public/images/henderson-homes.jpg`

**Specifications:**
- Size: 1200 x 800 pixels (landscape)
- Format: JPG
- Alt text already configured in image sitemap

**How to create:**
1. Create `/public/images/` directory
2. Add high-quality photos of each neighborhood
3. Optimize images for web (compress to 200-500 KB each)

**Tools for image optimization:**
- [TinyPNG](https://tinypng.com/) - Free compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- Photoshop: Save for Web (JPEG, quality 80%)

---

## 4. Verify SEO Configuration

### Check Your Current Setup

Your site already has excellent SEO infrastructure. Verify everything is working:

#### A. Test Robots.txt
```bash
curl https://lasvegashomeexpert.com/robots.txt
```

**Expected output:**
- Should show: `User-agent: *` and `Allow: /`
- Should list your sitemaps
- Should allow AI crawlers (GPTBot, ChatGPT, Claude-Web, etc.)

#### B. Test Sitemap
```bash
curl https://lasvegashomeexpert.com/sitemap.xml
```

**Expected output:**
- Valid XML with all 47+ pages
- Each URL should have `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`

#### C. Test Meta Tags
1. Visit: https://lasvegashomeexpert.com
2. View page source (Ctrl+U or Cmd+Option+U)
3. Search for:
   - `<meta name="description"`
   - `<meta property="og:title"`
   - `<script type="application/ld+json">` (structured data)

#### D. Test Structured Data

Use Google's Rich Results Test:
1. Go to: https://search.google.com/test/rich-results
2. Enter: `https://lasvegashomeexpert.com`
3. Click **"Test URL"**

**What to expect:**
- Organization schema
- Knowledge Graph data
- Breadcrumb navigation
- FAQ schema
- Real estate service schema

---

## 5. Monitor Performance

### Key Metrics to Track in Google Search Console

1. **Coverage Report**
   - Path: `Index > Coverage`
   - Goal: All 47+ pages indexed with no errors

2. **Performance Report**
   - Path: `Performance > Search Results`
   - Track: Clicks, impressions, CTR, average position

3. **Sitemaps Report**
   - Path: `Sitemaps`
   - Verify all sitemaps are successfully processed

4. **Mobile Usability**
   - Path: `Experience > Mobile Usability`
   - Goal: 0 errors (site is already mobile-responsive)

5. **Core Web Vitals**
   - Path: `Experience > Core Web Vitals`
   - Monitor: LCP, FID, CLS scores

### Initial Indexing Timeline

- **Verification:** Immediate
- **Sitemap processing:** 1-7 days
- **First indexing:** 3-14 days
- **Full site indexed:** 2-6 weeks

**Speed it up:**
1. Submit URLs individually via "URL Inspection" tool
2. Request indexing for priority pages (homepage, top services)
3. Share links on social media to get crawled faster

---

## 6. Troubleshooting

### Issue: "Couldn't fetch robots.txt"

**Solution:**
- Wait 24 hours (caching)
- Clear Vercel cache
- Test manually: `curl https://lasvegashomeexpert.com/robots.txt`

### Issue: "Sitemap couldn't be read"

**Solution:**
- Verify XML is valid: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Check sitemap URL directly in browser
- Ensure sitemap has `<?xml version="1.0" encoding="UTF-8"?>` header

### Issue: "Page not indexed"

**Possible causes:**
1. Too new (wait 1-2 weeks)
2. Canonicalization issues (check if www redirects properly)
3. No internal links pointing to the page
4. Content quality issues

**Solution:**
- Use "URL Inspection" tool
- Request indexing
- Add internal links from high-priority pages

### Issue: "Duplicate content"

**Solution:**
- Already handled via canonical tags
- Middleware redirects www → non-www
- Each page has unique title/description

### Issue: "Mobile usability errors"

**Solution:**
- Site is already responsive (Next.js + Tailwind)
- Test on: https://search.google.com/test/mobile-friendly
- Fix any font size or tap target issues

---

## Current SEO Strengths

Your site already has:

✅ **47+ pages with unique content**
✅ **Dynamic sitemap with priorities and change frequencies**
✅ **Image sitemap for Google Image Search**
✅ **Comprehensive structured data** (9 schema types)
✅ **Google Analytics 4** (tracking ID: G-57C81JLMQW)
✅ **Mobile-responsive design**
✅ **Fast loading** (Next.js optimizations)
✅ **Canonical URLs** (www → non-www redirects)
✅ **robots.txt with AI crawler allowance**
✅ **Security headers** (X-Frame-Options, CSP, etc.)
✅ **Local SEO optimization** (neighborhood pages)

---

## Next Steps

### Immediate Actions (This Week)

1. ✅ ~~Update metadata in layout.tsx~~ (COMPLETED)
2. [ ] Create og-image.jpg (1200 x 630 px)
3. [ ] Add dr-jan-duffy.jpg profile photo
4. [ ] Verify site in Google Search Console
5. [ ] Submit sitemaps

### Short-term (This Month)

6. [ ] Add neighborhood images to /public/images/
7. [ ] Request indexing for top 10 pages
8. [ ] Set up weekly performance monitoring
9. [ ] Create Google Business Profile (local SEO)
10. [ ] Add customer reviews to Google Business

### Long-term (Ongoing)

11. [ ] Publish blog posts for content marketing
12. [ ] Build backlinks from local directories
13. [ ] Monitor Core Web Vitals
14. [ ] Update market reports monthly
15. [ ] Track conversions in Google Analytics

---

## Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Support

If you encounter issues:

1. Check [SITEMAP_DEBUGGING.md](./SITEMAP_DEBUGGING.md)
2. Review [GOOGLE_SEARCH_CONSOLE_FIXES.md](./GOOGLE_SEARCH_CONSOLE_FIXES.md)
3. Test configurations using tools above
4. Contact your development team

**Site Last Updated:** 2025-11-06
