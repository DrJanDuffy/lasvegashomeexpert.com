/**
 * Schema Automation Utilities - 2026 Best Practices
 *
 * Automated helpers for generating AI-optimized schema markup
 * Ensures consistency and compliance with best practices
 *
 * Research-backed optimizations:
 * - FAQPage schema: 30-67% citation rate improvement
 * - Proper entity @id references for knowledge graphs
 * - JSON-LD format (required in 2026)
 * - Schema-content matching for AI trust
 */

import type { FAQItem } from '@/components/schema/FAQPageSchema';
import type { BreadcrumbItem } from '@/components/schema/BreadcrumbSchema';

/**
 * Auto-generate complete page schema package
 * Combines WebPage, Article, FAQ, and Breadcrumb schemas
 */
export interface PageSchemaConfig {
  url: string;
  title: string;
  description: string;
  type?: 'WebPage' | 'Article' | 'FAQPage' | 'CollectionPage';

  // Article-specific
  headline?: string;
  author?: { name: string; url?: string };
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  articleSection?: string;

  // FAQ-specific
  faqs?: FAQItem[];

  // Breadcrumb-specific
  breadcrumbs?: BreadcrumbItem[];

  // Image
  image?: string;
}

/**
 * Generate complete schema graph for a page
 * Returns all necessary schema types in a single @graph structure
 */
