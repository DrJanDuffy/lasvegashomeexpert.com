import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Home Buying Guide 2025 | Complete Buyer Guide | Dr. Jan Duffy',
  description:
    'Complete guide to buying a home in Las Vegas. Expert tips from Dr. Jan Duffy on pre-approval, finding properties, making offers, and closing. Free buyer consultation.',
  keywords:
    'Las Vegas home buying guide, first time home buyer Las Vegas, how to buy a house Las Vegas, home buying process, real estate buyer guide',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Las Vegas Home Buying Guide 2025 | Complete Buyer Guide',
    description: 'Expert guide to buying a home in Las Vegas with step-by-step process and insider tips.',
    url: 'https://lasvegashomeexpert.com/buying-guide-las-vegas',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/buying-guide-las-vegas',
  },
};

export default function BuyingGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}

