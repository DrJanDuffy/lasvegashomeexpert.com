import type { FC } from 'react';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
}

const OrganizationSchema: FC<OrganizationSchemaProps> = ({
  name = 'Grokipedia',
  url = 'https://grokipedia.com',
  logo = 'https://grokipedia.com/logo.png',
  description = 'AI-optimized knowledge platform leveraging structured data, semantic web technologies, and advanced schema markup for enhanced discoverability across AI search engines and knowledge graphs.',
  contactPoint,
  address,
  sameAs = ['https://x.com/grokipedia', 'https://github.com/grokipedia'],
}) => {
  // 2026 Best Practices: Organization schema with clear entity relationships
  // Following Grok AI & Grokipedia optimization guidelines
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}#organization`,
    name,
    alternateName: ['Grokipedia Encyclopedia', 'Grokipedia AI Knowledge Base'],
    description,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
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
      'AI-Generated Content',
      'Knowledge Management',
      'Entity Recognition',
    ],
    ...(contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: contactPoint.telephone,
        email: contactPoint.email,
        contactType: contactPoint.contactType || 'Customer Service',
        availableLanguage: ['en'],
      },
    }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        addressRegion: address.addressRegion,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default OrganizationSchema;

