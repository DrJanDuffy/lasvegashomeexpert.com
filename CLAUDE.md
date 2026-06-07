# Las Vegas Home Expert - AI Agent Guide

## Project Overview

**Type:** Next.js 14+ Real Estate Website  
**Purpose:** SEO-optimized luxury real estate platform for Las Vegas market  
**Owner:** Dr. Jan Duffy  
**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Vercel

## Architecture

### Core Technologies
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4 (G-57C81JLMQW)
- **SEO:** Dynamic sitemaps, structured data, robots.txt

### Key Features
- 47+ SEO-optimized pages
- 9 structured data schema types
- Dynamic sitemap generation (main + image + index)
- AI crawler allowance (GPTBot, Claude-Web, ChatGPT, etc.)
- Real estate widgets (RealScout, Homebot, CloudCMA)

## File Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with global metadata
│   ├── page.tsx                 # Homepage
│   ├── api/
│   │   ├── robots.txt/          # Dynamic robots.txt
│   │   ├── sitemap.xml/         # Main sitemap (47+ pages)
│   │   ├── image-sitemap.xml/   # Image sitemap
│   │   └── sitemap-index.xml/   # Sitemap index
│   ├── neighborhoods/           # Neighborhood pages (13 pages)
│   ├── services/                # Service pages (3 pages)
│   └── [other-pages]/           # Various real estate pages
├── components/
│   ├── schema/                  # Structured data components
│   │   ├── OrganizationSchema.tsx
│   │   ├── FAQSchema.tsx
│   │   ├── ArticleSchema.tsx
│   │   └── [8 other schemas]
│   ├── sections/                # Reusable page sections
│   └── layout/                  # Header, Footer, etc.
├── data/
│   ├── faq-data.ts             # FAQ content
│   └── page-specific-faqs.ts   # Page-specific FAQs
└── utils/                       # Utility functions
```

## SEO Implementation

### Metadata Strategy

**Root Layout (src/app/layout.tsx)**
- Global title template: `%s | Las Vegas Home Expert`
- Base metadata with Open Graph and Twitter Cards
- Google Analytics integration
- Structured data schemas (Organization, Knowledge Graph)

**Page-Specific Metadata**
Each page/layout uses Next.js Metadata API:
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "150-160 character description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
  }
}
```

### Structured Data (Schema.org)

**Implemented Schemas:**
1. **OrganizationSchema** - Business information, contact details
2. **KnowledgeGraphSchema** - For AI/search engine understanding
3. **FAQSchema** - Rich snippets for FAQs
4. **BreadcrumbSchema** - Navigation hierarchy
5. **ArticleSchema** - Blog/content pages
6. **WebPageSchema** - General page markup
7. **ProductSchema** - Property listings
8. **RealEstateServiceSchema** - Service descriptions
9. **RealEstateBreadcrumbSchema** - RE-specific navigation

### Sitemaps

**Main Sitemap** (`/api/sitemap.xml/route.ts`)
- 47+ pages with priorities (0.3-1.0)
- Homepage: priority 1.0, daily updates
- Neighborhoods: priority 0.9, weekly updates
- Services: priority 0.7-0.9
- Legal pages: priority 0.3

**Image Sitemap** (`/api/image-sitemap.xml/route.ts`)
- Property and neighborhood images
- Includes title, caption, location
- Helps with Google Image Search

**Robots.txt** (`/api/robots.txt/route.ts`)
- Allows all crawlers including AI bots
- Lists all sitemaps
- Blocks legacy WordPress paths
- Allows legitimate Next.js pages

## AI Integration Guidelines

### Content Generation Best Practices

**Property Descriptions:**
Use Claude with structured prompts:
```typescript
const prompt = `Generate SEO-optimized property description for:
- Address: ${property.address}
- Type: ${property.type}
- Features: ${property.features.join(", ")}
- Neighborhood: ${property.neighborhood}
- Price: ${property.price}

