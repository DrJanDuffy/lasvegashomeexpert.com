import type { FC } from 'react';

interface RealEstateBreadcrumbSchemaProps {
  pageType: 'neighborhood' | 'service' | 'guide' | 'about' | 'contact';
  pageName: string;
  area?: string;
}

const RealEstateBreadcrumbSchema: FC<RealEstateBreadcrumbSchemaProps> = ({
  pageType,
  pageName,
  area = 'Las Vegas',
}) => {
  const getBreadcrumbs = () => {
    const baseBreadcrumbs = [{ name: 'Home', url: 'https://lasvegashomeexpert.com/' }];

    switch (pageType) {
      case 'neighborhood':
        return [
          ...baseBreadcrumbs,
          { name: 'Neighborhoods', url: 'https://lasvegashomeexpert.com/neighborhoods' },
          {
            name: `${pageName} Homes`,
            url: `https://lasvegashomeexpert.com/neighborhoods/${pageName.toLowerCase().replace(/\s+/g, '-')}-homes`,
          },
        ];

      case 'service':
        return [
          ...baseBreadcrumbs,
          { name: 'Services', url: 'https://lasvegashomeexpert.com/services' },
          {
            name: pageName,
            url: `https://lasvegashomeexpert.com/services/${pageName.toLowerCase().replace(/\s+/g, '-')}`,
          },
        ];

      case 'guide':
        return [
          ...baseBreadcrumbs,
          { name: 'Guides', url: 'https://lasvegashomeexpert.com/guides' },
          {
            name: pageName,
            url: `https://lasvegashomeexpert.com/${pageName.toLowerCase().replace(/\s+/g, '-')}`,
          },
        ];

      case 'about':
        return [
          ...baseBreadcrumbs,
          { name: 'About', url: 'https://lasvegashomeexpert.com/about-dr-jan-duffy' },
        ];

      case 'contact':
        return [
          ...baseBreadcrumbs,
          { name: 'Contact', url: 'https://lasvegashomeexpert.com/contact' },
        ];

      default:
        return baseBreadcrumbs;
    }
  };

  const breadcrumbs = getBreadcrumbs();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url, // CRITICAL: This is the missing field Google requires
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default RealEstateBreadcrumbSchema;
