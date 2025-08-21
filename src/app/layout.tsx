import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Las Vegas Home Expert - Your Trusted Real Estate Partner',
  description:
    'Expert real estate services in Las Vegas. Find your dream home, get property valuations, and work with experienced professionals. RealScout, Homebot, and CloudCMA powered.',
  keywords:
    'Las Vegas real estate, home buying, home selling, property valuation, real estate expert',
  authors: [{ name: 'Dr. Jan Duffy' }],
  openGraph: {
    title: 'Las Vegas Home Expert',
    description: 'Your trusted real estate partner in Las Vegas',
    url: 'https://lasvegashomeexpert.com',
    siteName: 'Las Vegas Home Expert',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Home Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Home Expert',
    description: 'Your trusted real estate partner in Las Vegas',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* RealScout v3 API Script */}
        <script
          src="https://cdn.realscout.com/v3/realscout.js"
          integrity="sha384-your-integrity-hash"
          crossOrigin="anonymous"
          async
        />

        {/* Homebot Script */}
        <script
          src="https://cdn.homebot.com/widget.js"
          integrity="sha384-your-integrity-hash"
          crossOrigin="anonymous"
          async
        />

        {/* CloudCMA Script */}
        <script
          src="https://cdn.cloudcma.com/widget.js"
          integrity="sha384-your-integrity-hash"
          crossOrigin="anonymous"
          async
        />

        {/* Percy.ai HVS-Autocomplete Script */}
        <script
          src="https://cdn.percy.ai/hvs-autocomplete.js"
          integrity="sha384-your-integrity-hash"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 antialiased`}>
        <div id="root">{children}</div>

        {/* Analytics and A/B Testing Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Critical path script loading sequence
              window.addEventListener('DOMContentLoaded', function() {
                // Initialize core dependencies
                if (typeof window.RealScout !== 'undefined') {
                  window.RealScout.init({
                    apiKey: process.env.NEXT_PUBLIC_REALSCOUT_API_KEY
                  });
                }
                
                // Initialize widgets after core dependencies
                setTimeout(() => {
                  if (typeof window.Homebot !== 'undefined') {
                    window.Homebot.init();
                  }
                  if (typeof window.CloudCMA !== 'undefined') {
                    window.CloudCMA.init();
                  }
                  if (typeof window.PercyAI !== 'undefined') {
                    window.PercyAI.init();
                  }
                }, 100);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
