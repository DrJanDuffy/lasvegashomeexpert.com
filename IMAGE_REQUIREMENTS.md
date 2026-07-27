# Image Requirements for SEO Optimization

This document outlines all images needed for optimal SEO performance on lasvegashomeexpert.com.

## Quick Reference

| Priority | File Path | Size | Purpose |
|----------|-----------|------|---------|
| 🔴 HIGH | `/public/og-image.jpg` | 1200 x 630 px | Social media sharing |
| 🔴 HIGH | `/public/dr-jan-duffy.jpg` | 800 x 800 px | Profile/about page |
| 🟡 MEDIUM | `/public/images/*.jpg` | 1200 x 800 px | Neighborhood photos |

---

## 1. Open Graph Image (CRITICAL)

### File Details
- **Path:** `/public/og-image.jpg`
- **Size:** 1200 x 630 pixels (exact)
- **Format:** JPG or PNG
- **File size:** < 1 MB (recommended)
- **Color mode:** RGB

### Why It's Important
This image appears when your site is shared on:
- Facebook
- Twitter/X
- LinkedIn
- Slack
- WhatsApp
- iMessage
- Google search results (sometimes)

### Design Guidelines

#### Must Include:
- Site name: "Las Vegas Home Expert"
- Tagline or value proposition
- High-quality imagery (luxury home or Las Vegas skyline)
- Consistent branding

#### Design Template:
```
┌─────────────────────────────────────────────────┐
│                                                 │
│         [LUXURY HOME OR LV SKYLINE IMAGE]       │
│                                                 │
│         Las Vegas Home Expert                   │
│         Dr. Jan Duffy                           │
│                                                 │
│         Your Trusted Luxury Real Estate Partner │
│                                                 │
│         lasvegashomeexpert.com                  │
│                                                 │
└─────────────────────────────────────────────────┘
     1200px wide x 630px tall
```

#### Text Placement:
- Use large, readable fonts (min 48px)
- Ensure good contrast (dark text on light background or vice versa)
- Leave 10% margin on all sides for safe area
- Test how it looks when cropped to square (profile photos)

#### Tools to Create:
1. **Canva** (recommended for non-designers)
   - Use "Facebook Post" template (1200 x 630)
   - Free templates available
   - https://canva.com

2. **Figma** (for designers)
   - Create frame: 1200 x 630
   - Export as JPG (quality 90%)

3. **Photoshop**
   - New document: 1200 x 630 px, 72 DPI
   - Save for Web: JPEG, quality 80-90%

#### Example Sources for Images:
- Unsplash: https://unsplash.com/s/photos/las-vegas-luxury-home
- Pexels: https://www.pexels.com/search/las-vegas/
- Your own property photos (best option!)

### Testing:
Once created, test with:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 2. Profile Photo

### File Details
- **Path:** `/public/dr-jan-duffy.jpg`
- **Size:** 800 x 800 pixels (square)
- **Format:** JPG
- **File size:** < 500 KB
- **Style:** Professional headshot

### Why It's Important
- Used in structured data (helps Google show author info)
- Appears on homepage and about page
- Builds trust with potential clients
- Shows up in Google Knowledge Panel

### Photo Guidelines:

#### Professional Headshot:
- Square format (face centered)
- Plain or professional background
- Professional attire
- Good lighting
- Genuine smile
- High resolution
- No filters or heavy editing

#### Technical Requirements:
- Resolution: 800 x 800 px minimum
- Face should occupy 60-80% of frame
- Good contrast
- Sharp focus
- Neutral or branded background

#### Alternative Options:
1. Hire a professional photographer
2. Use existing headshots (crop to square)
3. Use branding agency photos

---

## 3. Neighborhood & Property Images

### Overview
Your site references 7+ neighborhood images in the image sitemap. These help with:
- Google Image Search ranking
- Visual appeal when shared
- Property browsing experience

### Required Images:

#### 3.1 Luxury Home (Generic)
- **Path:** `/public/images/luxury-home.jpg`
- **Size:** 1200 x 800 px
- **Content:** High-end Las Vegas property (exterior)

#### 3.2 Summerlin Homes
- **Path:** `/public/images/summerlin-homes.jpg`
- **Size:** 1200 x 800 px
- **Content:** Typical Summerlin luxury home or community

#### 3.3 Red Rock Country Club Homes
- **Path:** `/public/images/red-rock-homes.jpg`
- **Size:** 1200 x 800 px
- **Content:** Red Rock area homes (golf course views preferred)

#### 3.4 The Ridges Summerlin Homes
- **Path:** `/public/images/ridges-homes.jpg`
- **Size:** 1200 x 800 px
- **Content:** Premium homes in The Ridges

#### 3.5 Tournament Hills
- **Path:** `/public/images/tournament-hills.jpg`
- **Size:** 1200 x 800 px
- **Content:** Golf community homes

#### 3.6 Southern Highlands
- **Path:** `/public/images/southern-highlands.jpg`
- **Size:** 1200 x 800 px
- **Content:** Elevated/hillside homes

#### 3.7 Henderson Homes
- **Path:** `/public/images/henderson-homes.jpg`
- **Size:** 1200 x 800 px
- **Content:** Henderson area properties

### Photography Guidelines:

#### Best Practices:
- Shoot during "golden hour" (early morning or late afternoon)
- Use wide-angle lens (16-35mm)
- Ensure straight horizons
- Include blue sky when possible
- Show curb appeal (clean lawns, no cars)
- Capture unique neighborhood features

