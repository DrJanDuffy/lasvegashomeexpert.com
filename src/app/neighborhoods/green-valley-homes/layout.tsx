import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Valley Luxury Homes for Sale | Henderson Real Estate | Dr. Jan Duffy',
  description:
    'Find luxury homes in Green Valley, Henderson. Dr. Jan Duffy specializes in established communities with excellent schools, parks, and mature amenities. Median price $750K.',
  keywords:
    'Green Valley homes for sale, Green Valley Henderson real estate, luxury homes Green Valley, Henderson realtor, Green Valley neighborhoods',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Green Valley Luxury Homes for Sale | Henderson Real Estate',
    description:
      'Find luxury homes in Green Valley, Henderson with excellent schools and mature amenities.',
    url: 'https://lasvegashomeexpert.com/neighborhoods/green-valley-homes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/neighborhoods/green-valley-homes',
  },
};

export default function GreenValleyHomesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
