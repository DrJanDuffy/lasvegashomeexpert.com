import type { FC } from 'react';

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  isPartOf?: {
    '@type': string;
    name: string;
    url: string;
  };
  breadcrumb?: {
    '@type': string;
    itemListElement: Array<{
      '@type': string;
      position: number;
      name: string;
      item: string;
    }>;
  };
  primaryImageOfPage?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': string;
    name: string;
  };
  mainEntity?: {
    '@type': string;
    [key: string]: any;
  };
}

const WebPageSchema: FC<WebPageSchemaProps> = ({
  name,
  description,
  url,
  isPartOf = {
    '@type': 'WebSite',
    name: 'Las Vegas Home Expert',
    url: 'https://www.lasvegashomeexpert.com',
  },
  breadcrumb,
  primaryImageOfPage,
  datePublished,
  dateModified = new Date().toISOString(),
  author = {
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
  },
  mainEntity,
}) => {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name,
    description,
    url,
    isPartOf,
    author,
    dateModified,
    inLanguage: 'en-US',
    ...(datePublished && { datePublished }),
    ...(primaryImageOfPage && {
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: primaryImageOfPage,
      },
    }),
    ...(breadcrumb && { breadcrumb }),
    ...(mainEntity && { mainEntity }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default WebPageSchema;

