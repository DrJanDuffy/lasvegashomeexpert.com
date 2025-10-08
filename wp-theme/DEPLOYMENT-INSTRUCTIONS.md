# WordPress Theme Deployment Instructions

## Quick Start - Deploy to WP Engine

### Option 1: Manual Upload (Fastest)

1. **Create ZIP file:**
   ```bash
   cd wp-theme
   zip -r lasvegashomeexpert.zip lasvegashomeexpert/
   ```

2. **Upload to WP Engine:**
   - Log into WP Engine User Portal: https://my.wpengine.com/
   - Navigate to your site `divorcereal`
   - Click "WordPress Admin" to access wp-admin
   - Go to Appearance → Themes → Add New → Upload Theme
   - Upload `lasvegashomeexpert.zip`
   - Click "Activate"

### Option 2: Git Push (Automatic)

The GitHub Actions workflow is already configured to deploy to WP Engine when you push to `main` branch.

**To deploy via Git:**

```bash
# Theme is already in the repo at wp-theme/lasvegashomeexpert/
# Just push to main branch and it will auto-deploy

git add .
git commit -m "Add WordPress theme for WP Engine"
git push origin main
```

**⚠️ IMPORTANT:** The current GitHub Action deploys the entire repository. You may need to modify `.github/workflows/deploy-wpengine.yml` to:
- Deploy only the `wp-theme/lasvegashomeexpert/` folder
- Or deploy to a WordPress themes directory

### Option 3: SFTP/SSH (Manual)

1. **Connect via SSH:**
   ```bash
   ssh -i ~/.ssh/wpengine_ed25519 divorcereal@divorcereal.ssh.wpengine.net
   ```

2. **Upload theme:**
   ```bash
   # On your local machine
   scp -i ~/.ssh/wpengine_ed25519 -r wp-theme/lasvegashomeexpert/ divorcereal@divorcereal.ssh.wpengine.net:~/wp-content/themes/
   ```

3. **Activate in WordPress admin**

---

## Post-Deployment Setup

### 1. Create Pages in WordPress

You'll need to create these pages in WordPress admin:

**Required Pages:**
- Home (set as front page)
- About Dr. Jan Duffy
- Contact
- Luxury Homes for Sale Las Vegas
- Buying Guide Las Vegas
- Selling Guide Las Vegas
- First Time Home Buyer Las Vegas
- Divorce Real Estate Las Vegas
- Investment Properties Las Vegas

**Neighborhood Pages:**
- Red Rock Country Club
- The Ridges Summerlin
- Tournament Hills
- Southern Highlands
- Summerlin Homes
- Henderson Homes
- Green Valley Homes
- Anthem Homes
- Sun City Communities
- Del Webb Communities
- Downtown Las Vegas
- Mountains Edge

**Service Pages:**
- Luxury Home Buyer Agent
- Luxury Home Selling Agent
- Home Staging Services Vegas

### 2. Configure WordPress Settings

1. **Settings → General:**
   - Site Title: "Las Vegas Home Expert"
   - Tagline: "Dr. Jan Duffy - Luxury Real Estate Specialist"

2. **Settings → Reading:**
   - Front page displays: "A static page"
   - Front page: Select "Home"
   - Posts page: Select "Blog" (create if needed)

3. **Settings → Permalinks:**
   - Select "Post name"
   - Save changes

### 3. Install Required Plugins

**Recommended plugins:**
```
- Contact Form 7 (for contact page)
- Yoast SEO or Rank Math (additional SEO)
- WP Super Cache (if not using WP Engine caching)
```

### 4. Configure Menus

1. Go to **Appearance → Menus**
2. Create "Primary Menu"
3. Add pages to menu
4. Assign to "Primary Menu" location

### 5. Update RealScout Widget

In `front-page.php`, update the RealScout agent ID if needed:
```php
agent-encoded-id="QWdlbnQtMjI1MDUw"
```

---

## Important Notes

### Current State:
✅ WordPress theme structure created
✅ Header and footer templates converted
✅ Homepage (front-page.php) created with full content
✅ Page and post templates created
✅ CSS and JavaScript assets included
✅ RealScout widget integration ready
✅ SEO schema markup included

### Not Yet Migrated:
- Individual page content (needs to be created in WordPress)
- Contact form functionality (install Contact Form 7)
- Custom page templates for specific pages
- Blog posts (if any)
- Images and media files

### WP Engine Specific:
- WP Engine provides automatic caching
- No need for caching plugins
- Use WP Engine's CDN for images
- SSH access configured with keys

---

## Troubleshooting

### Theme doesn't appear in WordPress:
- Ensure `style.css` has proper header comment
- Check file permissions
- Look for PHP errors in WP Engine dashboard

### Styles not loading:
- Clear WP Engine cache
- Check Tailwind CSS CDN is accessible
- Verify `functions.php` enqueue_scripts

### RealScout widget not showing:
- Check JavaScript console for errors
- Verify agent-encoded-id is correct
- Ensure RealScout script is loading

---

## Support Contacts

**WP Engine:**
- Portal: https://my.wpengine.com/
- Support: https://wpengine.com/support/

**Theme Developer:**
- Email: DrJanSells@LasVegasHomeExpert.com
- Phone: (702) 222-1964

---

## Next Steps After Deployment:

1. ✅ Upload theme to WP Engine
2. ✅ Activate theme
3. ⏳ Create all pages with content
4. ⏳ Install Contact Form 7 and create contact form
5. ⏳ Configure menus
6. ⏳ Add logo and favicon
7. ⏳ Set up Google Analytics
8. ⏳ Test all links and functionality
9. ⏳ Submit sitemap to Google Search Console
10. ⏳ Launch! 🚀
