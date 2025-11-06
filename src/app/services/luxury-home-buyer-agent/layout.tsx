import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Home Buyer Agent Las Vegas | Dr. Jan Duffy | $1M+ Properties',
  description:
    'Expert luxury home buyer representation in Las Vegas. Dr. Jan Duffy specializes in high-end properties over $1M in Red Rock Country Club, The Ridges, and MacDonald Highlands.',
  keywords:
    'luxury home buyer agent Las Vegas, luxury realtor Las Vegas, high-end home buyer agent, $1M+ properties Las Vegas',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Luxury Home Buyer Agent Las Vegas | Dr. Jan Duffy',
    description: 'Expert luxury home buyer representation for properties over $1M in Las Vegas.',
    url: 'https://lasvegashomeexpert.com/services/luxury-home-buyer-agent',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/services/luxury-home-buyer-agent',
  },
};

export default function LuxuryHomeBuyerAgentLayout({ children }: { children: React.ReactNode }) {
  return children;
}

