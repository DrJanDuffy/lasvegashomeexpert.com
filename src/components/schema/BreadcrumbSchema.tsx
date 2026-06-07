import type { FC } from 'react';

/**
 * BreadcrumbList Schema Component - 2026 Best Practices
 *
 * Breadcrumb schema helps AI understand site hierarchy and navigation
 * Critical for entity relationships in knowledge graphs
 *
 * Best Practices:
 * - Include all levels of navigation
 * - Use absolute URLs
 * - Match actual visible breadcrumbs on page
 * - Position starts at 1 (not 0)
 *
 * @see https://schema.org/BreadcrumbList
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  /** Optional: Breadcrumb list ID for graph connections */
  id?: string;
}

const BreadcrumbSchema: FC<BreadcrumbSchemaProps> = ({ items, id }) => {
  // Always include Home as first item if not present
  const breadcrumbs = items[0]?.name === 'Home'
    ? items
    : [{ name: 'Home', url: 'https://grokipedia.com' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    ...(id && { '@id': id }),
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default BreadcrumbSchema;

/**
 * Helper function to automatically generate breadcrumbs from URL path
 *
 * @example
 * // For URL: https://grokipedia.com/topics/ai-search/grok
 * const breadcrumbs = generateBreadcrumbsFromPath('/topics/ai-search/grok');
 * // Returns: [
 * //   { name: 'Home', url: 'https://grokipedia.com' },
 * //   { name: 'Topics', url: 'https://grokipedia.com/topics' },
 * //   { name: 'AI Search', url: 'https://grokipedia.com/topics/ai-search' },
 * //   { name: 'Grok', url: 'https://grokipedia.com/topics/ai-search/grok' }
 * // ]
 */
export function generateBreadcrumbsFromPath(
  pathname: string,
  baseUrl = 'https://grokipedia.com'
): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: baseUrl }
  ];

  let currentPath = '';
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      name,
      url: `${baseUrl}${currentPath}`
    });
  });

  return breadcrumbs;
}

/**
 * Helper to create custom breadcrumb trails with smart URL building
 */
export function createBreadcrumbs(
  items: Array<{ name: string; path?: string }>,
  baseUrl = 'https://grokipedia.com'
): BreadcrumbItem[] {
  let currentPath = '';

  return items.map(item => {
    if (item.path) {
      currentPath = item.path;
    } else {
      const slug = item.name.toLowerCase().replace(/\s+/g, '-');
      currentPath = currentPath ? `${currentPath}/${slug}` : `/${slug}`;
    }

    return {
      name: item.name,
      url: item.name === 'Home' ? baseUrl : `${baseUrl}${currentPath}`
    };
  });
}
