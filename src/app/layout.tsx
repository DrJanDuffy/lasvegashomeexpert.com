import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
        {/* RealScout Web Components Script - UNIVERSAL SETUP FOR EVERY PAGE */}
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
        />

        {/* RealScout Widget Styling */}
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              /* RealScout Widget Styling - Applied to every page */
              realscout-office-listings {
                --rs-listing-divider-color: rgb(101, 141, 172);
                width: 100%;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                min-height: 480px;
                z-index: 1000;
              }
              
              realscout-property-search {
                width: 100%;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                min-height: 480px;
                z-index: 1000;
              }
              
              realscout-property-details {
                --rs-listing-divider-color: rgb(101, 141, 172);
                width: 100%;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                min-height: 480px;
                z-index: 1000;
              }
              
              realscout-advanced-search {
                --rs-as-button-text-color: #ffffff;
                --rs-as-background-color: #ffffff;
                --rs-as-button-color: #1c71c3;
                --rs-as-widget-width: 500px !important;
                width: 100%;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1000;
              }
            `,
          }}
        />

        {/* RealScout Advanced Search Widget Styling */}
        <link rel="stylesheet" href="/styles/realscout-widgets.css" />

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
        <Header />
        {children}
        <Footer />
        <div id="root" />

        {/* Analytics and A/B Testing Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Critical path script loading sequence
              window.addEventListener('DOMContentLoaded', function() {
                // Initialize RealScout web components
                if (typeof window.customElements !== 'undefined') {
                  // RealScout components are loaded as web components
                  console.log('RealScout web components ready');
                }
                
                // Initialize other widgets after core dependencies
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
