import type { FC } from 'react';

interface RealEstateServiceSchemaProps {
  name: string;
  description: string;
  image: string;
  serviceType: string;
  areaServed: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  reviews?: Array<{
    author: string;
    reviewBody: string;
    reviewRating: {
      ratingValue: number;
    };
    datePublished: string;
  }>;
  offers?: Array<{
    price: number;
    priceCurrency: string;
    availability: string;
    description: string;
  }>;
}

const RealEstateServiceSchema: FC<RealEstateServiceSchemaProps> = ({
  name,
  description,
  image,
  serviceType,
  areaServed,
  aggregateRating,
  reviews = [],
  offers = [],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name,
    description,
    image,
    serviceType,
    areaServed: {
      '@type': 'Place',
      name: areaServed,
    },
    brand: {
      '@type': 'Brand',
      name: 'Dr. Jan Duffy Real Estate',
    },
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    ...(reviews.length > 0 && {
      review: reviews.map((review) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author,
        },
        reviewBody: review.reviewBody,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.reviewRating.ratingValue,
          bestRating: 5,
          worstRating: 1,
        },
        datePublished: review.datePublished,
      })),
    }),
    ...(offers.length > 0 && {
      makesOffer: offers.map((offer) => ({
        '@type': 'Offer',
        price: offer.price,
        priceCurrency: offer.priceCurrency,
        availability: offer.availability,
        description: offer.description,
        seller: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default RealEstateServiceSchema;
