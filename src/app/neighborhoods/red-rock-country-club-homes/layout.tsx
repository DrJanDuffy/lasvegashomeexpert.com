import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Red Rock Country Club Homes for Sale | Summerlin Luxury Properties | Dr. Jan Duffy',
  description:
    'Browse luxury homes for sale in Red Rock Country Club, Summerlin. Exclusive golf community with estates over $1M, mountain views, and resort-style amenities.',
  keywords:
    'Red Rock Country Club homes for sale, Red Rock Country Club properties, luxury homes Red Rock, golf community homes Summerlin',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Red Rock Country Club Homes for Sale | Summerlin Luxury Properties',
    description:
      'Browse luxury homes in exclusive golf community with estates over $1M and mountain views.',
    url: 'https://lasvegashomeexpert.com/neighborhoods/red-rock-country-club-homes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/neighborhoods/red-rock-country-club-homes',
  },
};

export default function RedRockCountryClubHomesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
