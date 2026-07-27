import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Agent Near Red Rock Casino | Dr. Jan Duffy | Local Expert',
  description:
    'Your local real estate expert near Red Rock Casino. Dr. Jan Duffy serves communities within 5 miles including Red Rock Country Club, The Ridges, and Summerlin West.',
  keywords:
    'real estate agent near Red Rock Casino, Red Rock Country Club realtor, Summerlin West real estate, The Ridges realtor, Dr. Jan Duffy',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Real Estate Agent Near Red Rock Casino | Dr. Jan Duffy',
    description: 'Local real estate expert serving communities near Red Rock Casino in Summerlin.',
    url: 'https://lasvegashomeexpert.com/real-estate-agent-near-red-rock-casino',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/real-estate-agent-near-red-rock-casino',
  },
};

export default function RedRockAgentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
