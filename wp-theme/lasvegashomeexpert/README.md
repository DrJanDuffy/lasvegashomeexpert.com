# Las Vegas Home Expert WordPress Theme

A custom WordPress theme for Las Vegas luxury real estate specialist Dr. Jan Duffy.

## Theme Information

- **Theme Name:** Las Vegas Home Expert
- **Version:** 1.0.0
- **Author:** Dr. Jan Duffy
- **Description:** Custom WordPress theme featuring modern design, SEO optimization, and AI-ready structured data for luxury real estate marketing.

## Features

- ✅ Fully responsive design with Tailwind CSS
- ✅ SEO-optimized with structured data (Schema.org)
- ✅ RealScout MLS integration
- ✅ Mobile-first navigation
- ✅ Google Analytics event tracking
- ✅ Fast page loading
- ✅ WP Engine optimized

## Installation

### On WP Engine:

1. **Upload Theme:**
   - Compress the `lasvegashomeexpert` folder as a ZIP file
   - Or use Git deployment (recommended)

2. **Via WP Engine Portal:**
   - Log into WP Engine dashboard
   - Navigate to Sites → Your Site → WordPress Admin
   - Go to Appearance → Themes → Add New → Upload Theme
   - Upload the theme ZIP file
   - Click "Activate"

3. **Via Git Deployment (Automated):**
   - Theme will auto-deploy when pushed to `main` branch
   - GitHub Actions workflow handles deployment
   - See `.github/workflows/deploy-wpengine.yml`

## File Structure

```
lasvegashomeexpert/
├── style.css              # Theme header and main stylesheet
├── functions.php          # Theme functions and setup
├── header.php            # Header template
├── footer.php            # Footer template
├── index.php             # Main template
├── front-page.php        # Homepage template
├── page.php              # Page template
├── single.php            # Single post template
├── assets/
│   ├── css/
│   │   ├── custom.css               # Custom styles
│   │   └── realscout-widgets.css    # RealScout widget styles
│   ├── js/
│   │   └── main.js                  # Main JavaScript
│   └── images/                      # Theme images
└── README.md             # This file
```

## Required Plugins

### Recommended:
- **Contact Form 7** - For contact forms
- **Yoast SEO** - Additional SEO features
- **WP Rocket** - Caching (if not using WP Engine caching)

### Optional:
- **Advanced Custom Fields (ACF)** - For custom page builders
- **Regenerate Thumbnails** - For image optimization

## Configuration

### After Activation:

1. **Set Homepage:**
   - Go to Settings → Reading
   - Set "Front page displays" to "A static page"
   - Choose your homepage

2. **Configure Menus:**
   - Go to Appearance → Menus
   - Create Primary Menu and Footer Menu
   - Assign to menu locations

3. **Add Logo:**
   - Go to Appearance → Customize → Site Identity
   - Upload your logo

4. **RealScout Integration:**
   - Widget is embedded in front-page.php
   - Update `agent-encoded-id` if needed

## Customization

### Tailwind CSS:
The theme uses Tailwind CSS via CDN for development. For production:
- Compile Tailwind locally
- Include only used classes
- Update `functions.php` to load compiled CSS

### Colors:
Main brand colors are defined using Tailwind's color system:
- Primary: Blue (600-900)
- Neutral: Slate
- Accent: Amber/Orange

### Google Analytics:
- Add your GA4 tracking code in Appearance → Customize → Additional CSS/JS
- Or use a plugin like MonsterInsights

## Support

For theme support, contact:
- **Email:** DrJanSells@LasVegasHomeExpert.com
- **Phone:** (702) 222-1964

## Changelog

### Version 1.0.0 (October 2025)
- Initial release
- Converted from Next.js application
- Full responsive design
- SEO and Schema.org integration
- WP Engine deployment ready

## License

This theme is licensed under the GPL v2 or later.

## Credits

- **Tailwind CSS:** https://tailwindcss.com/
- **RealScout:** https://realscout.com/
- **Berkshire Hathaway HomeServices:** https://www.berkshirehathawayhs.com/
