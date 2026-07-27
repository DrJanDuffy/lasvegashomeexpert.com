# Google Readiness Checklist

Use this checklist to ensure your Las Vegas Home Expert website is fully prepared for Google Search.

## 📋 Pre-Launch Checklist

### 1. Google Search Console Setup

- [ ] **Create Google Search Console account**
  - Go to: https://search.google.com/search-console
  - Sign in with Google account

- [ ] **Add property: lasvegashomeexpert.com**
  - Choose "URL prefix" method
  - Enter: `https://lasvegashomeexpert.com`

- [ ] **Verify ownership** (choose one method):
  - [ ] **Option A:** HTML tag in `src/app/layout.tsx` (line 81)
  - [ ] **Option B:** Upload HTML file to `/public/`
  - [ ] **Option C:** DNS TXT record
  - [ ] **Option D:** Google Analytics (already installed)

- [ ] **Verification successful**
  - Green checkmark in Search Console
  - No errors

---

### 2. Sitemap Submission

- [ ] **Submit sitemap index**
  - URL: `https://lasvegashomeexpert.com/sitemap-index.xml`
  - Status: Successfully submitted

- [ ] **Submit main sitemap**
  - URL: `https://lasvegashomeexpert.com/sitemap.xml`
  - Status: Successfully submitted

- [ ] **Submit image sitemap**
  - URL: `https://lasvegashomeexpert.com/image-sitemap.xml`
  - Status: Successfully submitted

- [ ] **Verify sitemap processing**
  - Check Search Console > Sitemaps
  - All sitemaps show "Success" status
  - Number of discovered URLs: 47+

---

### 3. Required Images

- [ ] **Create Open Graph image**
  - File: `/public/og-image.jpg`
  - Size: 1200 x 630 pixels
  - Uploaded and accessible
  - Tested with Facebook Debugger

- [ ] **Add profile photo**
  - File: `/public/dr-jan-duffy.jpg`
  - Size: 800 x 800 pixels
  - Professional headshot
  - Uploaded and accessible

- [ ] **Create images directory**
  - Directory: `/public/images/`
  - Created and ready

- [ ] **Add neighborhood images** (7 total):
  - [ ] `/public/images/luxury-home.jpg`
  - [ ] `/public/images/summerlin-homes.jpg`
  - [ ] `/public/images/red-rock-homes.jpg`
  - [ ] `/public/images/ridges-homes.jpg`
  - [ ] `/public/images/tournament-hills.jpg`
  - [ ] `/public/images/southern-highlands.jpg`
  - [ ] `/public/images/henderson-homes.jpg`

- [ ] **Optimize all images**
  - Compressed with TinyPNG or Squoosh
  - File sizes < 500 KB each
  - All accessible via direct URL

---

### 4. Technical SEO Verification

- [ ] **Test robots.txt**
  ```bash
  curl https://lasvegashomeexpert.com/robots.txt
  ```
  - Returns valid content
  - Shows sitemap URLs
  - Allows all crawlers

- [ ] **Test sitemap.xml**
  ```bash
  curl https://lasvegashomeexpert.com/sitemap.xml
  ```
  - Returns valid XML
  - Contains all 47+ pages
  - No errors

- [ ] **Verify HTTPS**
  - Site loads with https://
  - No mixed content warnings
  - Valid SSL certificate

- [ ] **Test canonical URLs**
  - www redirects to non-www
  - Trailing slashes handled correctly
  - No duplicate content

- [ ] **Check mobile responsiveness**
  - Test: https://search.google.com/test/mobile-friendly
  - Result: Mobile-friendly
  - No usability errors

---

### 5. Metadata & Structured Data

- [ ] **Homepage meta tags**
  - View source: https://lasvegashomeexpert.com
  - `<title>` tag present and descriptive
  - `<meta name="description">` present
  - `<meta name="keywords">` present
  - Open Graph tags present (`og:title`, `og:image`, etc.)
  - Twitter Card tags present

- [ ] **Test structured data**
  - Tool: https://search.google.com/test/rich-results
  - Enter: `https://lasvegashomeexpert.com`
  - Results show:
    - [ ] Organization schema
    - [ ] Knowledge Graph data
    - [ ] Breadcrumb schema
    - [ ] FAQ schema
    - [ ] Real estate service schema

- [ ] **Verify Google Analytics**
  - GA4 tracking code present (G-57C81JLMQW)
  - Events being tracked
  - Real-time data showing

---

### 6. Content & On-Page SEO

- [ ] **All pages have unique titles**
  - No duplicate titles
  - Format: "Page Title | Las Vegas Home Expert"

- [ ] **All pages have unique descriptions**
  - 150-160 characters each
  - Include target keywords

- [ ] **H1 tags on all pages**
  - One H1 per page
  - Descriptive and keyword-rich

- [ ] **Internal linking**
  - Homepage links to all main sections
  - Neighborhood pages link to each other
  - No broken links

- [ ] **External links**
  - All external links open in new tab
  - No broken outbound links

---

### 7. Local SEO

- [ ] **Google Business Profile**
  - Created at: https://business.google.com
  - Business name: "Las Vegas Home Expert"
  - Owner: Dr. Jan Duffy
  - Verified

- [ ] **Business information consistent**
  - Name, Address, Phone (NAP)
  - Same across all platforms
  - Matches structured data

