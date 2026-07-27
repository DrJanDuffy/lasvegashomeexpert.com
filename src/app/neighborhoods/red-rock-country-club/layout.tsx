import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Red Rock Country Club Homes | Summerlin Luxury Real Estate | Dr. Jan Duffy',
  description:
    'Luxury homes in Red Rock Country Club, Summerlin. Exclusive golf community with custom estates, mountain views, and world-class amenities. Dr. Jan Duffy specializes in this premier neighborhood.',
  keywords:
    'Red Rock Country Club homes, Red Rock Country Club Summerlin, luxury homes Red Rock, golf community Las Vegas, Red Rock realtor',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Red Rock Country Club Homes | Summerlin Luxury Real Estate',
    description:
      'Exclusive golf community with custom estates, mountain views, and world-class amenities.',
    url: 'https://lasvegashomeexpert.com/neighborhoods/red-rock-country-club',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/neighborhoods/red-rock-country-club',
  },
};

export default function RedRockCountryClubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
