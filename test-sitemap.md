# Sitemap Testing Guide

## Current Status
- ✅ Route segment configs added (`dynamic = 'force-dynamic'`, `runtime = 'nodejs'`)
- ✅ Error handling added to all sitemap routes
- ✅ Content-Type headers set to `application/xml; charset=utf-8`
- ✅ Rewrites configured in both `next.config.js` and `vercel.json`
- ✅ robots.txt explicitly allows sitemaps

## Manual Testing Steps

### 1. Test in Browser
Open these URLs directly in your browser:
- `https://lasvegashomeexpert.com/sitemap-index.xml`
- `https://lasvegashomeexpert.com/sitemap.xml`
- `https://lasvegashomeexpert.com/image-sitemap.xml`

**Expected:** Should see XML content, not HTML or 404 page

### 2. Check Response Headers
In browser dev tools (F12 → Network tab):
- Click on the sitemap request
- Check Response Headers:
  - `Content-Type` should be `application/xml; charset=utf-8`
  - `Status` should be `200 OK`
  - No redirects (301/302)

### 3. Check Vercel Logs
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the latest deployment
3. Click "Functions" tab
4. Check for any errors in `/api/sitemap-index.xml` route

### 4. Validate XML Format
Use an online XML validator:
- https://www.xmlvalidation.com/
- Paste the XML content from the sitemap URL
- Should validate without errors

### 5. Test with Google's Tools
1. **Google Search Console → URL Inspection:**
   - Enter: `https://lasvegashomeexpert.com/sitemap-index.xml`
   - Click "Test Live URL"
   - Should show XML content, not error

2. **Google's Rich Results Test:**
   - Not applicable for sitemaps, but you can test the sitemap URLs

## Troubleshooting "General HTTP error"

If you still see "General HTTP error" after deployment:

### Check 1: Deployment Status
- Is the latest deployment successful (green checkmark)?
- Any build errors in Vercel logs?

### Check 2: Route Accessibility
- Can you access the sitemap URLs in your browser?
- Do they return XML or HTML/404?

### Check 3: Middleware Interference
- Middleware should NOT affect `/api/*` paths
- Check `src/middleware.ts` - matcher excludes `/api`

### Check 4: Rewrite Conflicts
- We have rewrites in both `vercel.json` and `next.config.js`
- On Vercel, `vercel.json` takes precedence
- Both should work, but if there's a conflict, `vercel.json` wins

### Check 5: Route Handler Issues
- Routes are at: `src/app/api/sitemap-index.xml/route.ts`
- Route segment configs ensure dynamic rendering
- Error handling should catch any runtime errors

## Next Steps if Still Failing

1. **Check Vercel Function Logs:**
   - Go to Vercel Dashboard → Project → Functions
   - Look for errors in sitemap route execution

2. **Test Direct API Route:**
   - Try: `https://lasvegashomeexpert.com/api/sitemap-index.xml`
   - If this works but the rewrite doesn't, there's a rewrite issue

3. **Remove and Re-submit Sitemap:**
   - In Google Search Console, remove the sitemap
   - Wait 24 hours
   - Re-submit the sitemap URL

4. **Check Vercel Build Logs:**
   - Look for any warnings or errors during build
   - Check if routes are being generated correctly

## Expected Timeline

- **Immediate:** After deployment, sitemaps should be accessible
- **24-48 hours:** Google should retry and successfully read the sitemap
- **1-2 weeks:** All pages should be discovered and indexed

