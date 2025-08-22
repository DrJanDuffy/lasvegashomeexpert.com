// components/SEO.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  image?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical,
  noindex = false,
  image = '/default-og-image.jpg'
}: SEOProps) {
  const router = useRouter();
  const baseUrl = 'https://lasvegashomeexpert.com';
  const currentUrl = `${baseUrl}${router.asPath.split('?')[0]}`;
  const canonicalUrl = canonical || currentUrl;

  // Determine if page should be noindexed
  const shouldNoindex = noindex || 
    router.asPath.includes('/page/') ||
    router.asPath.includes('/author/') ||
    router.asPath.includes('/tag/') ||
    router.asPath.includes('/attachment/') ||
    router.asPath.match(/\/\d{4}(\/\d{2})?(\/\d{2})?/); // Date archives

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots meta tag */}
      <meta 
        name="robots" 
        content={shouldNoindex ? 'noindex, follow' : 'index, follow'} 
      />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
    </Head>
  );
}
