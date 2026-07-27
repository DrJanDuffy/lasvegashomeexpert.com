import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Las Vegas Home Expert | Real Estate Expert',
  description:
    'Get in touch with Dr. Jan Duffy for expert real estate services in Las Vegas. Available 24/7 via phone (702) 222-1964, email, or text. Berkshire Hathaway HomeServices.',
  keywords:
    'contact real estate agent Las Vegas, Dr. Jan Duffy contact, Las Vegas realtor phone, real estate consultation Las Vegas',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Las Vegas Home Expert',
    description:
      'Get in touch with Dr. Jan Duffy for expert real estate services in Las Vegas. Available 24/7.',
    url: 'https://lasvegashomeexpert.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
