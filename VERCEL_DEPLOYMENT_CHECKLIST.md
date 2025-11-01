# Vercel Deployment Checklist

## ✅ Completed Preparation Steps

1. ✅ **Dependencies Installed** - All npm packages are installed
2. ✅ **Build Test Passed** - Production build completes successfully
3. ✅ **Google Analytics Added** - GA4 tracking code (G-57C81JLMQW) integrated
4. ✅ **Gitignore Updated** - Proper Next.js and Vercel ignores configured
5. ✅ **Metadata Base Fixed** - OpenGraph warnings resolved
6. ✅ **Vercel Configuration** - `vercel.json` is properly configured

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Set these in Vercel Dashboard → Project Settings → Environment Variables:

**Required:**
- `NEXT_PUBLIC_REALSCOUT_API_KEY` - Your RealScout API key
- `NEXT_PUBLIC_HOMEBOT_API_KEY` - Your Homebot API key
- `NEXT_PUBLIC_CLOUDCMA_API_KEY` - Your CloudCMA API key
- `NEXT_PUBLIC_PERCY_AI_KEY` - Your Percy.ai API key

**Optional (if using):**
- Any other environment variables your app needs

### 2. Domain Configuration
1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain: `lasvegashomeexpert.com`
3. Follow DNS configuration instructions from Vercel
4. Wait for DNS propagation (can take up to 48 hours)

### 3. Google Search Console
- Update verification code in `src/app/layout.tsx` line 51:
  - Replace `'your-google-verification-code'` with your actual verification code
- Verify domain in Google Search Console

### 4. Build Settings (Should Auto-Detect)
Vercel should auto-detect Next.js, but verify:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x or higher (recommended)

## 🚀 Deployment Steps

### Option 1: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import your repository
5. Configure environment variables (see above)
6. Click "Deploy"
7. Vercel will auto-deploy on every push to main branch

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

## 🔍 Post-Deployment Verification

1. **Check Build Logs**
   - Verify no build errors
   - Check deployment URL works

2. **Test Google Analytics**
   - Visit your site
   - Check Google Analytics Real-Time reports
   - Verify events are tracking

3. **Verify Environment Variables**
   - Test API integrations work
   - Check widget functionality (RealScout, Homebot, etc.)

4. **Check Performance**
   - Use Vercel Analytics
   - Test Core Web Vitals
   - Verify images and assets load

5. **Test All Pages**
   - Navigate through main pages
   - Test forms and interactions
   - Verify redirects work

## 📊 Current Configuration

### Analytics
- **Google Analytics**: G-57C81JLMQW ✅
- **Strategy**: `afterInteractive` (optimal for performance)

### Performance Optimizations
- Next.js Script component for GA
- Static page generation (45 pages)
- Optimized bundle sizes
- Security headers configured in `vercel.json`

### Security Headers (configured in vercel.json)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 🔧 Troubleshooting

### Build Fails
- Check environment variables are set
- Verify Node.js version compatibility
- Check build logs for specific errors

### Analytics Not Working
- Verify GA tracking ID is correct
- Check browser console for errors
- Use GA Debug extension
- Wait 24-48 hours for data to appear

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

## 📝 Next Steps After Deployment

1. **Monitor Analytics**
   - Set up GA4 goals and conversions
   - Create custom reports for real estate metrics
   - Monitor user behavior flows

2. **Performance Monitoring**
   - Set up Vercel Analytics
   - Monitor Core Web Vitals
   - Optimize slow pages

3. **SEO**
   - Submit sitemap to Google Search Console
   - Verify robots.txt is accessible
   - Check structured data

4. **Backup**
   - Keep regular backups of environment variables
   - Document any custom configurations
   - Version control your vercel.json

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Google Analytics](https://analytics.google.com)
- [Google Search Console](https://search.google.com/search-console)

---

**Ready to Deploy!** 🚀

Your project is configured and ready for Vercel deployment. Follow the steps above to complete your deployment.

