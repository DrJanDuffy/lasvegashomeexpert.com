# Vercel Firewall Configuration - 2026 Best Practices

Based on [Vercel's official firewall documentation](https://vercel.com/docs/vercel-firewall/attack-mode) and [WAF custom rules](https://vercel.com/docs/vercel-firewall/vercel-waf/custom-rules).

## Current Issue: 403 Forbidden on All Routes

**Root Cause**: Vercel Attack Challenge Mode or DDoS Protection is blocking all traffic, including legitimate crawlers.

**Impact**: 
- ❌ Google Search Console can't fetch sitemaps
- ❌ Site completely inaccessible (returns "Access denied")
- ❌ SEO indexing stopped
- ❌ Analytics/monitoring affected

---

## Solution 1: Create WAF Bypass Rules (RECOMMENDED)

### Why This is Best Practice:
✅ Maintains security while allowing legitimate traffic  
✅ Googlebot is automatically allowed in Attack Mode per [Vercel Bot Management](https://vercel.com/docs/bot-management)  
✅ Follows 2026 best practices for bot verification  
✅ No 24-hour time limit  

### Step-by-Step Configuration

#### 1. Allow Search Engine Crawlers (Bypass System Mitigations)

**In Vercel Dashboard:**
1. Navigate to: **Project → Settings → Firewall → WAF Custom Rules**
2. Click **"Create Rule"**
3. Configure:

```json
{
  "name": "Allow Search Engine Crawlers",
  "description": "Bypass DDoS protection for verified search engine bots",
  "conditions": {
    "userAgent": {
      "type": "regex",
      "pattern": "(Googlebot|Google-InspectionTool|bingbot|DuckDuckBot|Slurp|Yahoo|Baiduspider|YandexBot|facebookexternalhit|LinkedInBot|Twitterbot)"
    }
  },
  "action": "bypass"
}
```

#### 2. Allow SEO-Critical Routes (Bypass for Sitemaps/Robots)

```json
{
  "name": "Allow SEO Files",
  "description": "Always allow access to sitemaps and robots.txt",
  "conditions": {
    "path": {
      "type": "regex",
      "pattern": "^/(sitemap.*\\.xml|robots\\.txt|image-sitemap\\.xml)$"
    }
  },
  "action": "bypass"
}
```

#### 3. System Bypass Rules for Known Good IPs

**For Vercel Infrastructure:**
1. Navigate to: **Firewall → WAF System Bypass Rules**
2. Add Googlebot IP ranges (updated 2026):
   - `66.249.64.0/19` (Google crawlers)
   - `2001:4860:4801::/48` (Google IPv6)
   
**Note**: Vercel automatically verifies Googlebot using [reverse DNS lookup](https://vercel.com/docs/bot-management#bot-verification-methods), so manual IP rules are optional.

---

## Solution 2: Temporarily Disable System Mitigations

**When to use**: Emergency access needed, testing, troubleshooting

**Steps:**
1. Go to **Firewall** tab in Vercel Dashboard
2. Click **ellipsis menu (⋮)** → **"Temporarily disable system mitigations"**
3. Confirm (lasts **24 hours**)

**⚠️ Warning**: 
- You pay for ALL traffic during this period (including DDoS attacks)
- Use only for testing/emergency
- Re-enable after confirming the fix

---

## Solution 3: Adjust Attack Mode Settings

**Per [Vercel Attack Mode docs](https://vercel.com/docs/vercel-firewall/attack-mode):**

### Understanding Attack Mode Levels:

| Mode | Behavior | Use Case |
|------|----------|----------|
| **Off** | No challenges | Normal operations |
| **Monitor** | Log suspicious traffic, don't block | Testing/baseline |
| **Managed** | Challenge suspicious, allow verified bots | **Recommended** |
| **Block** | Block unverified traffic | Active DDoS attack |

### Recommended Configuration:

1. Navigate to: **Firewall → Attack Mode**
2. Select: **"Managed"** (not Block)
3. Verify: "Search engine crawlers are automatically allowed" is enabled ✓

**Key Insight from 2026 Best Practices:**
> "Search engine crawlers like Googlebot are automatically allowed through Attack Mode without being challenged. This means enabling Attack Mode will not negatively impact your site's SEO." - [Vercel Bot Management](https://vercel.com/docs/bot-management)

**If Googlebot is STILL blocked**, it means Attack Mode is set to an overly aggressive level or there's a misconfigured rule.

---

## Solution 4: Bot Management Configuration

**For Pro/Enterprise Teams:**

### Enable Automatic Bot Verification

Per [Vercel's bot verification](https://vercel.com/docs/bot-management):

Vercel uses **three verification methods**:

1. **IP Address Verification**: Checks if request is from known bot IP ranges
2. **Reverse DNS Lookup**: Verifies IP resolves to legitimate domain (e.g., `*.googlebot.com`)
3. **Cryptographic Verification**: Uses HTTP Message Signatures (RFC 9421)

**Action Required**: Ensure these are enabled in **Settings → Security → Bot Management**

---

## Testing Your Configuration

### 1. Test from Command Line

```bash
# Test homepage
curl -I https://lasvegashomeexpert.com/
# Expected: HTTP/2 200

# Test sitemap-index
curl https://lasvegashomeexpert.com/sitemap-index.xml
# Expected: XML content, not "Access denied"

# Test with Googlebot user agent
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  https://lasvegashomeexpert.com/sitemap-index.xml
# Expected: HTTP/2 200 + XML content
```

### 2. Test in Google Search Console

1. Go to **Sitemaps** section
2. Click **"Test"** next to `sitemap-index.xml`
3. Should show: ✅ **"Success - Sitemap can be read"**

### 3. Use Vercel Firewall Logs

1. Go to **Firewall → Logs** in dashboard
2. Filter by: User Agent contains "Googlebot"
3. Verify: Action = **"Allowed"** or **"Bypassed"** (not Blocked/Challenged)

---

## Real Estate SEO Best Practices (2026)

Based on [comprehensive real estate SEO guide](https://www.sierrainteractive.com/insights/blog/real-estate-seo/):

### Critical for Real Estate Sites:

✅ **Submit sitemap to Google Search Console** (you've done this)  
✅ **Monitor indexed vs. submitted pages** - If <85% indexed, you have quality issues  
✅ **Use sitemap to prioritize high-value pages**:
   - Luxury listings: priority 0.9, weekly updates
   - Neighborhood pages: priority 0.9, weekly updates  
   - Service pages: priority 0.8, monthly updates
✅ **Never include in sitemap**:
   - Noindex pages
   - Redirects (301/302)
   - 404 pages
   - Non-canonical URLs

### Your Current Implementation Status:

✅ Correct priorities for neighborhood pages (0.9)  
✅ Weekly change frequency for high-value pages  
✅ Sitemap index pattern (scalable to 50,000+ URLs)  
✅ Dynamic generation with current dates  
✅ Proper XML headers and caching  

**Improvement Needed**: Monitor the gap between submitted and indexed pages once firewall is fixed.

---

## Deployment Checklist

Before deploying any changes:

- [ ] Create WAF bypass rules for search crawlers
- [ ] Set Attack Mode to "Managed" (not "Block")
- [ ] Verify bot management is enabled
- [ ] Test sitemap accessibility with curl
- [ ] Check Vercel Firewall logs for Googlebot
- [ ] Resubmit sitemap in Google Search Console
- [ ] Monitor indexing rate (target >85%)
- [ ] Set up alerts for 403 errors in Vercel logs

---

## Monitoring Best Practices (2026)

Per [Google Search Console guide](https://almcorp.com/blog/google-search-console-complete-guide/):

### Weekly Checks:
1. **GSC → Sitemaps Report**: 
   - Check "Discovered URLs" count
   - If submitted > indexed by >15%, investigate quality issues
   
2. **Vercel → Firewall → Logs**:
   - Filter for Googlebot
   - Ensure no blocks/challenges

3. **GSC → Coverage Report**:
   - Check for new errors
   - Monitor "Valid" page count

### Monthly Reviews:
- Sitemap submission status
- Core Web Vitals scores
- Mobile usability issues
- Structured data errors

---

## Emergency Contacts

If issues persist after following this guide:

1. **Vercel Support**: 
   - Dashboard → Help → Submit Ticket
   - Include: Project ID, timeline, firewall logs showing blocks

2. **Google Search Console**:
   - Use "Report a problem" in GSC for indexing issues
   - Provide: sitemap URL, error screenshots

---

## Summary: Immediate Action Items

1. ✅ **Create WAF bypass rule** for search engine crawlers (highest priority)
2. ✅ **Change Attack Mode** from "Block" to "Managed"
3. ✅ **Test sitemap accessibility** after changes
4. ✅ **Monitor Firewall logs** to verify Googlebot is allowed
5. ✅ **Resubmit sitemap** in Google Search Console
6. ✅ **Set up monitoring** for indexing rate

**Expected Timeline**: 
- Changes take effect immediately (no redeployment needed)
- Google may take 24-48 hours to re-crawl after firewall fix
- Full indexing recovery: 1-2 weeks

---

**Sources & References:**
- [Vercel Attack Mode Documentation](https://vercel.com/docs/vercel-firewall/attack-mode)
- [Vercel WAF Custom Rules](https://vercel.com/docs/vercel-firewall/vercel-waf/custom-rules)
- [Vercel Bot Management](https://vercel.com/docs/bot-management)
- [Google Search Console Sitemaps Guide](https://support.google.com/webmasters/answer/7451001)
- [Real Estate SEO Best Practices 2026](https://www.sierrainteractive.com/insights/blog/real-estate-seo/)
- [Sitemap Best Practices 2026](https://nightwatch.io/blog/sitemap-best-practices/)
