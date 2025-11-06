# Vercel Domain Configuration - Fix Steps

## Current Problem

- ❌ `lasvegashomeexpert.com` → **307 Redirect** (redirecting to www)
- ✅ `www.lasvegashomeexpert.com` → **Production**

## What We Need

- ✅ `lasvegashomeexpert.com` → **Production** (serves the site)
- ✅ `www.lasvegashomeexpert.com` → **Redirect** (redirects to non-www)

## Step-by-Step Fix in Vercel Dashboard

### Step 1: Fix Non-WWW Domain (Primary)

1. Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Domains**
2. Find `lasvegashomeexpert.com` in the list
3. Click on it to open the domain settings
4. Look for a **"Redirect"** or **"Redirect to"** setting
5. **Remove the redirect** - change it to **"Production"** or **"Serve Site"**
6. Save the changes

### Step 2: Configure WWW Domain (Redirect)

1. Find `www.lasvegashomeexpert.com` in the list
2. Click on it to open the domain settings
3. Change it from **"Production"** to **"Redirect"**
4. Set redirect destination to: `https://lasvegashomeexpert.com`
5. Set redirect type to: **301 Permanent**
6. Save the changes

### Alternative: If Vercel Doesn't Show Redirect Options

If Vercel doesn't provide explicit redirect options in the UI, you may need to:

1. **Remove `www.lasvegashomeexpert.com`** from the domain list temporarily
2. Ensure `lasvegashomeexpert.com` is set as **Production**
3. Our middleware will handle the www redirect automatically

### Step 3: Verify DNS Configuration

Make sure both domains have correct DNS records:

**For `lasvegashomeexpert.com` (Root domain):**
- Type: **A** or **CNAME**
- Points to: Vercel's IP or CNAME target

**For `www.lasvegashomeexpert.com` (Subdomain):**
- Type: **CNAME**
- Points to: `cname.vercel-dns.com` or your Vercel project

### Step 4: Test After Changes

Wait 5-10 minutes for changes to propagate, then test:

1. Visit `https://lasvegashomeexpert.com` 
   - ✅ Should serve the site (not redirect)
   
2. Visit `https://www.lasvegashomeexpert.com`
   - ✅ Should redirect (301) to `https://lasvegashomeexpert.com`

3. Check Vercel Dashboard
   - `lasvegashomeexpert.com` → Should show **"Production"** (not 307)
   - `www.lasvegashomeexpert.com` → Should show **"Redirect"** or can be removed

## Why This Matters

1. **SEO Consistency**: Our sitemaps use non-www URLs
2. **Canonical Domain**: Non-www is the canonical domain
3. **Google Search Console**: All URLs should be consistent
4. **Middleware**: Our middleware redirects www → non-www, so we need non-www to serve the site

## Troubleshooting

### If changes don't take effect:
- Wait 10-15 minutes for DNS/propagation
- Clear browser cache
- Test in incognito mode
- Check Vercel deployment logs

### If you can't find redirect options:
- Contact Vercel support
- Or remove www domain and let middleware handle it
- The middleware will redirect www → non-www automatically

## Expected Final State

After configuration:
- ✅ `lasvegashomeexpert.com` → **Production** (serves site)
- ✅ `www.lasvegashomeexpert.com` → **Redirect** (301 to non-www) OR removed
- ✅ Middleware handles www → non-www redirect
- ✅ All sitemaps use non-www URLs
- ✅ Consistent canonical domain across entire site

