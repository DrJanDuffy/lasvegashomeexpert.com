# Sitemap Debugging Guide

## Current Issue
Google Search Console reports "General HTTP error" for `https://lasvegashomeexpert.com/sitemap-index.xml`

## What We've Tried
1. ✅ Added explicit `Allow` rules in robots.txt
2. ✅ Added error handling to all sitemap routes
3. ✅ Standardized Content-Type to `application/xml; charset=utf-8`
4. ✅ Added route segment configs (`dynamic = 'force-dynamic'`)
5. ✅ Added rewrites to `next.config.js`
6. ✅ Fixed Cache-Control header conflict in `vercel.json`

## Critical Debugging Steps

### Step 1: Verify Route is Accessible
**Test these URLs directly in your browser:**
- `https://lasvegashomeexpert.com/sitemap-index.xml`
- `https://lasvegashomeexpert.com/api/sitemap-index.xml` (direct API route)
- `https://lasvegashomeexpert.com/sitemap.xml`
- `https://lasvegashomeexpert.com/image-sitemap.xml`

**What to check:**
- Does it return XML content? (should see XML, not HTML or 404)
- Check browser DevTools → Network tab → Response headers
- Status code should be `200 OK`
- Content-Type should be `application/xml; charset=utf-8`

### Step 2: Check Vercel Function Logs
1. Go to Vercel Dashboard → Your Project
2. Click "Functions" tab
3. Look for `/api/sitemap-index.xml`
4. Check for any runtime errors

**Common errors to look for:**
- Timeout errors
- Memory errors
- Syntax errors
- Import errors

### Step 3: Test with curl or Postman
```bash
curl -I https://lasvegashomeexpert.com/sitemap-index.xml
curl https://lasvegashomeexpert.com/sitemap-index.xml
```

**Expected response:**
- HTTP/1.1 200 OK
- Content-Type: application/xml; charset=utf-8
- Valid XML content

### Step 4: Check Middleware Interference
The middleware matcher is: `/((?!api|_next/static|_next/image|favicon.ico).*)`

This should exclude `/api/*` paths, but verify:
- Middleware shouldn't process sitemap routes
- No redirects should interfere
- Headers should be set correctly

### Step 5: Verify Rewrites Work
Check if rewrites are functioning:
- `/sitemap-index.xml` should rewrite to `/api/sitemap-index.xml`
- Both URLs should work
- If direct API route works but rewrite doesn't, there's a rewrite issue

### Step 6: Check for Route Handler Issues
Next.js 13.5.6 route handlers with dots in directory names:
- `src/app/api/sitemap-index.xml/route.ts` should work
- But some Next.js versions have issues with dots
- Consider using `sitemap-index/route.ts` instead if needed

## Alternative Solution: Use Next.js Built-in Sitemap

If API routes continue to fail, consider using Next.js's built-in sitemap generation:

### Option A: `sitemap.ts` file (Next.js 13+)
Create `src/app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lasvegashomeexpert.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // ... more URLs
  ]
}
```

### Option B: Dynamic Route Handler
Keep current structure but ensure:
- Route handlers are properly exported
- No build-time errors
- Runtime configs are correct

## Quick Action Checklist

**DO THIS NOW** (takes 2 minutes):

1. ✅ Open browser and visit: `https://lasvegashomeexpert.com/sitemap-index.xml`
   - **If you see XML** → Route works, issue is Google's cache/timing
   - **If you see HTML/404** → Route is broken, check Vercel logs

2. ✅ Test direct API route: `https://lasvegashomeexpert.com/api/sitemap-index.xml`
   - **If this works** → Rewrite is the issue
   - **If this fails** → Route handler is broken

3. ✅ Check Vercel Dashboard → Deployments → Latest deployment
   - Is it "Ready" (green checkmark)?
   - Any build errors?

4. ✅ Check Vercel Dashboard → Functions → `/api/sitemap-index.xml`
   - Any runtime errors?
   - What's the status code?

## Next Steps

1. **FIRST**: Test the URLs in browser - this is critical ⬆️
2. **SECOND**: Check Vercel logs for specific errors
3. **THIRD**: If browser works but Google doesn't, it's a Google cache/timing issue
4. **FOURTH**: If browser doesn't work, check Vercel deployment status

## If Browser Test Works

If the sitemap loads correctly in your browser:
- The route is working correctly
- The issue is likely Google's cache or timing
- Wait 24-48 hours for Google to retry
- Use URL Inspection tool to force a fresh fetch

## If Browser Test Fails

If the sitemap doesn't load in browser:
- Check Vercel deployment logs
- Verify the route file exists and is correct
- Check for build errors
- Test the direct API route: `/api/sitemap-index.xml`

## Contact Points

If all else fails:
1. Check Vercel support for deployment issues
2. Check Next.js GitHub issues for route handler problems
3. Verify Next.js version compatibility

