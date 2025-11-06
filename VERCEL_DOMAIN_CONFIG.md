# Vercel Domain Configuration Guide

## Current Issue

Vercel is showing a **307 redirect** from `lasvegashomeexpert.com` → `www.lasvegashomeexpert.com`. This conflicts with our SEO setup where **non-www is the canonical domain**.

## Required Changes in Vercel Dashboard

### Step 1: Configure Domain Settings

1. Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Domains**

2. You should see:
   - `lasvegashomeexpert.com` (showing 307 redirect)
   - `www.lasvegashomeexpert.com` (Production)

3. **Make non-www the primary domain:**
   - Click on `lasvegashomeexpert.com`
   - Remove any redirect configuration
   - Set it as the **Production** domain
   - Ensure it's configured to serve the site (not redirect)

4. **Configure www as redirect:**
   - Click on `www.lasvegashomeexpert.com`
   - If it's set as Production, change it to redirect to `lasvegashomeexpert.com`
   - Or remove www domain entirely (Vercel will handle the redirect automatically via our middleware)

### Step 2: Verify DNS Configuration

Both domains should point to Vercel:
- `lasvegashomeexpert.com` → Vercel DNS (A/CNAME records)
- `www.lasvegashomeexpert.com` → Vercel DNS (CNAME record)

### Step 3: Expected Result After Changes

After reconfiguring:
- ✅ `lasvegashomeexpert.com` → Should serve the site (Production)
- ✅ `www.lasvegashomeexpert.com` → Should redirect to non-www (301)
- ✅ All sitemaps use non-www URLs
- ✅ Middleware redirects www to non-www

## Why This Matters

1. **SEO Consistency**: Sitemaps use non-www, so canonical domain should be non-www
2. **Google Search Console**: All URLs should be consistent (non-www)
3. **Link Equity**: All redirects point to a single canonical domain
4. **User Experience**: Single canonical URL prevents duplicate content issues

## Current Middleware Configuration

The middleware is now configured to:
- Redirect `www.lasvegashomeexpert.com` → `lasvegashomeexpert.com` (301)
- This matches our sitemap URLs which use non-www

## After Making Changes

1. **Wait 5-10 minutes** for Vercel to propagate changes
2. **Test the redirects:**
   - Visit `https://www.lasvegashomeexpert.com` → Should redirect to `https://lasvegashomeexpert.com`
   - Visit `https://lasvegashomeexpert.com` → Should serve the site (not redirect)
3. **Update Google Search Console:**
   - Remove old sitemaps with www URLs
   - Submit `https://lasvegashomeexpert.com/sitemap-index.xml`

## Troubleshooting

If www still redirects to non-www at the Vercel platform level:
- This is fine! Our middleware will handle it correctly
- The important thing is that non-www serves the site

If non-www still redirects to www:
- Check Vercel domain settings again
- Make sure `lasvegashomeexpert.com` is set as Production (not redirect)
- Contact Vercel support if the issue persists