Requirements:
- 150-200 words
- Include local amenities
- Highlight luxury features
- Natural keyword integration
- Compelling call-to-action

Style: Professional, aspirational, locally-informed`;
```

**FAQ Generation:**
Leverage existing FAQ schemas:
```typescript
const generateFAQ = async (topic: string) => {
  const prompt = `Generate 5 real estate FAQs about ${topic} in Las Vegas.
  Format as JSON:
  {
    "question": "Question text",
    "answer": "Detailed answer (100-150 words)"
  }
  
  Focus: First-time buyers, luxury market, local insights`;
  
  // Use Claude API
  return await claude.generate(prompt);
};
```

**Meta Descriptions:**
AI-optimized for click-through:
```typescript
const prompt = `Write meta description for page about ${topic}.
Requirements:
- Exactly 155-160 characters
- Include primary keyword: "${keyword}"
- Compelling call-to-action
- Local Las Vegas reference`;
```

### AI Tools Stack (Recommended)

Based on Nate's Newsletter best practices:

**Development:**
- **Claude Code** - Primary development assistant (current)
- **Claude API** - Content generation, analysis
- **Cursor** - Alternative AI code editor

**Content Management:**
- **Notion** - Second brain for market data, client info
- **Perplexity** - Real estate market research
- **Claude** - Property descriptions, market analysis

**Automation:**
- **n8n** - Workflow automation (lead capture, email)
- **Zapier** - Integration with real estate tools

### Governance Principles

