import type { FC } from 'react';

interface KnowledgeGraphSchemaProps {
  pageUrl: string;
  pageType?: string;
}

const KnowledgeGraphSchema: FC<KnowledgeGraphSchemaProps> = ({
  pageUrl,
  pageType = 'WebPage',
}) => {
  // 2026 Best Practices: Comprehensive knowledge graph for AI consumption
  // Optimized for Grok AI, ChatGPT, Claude, Perplexity, and Google AI Overviews
  // Following entity clarity and @id reference patterns for AI citation
  const knowledgeGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://grokipedia.com#organization',
        name: 'Grokipedia',
        alternateName: ['Grokipedia Encyclopedia', 'Grokipedia AI Knowledge Base'],
        description:
          'AI-optimized knowledge platform leveraging structured data and semantic web technologies for enhanced discoverability across AI search engines and knowledge graphs. Built with best practices for Generative Engine Optimization (GEO) and AI search visibility.',
        url: 'https://grokipedia.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://grokipedia.com/logo.png',
        },
        foundingDate: '2026',
        knowsAbout: [
          'Artificial Intelligence',
          'Machine Learning',
          'Knowledge Graphs',
          'Semantic Web',
          'Structured Data',
          'Schema.org',
          'JSON-LD',
          'Generative Engine Optimization',
          'AI Search Optimization',
          'Information Architecture',
          'Natural Language Processing',
          'Large Language Models',
          'Entity Recognition',
          'Knowledge Management',
        ],
        sameAs: [
          'https://x.com/grokipedia',
          'https://github.com/grokipedia',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://grokipedia.com#website',
        name: 'Grokipedia',
        url: 'https://grokipedia.com',
        description: 'AI-optimized knowledge platform with enhanced structured data',
        publisher: {
          '@id': 'https://grokipedia.com#organization',
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://grokipedia.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': pageType,
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Grokipedia Page',
        isPartOf: {
          '@id': 'https://grokipedia.com#website',
        },
        about: {
          '@id': 'https://grokipedia.com#organization',
        },
        inLanguage: 'en-US',
        isAccessibleForFree: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph, null, 2) }}
    />
  );
};

export default KnowledgeGraphSchema;

