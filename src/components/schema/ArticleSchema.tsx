import type { FC } from 'react';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
    url?: string;
  };
  mainEntityOfPage?: string;
  articleSection?: string;
  keywords?: string[];
}

const ArticleSchema: FC<ArticleSchemaProps> = ({
  headline,
  description,
  image = 'https://lasvegashomeexpert.com/dr-jan-duffy.jpg',
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  author = {
    name: 'Dr. Jan Duffy',
    url: 'https://lasvegashomeexpert.com/about-dr-jan-duffy',
  },
  publisher = {
    name: 'Las Vegas Home Expert',
    logo: 'https://lasvegashomeexpert.com/logo.png',
    url: 'https://lasvegashomeexpert.com',
  },
  mainEntityOfPage,
  articleSection = 'Real Estate',
  keywords = [],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
      ...(publisher.url && { url: publisher.url }),
    },
    articleSection,
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(mainEntityOfPage && { mainEntityOfPage }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default ArticleSchema;