**8:1 Implementation-to-Governance Ratio (Nate's Best Practice)**

For every 8 development tasks:
- 1 code review for AI-generated content
- 1 quality check for property descriptions
- 1 SEO audit for new pages
- 1 structured data validation

**Quality Gates:**
1. **AI Content Review** - Human review all AI-generated descriptions
2. **SEO Validation** - Check metadata, Open Graph, structured data
3. **Performance Testing** - Core Web Vitals (INP < 200ms)
4. **Accessibility** - WCAG 2.1 AA compliance

## Development Workflows

### Adding New Pages

1. **Create page directory** in `src/app/[page-name]/`
2. **Add layout.tsx** with metadata:
   ```typescript
   export const metadata: Metadata = {
     title: "Page Title",
     description: "Description",
     // ... other metadata
   }
   ```
3. **Create page.tsx** with content
4. **Update sitemap** in `src/app/api/sitemap.xml/route.ts`
5. **Add structured data** if applicable
6. **Test SEO** with Rich Results Test

### AI-Assisted Development

**Context Engineering Pattern:**
```typescript
// 1. Provide context
const context = {
  project: "Las Vegas Home Expert",
  technology: "Next.js 14 App Router",
  purpose: "SEO-optimized real estate site",
  constraints: ["Must use Metadata API", "Server Components preferred"]
};

// 2. Clear requirements
const requirements = {
  task: "Create neighborhood page",
  seo: ["Unique title/description", "Open Graph tags", "Structured data"],
  performance: ["Core Web Vitals optimized", "Lazy loading images"]
};

// 3. Request implementation
// Then use Claude to generate code
```

### Testing AI Outputs

**Real-World Evaluation (Nate's Principle):**
Don't rely on benchmarks—test in production:

1. **A/B Testing** - Compare AI vs. manual descriptions
2. **Conversion Tracking** - Monitor lead generation
3. **SEO Performance** - Track rankings, CTR in GSC
4. **User Feedback** - Review bounce rates, engagement

## Common Patterns

### Page Structure Template

```typescript
// src/app/[page]/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Page Title",
  description: "SEO description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    url: "https://lasvegashomeexpert.com/page",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
  },
  robots: { index: true, follow: true }
};

export default function PageLayout({ children }) {
  return <>{children}</>;
}
```

```typescript
// src/app/[page]/page.tsx
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import FAQSection from '@/components/sections/FAQSection';

export default function Page() {
  return (
    <>
      <BreadcrumbSchema />
      
      <main>
        {/* Page content */}
      </main>
      
      <FAQSection category="page-specific" />
    </>
  );
}
```

### Image Optimization

```typescript
import Image from 'next/image';

// Always use next/image for optimization
<Image
  src="/images/property.jpg"
  alt="Luxury home in Summerlin, Las Vegas"
  width={1200}
  height={800}
  loading="lazy"
  placeholder="blur"
/>
```

## Performance Guidelines

### Core Web Vitals (2026 Standards)

**Target Metrics:**
- **INP** (Interaction to Next Paint): < 200ms
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1

**Optimization Strategies:**
1. Use Server Components by default
2. Lazy load images with next/image
3. Code split with dynamic imports
4. Prefetch critical routes
5. Optimize fonts (preload Inter)

### Rendering Strategy

**Static Site Generation (SSG):**
- Marketing pages (homepage, about, contact)
- Neighborhood pages (updated weekly)
- Service pages (rarely change)

**Incremental Static Regeneration (ISR):**
```typescript
export const revalidate = 3600; // Revalidate every hour
```

## AI Strategy (Nate's Framework)

### Focus Areas

**1. Context Engineering > Prompt Engineering**
Build comprehensive context for AI:
- Project documentation (this file)
- Code patterns and conventions
- Business requirements
- SEO constraints

**2. Task Queues > Chat Interfaces**
Automate workflows:
- Property description generation queue
- Meta tag optimization pipeline
- Image alt text generation batch
- FAQ updates automation

**3. Good Taste Development**
Develop judgment for AI outputs:
- Does description sound natural?
- Are keywords integrated organically?
- Is tone appropriate for luxury market?
- Does content provide real value?

**4. Critical Thinking Preservation**
Know when NOT to use AI:
- Strategic business decisions
- Client relationship management
- Legal compliance review
- Final quality approval

## Current Status

### Implemented ✅
- Next.js 14 App Router with TypeScript
- Comprehensive Metadata API usage
- 9 structured data schema types
- Dynamic sitemaps (main + image + index)
- robots.txt with AI crawler allowance
- Google Analytics 4 integration
- 47+ SEO-optimized pages
- Mobile-responsive design
- Core Web Vitals optimization

### In Progress 🚧
- Google Search Console verification
- GSC → GA4 integration
- Viewport API configuration
- Open Graph images (og-image.jpg pending)
- Neighborhood property images

### Planned 📋
- Claude API integration for content generation
- Notion workspace for market data
- AI-powered property description generator
- Automated FAQ updates
- GEO (Generative Engine Optimization) enhancements
- Real-time market analysis dashboard

## Quick Reference

### Important URLs
- **Production:** https://lasvegashomeexpert.com
- **Sitemap Index:** https://lasvegashomeexpert.com/sitemap-index.xml
- **Main Sitemap:** https://lasvegashomeexpert.com/sitemap.xml
- **Robots.txt:** https://lasvegashomeexpert.com/robots.txt
- **Google Analytics:** G-57C81JLMQW

### Key Files
- `src/app/layout.tsx` - Root layout, global metadata
- `src/app/api/sitemap.xml/route.ts` - Main sitemap
- `src/middleware.ts` - URL canonicalization, redirects
- `redirect-rules.js` - Centralized redirect configuration
- `next.config.js` - Next.js configuration

### Documentation
- `GOOGLE_SETUP_GUIDE.md` - Google Search Console setup
- `IMAGE_REQUIREMENTS.md` - Image specifications
- `GOOGLE_READINESS_CHECKLIST.md` - SEO verification checklist

## Contact

**Project Owner:** Dr. Jan Duffy  
**Email:** janet.duffy@bhhsnv.com  
**Development Branch:** claude/prepare-site-011CUrCLftHYzV3FHMNLuaai

---

**Last Updated:** 2026-06-07  
**AI Assistant:** Claude Code (Sonnet 4.5)