export function generatePageSchemaGraph(config: PageSchemaConfig) {
  const graph: any[] = [];

  // Always include WebPage as base
  const webPageSchema: any = {
    '@type': config.type || 'WebPage',
    '@id': `${config.url}#webpage`,
    name: config.title,
    description: config.description,
    url: config.url,
    isPartOf: {
      '@id': 'https://grokipedia.com#website',
    },
    about: {
      '@id': 'https://grokipedia.com#organization',
    },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  if (config.image) {
    webPageSchema.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: config.image,
    };
  }

  if (config.dateModified) {
    webPageSchema.dateModified = config.dateModified;
  }

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    webPageSchema.breadcrumb = {
      '@type': 'BreadcrumbList',
      '@id': `${config.url}#breadcrumb`,
      itemListElement: config.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  graph.push(webPageSchema);

  // Add Article schema if applicable
  if (config.type === 'Article' || config.headline) {
    const articleSchema: any = {
      '@type': 'Article',
      '@id': `${config.url}#article`,
      headline: config.headline || config.title,
      description: config.description,
      url: config.url,
      author: {
        '@type': 'Person',
        name: config.author?.name || 'Grokipedia Editorial Team',
        ...(config.author?.url && { url: config.author.url }),
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://grokipedia.com#organization',
        name: 'Grokipedia',
        logo: {
          '@type': 'ImageObject',
          url: 'https://grokipedia.com/logo.png',
        },
      },
      datePublished: config.datePublished || new Date().toISOString(),
      dateModified: config.dateModified || new Date().toISOString(),
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      mainEntityOfPage: {
        '@id': `${config.url}#webpage`,
      },
    };

    if (config.image) {
      articleSchema.image = {
        '@type': 'ImageObject',
        url: config.image,
      };
    }

    if (config.keywords && config.keywords.length > 0) {
      articleSchema.keywords = config.keywords.join(', ');
    }

    if (config.articleSection) {
      articleSchema.articleSection = config.articleSection;
    }

    graph.push(articleSchema);
  }

  // Add FAQPage schema if FAQs provided
  if (config.faqs && config.faqs.length > 0) {
    const faqSchema = {
      '@type': 'FAQPage',
      '@id': `${config.url}#faqpage`,
      mainEntity: config.faqs.map((faq, index) => ({
        '@type': 'Question',
        '@id': `${config.url}#question-${index + 1}`,
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          '@id': `${config.url}#answer-${index + 1}`,
          text: faq.answer,
        },
      })),
    };

    graph.push(faqSchema);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * Validate schema against 2026 best practices
 * Returns warnings and errors
 */
export interface SchemaValidation {
  valid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

export function validatePageSchema(config: PageSchemaConfig): SchemaValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  // Required fields
  if (!config.url) errors.push('Missing required field: url');
  if (!config.title) errors.push('Missing required field: title');
  if (!config.description) errors.push('Missing required field: description');

  // URL validation
  if (config.url && !config.url.startsWith('https://grokipedia.com')) {
    errors.push('URL must start with https://grokipedia.com');
  }

  // Description length (optimal for AI)
  if (config.description) {
    const descLength = config.description.length;
    if (descLength < 120) {
      warnings.push(`Description too short (${descLength} chars). Optimal: 155-160 characters.`);
    } else if (descLength > 160) {
      warnings.push(`Description too long (${descLength} chars). Optimal: 155-160 characters.`);
    }
  }

  // FAQ validation
  if (config.faqs) {
    if (config.faqs.length === 0) {
      warnings.push('FAQs array is empty. Consider removing or adding questions.');
    }

    config.faqs.forEach((faq, index) => {
      const wordCount = faq.answer.trim().split(/\s+/).length;

      if (wordCount < 40) {
        warnings.push(`FAQ ${index + 1} answer too short (${wordCount} words). Optimal: 40-80 words.`);
      } else if (wordCount > 120) {
        errors.push(`FAQ ${index + 1} answer too long (${wordCount} words). AI will truncate. Max: 120 words.`);
      } else if (wordCount > 80) {
        suggestions.push(`FAQ ${index + 1} could be more concise (${wordCount} words). Optimal: 40-80.`);
      }

      if (!faq.question.endsWith('?')) {
        warnings.push(`FAQ ${index + 1} question should end with "?"`);
      }
    });
  }

  // Article validation
  if (config.type === 'Article' || config.headline) {
    if (!config.datePublished) {
      suggestions.push('Consider adding datePublished for better temporal context');
    }
    if (!config.author) {
      suggestions.push('Consider adding author information for E-E-A-T signals');
    }
    if (!config.keywords || config.keywords.length === 0) {
      suggestions.push('Consider adding keywords for better topical clarity');
    }
  }

  // Breadcrumb validation
  if (config.breadcrumbs) {
    if (config.breadcrumbs.length === 0) {
      warnings.push('Breadcrumbs array is empty');
    }
    if (config.breadcrumbs[0]?.name !== 'Home') {
      suggestions.push('Breadcrumbs should start with "Home"');
    }
  } else if (config.url !== 'https://grokipedia.com') {
    suggestions.push('Consider adding breadcrumbs for better site hierarchy understanding');
  }

  // Image validation
  if (!config.image) {
    suggestions.push('Consider adding an image for better visual representation in AI results');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

/**
 * Auto-generate FAQ from heading structure
 * Useful for converting existing content to FAQ format
 */
export function generateFAQFromHeadings(
  headings: Array<{ question: string; content: string }>,
  targetWords = 75
): FAQItem[] {
  return headings.map(heading => {
    const words = heading.content.trim().split(/\s+/);
    let answer = heading.content;

    // Auto-truncate if too long
    if (words.length > targetWords) {
      const truncated = words.slice(0, targetWords).join(' ');
      const lastPeriod = truncated.lastIndexOf('.');

      if (lastPeriod > targetWords * 0.7) {
        answer = truncated.substring(0, lastPeriod + 1);
      } else {
        answer = truncated + '...';
      }
    }

    return {
      question: heading.question.endsWith('?')
        ? heading.question
        : `${heading.question}?`,
      answer,
      _wordCount: answer.split(/\s+/).length,
    };
  });
}

/**
 * Calculate schema completeness score (0-100)
 * Higher scores = better AI search visibility
 */
export function calculateSchemaScore(config: PageSchemaConfig): {
  score: number;
  breakdown: Record<string, number>;
  recommendations: string[];
} {
  const scores = {
    basics: 0,
    article: 0,
    faq: 0,
    breadcrumbs: 0,
    image: 0,
    metadata: 0,
  };

  const recommendations: string[] = [];

  // Basics (30 points)
  if (config.url && config.url.startsWith('https://grokipedia.com')) scores.basics += 10;
  if (config.title && config.title.length > 0) scores.basics += 10;
  if (config.description && config.description.length >= 120 && config.description.length <= 160) {
    scores.basics += 10;
  } else if (config.description) {
    scores.basics += 5;
    recommendations.push('Optimize description to 155-160 characters');
  }

  // Article schema (20 points)
  if (config.type === 'Article' || config.headline) {
    if (config.datePublished) scores.article += 5;
    else recommendations.push('Add datePublished for temporal context');

    if (config.author) scores.article += 5;
    else recommendations.push('Add author for E-E-A-T signals');

    if (config.keywords && config.keywords.length > 0) scores.article += 5;
    else recommendations.push('Add keywords for topical clarity');

    if (config.articleSection) scores.article += 5;
  }

  // FAQ schema (25 points) - HIGHEST IMPACT
  if (config.faqs && config.faqs.length > 0) {
    const validFAQs = config.faqs.filter(faq => {
      const wordCount = faq.answer.split(/\s+/).length;
      return wordCount >= 40 && wordCount <= 120;
    });

    if (validFAQs.length === config.faqs.length) {
      scores.faq = 25;
    } else {
      scores.faq = Math.round((validFAQs.length / config.faqs.length) * 25);
      recommendations.push(`Optimize ${config.faqs.length - validFAQs.length} FAQ answers to 40-80 words`);
    }
  } else {
    recommendations.push('Add FAQPage schema for 30-67% citation rate boost');
  }

  // Breadcrumbs (15 points)
  if (config.breadcrumbs && config.breadcrumbs.length > 1) {
    scores.breadcrumbs = 15;
  } else if (config.url !== 'https://grokipedia.com') {
    recommendations.push('Add breadcrumb schema for better hierarchy understanding');
  }

  // Image (10 points)
  if (config.image) {
    scores.image = 10;
  } else {
    recommendations.push('Add image for visual representation in AI results');
  }

  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

  return {
    score: totalScore,
    breakdown: scores,
    recommendations,
  };
}
