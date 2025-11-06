# Vercel Dashboard Fix Checklist

## Step 1: Check Attack Challenge Mode
1. Go to https://vercel.com/dashboard
2. Select your **lasvegashomeexpert.com** project
3. Go to **Settings** → **Security**
4. Look for **"Attack Challenge Mode"** or **"DDoS Protection"**
5. **If it's set to "Block"**, change it to:
   - **"Monitor"** (recommended - logs but doesn't block)
   - **"Off"** (only if you're sure no attacks)

## Step 2: Check Firewall Rules
1. In the same **Security** section
2. Look for **"Firewall Rules"** or **"Protection Rules"**
3. Check if there are any rules blocking all traffic
4. **Disable or remove** overly aggressive rules
5. Look for rules that might block:
   - All requests
   - Specific IP ranges
   - Rate limits that are too low

## Step 3: Check Deployment Status
1. Go to **Deployments** tab
2. Check if the latest deployment is **"Ready"** (green checkmark)
3. If it shows **"Error"** or **"Building"**:
   - Click on the deployment
   - Check **Function Logs** for errors
   - If needed, click **"Redeploy"** on a previous working deployment

## Step 4: Verify Domain Configuration
1. Go to **Settings** → **Domains**
2. Confirm **lasvegashomeexpert.com** shows as **"Valid"** (green)
3. Confirm **www.lasvegashomeexpert.com** shows as **"307 Redirect"** (or "Valid" if that's your setup)
4. If domains show errors:
   - Click on the domain
   - Check DNS configuration
   - Verify DNS records match Vercel's requirements

## Step 5: Check Analytics (Optional but Helpful)
1. Go to **Analytics** tab
2. Look for unusual traffic patterns:
   - Sudden spikes that might have triggered protection
   - Repeated requests from same IPs
   - Unusual user agents

## Step 6: Test After Changes
After making changes in Steps 1-2:
1. Wait 2-3 minutes for changes to propagate
2. Test from a clean browser (or incognito):
   - `https://lasvegashomeexpert.com`
   - `https://lasvegashomeexpert.com/robots.txt`
   - `https://lasvegashomeexpert.com/sitemap.xml`
3. Check response headers:
   - Should NOT see `403 Forbidden`
   - Should see `200 OK`
   - Content-Type should match (text/plain for robots.txt, application/xml for sitemaps)

## If Still Blocked After These Steps

### Option A: Contact Vercel Support
1. Go to https://vercel.com/support
2. Create a support ticket:
   - Subject: "Site blocked by firewall - 403 Forbidden on all requests"
   - Include: Project name, domain, when it started
   - Request: Manual review/unblocking

### Option B: Temporary Rollback
If you have a backup/preview deployment that works:
1. Go to **Deployments**
2. Find a working deployment (before the issue)
3. Click **"Promote to Production"**

### Option C: Check Vercel Status
1. Go to https://www.vercel-status.com/
2. Check if there are any ongoing incidents
3. Check for firewall/DDoS protection outages

## Prevention for Future

After site is working:
1. Set **Attack Challenge Mode** to **"Monitor"** (not "Block")
2. Review firewall rules periodically
3. Monitor Analytics for unusual patterns
4. Consider adding rate limiting in middleware (not Vercel firewall)
5. Whitelist known crawlers (Googlebot, etc.) if needed

## Quick Test Command

After making changes, test with:
```bash
curl -I https://lasvegashomeexpert.com
```

Expected: `HTTP/2 200` (not `403`)

