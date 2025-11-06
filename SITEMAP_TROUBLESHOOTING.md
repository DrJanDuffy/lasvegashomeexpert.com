# Sitemap Troubleshooting Guide

## Current Issue: "Couldn't fetch" in Google Search Console

Both sitemaps are showing "Couldn't fetch" status:
- `https://lasvegashomeexpert.com/sitemap.xml` 
- `https://lasvegashomeexpert.com/sitemap-index.xml`

## Immediate Steps to Fix

### Step 1: Verify Sitemaps Are Accessible

**Test the sitemap URLs directly in your browser:**

1. Open a new incognito/private window
2. Visit: `https://lasvegashomeexpert.com/sitemap-index.xml`
   - Should show XML content starting with `<?xml version="1.0" encoding="UTF-8"?>`
   - Should contain references to `sitemap.xml` and `image-sitemap.xml`

3. Visit: `https://lasvegashomeexpert.com/sitemap.xml`
   - Should show XML content with `<urlset>` containing multiple `<url>` entries
   - Should list all your pages

4. Visit: `https://lasvegashomeexpert.com/image-sitemap.xml`
   - Should show XML content with image references

**If you get a 404 or error:**
- The deployment may not have completed
- Wait 5-10 minutes and try again
- Check Vercel deployment logs

### Step 2: Check Vercel Deployment

1. Go to Vercel Dashboard → Your Project → Deployments
2. Verify the latest deployment is **Ready** (green checkmark)
3. Check the deployment logs for any errors
4. If there are errors, fix them and redeploy

### Step 3: Remove Old Sitemaps from Google Search Console

1. Go to Google Search Console → Sitemaps
2. **Remove** the old sitemaps showing "Couldn't fetch"
3. Wait 1-2 minutes for the removal to process

### Step 4: Submit ONLY the Sitemap Index

**Submit ONLY this URL:**
```
https://lasvegashomeexpert.com/sitemap-index.xml
```

**Do NOT submit:**
- ❌ `https://lasvegashomeexpert.com/sitemap.xml` (included in index)
- ❌ `https://lasvegashomeexpert.com/image-sitemap.xml` (included in index)
- ❌ Any www versions (they redirect anyway)

### Step 5: Wait and Verify

1. **Wait 24-48 hours** for Google to crawl and process
2. Check back in Google Search Console
3. Status should change from "Couldn't fetch" to "Success"
4. You should see "Discovered pages" count increase

## Common Issues and Solutions

### Issue: "Couldn't fetch" persists after 24 hours

**Possible causes:**
1. **Deployment not complete** - Check Vercel dashboard
2. **Sitemap not accessible** - Test URL in browser
3. **XML syntax error** - Validate XML format
4. **Server error** - Check Vercel logs
5. **Rate limiting** - Google may throttle requests

**Solutions:**
- Verify the sitemap URL works in a browser
- Check Vercel deployment is successful
- Validate XML format using online XML validator
- Remove and resubmit after 24 hours

### Issue: Sitemap shows but no pages discovered

**Possible causes:**
1. Sitemap index is correct but individual sitemaps have issues
2. Pages in sitemap return errors
3. Pages are blocked by robots.txt

**Solutions:**
- Test each sitemap URL individually
- Check robots.txt isn't blocking pages
- Verify all pages return 200 status codes

### Issue: Sitemap works but Google shows wrong type

**Example:**
- `sitemap.xml` shows as "Sitemap index" (should be "Sitemap")
- `sitemap-index.xml` shows as "Unknown" (should be "Sitemap index")

**Solution:**
- This is often a Google detection issue
- As long as pages are discovered, it's fine
- Google will correct the type over time

## Verification Checklist

- [ ] Sitemap URLs are accessible in browser
- [ ] XML format is valid (no syntax errors)
- [ ] All URLs in sitemap use non-www (canonical)
- [ ] Vercel deployment is successful
- [ ] Old sitemaps removed from Google Search Console
- [ ] Only sitemap-index.xml submitted
- [ ] Waited 24-48 hours for Google to process

## Expected Results

After successful submission:
- ✅ Status: "Success" (not "Couldn't fetch")
- ✅ Discovered pages: Should show count of pages
- ✅ Last read: Should show recent date
- ✅ Type: Should show "Sitemap index" for sitemap-index.xml

## Technical Details

### Sitemap Structure

```
sitemap-index.xml (Submit this)
├── sitemap.xml (Main sitemap - auto-discovered)
└── image-sitemap.xml (Image sitemap - auto-discovered)
```

### Route Configuration

- `/sitemap-index.xml` → `/api/sitemap-index.xml` (rewrite in vercel.json)
- `/sitemap.xml` → `/api/sitemap.xml` (rewrite in vercel.json)
- `/image-sitemap.xml` → `/api/image-sitemap.xml` (rewrite in vercel.json)

### Middleware

- Middleware excludes `/api` paths, so sitemaps are accessible
- Sitemaps use non-www URLs (canonical)
- www redirects are handled by Vercel and middleware

## Next Steps

1. **Test URLs** in browser first
2. **Remove old sitemaps** from Google Search Console
3. **Submit only** `sitemap-index.xml`
4. **Wait 24-48 hours** for Google to process
5. **Check back** for status updates

## Still Having Issues?

If sitemaps still show "Couldn't fetch" after:
- ✅ Verifying URLs work in browser
- ✅ Checking Vercel deployment is successful
- ✅ Waiting 24-48 hours

Then:
1. Check Vercel deployment logs for errors
2. Validate XML format using online tools
3. Test sitemap URLs with curl or Postman
4. Contact Vercel support if deployment issues persist

