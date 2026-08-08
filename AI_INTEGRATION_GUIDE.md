# AI Integration Guide - Las Vegas Home Expert

Based on best practices from Nate's Newsletter and 2026 SEO standards.

## Table of Contents
1. [Overview](#overview)
2. [AI Tools Stack](#ai-tools-stack)
3. [Content Generation Workflows](#content-generation-workflows)
4. [Implementation Patterns](#implementation-patterns)
5. [Quality Assurance](#quality-assurance)
6. [Performance Monitoring](#performance-monitoring)

---

## Overview

This guide implements AI best practices from [Nate's Newsletter](https://natesnewsletter.substack.com/) combined with 2026 SEO standards to enhance the Las Vegas Home Expert real estate platform.

### Key Principles

**From Nate's Framework:**
1. **Context Engineering** - Build comprehensive context, not just prompts
2. **Task Queues Over Chat** - Automate workflows, don't rely on chat interfaces
3. **Good Taste Development** - Train judgment for evaluating AI outputs
4. **Governance Balance** - 8:1 implementation-to-governance ratio

**From 2026 SEO Standards:**
1. **Generative Engine Optimization (GEO)** - Make content AI-quotable
2. **Server-Side Rendering** - Essential for crawler access
3. **Structured Data** - Help AI understand content semantics
4. **Performance First** - Core Web Vitals (INP < 200ms)

---

## AI Tools Stack

### Development Tools

**Primary: Claude (Anthropic)**
```typescript
// Install Claude SDK
npm install @anthropic-ai/sdk

// Configuration
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
```

**Use Cases:**
- Property description generation
- Market analysis summaries
- SEO metadata optimization
- Code assistance (via Claude Code)

**Alternative: OpenAI GPT-4**
```typescript
npm install openai

import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
```

### Content Management

**Notion (Second Brain System)**
```
Workspace Structure:
├── Market Data
│   ├── Neighborhood Statistics
│   ├── Price Trends
│   └── Inventory Levels
├── Property Listings
│   ├── Active Listings
│   ├── Sold Properties
│   └── Coming Soon
├── Content Templates
│   ├── Property Descriptions
│   ├── Neighborhood Guides
│   └── FAQ Responses
└── Client Intelligence
    ├── Buyer Profiles
    ├── Preferences
    └── Search History
```

**Integration:**
- Use Notion API for content sync
- AI-powered search across notes
- Automated tagging and categorization

### Research & Analysis

**Perplexity AI**
- Real-time market research
- Competitive analysis
- Local market insights
- Trend identification

---

## Content Generation Workflows

### 1. Property Description Generator

**Context-Engineered Prompt Template:**

```typescript
// src/utils/ai/propertyDescriptionGenerator.ts

interface PropertyData {
  address: string;
  type: 'single-family' | 'condo' | 'townhouse' | 'luxury';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: number;
  features: string[];
  neighborhood: string;
  yearBuilt: number;
  lotSize?: number;
  pool?: boolean;
  garage?: number;
}

const PROPERTY_DESCRIPTION_PROMPT = `
You are a luxury real estate copywriter specializing in Las Vegas properties.

CONTEXT:
- Target audience: High-net-worth individuals, luxury home buyers
- Tone: Professional, aspirational, locally-informed
- Market: Las Vegas luxury real estate
- Agent: Dr. Jan Duffy, experienced luxury specialist since 2013

PROPERTY DETAILS:
{{PROPERTY_JSON}}

REQUIREMENTS:
1. Length: 150-200 words
2. SEO: Naturally integrate keywords: "{{NEIGHBORHOOD}} homes", "luxury real estate Las Vegas"
3. Structure:
   - Opening hook (1-2 sentences)
   - Key features and highlights (3-4 sentences)
   - Neighborhood and lifestyle benefits (2-3 sentences)
   - Call-to-action (1 sentence)
4. Style:
   - Use active voice
   - Avoid generic phrases ("stunning", "beautiful home")
   - Include specific, compelling details
   - Reference Las Vegas lifestyle (golf, dining, entertainment)
5. Local Knowledge:
   - Mention nearby amenities (Red Rock Casino, golf courses, etc.)
   - Reference neighborhood character
   - Include commute times to Strip/downtown if relevant

OUTPUT FORMAT:
Plain text, paragraph form (no bullet points or sections).

Generate the property description:
`;

export async function generatePropertyDescription(
  property: PropertyData
): Promise<string> {
  const prompt = PROPERTY_DESCRIPTION_PROMPT
    .replace('{{PROPERTY_JSON}}', JSON.stringify(property, null, 2))
    .replace('{{NEIGHBORHOOD}}', property.neighborhood);

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  return message.content[0].text;
}
```

**Usage Example:**

```typescript
const property = {
  address: "123 Red Rock Drive, Las Vegas, NV 89135",
  type: "luxury",
  bedrooms: 5,
  bathrooms: 4.5,
  sqft: 4200,
  price: 2450000,
  features: [
    "Gourmet kitchen with Wolf appliances",
    "Resort-style pool and spa",
    "Home theater",
    "3-car garage",
    "Mountain views"
  ],
  neighborhood: "Red Rock Country Club",
  yearBuilt: 2018,
  lotSize: 0.5,
  pool: true,
  garage: 3
};

const description = await generatePropertyDescription(property);
// Output: "Positioned in the prestigious Red Rock Country Club, this..."
```

### 2. Meta Description Optimizer

```typescript
// src/utils/ai/metaDescriptionGenerator.ts

interface MetaDescriptionParams {
  pageTitle: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  pageType: 'neighborhood' | 'service' | 'property' | 'guide';
  uniqueValue: string;
}

const META_DESCRIPTION_PROMPT = `
Generate an SEO-optimized meta description.

PAGE CONTEXT:
- Title: {{TITLE}}
- Primary Keyword: {{PRIMARY_KEYWORD}}
- Secondary Keywords: {{SECONDARY_KEYWORDS}}
- Page Type: {{PAGE_TYPE}}
- Unique Value: {{UNIQUE_VALUE}}

REQUIREMENTS:
1. Exactly 155-160 characters (strict limit)
2. Include primary keyword near the beginning
3. Include compelling call-to-action
4. Reference "Dr. Jan Duffy" or "expert agent"
5. Mention Las Vegas/location
6. Focus on unique value proposition

FORMATTING:
- Use sentence case
- No quotation marks
- End with period or call-to-action phrase
- Natural, conversational tone

OUTPUT:
Return ONLY the meta description text, nothing else.
`;

export async function generateMetaDescription(
  params: MetaDescriptionParams
): Promise<string> {
  let prompt = META_DESCRIPTION_PROMPT
    .replace('{{TITLE}}', params.pageTitle)
    .replace('{{PRIMARY_KEYWORD}}', params.primaryKeyword)
    .replace('{{SECONDARY_KEYWORDS}}', params.secondaryKeywords.join(', '))
    .replace('{{PAGE_TYPE}}', params.pageType)
    .replace('{{UNIQUE_VALUE}}', params.uniqueValue);

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 256,
    messages: [{ role: 'user', content: prompt }]
  });

  const description = message.content[0].text.trim();
  
  // Validation
  if (description.length < 155 || description.length > 160) {
    console.warn(`Meta description length: ${description.length} (should be 155-160)`);
  }
  
  return description;
}
```

### 3. FAQ Generator

```typescript
// src/utils/ai/faqGenerator.ts

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_GENERATION_PROMPT = `
Generate 5 high-quality real estate FAQs for {{TOPIC}} in Las Vegas.

CONTEXT:
- Target audience: {{AUDIENCE}}
- Location focus: Las Vegas, Nevada
- Agent: Dr. Jan Duffy (luxury specialist since 2013)

REQUIREMENTS:
1. Questions:
   - Based on real buyer concerns
   - Specific to Las Vegas market
   - Natural, conversational phrasing
   - Include location/topic keywords
   
2. Answers:
   - 100-150 words each
   - Authoritative and informative
   - Include specific local details
   - SEO-optimized naturally
   - End with subtle call-to-action
   
3. Topics to cover:
   - Market conditions
   - Neighborhood specifics
   - Buying/selling process
   - Local regulations/HOAs
   - Timeline expectations

OUTPUT FORMAT:
JSON array of objects with "question" and "answer" fields.
`;

export async function generateFAQs(
  topic: string,
  audience: string = "first-time luxury home buyers"
): Promise<FAQItem[]> {
  const prompt = FAQ_GENERATION_PROMPT
    .replace('{{TOPIC}}', topic)
    .replace('{{AUDIENCE}}', audience);

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }]
  });

  const jsonMatch = message.content[0].text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error('Failed to extract JSON from response');
  
  return JSON.parse(jsonMatch[0]);
}
```

### 4. Image Alt Text Generator

```typescript
// src/utils/ai/imageAltTextGenerator.ts

interface ImageContext {
  imagePath: string;
  pageContext: string;
  propertyAddress?: string;
  neighborhood?: string;
  roomType?: string;
}

const ALT_TEXT_PROMPT = `
Generate SEO-optimized alt text for a real estate image.

IMAGE CONTEXT:
{{CONTEXT_JSON}}

REQUIREMENTS:
1. Length: 80-125 characters
2. Be descriptive and specific
3. Include relevant keywords naturally
4. Mention location if applicable
5. Describe what's in the image, not what it represents
6. Avoid: "image of", "picture of", "photo of"
7. For accessibility: describe key visual elements

OUTPUT:
Return ONLY the alt text, nothing else.
`;

export async function generateImageAltText(
  context: ImageContext
): Promise<string> {
  const prompt = ALT_TEXT_PROMPT
    .replace('{{CONTEXT_JSON}}', JSON.stringify(context, null, 2));

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 128,
    messages: [{ role: 'user', content: prompt }]
  });

  return message.content[0].text.trim();
}

// Usage
const altText = await generateImageAltText({
  imagePath: '/images/summerlin-home-pool.jpg',
  pageContext: 'Summerlin Homes Page',
  neighborhood: 'Summerlin',
  roomType: 'backyard-pool'
});
// Output: "Resort-style pool with spa and mountain views in Summerlin luxury home"
```

### 5. Self-Improvement Loop (Best Practices Monitoring)

**Automated system for continuously discovering and integrating current best practices**

```typescript
// src/lib/ai/selfImprovementLoop.ts

interface Finding {
  id: string;
  title: string;
  description: string;
  source: string;
  sourceUrl: string;
  category: 'SEO' | 'Performance' | 'AI' | 'Content' | 'UX' | 'Security';
  relevance: 'High' | 'Medium' | 'Low';
  impactType: 'Breaking Change' | 'Improvement' | 'Minor Update' | 'Best Practice';
}

interface Gap {
  id: string;
  category: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  description: string;
  currentState: string;
  desiredState: string;
  effort: 'Hours' | 'Days' | 'Weeks';
  impact: 'High' | 'Medium' | 'Low';
  recommendation: string;
  estimatedValue: number; // USD/year
}

interface Recommendation {
  id: string;
  priority: number; // 1-10
  gapId: string;
  title: string;
  actionItems: string[];
  successMetrics: Record<string, number>;
  estimatedTimeline: string;
}

/**
 * Main self-improvement loop
 * Runs monthly to discover, compare, and integrate best practices
 */
export async function runSelfImprovementLoop(): Promise<LoopResult> {
  // Phase 1: Discover best practices via parallel search
  const discoveries = await discoverBestPractices();
  
  // Phase 2: Compare to current implementation
  const gaps = await compareToCurrentImplementation(discoveries);
  
  // Phase 3: Generate prioritized recommendations
  const recommendations = await generateRecommendations(gaps);
  
  // Phase 4: Update documentation
  const integrations = await updateDocumentation(recommendations);
  
  // Phase 5: Schedule next run
  const nextRunDate = new Date();
  nextRunDate.setMonth(nextRunDate.getMonth() + 1);
  
  return {
    runId: `loop_${Date.now()}`,
    runDate: new Date(),
    discoveries,
    gaps,
    recommendations,
    integrations,
    metrics: calculateMetrics(discoveries, gaps, recommendations),
    nextRunDate
  };
}
```

**Usage:**

```typescript
// Manual run
const result = await runSelfImprovementLoop();
console.log(`Found ${result.discoveries.length} discoveries`);
console.log(`Identified ${result.gaps.length} gaps`);
console.log(`Generated ${result.recommendations.length} recommendations`);

// Automated run via GitHub Actions (monthly)
// See .github/workflows/self-improvement-loop.yml
```

**Monitored Sources:**

1. **Nate's Newsletter** (GitHub transcripts) - AI strategy, context engineering
2. **Next.js Documentation** - Framework updates, best practices
3. **Google Search Central** - SEO updates, Core Web Vitals
4. **Vercel Blog** - Deployment, performance, edge functions
5. **Schema.org** - Structured data updates
6. **Claude API Docs** - AI integration best practices

**Search Queries (Run in Parallel):**

```typescript
const searchQueries = [
  "Next.js 15 SEO best practices 2026",
  "Core Web Vitals optimization 2026 INP",
  "AI content generation real estate best practices",
  "Claude API property descriptions",
  "context engineering Nate Jones",
  "Google structured data real estate updates",
  "real estate website performance 2026",
  "E-E-A-T real estate websites"
];
```

**Automation Options:**

1. **GitHub Actions** (Recommended)
   - Runs monthly on first day of month
   - Creates GitHub issue with findings
   - No infrastructure needed
   - See `.github/workflows/self-improvement-loop.yml`

2. **Vercel Cron Jobs**
   ```typescript
   // vercel.json
   {
     "crons": [{
       "path": "/api/cron/self-improvement",
       "schedule": "0 0 1 * *"  // Monthly
     }]
   }
   ```

3. **Manual Execution**
   ```bash
   node scripts/runSelfImprovementLoop.js --output report.md
   ```

**Output Example:**

```markdown
# Self-Improvement Loop Report

**Run Date:** 2026-08-08
**Next Run:** 2026-09-01

## Summary
- Total Discoveries: 15
- High Relevance: 8
- Critical Gaps: 2
- High Priority Recommendations: 5
- Estimated Annual Value: $15,400

## Top Discoveries
1. Next.js 15 Metadata API Enhancements (High relevance)
2. Google E-E-A-T Updates for Real Estate (High relevance)
3. AI Content Validation Frameworks (High relevance)

## Critical Gaps
1. Missing Open Graph images ($500/year value)
2. AI content generation not deployed ($8,400/year value)

## Top Recommendations
1. [Priority 10/10] Create og-image.jpg (Timeline: 1-3 days)
2. [Priority 9/10] Deploy AI content generation (Timeline: 1-2 weeks)
```

**Documentation:**

See [SELF_IMPROVEMENT_LOOP.md](../SELF_IMPROVEMENT_LOOP.md) for complete documentation including:
- Architecture and workflow
- Search strategy
- Gap analysis framework
- Automation setup
- Metrics tracking
- Troubleshooting

**Benefits:**

- Automated discovery of latest best practices
- Proactive identification of gaps
- Prioritized action items
- Reduced manual research time (80% reduction)
- Stay ahead of algorithm changes
- Continuous improvement cycle

**Cost:**

- API usage: ~$5-10/month
- Maintenance: 2-3 hours/month
- **ROI: 1,540%-2,340%** (15-23x return)

---

## Implementation Patterns

### Task Queue System (Nate's Best Practice)

**Implementation using Vercel Queue or BullMQ:**

```typescript
// src/lib/queues/contentGenerationQueue.ts

import { Queue, Worker } from 'bullmq';

interface ContentGenerationJob {
  type: 'property-description' | 'meta-description' | 'faq' | 'alt-text';
  data: any;
  priority?: number;
}

// Create queue
export const contentQueue = new Queue('content-generation', {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379'),
  }
});

// Worker to process jobs
const worker = new Worker('content-generation', async (job) => {
  switch (job.data.type) {
    case 'property-description':
      return await generatePropertyDescription(job.data.data);
    
    case 'meta-description':
      return await generateMetaDescription(job.data.data);
    
    case 'faq':
      return await generateFAQs(job.data.data.topic, job.data.data.audience);
    
    case 'alt-text':
      return await generateImageAltText(job.data.data);
    
    default:
      throw new Error(`Unknown job type: ${job.data.type}`);
  }
}, {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379'),
  }
});

// Add job to queue
export async function queueContentGeneration(job: ContentGenerationJob) {
  return contentQueue.add(job.type, job, {
    priority: job.priority || 5,
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    }
  });
}
```

**Usage in API Route:**

```typescript
// src/app/api/generate-property-content/route.ts

import { queueContentGeneration } from '@/lib/queues/contentGenerationQueue';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const property = await request.json();
  
  // Queue description generation
  const job = await queueContentGeneration({
    type: 'property-description',
    data: property,
    priority: 1 // High priority
  });
  
  return NextResponse.json({
    jobId: job.id,
    message: 'Content generation queued'
  });
}
```

### Batch Processing Pattern

```typescript
// src/utils/ai/batchProcessor.ts

interface BatchJob<T, R> {
  items: T[];
  processor: (item: T) => Promise<R>;
  batchSize?: number;
  delayMs?: number;
}

export async function processBatch<T, R>({
  items,
  processor,
  batchSize = 5,
  delayMs = 1000
}: BatchJob<T, R>): Promise<R[]> {
  const results: R[] = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    
    // Process batch in parallel
    const batchResults = await Promise.all(
      batch.map(item => processor(item))
    );
    
    results.push(...batchResults);
    
    // Delay between batches (rate limiting)
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  
  return results;
}

// Usage: Generate descriptions for multiple properties
const properties = [...]; // Array of property data
const descriptions = await processBatch({
  items: properties,
  processor: generatePropertyDescription,
  batchSize: 5,
  delayMs: 2000 // 2 second delay between batches
});
```

---

## Quality Assurance

### AI Output Validation

```typescript
// src/utils/ai/validators.ts

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  score: number; // 0-100
}

export function validatePropertyDescription(
  description: string,
  property: PropertyData
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let score = 100;
  
  // Length check
  const wordCount = description.split(/\s+/).length;
  if (wordCount < 120 || wordCount > 250) {
    errors.push(`Word count ${wordCount} outside range (120-250)`);
    score -= 20;
  }
  
  // Keyword presence
  const lowerDesc = description.toLowerCase();
  if (!lowerDesc.includes(property.neighborhood.toLowerCase())) {
    warnings.push('Neighborhood name not mentioned');
    score -= 10;
  }
  
  // Avoid generic phrases
  const genericPhrases = ['stunning', 'beautiful home', 'amazing', 'perfect'];
  const foundGeneric = genericPhrases.filter(phrase => 
    lowerDesc.includes(phrase)
  );
  if (foundGeneric.length > 0) {
    warnings.push(`Generic phrases used: ${foundGeneric.join(', ')}`);
    score -= 5 * foundGeneric.length;
  }
  
  // Check for call-to-action
  const ctaPhrases = ['contact', 'schedule', 'call', 'email', 'tour', 'visit'];
  const hasCTA = ctaPhrases.some(phrase => lowerDesc.includes(phrase));
  if (!hasCTA) {
    warnings.push('No clear call-to-action');
    score -= 15;
  }
  
  // Check for specific details (not just generic features)
  const specificFeatures = property.features.filter(feature =>
    lowerDesc.includes(feature.toLowerCase().split(' ').slice(0, 2).join(' '))
  );
  if (specificFeatures.length < 2) {
    warnings.push('Few specific features mentioned');
    score -= 10;
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score: Math.max(0, score)
  };
}

export function validateMetaDescription(description: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let score = 100;
  
  // Length check (strict for meta descriptions)
  if (description.length < 155) {
    errors.push(`Too short: ${description.length} chars (minimum 155)`);
    score -= 30;
  }
  if (description.length > 160) {
    errors.push(`Too long: ${description.length} chars (maximum 160)`);
    score -= 30;
  }
  
  // Check for Las Vegas mention
  if (!description.toLowerCase().includes('las vegas')) {
    warnings.push('Location (Las Vegas) not mentioned');
    score -= 15;
  }
  
  // Check for action words
  const actionWords = ['find', 'discover', 'explore', 'learn', 'get', 'see'];
  const hasAction = actionWords.some(word => 
    description.toLowerCase().includes(word)
  );
  if (!hasAction) {
    warnings.push('No action word for engagement');
    score -= 10;
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score: Math.max(0, score)
  };
}
```

### Human Review Workflow

**8:1 Governance Ratio Implementation:**

```typescript
// src/lib/reviewQueue.ts

interface ReviewItem {
  id: string;
  type: 'property-description' | 'meta-description' | 'faq';
  content: string;
  aiGenerated: boolean;
  validationScore: number;
  status: 'pending' | 'approved' | 'rejected' | 'needs-revision';
  reviewer?: string;
  reviewedAt?: Date;
}

export class ReviewQueue {
  private static reviewCounter = 0;
  
  static async addForReview(item: Omit<ReviewItem, 'id' | 'status'>): Promise<void> {
    this.reviewCounter++;
    
    // Every 8th AI-generated item requires human review
    const needsReview = item.aiGenerated && (this.reviewCounter % 8 === 0);
    
    if (needsReview || item.validationScore < 70) {
      // Add to review queue
      await this.enqueueReview({
        ...item,
        id: `review-${Date.now()}`,
        status: 'pending'
      });
    } else {
      // Auto-approve if validation score is high
      await this.autoApprove(item);
    }
  }
  
  private static async enqueueReview(item: ReviewItem): Promise<void> {
    // Send to admin dashboard / Notion / email
    console.log('🔍 Review required:', item.id);
    // Implementation: Add to Notion database or send email
  }
  
  private static async autoApprove(item: Omit<ReviewItem, 'id' | 'status'>): Promise<void> {
    console.log('✅ Auto-approved:', item.type);
    // Implementation: Save to database
  }
}
```

---

## Performance Monitoring

### AI Usage Analytics

```typescript
// src/lib/analytics/aiUsageTracker.ts

interface AIUsageMetric {
  operation: string;
  model: string;
  tokensUsed: number;
  cost: number;
  duration: number;
  timestamp: Date;
  validationScore?: number;
}

export class AIUsageTracker {
  private static metrics: AIUsageMetric[] = [];
  
  static track(metric: AIUsageMetric): void {
    this.metrics.push(metric);
    
    // Log to analytics (PostHog, Mixpanel, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ai_usage', {
        operation: metric.operation,
        model: metric.model,
        tokens: metric.tokensUsed,
        cost: metric.cost,
        duration: metric.duration
      });
    }
  }
  
  static getMetrics(since?: Date): AIUsageMetric[] {
    if (!since) return this.metrics;
    return this.metrics.filter(m => m.timestamp >= since);
  }
  
  static getTotalCost(since?: Date): number {
    return this.getMetrics(since).reduce((sum, m) => sum + m.cost, 0);
  }
  
  static getAverageQuality(operation: string): number {
    const relevant = this.metrics.filter(m => 
      m.operation === operation && m.validationScore !== undefined
    );
    if (relevant.length === 0) return 0;
    return relevant.reduce((sum, m) => sum + (m.validationScore || 0), 0) / relevant.length;
  }
}

// Wrapper function with tracking
export async function generateWithTracking<T>(
  operation: string,
  generator: () => Promise<T>,
  validator?: (result: T) => ValidationResult
): Promise<T> {
  const start = Date.now();
  
  try {
    const result = await generator();
    const duration = Date.now() - start;
    
    // Get token usage from Claude response (if available)
    // This is simplified - actual implementation depends on API response
    const tokensUsed = 0; // Extract from API response
    const cost = tokensUsed * 0.000003; // Claude Sonnet pricing
    
    const validationResult = validator ? validator(result) : undefined;
    
    AIUsageTracker.track({
      operation,
      model: 'claude-sonnet-4',
      tokensUsed,
      cost,
      duration,
      timestamp: new Date(),
      validationScore: validationResult?.score
    });
    
    return result;
  } catch (error) {
    console.error(`AI operation failed: ${operation}`, error);
    throw error;
  }
}
```

### Cost Optimization

```typescript
// src/lib/ai/costOptimizer.ts

export class CostOptimizer {
  // Cache frequently generated content
  private static cache = new Map<string, { content: string; timestamp: Date }>();
  private static CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days
  
  static async getOrGenerate<T>(
    cacheKey: string,
    generator: () => Promise<T>
  ): Promise<T> {
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp.getTime() < this.CACHE_TTL) {
      console.log('✅ Cache hit:', cacheKey);
      return cached.content as T;
    }
    
    console.log('🔄 Cache miss, generating:', cacheKey);
    const content = await generator();
    
    this.cache.set(cacheKey, {
      content: content as any,
      timestamp: new Date()
    });
    
    return content;
  }
  
  // Use cheaper models for simple tasks
  static selectModel(taskComplexity: 'simple' | 'medium' | 'complex'): string {
    switch (taskComplexity) {
      case 'simple':
        return 'claude-haiku-20250514'; // Cheapest
      case 'medium':
        return 'claude-sonnet-4-20250514'; // Balanced
      case 'complex':
        return 'claude-opus-4-20250514'; // Most capable
    }
  }
}
```

---

## Next Steps

### Week 1-2: Foundation
1. ✅ Set up Claude API access
2. Implement property description generator
3. Create Notion workspace structure
4. Set up review queue

### Week 3-4: Automation
5. Implement task queue system
6. Build batch processing workflows
7. Create validation framework
8. Set up usage tracking

### Month 2-3: Scale
9. Generate descriptions for all properties
10. Build automated FAQ updates
11. Implement real-time market analysis
12. Create AI-powered search features

---

**Last Updated:** 2026-06-07  
**Based on:** Nate's Newsletter best practices + 2026 SEO standards  
**Maintained by:** Las Vegas Home Expert development team
