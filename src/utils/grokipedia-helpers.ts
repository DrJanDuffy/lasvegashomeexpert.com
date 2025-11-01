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
      '@id': 'https://www.lasvegashomeexpert.com#website',
      name: 'Las Vegas Home Expert',
      url: 'https://www.lasvegashomeexpert.com',
    },
    dateModified: metadata.dateModified || new Date().toISOString(),
    inLanguage: 'en-US',
    about: {
      '@type': 'RealEstateAgent',
      '@id': 'https://www.lasvegashomeexpert.com#agent',
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
      : 'https://www.lasvegashomeexpert.com/dr-jan-duffy.jpg',
    datePublished: options?.datePublished || new Date().toISOString(),
    dateModified: options?.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: options?.author?.name || 'Dr. Jan Duffy',
      url: options?.author?.url || 'https://www.lasvegashomeexpert.com/about-dr-jan-duffy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Las Vegas Home Expert',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lasvegashomeexpert.com/logo.png',
      },
      url: 'https://www.lasvegashomeexpert.com',
    },
    articleSection: options?.articleSection || 'Real Estate',
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
 * Default organization data
 */
export const DEFAULT_ORGANIZATION = {
  '@type': 'RealEstateAgent',
  '@id': 'https://www.lasvegashomeexpert.com#agent',
  name: 'Dr. Jan Duffy',
  alternateName: ['Dr. Jan Duffy Real Estate', 'Las Vegas Home Expert'],
  url: 'https://www.lasvegashomeexpert.com',
  telephone: '702-222-1964',
  email: 'DrJanSells@LasVegasHomeExpert.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1700 S Pavilion Center Drive, Suite 140',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1699,
    longitude: -115.1398,
  },
  areaServed: [
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'City', name: 'Henderson' },
    { '@type': 'Place', name: 'Summerlin' },
    { '@type': 'Place', name: 'Red Rock Country Club' },
    { '@type': 'Place', name: 'The Ridges' },
  ],
  knowsAbout: [
    'Luxury Real Estate',
    'Real Estate Sales',
    'Home Buying',
    'Home Selling',
    'Property Investment',
  ],
  foundingDate: '2013',
  priceRange: '$500K - $5M+',
};

