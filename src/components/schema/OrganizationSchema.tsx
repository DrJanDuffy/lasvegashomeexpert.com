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
  name = 'Las Vegas Home Expert',
  url = 'https://www.lasvegashomeexpert.com',
  logo = 'https://www.lasvegashomeexpert.com/logo.png',
  description = 'Las Vegas luxury real estate specialist providing expert services for buying, selling, and investing in luxury properties throughout the Las Vegas Valley.',
  contactPoint = {
    telephone: '702-222-1964',
    email: 'DrJanSells@LasVegasHomeExpert.com',
    contactType: 'Customer Service',
  },
  address = {
    streetAddress: '1700 S Pavilion Center Drive, Suite 140',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    addressCountry: 'US',
  },
  sameAs = [],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${url}#organization`,
    name,
    alternateName: 'Dr. Jan Duffy Real Estate',
    description,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
    },
    image: 'https://www.lasvegashomeexpert.com/dr-jan-duffy.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactPoint.telephone,
      email: contactPoint.email,
      contactType: contactPoint.contactType,
      areaServed: 'US',
      availableLanguage: ['en', 'es'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        containedIn: {
          '@type': 'State',
          name: 'Nevada',
        },
      },
      {
        '@type': 'Place',
        name: 'Summerlin',
      },
      {
        '@type': 'Place',
        name: 'Henderson',
      },
    ],
    knowsAbout: [
      'Real Estate',
      'Luxury Real Estate',
      'Real Estate Brokerage',
      'Home Buying',
      'Home Selling',
      'Real Estate Investment',
      'Property Management',
      'Real Estate Consultation',
      'Divorce Real Estate',
      'Veteran Real Estate Services',
    ],
    serviceType: [
      'Real Estate Agent Services',
      'Luxury Home Sales',
      'Home Buying Assistance',
      'Property Valuation',
      'Real Estate Investment Consulting',
    ],
    foundingDate: '2013',
    founder: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
    },
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

