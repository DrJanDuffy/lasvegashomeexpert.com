import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import KnowledgeGraphSchema from '@/components/schema/KnowledgeGraphSchema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Las Vegas Home Expert - Your Trusted Real Estate Partner',
    template: '%s | Las Vegas Home Expert',
  },
  description:
    'Expert real estate services in Las Vegas, Summerlin, and Henderson. Find your dream home, get property valuations, and work with Dr. Jan Duffy, an experienced luxury real estate professional. RealScout, Homebot, and CloudCMA powered.',
  keywords: [
    'Las Vegas real estate',
    'luxury homes Las Vegas',
    'Summerlin homes',
    'Henderson real estate',
    'home buying Las Vegas',
    'home selling Las Vegas',
    'property valuation',
    'real estate expert',
    'Dr. Jan Duffy',
    'luxury realtor Las Vegas',
  ],
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://lasvegashomeexpert.com/about-dr-jan-duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Las Vegas Home Expert',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Las Vegas Home Expert - Luxury Real Estate Services',
    description: 'Your trusted luxury real estate partner in Las Vegas, Summerlin, and Henderson. Expert guidance for buying and selling homes.',
    url: 'https://lasvegashomeexpert.com',
    siteName: 'Las Vegas Home Expert',
    images: [
      {
        url: 'https://lasvegashomeexpert.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Home Expert - Luxury Real Estate Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Home Expert - Luxury Real Estate',
    description: 'Your trusted luxury real estate partner in Las Vegas',
    images: ['https://lasvegashomeexpert.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // To set up Google Search Console verification:
    // 1. Go to https://search.google.com/search-console
    // 2. Add property: lasvegashomeexpert.com
    // 3. Choose "HTML tag" verification method
    // 4. Copy the content value from the meta tag
    // 5. Replace the value below with your verification code
    // 6. Alternatively, add a google[VERIFICATION_CODE].html file to /public/
    google: 'your-google-verification-code-here',
    // You can also add other search engine verifications here:
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  metadataBase: new URL('https://lasvegashomeexpert.com'),
  alternates: {
    canonical: 'https://lasvegashomeexpert.com',
  },
  category: 'Real Estate',
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
        {/* Grokipedia & AI Optimization - Structured Data for Knowledge Graphs */}
        <OrganizationSchema />
        <KnowledgeGraphSchema pageUrl="https://lasvegashomeexpert.com" pageType="WebSite" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-57C81JLMQW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-57C81JLMQW');
          `}
        </Script>

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
