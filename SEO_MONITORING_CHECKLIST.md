# SEO Monitoring Checklist - 2026 Best Practices for Real Estate Sites

Based on comprehensive research of [Real Estate SEO 2026](https://www.sierrainteractive.com/insights/blog/real-estate-seo/), [Google Search Console Guide](https://almcorp.com/blog/google-search-console-complete-guide/), and [Sitemap Best Practices](https://nightwatch.io/blog/sitemap-best-practices/).

---

## 🚨 IMMEDIATE: Fix Vercel Firewall Block

**Status**: ❌ **BLOCKING** - Site returns 403 for all requests

**Action Required**: See `VERCEL_FIREWALL_CONFIG.md`

**Priority**: **P0 - Critical** (site is completely inaccessible)

**Steps**:
1. [ ] Access Vercel Dashboard → Firewall settings
2. [ ] Create WAF bypass rule for search crawlers
3. [ ] Change Attack Mode from "Block" to "Managed"
4. [ ] Test: `curl -I https://lasvegashomeexpert.com/` returns 200
5. [ ] Verify: Googlebot can access sitemaps

**Timeline**: Must fix today - every day without indexing hurts SEO

---

## Weekly Monitoring Tasks

### 1. Google Search Console - Sitemaps Report

**Access**: https://search.google.com/search-console → Sitemaps

**Key Metrics to Track**:

| Metric | Target | Red Flag |
|--------|--------|----------|
| **Submitted URLs** | All valid pages (~50 pages) | Decreasing over time |
| **Indexed URLs** | >85% of submitted | <85% indexed |
| **Discovered Pages** | Growing over time | Stagnant or decreasing |
| **Last Read Date** | Within 7 days | More than 2 weeks ago |

**Actions**:
- [ ] Check sitemap status (should be "Success")
- [ ] Compare submitted vs. indexed (gap should be <15%)
- [ ] Note "Last read" date (should be recent)
- [ ] Check for errors or warnings

**If Gap > 15%**: You have a **content quality problem** per [2026 GSC best practices](https://almcorp.com/blog/google-search-console-complete-guide/)

### 2. Vercel Firewall Logs

**Access**: Vercel Dashboard → Project → Firewall → Logs

**What to Check**:
- [ ] Filter: User Agent contains "Googlebot"
- [ ] Verify: Action = "Allowed" or "Bypassed" (NOT "Blocked" or "Challenged")
- [ ] Check: No 403 errors for sitemap routes
- [ ] Monitor: Attack Mode status (should be "Managed")

**Expected Results**:
```
✅ Googlebot → /sitemap-index.xml → Action: Bypassed → 200 OK
✅ Googlebot → /sitemap.xml → Action: Bypassed → 200 OK
✅ Googlebot → / → Action: Allowed → 200 OK
```

**Red Flags**:
```
❌ Googlebot → /sitemap-index.xml → Action: Blocked → 403
❌ * → * → Action: Challenged → 403
```

### 3. Google Search Console - Coverage Report

**Access**: GSC → Coverage (or Index Status)

**Weekly Checks**:
- [ ] Valid pages count (target: ~50 for your site)
- [ ] Errors (target: 0)
- [ ] Excluded pages (check if important pages are excluded)
- [ ] Warnings (investigate and resolve)

**Real Estate Site Priorities** per [industry best practices](https://www.luxurypresence.com/blogs/maximize-your-real-estate-seo/):

| Page Type | Must Be Indexed | Priority |
|-----------|----------------|----------|
| Homepage | ✅ YES | P0 |
| Luxury listings | ✅ YES | P0 |
| Neighborhood pages | ✅ YES | P0 |
| Service pages | ✅ YES | P1 |
| About/Contact | ✅ YES | P2 |
| Legal (privacy, terms) | Optional | P3 |

### 4. Core Web Vitals Check

**Access**: GSC → Core Web Vitals

**2026 Targets** (required for good rankings):

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | <2.5s | 2.5-4.0s | >4.0s |
| **FID** (First Input Delay) | <100ms | 100-300ms | >300ms |
| **CLS** (Cumulative Layout Shift) | <0.1 | 0.1-0.25 | >0.25 |

**Actions**:
- [ ] Check mobile performance (most real estate searches are mobile)
- [ ] Check desktop performance
- [ ] Review failing URLs and fix issues
- [ ] Monitor improvement over time

---

## Monthly Tasks

### 1. Sitemap Health Check

**Test Commands**:

```bash
# Test sitemap-index accessibility
curl -I https://lasvegashomeexpert.com/sitemap-index.xml

# Expected:
# HTTP/2 200
# content-type: application/xml

# Download and validate XML
curl https://lasvegashomeexpert.com/sitemap-index.xml > sitemap-index.xml

# Validate structure (should have 2 sitemaps listed)
grep -c "<sitemap>" sitemap-index.xml
# Expected: 2

# Test main sitemap
curl https://lasvegashomeexpert.com/sitemap.xml | grep -c "<url>"
# Expected: ~50 (number of pages)
```

**Validation Checklist**:
- [ ] Sitemap accessible (returns 200, not 403/404)
- [ ] Valid XML format (no parsing errors)
- [ ] All URLs return 200 (no 404s in sitemap)
- [ ] All URLs use HTTPS (not HTTP)
- [ ] All URLs use canonical domain (lasvegashomeexpert.com, not www)
- [ ] No noindex pages in sitemap
- [ ] No redirected pages in sitemap
- [ ] Under 50,000 URLs per sitemap
- [ ] Under 50MB per sitemap file

**Per [Sitemap Best Practices 2026](https://nightwatch.io/blog/sitemap-best-practices/)**:
> "Never include noindex pages, redirects, 4xx URLs, or canonical variants in your sitemap. Google enforces a hard limit of 50,000 URLs and 50 MB per sitemap file."

### 2. Structured Data Validation

**Tools**:
- Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

**Real Estate Specific Schema** (required for 2026):

- [ ] **LocalBusiness** schema on homepage
- [ ] **RealEstateAgent** schema on about page
- [ ] **FAQPage** schema where applicable
- [ ] **BreadcrumbList** on all pages
- [ ] **ImageObject** with proper alt text

**Test each page type**:
```bash
# Example: Test homepage structured data
curl https://lasvegashomeexpert.com/ | grep -A 50 'application/ld+json'
```

### 3. Mobile Usability Check

**Access**: GSC → Mobile Usability

**Common Issues for Real Estate Sites**:
- [ ] Text too small to read
- [ ] Clickable elements too close together (especially on listing pages)
- [ ] Content wider than screen
- [ ] Viewport not configured

**2026 Reality Check** per [Real Estate SEO Guide](https://placester.com/real-estate-marketing-academy/real-estate-seo/):
> "Mobile searches dominate real estate — over 75% of property searches start on mobile. If your mobile experience is broken, you're invisible."

### 4. Backlink Profile Review

**Tools**:
- Google Search Console → Links
- Ahrefs / Moz (if available)

**What to Monitor**:
- [ ] Total linking domains (growing over time?)
- [ ] Quality of top linking sites
- [ ] Anchor text distribution
- [ ] Broken backlinks (404s to fix)

**Real Estate Link Building Priorities**:
- Local chamber of commerce listings
- Local business directories
- Real estate industry directories (Zillow, Realtor.com profile)
- Local news mentions
- Client testimonials with links

---

## Quarterly Reviews

### 1. Comprehensive SEO Audit

**Technical SEO**:
- [ ] All pages return proper status codes
- [ ] No redirect chains
- [ ] HTTPS everywhere
- [ ] Canonical tags correct
- [ ] Hreflang tags (if multi-language)
- [ ] XML sitemap up to date
- [ ] Robots.txt not blocking important pages

**On-Page SEO**:
- [ ] Title tags unique and optimized (<60 chars)
- [ ] Meta descriptions compelling (<160 chars)
- [ ] H1 tags on all pages (only one per page)
- [ ] Image alt text descriptive
- [ ] Internal linking structure logical

**Content Quality**:
- [ ] No thin content pages (<300 words)
- [ ] No duplicate content
- [ ] Content updated regularly
- [ ] Keyword targeting appropriate
- [ ] Local SEO keywords for Las Vegas

### 2. Competitor Analysis

**Track Top 3 Competitors**:
- [ ] What keywords are they ranking for?
- [ ] What's their content strategy?
- [ ] How's their site speed vs. yours?
- [ ] What backlinks do they have that you don't?
- [ ] What features do they offer that you don't?

**Real Estate Competitive Metrics**:
- Neighborhood pages count
- Listing count and freshness
- Blog content volume
- Video content
- Virtual tours
- Market reports

### 3. Goal Achievement Review

**Traffic Metrics** (Google Analytics):
- [ ] Organic traffic trend
- [ ] Pages per session
- [ ] Bounce rate by page type
- [ ] Conversion rate (contact forms, calls)

**Ranking Metrics**:
- [ ] Track 10-20 target keywords
- [ ] Monitor local pack rankings (Google Maps)
- [ ] Check "near me" visibility

**Business Metrics**:
- [ ] Leads from organic search
- [ ] Quality of organic leads
- [ ] Closed deals from SEO

---

## After Fixing Firewall: Recovery Checklist

### Day 1: Immediate Actions
- [ ] Verify site is accessible (curl test returns 200)
- [ ] Resubmit sitemap in Google Search Console
- [ ] Request indexing for homepage
- [ ] Check Vercel Firewall logs (Googlebot allowed)

### Day 3: Initial Recovery
- [ ] Check GSC for new crawl data
- [ ] Verify "Last read" date updated on sitemaps
- [ ] Monitor for any new errors
- [ ] Check if indexed page count starts increasing

### Week 1: Early Recovery
- [ ] Compare indexed pages to previous baseline
- [ ] Review Coverage report for new issues
- [ ] Check Core Web Vitals (any degradation?)
- [ ] Monitor organic traffic in Google Analytics

### Week 2-4: Full Recovery
- [ ] Indexed pages should return to normal levels
- [ ] Organic traffic should stabilize
- [ ] Rankings should recover (may take 2-4 weeks)
- [ ] Set up ongoing monitoring cadence

**Expected Recovery Timeline** per [Google's guidelines](https://support.google.com/webmasters/answer/7451001):
- Sitemap re-crawl: 24-48 hours
- Indexing recovery: 1-2 weeks
- Ranking recovery: 2-4 weeks (if no content changed)

---

## Red Flags: When to Escalate

### 🚨 Critical Issues (Fix Immediately)

| Issue | Severity | Action |
|-------|----------|--------|
| Site returns 403/404 | **P0** | Fix firewall/hosting ASAP |
| Indexed pages drop >50% | **P0** | Check for penalties, technical issues |
| Core Web Vitals in "Poor" | **P1** | Optimize performance |
| Manual action in GSC | **P1** | Address and submit reconsideration |
| Sitemap errors | **P1** | Fix XML and resubmit |

### ⚠️ Warning Signs (Investigate)

- Indexed pages decreasing steadily
- Crawl rate dropping
- Large gap between submitted and indexed (>15%)
- Increasing 404 errors
- Mobile usability issues
- Structured data errors

---

## Tools & Resources

### Essential Tools:
- **Google Search Console**: https://search.google.com/search-console
- **Vercel Dashboard**: https://vercel.com/dashboard
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Validator**: https://validator.schema.org/

### Testing Commands:

```bash
# Quick health check script
#!/bin/bash

echo "Testing site accessibility..."
curl -I https://lasvegashomeexpert.com/ | head -1

echo "Testing sitemap-index..."
curl -I https://lasvegashomeexpert.com/sitemap-index.xml | head -1

echo "Testing main sitemap..."
curl -I https://lasvegashomeexpert.com/sitemap.xml | head -1

echo "Testing robots.txt..."
curl -I https://lasvegashomeexpert.com/robots.txt | head -1

echo "Testing with Googlebot UA..."
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1)" \
  -I https://lasvegashomeexpert.com/ | head -1

echo "Done!"
```

Save as `test-seo-health.sh` and run weekly.

---

## Success Metrics (6 Month Targets)

### Real Estate Site Benchmarks:

| Metric | Current | 6-Month Target |
|--------|---------|----------------|
| Indexed Pages | 0 (blocked) | 50+ |
| Organic Traffic | ~0 (site down) | 1,000+/month |
| Keyword Rankings (Top 10) | Unknown | 20+ keywords |
| Local Pack Presence | Unknown | Top 3 for key neighborhoods |
| Domain Authority | Unknown | 30+ |
| Page Load Time (Mobile) | Unknown | <3 seconds |

### Key Performance Indicators:

1. **Visibility**: % of target keywords in top 10
2. **Traffic**: Month-over-month organic growth
3. **Engagement**: Bounce rate <60%, time on site >2 min
4. **Conversions**: Contact form submissions, phone calls
5. **Technical Health**: 0 critical errors in GSC

---

**Remember**: 
> "The sites that win in 2026's AI-driven, rich-result-dominated search landscape are not the ones with the most content or the most backlinks. They are the ones where the technical foundations are clean, the structured data is error-free, the indexing queue is unblocked, and the experience signals pass Google's minimum thresholds on mobile." - [2026 SEO Guide](https://www.clickrank.ai/search-console-indexing-enhancements/)

**First step: FIX THE FIREWALL** → Everything else follows from there.

---

**Sources:**
- [Real Estate SEO Guide 2026](https://www.sierrainteractive.com/insights/blog/real-estate-seo/)
- [Google Search Console Complete Guide](https://almcorp.com/blog/google-search-console-complete-guide/)
- [Sitemap Best Practices 2026](https://nightwatch.io/blog/sitemap-best-practices/)
- [Real Estate SEO Strategies](https://www.luxurypresence.com/blogs/maximize-your-real-estate-seo/)
- [Luxury Real Estate Marketing](https://placester.com/real-estate-marketing-academy/real-estate-seo/)
