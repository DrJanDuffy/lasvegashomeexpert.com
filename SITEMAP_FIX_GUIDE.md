# Sitemap Fix Guide for Google Search Console

## What Was Fixed

All sitemap URLs have been updated to use the non-www canonical domain (`https://lasvegashomeexpert.com`). The site redirects www to non-www via middleware, so all sitemaps must use the non-www version.

### Changes Made:
1. ✅ Updated `sitemap.xml` to use non-www URLs
2. ✅ Updated `sitemap-index.xml` to use non-www URLs  
3. ✅ Updated `image-sitemap.xml` to use non-www URLs
4. ✅ Updated `robots.txt` to reference non-www sitemap URLs
5. ✅ Removed static `public/sitemap.xml` file (using dynamic API route instead)

## Google Search Console Actions Required

### Step 1: Remove Old/Invalid Sitemaps

In Google Search Console, go to **Sitemaps** section and remove these invalid/legacy sitemaps:

1. ❌ `https://www.lasvegashomeexpert.com/sitemap-index.xml` (www version - should redirect)
2. ❌ `https://www.lasvegashomeexpert.com/image-sitemap.xml` (www version - should redirect)
3. ❌ `https://www.lasvegashomeexpert.com/sitemap.xml` (www version - should redirect)
4. ❌ `https://lasvegashomeexpert.com/sitemap.xml` (old static file - now dynamic)
5. ❌ `https://lasvegashomeexpert.com/news-sitemap.xml` (legacy - redirects to main sitemap)
6. ❌ `https://lasvegashomeexpert.com/sitemap.rss` (legacy - redirects to main sitemap)
7. ❌ `https://lasvegashomeexpert.com/video-sitemap.xml` (legacy - redirects to main sitemap)
8. ❌ `http://lasvegashomeexpert.com/sitemap_index.xml` (HTTP version - legacy)

### Step 2: Submit the Correct Sitemap

Submit **ONLY** this sitemap index (which references all other sitemaps):

```
https://lasvegashomeexpert.com/sitemap-index.xml
```

This sitemap index automatically includes:
- Main sitemap: `https://lasvegashomeexpert.com/sitemap.xml`
- Image sitemap: `https://lasvegashomeexpert.com/image-sitemap.xml`

### Step 3: Verify Sitemap Accessibility

After deployment, verify these URLs are accessible:

1. ✅ `https://lasvegashomeexpert.com/sitemap-index.xml` - Should return XML sitemap index
2. ✅ `https://lasvegashomeexpert.com/sitemap.xml` - Should return main sitemap XML
3. ✅ `https://lasvegashomeexpert.com/image-sitemap.xml` - Should return image sitemap XML
4. ✅ `https://lasvegashomeexpert.com/robots.txt` - Should list all sitemaps

### Step 4: Test www Redirects

Verify that www versions redirect properly:
- `https://www.lasvegashomeexpert.com/sitemap-index.xml` → Should redirect to non-www version
- `https://www.lasvegashomeexpert.com/sitemap.xml` → Should redirect to non-www version

## Expected Results

After submitting the correct sitemap:
- ✅ Status should change from "Couldn't fetch" to "Success"
- ✅ Google should discover all pages from the sitemap
- ✅ Pages should start appearing in search results
- ✅ No more "Couldn't fetch" errors

## Timeline

- **Immediate**: After deployment, sitemaps will be accessible
- **24-48 hours**: Google will begin crawling the new sitemap
- **1-2 weeks**: All pages should be indexed and appearing in search results

## Technical Details

### Sitemap Structure

```
sitemap-index.xml (Master sitemap - submit this)
├── sitemap.xml (Main sitemap with all pages)
└── image-sitemap.xml (Image sitemap for image search)
```

### URL Format

All URLs in sitemaps use the canonical non-www format:
- ✅ `https://lasvegashomeexpert.com/`
- ✅ `https://lasvegashomeexpert.com/luxury-homes-for-sale-las-vegas`
- ❌ NOT `https://www.lasvegashomeexpert.com/` (www redirects to non-www)

### Legacy Sitemap Handling

Old WordPress sitemaps are automatically redirected:
- `/news-sitemap.xml` → `/sitemap.xml`
- `/sitemap.rss` → `/sitemap.xml`
- `/video-sitemap.xml` → `/sitemap.xml`
- `/sitemap_index.xml` → `/sitemap.xml`

These redirects are handled in `vercel.json` and ensure old sitemap URLs don't cause 404 errors.

