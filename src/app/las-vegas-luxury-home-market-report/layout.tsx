import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Luxury Home Market Report 2025 | Market Analysis | Dr. Jan Duffy',
  description:
    'Comprehensive Las Vegas luxury real estate market report with current trends, pricing data, inventory levels, and expert insights from Dr. Jan Duffy. Updated monthly.',
  keywords:
    'Las Vegas luxury home market report, Las Vegas real estate market trends, luxury home prices Las Vegas, market analysis Las Vegas',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Las Vegas Luxury Home Market Report 2025 | Market Analysis',
    description:
      'Comprehensive Las Vegas luxury real estate market report with current trends and expert insights.',
    url: 'https://lasvegashomeexpert.com/las-vegas-luxury-home-market-report',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/las-vegas-luxury-home-market-report',
  },
};

export default function MarketReportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
