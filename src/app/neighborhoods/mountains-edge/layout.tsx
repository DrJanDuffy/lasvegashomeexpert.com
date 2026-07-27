import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mountains Edge Homes for Sale | Las Vegas Real Estate | Dr. Jan Duffy',
  description:
    'Discover homes in Mountains Edge, Las Vegas. Family-friendly community with new construction, excellent schools, and mountain views. Dr. Jan Duffy specializes in this growing area.',
  keywords:
    'Mountains Edge homes for sale, Mountains Edge Las Vegas, new construction Mountains Edge, Mountains Edge realtor, Mountains Edge neighborhoods',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Mountains Edge Homes for Sale | Las Vegas Real Estate',
    description:
      'Family-friendly community with new construction, excellent schools, and mountain views.',
    url: 'https://lasvegashomeexpert.com/neighborhoods/mountains-edge',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/neighborhoods/mountains-edge',
  },
};

export default function MountainsEdgeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
