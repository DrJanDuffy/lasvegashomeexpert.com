import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Southern Highlands Homes for Sale | Las Vegas Luxury Real Estate | Dr. Jan Duffy',
  description:
    'Find luxury homes in Southern Highlands, Las Vegas. Elevated community with stunning views, custom estates, and world-class amenities. Dr. Jan Duffy specializes in this premier neighborhood.',
  keywords:
    'Southern Highlands homes for sale, Southern Highlands Las Vegas, luxury homes Southern Highlands, elevated community Las Vegas, Southern Highlands realtor',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Southern Highlands Homes for Sale | Las Vegas Luxury Real Estate',
    description: 'Elevated community with stunning views, custom estates, and world-class amenities.',
    url: 'https://lasvegashomeexpert.com/neighborhoods/southern-highlands-homes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/neighborhoods/southern-highlands-homes',
  },
};

export default function SouthernHighlandsHomesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