#### Image Optimization:
Before uploading, compress images:
1. Use [TinyPNG](https://tinypng.com/) - reduces size by 60-80%
2. Or [Squoosh](https://squoosh.app/) - more control
3. Target file size: 200-500 KB per image

#### Sourcing Options:

**Option 1: Professional Photography** (Recommended)
- Hire local real estate photographer
- Cost: $200-500 per session
- Gets 20-50 high-quality images

**Option 2: MLS Photos**
- Use existing listing photos (with permission)
- Ensure you have rights to use images
- Credit photographers if required

**Option 3: Stock Photos**
- Unsplash, Pexels (free, royalty-free)
- Search: "Las Vegas luxury home"
- Less authentic but acceptable placeholder

**Option 4: RealScout/MLS**
- Extract from your existing listings
- Ensure proper licensing

---

## 4. File Structure

### Create These Directories:

```
/public/
├── og-image.jpg              ← 1200 x 630 px (social sharing)
├── dr-jan-duffy.jpg          ← 800 x 800 px (profile photo)
└── images/
    ├── luxury-home.jpg       ← 1200 x 800 px
    ├── summerlin-homes.jpg   ← 1200 x 800 px
    ├── red-rock-homes.jpg    ← 1200 x 800 px
    ├── ridges-homes.jpg      ← 1200 x 800 px
    ├── tournament-hills.jpg  ← 1200 x 800 px
    ├── southern-highlands.jpg← 1200 x 800 px
    └── henderson-homes.jpg   ← 1200 x 800 px
```

### How to Add Images:

1. **Create images directory:**
   ```bash
   mkdir -p /home/user/lasvegashomeexpert.com/public/images
   ```

2. **Upload via FTP/SFTP or:**
   ```bash
   # Copy from local machine
   scp og-image.jpg your-server:/home/user/lasvegashomeexpert.com/public/
   ```

3. **Or add via Vercel dashboard:**
   - Commit images to git
   - Push to GitHub
   - Vercel auto-deploys

4. **Verify images are accessible:**
   ```
   https://lasvegashomeexpert.com/og-image.jpg
   https://lasvegashomeexpert.com/dr-jan-duffy.jpg
   https://lasvegashomeexpert.com/images/luxury-home.jpg
   ```

---

## 5. Image Optimization Checklist

### Before Uploading:

- [ ] Resize to exact dimensions specified
- [ ] Compress to reduce file size (use TinyPNG or Squoosh)
- [ ] Convert to JPG (unless transparency needed)
- [ ] Set quality to 80-90%
- [ ] Remove EXIF data (privacy)
- [ ] Ensure correct color mode (RGB, not CMYK)
- [ ] Test on mobile and desktop
- [ ] Verify image loads quickly (< 1 second)

### After Uploading:

- [ ] Test URL directly in browser
- [ ] Check Open Graph image with Facebook Debugger
- [ ] Verify image appears in page source
- [ ] Test social media sharing
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Google Search Console for image indexing

---

## 6. Alt Text & Captions

Your image sitemap already includes proper titles and captions:

| Image | Title | Caption |
|-------|-------|---------|
| og-image.jpg | Las Vegas Home Expert | Las Vegas luxury real estate services |
| dr-jan-duffy.jpg | Dr. Jan Duffy | Dr. Jan Duffy, luxury real estate specialist |
| luxury-home.jpg | Luxury Homes for Sale in Las Vegas | Browse luxury properties |
| summerlin-homes.jpg | Summerlin Homes | Luxury homes in Summerlin |
| red-rock-homes.jpg | Red Rock Country Club Homes | Luxury properties in Red Rock |

These are automatically included in your image sitemap for Google.

---

## 7. Quick Start Guide

### Priority Order:

1. **Day 1:** Create og-image.jpg
   - This is the most important for SEO and social sharing
   - Use Canva template if you're not a designer

2. **Day 2:** Add dr-jan-duffy.jpg
   - Use existing professional headshot
   - Crop to square format

3. **Week 1:** Add 3-4 neighborhood images
   - Start with most important neighborhoods:
     - Summerlin
     - Red Rock
     - Henderson

4. **Week 2:** Complete all neighborhood images
   - Add remaining 4 images
   - Optimize all images
   - Submit image sitemap to Google

---

## 8. Testing & Validation

### Test Image Loading:
```bash
# Test og-image
curl -I https://lasvegashomeexpert.com/og-image.jpg

# Expected: HTTP 200 OK
# Content-Type: image/jpeg
```

### Test Social Sharing:
1. Share homepage on Facebook
2. Verify og-image appears
3. Check dimensions are correct
4. Test on mobile and desktop

### Google Image Search:
- Wait 1-2 weeks after adding images
- Search: "Dr. Jan Duffy Las Vegas"
- Check if your images appear in Google Images

---

## 9. Maintenance

### Monthly:
- [ ] Check all images load correctly
- [ ] Monitor Google Search Console > Image Search
- [ ] Update images if branding changes

### Quarterly:
- [ ] Refresh neighborhood photos (if seasons change)
- [ ] Update profile photo (if needed)
- [ ] Optimize any slow-loading images

### Annually:
- [ ] Review all images for relevance
- [ ] Update og-image if branding evolves
- [ ] Add new neighborhood images for new areas

---

## Resources

- **Image Compression:** https://tinypng.com
- **Image Editing:** https://canva.com
- **Stock Photos:** https://unsplash.com
- **Testing:** https://developers.facebook.com/tools/debug/

**Last Updated:** 2025-11-06
