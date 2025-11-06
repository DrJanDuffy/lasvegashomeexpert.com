import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First Time Home Buyer Las Vegas | Complete Guide | Dr. Jan Duffy',
  description:
    'First time home buyer guide for Las Vegas. Learn about down payment assistance, FHA loans, VA loans, and first-time buyer programs. Expert guidance from Dr. Jan Duffy.',
  keywords:
    'first time home buyer Las Vegas, first time buyer programs Las Vegas, FHA loans Las Vegas, down payment assistance Las Vegas, first time buyer guide',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'First Time Home Buyer Las Vegas | Complete Guide | Dr. Jan Duffy',
    description: 'Expert guide for first-time home buyers in Las Vegas with programs, loans, and step-by-step process.',
    url: 'https://lasvegashomeexpert.com/first-time-home-buyer-las-vegas',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/first-time-home-buyer-las-vegas',
  },
};

export default function FirstTimeHomeBuyerLayout({ children }: { children: React.ReactNode }) {
  return children;
}

