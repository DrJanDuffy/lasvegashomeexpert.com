import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sun City Communities Homes for Sale | 55+ Active Adult Living | Dr. Jan Duffy',
  description:
    'Find homes in Sun City communities including Sun City Summerlin, Del Webb at Lake Las Vegas, and Anthem. 55+ active adult communities with resort-style amenities and golf courses.',
  keywords:
    'Sun City communities homes, Sun City Summerlin, Del Webb Las Vegas, 55+ communities Las Vegas, active adult communities',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Sun City Communities Homes for Sale | 55+ Active Adult Living',
    description: '55+ active adult communities with resort-style amenities and golf courses.',
    url: 'https://lasvegashomeexpert.com/neighborhoods/sun-city-communities-homes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/neighborhoods/sun-city-communities-homes',
  },
};

export default function SunCityCommunitiesHomesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

