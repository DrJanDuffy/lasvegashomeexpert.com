import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '55+ Communities Las Vegas | Active Adult Living | Dr. Jan Duffy',
  description:
    'Find the perfect 55+ active adult community in Las Vegas. Dr. Jan Duffy specializes in Sun City, Del Webb, and Anthem communities with resort-style amenities and golf courses.',
  keywords:
    '55 plus communities Las Vegas, active adult communities Las Vegas, Sun City Summerlin, Del Webb Las Vegas, retirement communities Las Vegas',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '55+ Communities Las Vegas | Active Adult Living | Dr. Jan Duffy',
    description:
      'Expert guide to 55+ active adult communities in Las Vegas with resort-style amenities and golf courses.',
    url: 'https://lasvegashomeexpert.com/55-plus-communities-las-vegas',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/55-plus-communities-las-vegas',
  },
};

export default function FiftyFivePlusCommunitiesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
