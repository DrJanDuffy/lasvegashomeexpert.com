# Las Vegas Home Expert

A modern, high-performance real estate website built with Next.js, featuring RealScout v3 API, Homebot valuation widgets, CloudCMA tools, and Percy.ai HVS-Autocomplete.

## 🚀 Features

- **RealScout Integration**: Advanced property search with v3 API
- **Homebot Widgets**: Property valuation tools with Shadow DOM isolation
- **CloudCMA**: Comparative market analysis tools
- **Percy.ai**: Intelligent address autocomplete with tiered search
- **Responsive Design**: Mobile-first approach with 5 breakpoint tiers
- **Performance Optimized**: Critical path loading, lazy loading, and optimization
- **Analytics Ready**: Google Analytics 4 with custom dimensions
- **A/B Testing**: Built-in testing framework with statistical significance
- **User Segmentation**: Intelligent user behavior analysis

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Maps**: Turf.js for geospatial operations
- **Deployment**: Vercel (optimized)

## 🎨 Design System

### Color Palette
- **Primary**: #0A2540 (Deep Blue)
- **Secondary**: #3A8DDE (Bright Blue)
- **Background**: #F7F9FC (Light Gray)
- **Accent**: #16B286 (Green)
- **Semantic**: Buyer (#3A8DDE), Seller (#16B286)

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive with 5 breakpoints
- **Hierarchy**: Clear visual hierarchy with consistent spacing

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with scripts
│   └── page.tsx           # Homepage with 7-section journey
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page sections (Hero, Pain Points, etc.)
│   ├── widgets/          # Third-party integrations
│   └── ui/               # Basic UI components
├── lib/                  # Utility libraries
├── types/                # TypeScript definitions
├── hooks/                # Custom React hooks
└── utils/                # Helper functions
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_REALSCOUT_API_KEY=your_realscout_api_key
NEXT_PUBLIC_HOMEBOT_API_KEY=your_homebot_api_key
NEXT_PUBLIC_CLOUDCMA_API_KEY=your_cloudcma_api_key
NEXT_PUBLIC_PERCY_AI_KEY=your_percy_ai_key
```

### 3. Development
```bash
npm run dev
```

### 4. Build & Deploy
```bash
# Push to GitHub - Vercel will auto-deploy
git add .
git commit -m "Initial commit"
git push origin main
```

## 🌐 Vercel Deployment

### 1. Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 2. Environment Variables
Set these in Vercel Dashboard:
- `NEXT_PUBLIC_REALSCOUT_API_KEY`
- `NEXT_PUBLIC_HOMEBOT_API_KEY`
- `NEXT_PUBLIC_CLOUDCMA_API_KEY`
- `NEXT_PUBLIC_PERCY_AI_KEY`

### 3. Domain Configuration
- Add custom domain: `lasvegashomeexpert.com`
- Configure DNS records as per Vercel instructions

## 🔧 Widget Configuration

### RealScout v3 API
```typescript
// Initialize in layout.tsx
window.RealScout.init({
  apiKey: process.env.NEXT_PUBLIC_REALSCOUT_API_KEY
})
```

### Homebot Widgets
```typescript
// Shadow DOM container with z-index management
<div className="widget-container" style={{ zIndex: 1000 }}>
  <div id="homebot-widget" />
</div>
```

### CloudCMA Integration
```typescript
// React wrapper with lazy loading
<CloudCMAWidget 
  trigger="50%"
  config={cloudCMAConfig}
/>
```

### Percy.ai HVS-Autocomplete
```typescript
// Tiered search with debouncing
<PercyAutocomplete
  debounceMs={1500}
  searchTiers={['address', 'neighborhood', 'city']}
/>
```

## 📊 Analytics Implementation

### Google Analytics 4
```typescript
// Custom dimensions mapping
cd1: userType (buyer/seller/investor)
cd2: widgetType (realscout/homebot/cloudcma)
cd3: interactionDepth (1-10 scale)
cd4: conversionValue (monetary value)
```

### Event Tracking
```typescript
import { trackEvent } from '@/utils'

trackEvent({
  event: 'property_view',
  category: 'engagement',
  action: 'property_view',
  label: 'property_id_123',
  customDimensions: {
    cd1: 'buyer',
    cd2: 'realscout',
    cd3: '3',
    cd4: '50000'
  }
})
```

## 🧪 A/B Testing

### Test Configuration
```typescript
const testVariants = [
  { id: 'control', weight: 50, config: {} },
  { id: 'variant_a', weight: 25, config: { heroStyle: 'minimal' } },
  { id: 'variant_b', weight: 25, config: { heroStyle: 'detailed' } }
]

const activeVariant = getABTestVariant('hero_test', testVariants)
```

## 📱 Responsive Design

### Breakpoints
- **xs**: < 475px (Mobile small)
- **sm**: ≥ 576px (Mobile large)
- **md**: ≥ 768px (Tablet)
- **lg**: ≥ 992px (Desktop small)
- **xl**: ≥ 1200px (Desktop large)
- **2xl**: ≥ 1400px (Desktop extra large)

### CSS Grid System
```css
.grid-cols-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
```

## 🚀 Performance Optimization

### Critical Path Loading
1. Core dependencies (React, Next.js)
2. Polyfills
3. Analytics
4. A/B testing
5. Widgets (lazy loaded)

### Lazy Loading Strategy
- Widgets load at 50% viewport visibility
- Images use Next.js Image component
- Code splitting by route and component

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure cookie settings
- Input validation and sanitization

## 📈 SEO Optimization

- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Performance optimization

## 🐛 Error Handling

### Error Boundaries
```typescript
<ErrorBoundary
  fallback={<ErrorFallback />}
  onError={(error) => handleError(error, 'component')}
>
  <WidgetComponent />
</ErrorBoundary>
```

### Fallback Strategy
1. Retry mechanism (3 attempts with exponential backoff)
2. Simplified widget alternative
3. Graceful content-only display

## 📝 Development Guidelines

### Code Style
- Follow TypeScript strict mode
- Use functional components with hooks
- Implement proper error boundaries
- Write comprehensive tests

### Performance
- Monitor Core Web Vitals
- Optimize bundle size
- Implement proper caching
- Use React.memo for expensive components

## 🔄 Updates & Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor performance metrics
- Review analytics data
- Test A/B experiments
- Update content and listings

### Monitoring
- Vercel Analytics
- Google Analytics 4
- Core Web Vitals
- Error tracking
- User feedback

## 📞 Support

For technical support or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Vercel deployment guides](https://vercel.com/docs)
- Contact the development team

## 📄 License

This project is proprietary software. All rights reserved.

---

**Built with ❤️ for Las Vegas real estate professionals**
