# Adding FAQ Sections to All Pages

This document explains how to add FAQ sections with structured data to all pages on the website.

## Components Created

1. **FAQSection Component** (`src/components/sections/FAQSection.tsx`)
   - Reusable component with FAQPage structured data
   - Automatically generates JSON-LD schema

2. **Page-Specific FAQs** (`src/data/page-specific-faqs.ts`)
   - Pre-written FAQs optimized for "Las Vegas Home Expert" keywords
   - Organized by page type (home, buying, selling, neighborhoods, services)

## How to Add FAQs to a Page

### Step 1: Import Required Components

Add these imports at the top of your page file:

```tsx
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
```

### Step 2: Add FAQ Section Before Closing Tag

Add the FAQ section just before the closing `</main>` or `</>` tag:

```tsx
<FAQSection
  faqs={getFAQsForPage('pageType')}
  title="Your Custom FAQ Title"
  subtitle="Optional subtitle"
/>
```

### Page Types

- `'home'` - Homepage and about pages
- `'buying'` or `'buying-guide'` - Buying-related pages
- `'selling'` or `'selling-guide'` - Selling-related pages
- `'neighborhood'` or `'neighborhoods'` - Neighborhood pages
- `'service'` or `'services'` - Service pages
- Default - Falls back to home + general FAQs

## Pages Already Updated

✅ Homepage (`src/app/page.tsx`)
✅ About Dr. Jan Duffy (`src/app/about-dr-jan-duffy/page.tsx`)
✅ Luxury Realtor Las Vegas (`src/app/luxury-realtor-las-vegas/page.tsx`)

## Pages That Still Need FAQs

### Service Pages
- [ ] `src/app/services/luxury-home-buyer-agent/page.tsx`
- [ ] `src/app/services/luxury-home-selling-agent/page.tsx`
- [ ] `src/app/services/home-staging-services-vegas/page.tsx`

### Guide Pages
- [ ] `src/app/buying-guide-las-vegas/page.tsx`
- [ ] `src/app/selling-guide-las-vegas/page.tsx`
- [ ] `src/app/first-time-home-buyer-las-vegas/page.tsx`
- [ ] `src/app/investment-properties-las-vegas/page.tsx`

### Neighborhood Pages
- [ ] All pages in `src/app/neighborhoods/*/page.tsx`

### Other Pages
- [ ] `src/app/luxury-homes-for-sale-las-vegas/page.tsx`
- [ ] `src/app/contact/page.tsx`
- [ ] `src/app/best-realtor-las-vegas-reviews/page.tsx`
- [ ] `src/app/las-vegas-luxury-home-market-report/page.tsx`
- [ ] `src/app/relocation-specialist-las-vegas/page.tsx`
- [ ] `src/app/55-plus-communities-las-vegas/page.tsx`
- [ ] `src/app/modern-homes-las-vegas-expert/page.tsx`
- [ ] `src/app/luxury-homes-summerlin/page.tsx`
- [ ] `src/app/divorce-real-estate-las-vegas/page.tsx` (has some FAQs, could add more)
- [ ] `src/app/real-estate-agent-near-red-rock-casino/page.tsx`

## Example for Neighborhood Pages

```tsx
<FAQSection
  faqs={getFAQsForPage('neighborhood')}
  title="Frequently Asked Questions About [Neighborhood Name]"
  subtitle="Get answers about this premier Las Vegas neighborhood"
/>
```

## Example for Buying Guide

```tsx
<FAQSection
  faqs={getFAQsForPage('buying-guide')}
  title="Frequently Asked Questions About Buying a Home in Las Vegas"
  subtitle="Common questions about the home buying process"
/>
```

## Benefits

1. **SEO Benefits**: FAQPage structured data can appear in Google rich snippets
2. **Voice Search Optimization**: FAQs are perfect for voice assistants
3. **User Experience**: Answers common questions directly on the page
4. **Keyword Optimization**: All FAQs include "Las Vegas Home Expert" keywords
5. **Better Rankings**: Rich snippets can improve click-through rates

## Customizing FAQs

You can customize FAQs per page by passing a custom array:

```tsx
const customFAQs = [
  {
    question: 'Your custom question?',
    answer: 'Your custom answer.'
  }
];

<FAQSection faqs={customFAQs} title="Custom Title" />
```

