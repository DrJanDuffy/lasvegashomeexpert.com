import type { FC } from 'react';

interface KnowledgeGraphSchemaProps {
  pageUrl: string;
  pageType?: string;
}

const KnowledgeGraphSchema: FC<KnowledgeGraphSchemaProps> = ({ pageUrl, pageType = 'WebPage' }) => {
  // Comprehensive knowledge graph data for AI consumption
  const knowledgeGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': 'https://lasvegashomeexpert.com#agent',
        name: 'Dr. Jan Duffy',
        alternateName: ['Dr. Jan Duffy Real Estate', 'Las Vegas Home Expert'],
        description:
          'Las Vegas luxury real estate specialist with 10+ years of experience, specializing in luxury homes, divorce real estate, and veteran services throughout the Las Vegas Valley.',
        url: 'https://lasvegashomeexpert.com',
        telephone: '702-222-1964',
        email: 'DrJanSells@LasVegasHomeExpert.com',
        image: 'https://lasvegashomeexpert.com/dr-jan-duffy.jpg',
        jobTitle: 'Real Estate Agent',
        worksFor: {
          '@type': 'RealEstateAgent',
          name: 'Berkshire Hathaway HomeServices Nevada Properties',
        },
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
          { '@type': 'Place', name: 'MacDonald Highlands' },
          { '@type': 'Place', name: 'Southern Highlands' },
        ],
        knowsAbout: [
          'Luxury Real Estate',
          'Real Estate Sales',
          'Home Buying',
          'Home Selling',
          'Property Investment',
          'Divorce Real Estate',
          'Veteran Real Estate Services',
          'Real Estate Market Analysis',
          'Property Valuation',
          'Real Estate Negotiation',
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Real Estate License',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Nevada Real Estate Division',
            },
          },
        ],
        award: ['Top 1% Producer', 'Luxury Home Specialist', 'Veteran Service Recognition'],
        foundingDate: '2013',
        priceRange: '$500K - $5M+',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://lasvegashomeexpert.com#organization',
        name: 'Las Vegas Home Expert',
        alternateName: 'Dr. Jan Duffy Real Estate',
        url: 'https://lasvegashomeexpert.com',
        logo: 'https://lasvegashomeexpert.com/logo.png',
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '702-222-1964',
          email: 'DrJanSells@LasVegasHomeExpert.com',
          contactType: 'Customer Service',
          areaServed: 'US',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1700 S Pavilion Center Drive, Suite 140',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89135',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lasvegashomeexpert.com#website',
        name: 'Las Vegas Home Expert',
        url: 'https://lasvegashomeexpert.com',
        publisher: {
          '@id': 'https://lasvegashomeexpert.com#organization',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': pageType,
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        isPartOf: {
          '@id': 'https://lasvegashomeexpert.com#website',
        },
        about: {
          '@id': 'https://lasvegashomeexpert.com#agent',
        },
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
