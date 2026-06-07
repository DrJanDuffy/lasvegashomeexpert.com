/**
 * OpenGraph & Meta Tags Optimization - 2026 Best Practices
 *
 * Research shows AI crawlers (GPTBot, ClaudeBot, PerplexityBot) read og:title,
 * og:description, and article:modified_time when choosing which pages to cite.
 *
 * Key Findings (2026):
 * - Fresh, well-described pages get cited; stale/unlabeled ones get skipped
 * - Front-load primary entities in titles
 * - Write meta descriptions as direct answers
 * - Align Open Graph tags with canonical metadata
 *
 * @see https://prerender.io/blog/how-open-graph-tags-impact-llm-training-data/
 * @see https://zumeirah.com/llm-citation-optimization-in-2026/
 */

export interface OpenGraphConfig {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  siteName?: string;
  locale?: string;

  // Article-specific (critical for AI citation)
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * Generate optimized OpenGraph meta tags for AI citation
 * Follows 2026 best practices for ChatGPT, Claude, Perplexity
 */
export function generateOpenGraphTags(config: OpenGraphConfig): Record<string, string> {
  const tags: Record<string, string> = {
    // Core Open Graph
    'og:title': config.title,
    'og:description': config.description,
    'og:url': config.url,
    'og:type': config.type || 'website',
    'og:site_name': config.siteName || 'Grokipedia',
    'og:locale': config.locale || 'en_US',
  };

  // Image (important for visual representation in AI results)
  if (config.image) {
    tags['og:image'] = config.image;
    tags['og:image:alt'] = config.title;
    tags['og:image:width'] = '1200';
    tags['og:image:height'] = '630';
  }

  // Article metadata (CRITICAL for AI crawlers)
  if (config.article) {
    tags['article:published_time'] = config.article.publishedTime || new Date().toISOString();
    tags['article:modified_time'] = config.article.modifiedTime || new Date().toISOString();

    if (config.article.author) {
      tags['article:author'] = config.article.author;
    }

    if (config.article.section) {
      tags['article:section'] = config.article.section;
    }

    if (config.article.tags && config.article.tags.length > 0) {
      // Multiple tags supported
      config.article.tags.forEach((tag, index) => {
        tags[`article:tag:${index}`] = tag;
      });
    }
  }

  // Twitter Card (also read by some AI crawlers)
  tags['twitter:card'] = 'summary_large_image';
  tags['twitter:title'] = config.title;
  tags['twitter:description'] = config.description;
  if (config.image) {
    tags['twitter:image'] = config.image;
  }
  tags['twitter:site'] = '@grokipedia';
  tags['twitter:creator'] = '@grokipedia';

  return tags;
}

/**
 * Validate OpenGraph configuration for AI citation
 * Based on 2026 research findings
 */
export function validateOpenGraphForAI(config: OpenGraphConfig): {
  valid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  // Title validation - entity-rich, factual
  if (!config.title) {
    errors.push('Title is required');
  } else if (config.title.length < 30) {
    warnings.push(`Title too short (${config.title.length} chars). Optimal: 50-60 characters for AI extraction.`);
  } else if (config.title.length > 70) {
    warnings.push(`Title too long (${config.title.length} chars). May be truncated in AI citations.`);
  }

  // Description as direct answer (CRITICAL for AI)
  if (!config.description) {
    errors.push('Description is required');
  } else {
    const wordCount = config.description.split(/\s+/).length;

    if (wordCount < 20) {
      errors.push(`Description too short (${wordCount} words). AI needs substantive context.`);
    } else if (wordCount > 35) {
      warnings.push(`Description too long (${wordCount} words). Optimal: 25-30 words for AI extraction.`);
    }

    // Check if description is answer-like
    const answerPatterns = /^(.*\sis\s|.*\sare\s|.*\sprovides?\s|.*\shelps?\s|.*\senables?\s)/i;
    if (!answerPatterns.test(config.description)) {
      suggestions.push('Write description as a direct answer (e.g., "Grokipedia is..." rather than "Learn about...")');
    }
  }

  // URL validation
  if (!config.url) {
    errors.push('URL is required');
  } else if (!config.url.startsWith('https://')) {
    errors.push('URL must use HTTPS for AI trust signals');
  }

  // Article metadata (critical for freshness signals)
  if (config.type === 'article') {
    if (!config.article) {
      warnings.push('Article type specified but article metadata missing');
    } else {
      if (!config.article.publishedTime) {
        suggestions.push('Add article:published_time for temporal signals');
      }
      if (!config.article.modifiedTime) {
        warnings.push('Missing article:modified_time - AI crawlers prefer fresh content');
      }
      if (!config.article.author) {
        suggestions.push('Add article:author for E-E-A-T signals (40% more likely to be cited)');
      }
    }
  }

  // Image for visual representation
  if (!config.image) {
    suggestions.push('Add og:image for better visual representation in AI citations');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

/**
 * Optimize title for AI citation
 * Front-loads primary entities and uses factual language
 */
export function optimizeTitleForAI(title: string, primaryEntity: string): string {
  // Front-load the primary entity if not already at start
  if (!title.toLowerCase().startsWith(primaryEntity.toLowerCase())) {
    return `${primaryEntity} - ${title}`;
  }
  return title;
}

/**
 * Convert description to answer format
 * AI crawlers prefer direct, factual answers
 */
export function optimizeDescriptionAsAnswer(topic: string, description: string): string {
  // Common patterns that make descriptions less answer-like
  const weakPatterns = [
    /^Learn (about|how)/i,
    /^Discover/i,
    /^Find out/i,
    /^Explore/i,
    /^Read about/i,
  ];

  let optimized = description;

  // Replace weak patterns with direct statements
  for (const pattern of weakPatterns) {
    if (pattern.test(optimized)) {
      optimized = optimized.replace(pattern, `${topic} is`);
      break;
    }
  }

  return optimized;
}

/**
 * Generate complete meta tags for Next.js Metadata API
 * Optimized for 2026 AI search best practices
 */
export function generateAIOptimizedMetadata(config: OpenGraphConfig) {
  const ogTags = generateOpenGraphTags(config);

  return {
    title: config.title,
    description: config.description,
    keywords: config.article?.tags?.join(', '),
    authors: config.article?.author ? [{ name: config.article.author }] : undefined,

    openGraph: {
      title: ogTags['og:title'],
      description: ogTags['og:description'],
      url: ogTags['og:url'],
      siteName: ogTags['og:site_name'],
      locale: ogTags['og:locale'],
      type: ogTags['og:type'] as any,
      ...(config.image && {
        images: [{
          url: config.image,
          width: 1200,
          height: 630,
          alt: config.title,
        }],
      }),
      ...(config.article && {
        publishedTime: config.article.publishedTime,
        modifiedTime: config.article.modifiedTime,
        authors: config.article.author ? [config.article.author] : undefined,
        section: config.article.section,
        tags: config.article.tags,
      }),
    },

    twitter: {
      card: 'summary_large_image',
      title: ogTags['twitter:title'],
      description: ogTags['twitter:description'],
      creator: ogTags['twitter:creator'],
      site: ogTags['twitter:site'],
      ...(config.image && {
        images: [config.image],
      }),
    },
  };
}
