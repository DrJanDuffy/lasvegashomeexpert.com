/**
 * Helper utilities for Grokipedia and AI optimization
 * These functions help generate structured data consistently across the site
 */

export interface PageMetadata {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  breadcrumb?: Array<{
    name: string;
    url: string;
  }>;
}

/**
 * Generate WebPage schema for any page
 */
export function generateWebPageSchema(metadata: PageMetadata) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${metadata.url}#webpage`,
    name: metadata.title,
    description: metadata.description,
    url: metadata.url,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://grokipedia.com#website',
      name: 'Grokipedia',
      url: 'https://grokipedia.com',
    },
    dateModified: metadata.dateModified || new Date().toISOString(),
    inLanguage: 'en-US',
    about: {
      '@type': 'Organization',
      '@id': 'https://grokipedia.com#organization',
    },
  };

  if (metadata.image) {
    schema.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: metadata.image,
    };
  }

  if (metadata.datePublished) {
    schema.datePublished = metadata.datePublished;
  }

  if (metadata.author) {
    schema.author = {
      '@type': 'Person',
      name: metadata.author.name,
      ...(metadata.author.url && { url: metadata.author.url }),
    };
  }

  if (metadata.breadcrumb && metadata.breadcrumb.length > 0) {
    schema.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: metadata.breadcrumb.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  return schema;
}

/**
 * Generate Article schema for blog posts and guides
 */
export function generateArticleSchema(
  headline: string,
  description: string,
  url: string,
  options?: {
    image?: string;
    datePublished?: string;
    dateModified?: string;
    author?: { name: string; url?: string };
    keywords?: string[];
    articleSection?: string;
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    image: options?.image
      ? {
          '@type': 'ImageObject',
          url: options.image,
        }
      : 'https://grokipedia.com/og-image.jpg',
    datePublished: options?.datePublished || new Date().toISOString(),
    dateModified: options?.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: options?.author?.name || 'Grokipedia Editorial Team',
      url: options?.author?.url || 'https://grokipedia.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Grokipedia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://grokipedia.com/logo.png',
      },
      url: 'https://grokipedia.com',
    },
    articleSection: options?.articleSection || 'Knowledge',
    ...(options?.keywords && options.keywords.length > 0 && { keywords: options.keywords.join(', ') }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
    },
  };
}

/**
 * Default organization data - Optimized for Grokipedia & AI Search (2026 Best Practices)
 * Following best practices from:
 * - Schema.org Organization standards
 * - Grok AI search optimization (FAQPage, Organization, Article priority)
 * - JSON-LD entity clarity with @id references
 * - AI-parseable knowledge domain signals
 */
export const DEFAULT_ORGANIZATION = {
  '@type': 'Organization',
  '@id': 'https://grokipedia.com#organization',
  name: 'Grokipedia',
  alternateName: ['Grokipedia Encyclopedia', 'Grokipedia AI Knowledge Base'],
  url: 'https://grokipedia.com',
  description: 'AI-optimized knowledge platform leveraging structured data and semantic web technologies for enhanced discoverability across AI search engines and knowledge graphs.',
  foundingDate: '2026',
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Knowledge Graphs',
    'Semantic Web',
    'Structured Data',
    'Generative Engine Optimization',
    'AI Search Optimization',
    'Schema.org',
    'JSON-LD',
    'Information Architecture',
  ],
  sameAs: [
    'https://x.com/grokipedia',
    'https://github.com/grokipedia',
  ],
};

