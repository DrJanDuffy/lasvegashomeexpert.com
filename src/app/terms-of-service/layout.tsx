import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Las Vegas Home Expert | Dr. Jan Duffy',
  description:
    'Terms of service for Las Vegas Home Expert real estate services. Professional real estate consultation, property services, and transaction support terms.',
  keywords: 'terms of service, real estate terms, Las Vegas realtor terms',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | Las Vegas Home Expert',
    description: 'Terms of service for Las Vegas Home Expert real estate services.',
    url: 'https://lasvegashomeexpert.com/terms-of-service',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/terms-of-service',
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}

