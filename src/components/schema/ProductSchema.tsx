import type { FC } from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: number;
  priceCurrency?: string;
  availability?: string;
  condition?: string;
  brand?: string;
  category?: string;
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
    seller: {
      name: string;
    };
    url: string;
  }>;
}

const ProductSchema: FC<ProductSchemaProps> = ({
  name,
  description,
  image,
  price,
  priceCurrency = 'USD',
  availability = 'https://schema.org/InStock',
  condition = 'https://schema.org/NewCondition',
  brand = 'Dr. Jan Duffy Real Estate',
  category = 'Real Estate Services',
  aggregateRating,
  reviews = [],
  offers = [],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    category,
    condition,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency,
      lowPrice: price,
      highPrice: price,
      offerCount: offers.length || 1,
      availability,
      seller: {
        '@type': 'Organization',
        name: brand,
      },
      ...(offers.length > 0 && {
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 30,
        },
      }),
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductSchema;