- [ ] **Service area defined**
  - Las Vegas
  - Summerlin
  - Henderson
  - Other neighborhoods

- [ ] **Business categories**
  - Real Estate Agent
  - Real Estate Consultant
  - Other relevant categories

---

### 8. Performance & Core Web Vitals

- [ ] **Test with PageSpeed Insights**
  - URL: https://pagespeed.web.dev/
  - Test: `https://lasvegashomeexpert.com`
  - Scores:
    - [ ] Performance: > 90
    - [ ] Accessibility: > 90
    - [ ] Best Practices: > 90
    - [ ] SEO: > 90

- [ ] **Core Web Vitals**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

- [ ] **Image optimization**
  - All images compressed
  - Using next/image for optimization
  - Lazy loading enabled

---

### 9. Security & Privacy

- [ ] **SSL certificate valid**
  - HTTPS enabled
  - No browser warnings
  - Certificate not expired

- [ ] **Privacy policy page**
  - URL: /privacy-policy
  - Up to date
  - Accessible

- [ ] **Terms of service**
  - URL: /terms-of-service
  - Up to date
  - Accessible

- [ ] **Cookie consent** (if applicable)
  - Notice displayed
  - User can opt out
  - Compliant with regulations

---

### 10. Testing & Monitoring

- [ ] **Index top 10 priority pages**
  - Use URL Inspection tool
  - Request indexing for:
    - [ ] Homepage
    - [ ] About page
    - [ ] Contact page
    - [ ] Luxury homes page
    - [ ] Summerlin neighborhood
    - [ ] Red Rock neighborhood
    - [ ] Henderson neighborhood
    - [ ] Buying guide
    - [ ] Selling guide
    - [ ] Market reports

- [ ] **Set up weekly monitoring**
  - Google Search Console alerts enabled
  - Check coverage report weekly
  - Monitor performance trends

- [ ] **Social media sharing tests**
  - Share homepage on Facebook
  - Share on LinkedIn
  - Share on Twitter/X
  - Verify og-image appears correctly

---

## 📊 Post-Launch Monitoring (First 30 Days)

### Week 1
- [ ] Day 1: Verify all sitemaps submitted
- [ ] Day 2: Check first pages indexed
- [ ] Day 3: Request indexing for top 5 pages
- [ ] Day 7: Review coverage report (expect 10-20% indexed)

### Week 2
- [ ] Day 14: Check indexing progress (expect 40-60%)
- [ ] Review any crawl errors
- [ ] Fix any issues found

### Week 3
- [ ] Day 21: Verify 80%+ pages indexed
- [ ] Check search appearance
- [ ] Review performance data (impressions)

### Week 4
- [ ] Day 30: Full site indexed (target: 47/47 pages)
- [ ] Review first month performance
- [ ] Identify top-performing pages
- [ ] Plan content improvements

---

## 🎯 Success Metrics

### Immediate Goals (Month 1)
- [ ] All 47+ pages indexed
- [ ] No critical errors in Search Console
- [ ] 100+ impressions per day
- [ ] 5+ clicks per day
- [ ] Average position < 50

### Short-term Goals (Months 2-3)
- [ ] 500+ impressions per day
- [ ] 25+ clicks per day
- [ ] Average position < 30
- [ ] 5+ keywords ranking in top 20

### Long-term Goals (Months 4-6)
- [ ] 1,000+ impressions per day
- [ ] 50+ clicks per day
- [ ] Average position < 20
- [ ] 10+ keywords in top 10
- [ ] Featured snippets appearing

---

## 🚨 Common Issues & Solutions

### Issue: Sitemap not processing
**Solution:** Wait 24 hours, then resubmit. Check XML validity.

### Issue: Pages not indexed
**Solution:** Use URL Inspection tool, request indexing manually.

### Issue: Duplicate content
**Solution:** Already handled via canonical tags. Check in Search Console.

### Issue: Mobile usability errors
**Solution:** Test page at https://search.google.com/test/mobile-friendly

### Issue: Structured data errors
**Solution:** Test at https://search.google.com/test/rich-results

---

## 📚 Documentation Reference

- [GOOGLE_SETUP_GUIDE.md](./GOOGLE_SETUP_GUIDE.md) - Detailed setup instructions
- [IMAGE_REQUIREMENTS.md](./IMAGE_REQUIREMENTS.md) - Image specifications
- [SITEMAP_DEBUGGING.md](./SITEMAP_DEBUGGING.md) - Sitemap troubleshooting
- [GOOGLE_SEARCH_CONSOLE_FIXES.md](./GOOGLE_SEARCH_CONSOLE_FIXES.md) - Common fixes

---

## ✅ Final Pre-Launch Checklist

Before announcing your site to Google:

- [ ] All items in sections 1-5 completed
- [ ] No critical errors in Search Console
- [ ] All images uploaded and optimized
- [ ] Sitemaps successfully submitted
- [ ] Homepage loads correctly (test in incognito)
- [ ] Mobile version works perfectly
- [ ] Contact forms work (test submission)
- [ ] Phone numbers are clickable on mobile
- [ ] All external tools load (RealScout, Homebot, etc.)

---

**Once all items are checked, your site is ready for Google!**

**Last Updated:** 2025-11-06
