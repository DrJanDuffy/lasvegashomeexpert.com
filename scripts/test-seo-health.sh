#!/bin/bash

# SEO Health Check Script - 2026 Best Practices
# Tests sitemap accessibility, firewall status, and crawler access

echo "========================================="
echo "SEO Health Check - lasvegashomeexpert.com"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Homepage accessibility
echo "1. Testing homepage accessibility..."
STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://lasvegashomeexpert.com/)
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✓ Homepage: $STATUS OK${NC}"
else
    echo -e "${RED}✗ Homepage: $STATUS (Expected 200)${NC}"
fi
echo ""

# Test 2: Sitemap Index
echo "2. Testing sitemap-index.xml..."
STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://lasvegashomeexpert.com/sitemap-index.xml)
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✓ Sitemap Index: $STATUS OK${NC}"
    # Check content
    CONTENT=$(curl -s https://lasvegashomeexpert.com/sitemap-index.xml)
    if echo "$CONTENT" | grep -q "<sitemapindex"; then
        echo -e "${GREEN}  ✓ Valid XML structure${NC}"
    else
        echo -e "${RED}  ✗ Invalid XML or not a sitemap index${NC}"
    fi
else
    echo -e "${RED}✗ Sitemap Index: $STATUS (Expected 200)${NC}"
    echo -e "${YELLOW}  → Check VERCEL_FIREWALL_CONFIG.md for fix${NC}"
fi
echo ""

# Test 3: Main Sitemap
echo "3. Testing sitemap.xml..."
STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://lasvegashomeexpert.com/sitemap.xml)
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✓ Main Sitemap: $STATUS OK${NC}"
    # Count URLs
    URL_COUNT=$(curl -s https://lasvegashomeexpert.com/sitemap.xml | grep -c "<url>")
    echo -e "${GREEN}  ✓ Contains $URL_COUNT pages${NC}"
    if [ "$URL_COUNT" -lt 10 ]; then
        echo -e "${YELLOW}  ⚠ Warning: Low URL count (expected ~50)${NC}"
    fi
else
    echo -e "${RED}✗ Main Sitemap: $STATUS (Expected 200)${NC}"
fi
echo ""

# Test 4: Image Sitemap
echo "4. Testing image-sitemap.xml..."
STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://lasvegashomeexpert.com/image-sitemap.xml)
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✓ Image Sitemap: $STATUS OK${NC}"
else
    echo -e "${RED}✗ Image Sitemap: $STATUS (Expected 200)${NC}"
fi
echo ""

# Test 5: Robots.txt
echo "5. Testing robots.txt..."
STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://lasvegashomeexpert.com/robots.txt)
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✓ Robots.txt: $STATUS OK${NC}"
    # Check if sitemaps are listed
    CONTENT=$(curl -s https://lasvegashomeexpert.com/robots.txt)
    if echo "$CONTENT" | grep -q "Sitemap:"; then
        echo -e "${GREEN}  ✓ Sitemap references found${NC}"
    else
        echo -e "${YELLOW}  ⚠ Warning: No sitemap references in robots.txt${NC}"
    fi
else
    echo -e "${RED}✗ Robots.txt: $STATUS (Expected 200)${NC}"
fi
echo ""

# Test 6: Googlebot User Agent
echo "6. Testing with Googlebot user agent..."
STATUS=$(curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
    -o /dev/null -s -w "%{http_code}" https://lasvegashomeexpert.com/)
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✓ Googlebot access: $STATUS OK${NC}"
else
    echo -e "${RED}✗ Googlebot blocked: $STATUS${NC}"
    echo -e "${YELLOW}  → Vercel firewall may be blocking crawlers${NC}"
    echo -e "${YELLOW}  → See VERCEL_FIREWALL_CONFIG.md${NC}"
fi
echo ""

# Test 7: Response time
echo "7. Testing response time..."
RESPONSE_TIME=$(curl -o /dev/null -s -w "%{time_total}" https://lasvegashomeexpert.com/)
echo "  Response time: ${RESPONSE_TIME}s"
# Convert to comparison (remove decimal for bash comparison)
TIME_MS=$(echo "$RESPONSE_TIME * 1000" | bc | cut -d. -f1)
if [ "$TIME_MS" -lt 2000 ]; then
    echo -e "${GREEN}  ✓ Fast response (<2s)${NC}"
elif [ "$TIME_MS" -lt 4000 ]; then
    echo -e "${YELLOW}  ⚠ Moderate response (2-4s)${NC}"
else
    echo -e "${RED}  ✗ Slow response (>4s)${NC}"
fi
echo ""

# Test 8: Security headers
echo "8. Testing security headers..."
HEADERS=$(curl -I -s https://lasvegashomeexpert.com/)
if echo "$HEADERS" | grep -q "X-Content-Type-Options"; then
    echo -e "${GREEN}  ✓ X-Content-Type-Options present${NC}"
fi
if echo "$HEADERS" | grep -q "X-Frame-Options"; then
    echo -e "${GREEN}  ✓ X-Frame-Options present${NC}"
fi
if echo "$HEADERS" | grep -q "X-XSS-Protection"; then
    echo -e "${GREEN}  ✓ X-XSS-Protection present${NC}"
fi
echo ""

# Summary
echo "========================================="
echo "Summary"
echo "========================================="

# Count issues
HOMEPAGE_OK=$( [ "$STATUS" -eq 200 ] && echo "1" || echo "0" )
SITEMAP_OK=$(curl -o /dev/null -s -w "%{http_code}" https://lasvegashomeexpert.com/sitemap-index.xml)
SITEMAP_OK=$( [ "$SITEMAP_OK" -eq 200 ] && echo "1" || echo "0" )

if [ "$HOMEPAGE_OK" -eq 1 ] && [ "$SITEMAP_OK" -eq 1 ]; then
    echo -e "${GREEN}✓ All critical tests passed${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Submit sitemap to Google Search Console"
    echo "2. Monitor indexing in GSC Sitemaps report"
    echo "3. Run this test weekly"
else
    echo -e "${RED}✗ Critical issues found${NC}"
    echo ""
    echo "Action required:"
    echo "1. Read VERCEL_FIREWALL_CONFIG.md for firewall fix"
    echo "2. Check Vercel Dashboard → Firewall settings"
    echo "3. Create WAF bypass rules for crawlers"
    echo "4. Re-run this test after fixing"
fi

echo ""
echo "For detailed monitoring checklist, see:"
echo "  → SEO_MONITORING_CHECKLIST.md"
echo ""
