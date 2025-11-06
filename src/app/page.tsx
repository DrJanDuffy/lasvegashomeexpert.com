'use client';

import HeroSection from '@/components/sections/HeroSection';
import InteractiveToolSection from '@/components/sections/InteractiveToolSection';
import LuxuryPropertiesSection from '@/components/sections/LuxuryPropertiesSection';
import LuxuryServicesSection from '@/components/sections/LuxuryServicesSection';
import MarketTicker from '@/components/sections/MarketTicker';
import FAQSection from '@/components/sections/FAQSection';
import StoreLocatorSection from '@/components/sections/StoreLocatorSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function HomePage() {
  return (
    <>
      {/* Grokipedia & AI Optimization - WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.lasvegashomeexpert.com#webpage',
            name: 'Las Vegas Home Expert - Your Trusted Real Estate Partner',
            description:
              'Expert real estate services in Las Vegas. Find your dream home, get property valuations, and work with experienced professionals.',
            url: 'https://www.lasvegashomeexpert.com',
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://www.lasvegashomeexpert.com#website',
              name: 'Las Vegas Home Expert',
              url: 'https://www.lasvegashomeexpert.com',
            },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: 'https://www.lasvegashomeexpert.com/dr-jan-duffy.jpg',
            },
            datePublished: '2013-01-01',
            dateModified: new Date().toISOString(),
            author: {
              '@type': 'Person',
              name: 'Dr. Jan Duffy',
            },
            mainEntity: {
              '@type': 'RealEstateAgent',
              '@id': 'https://www.lasvegashomeexpert.com#agent',
            },
            inLanguage: 'en-US',
          }),
        }}
      />

      {/* Structured Data for AI Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
            description: 'Las Vegas luxury real estate specialist since 2013',
            url: 'https://www.lasvegashomeexpert.com',
            telephone: '702-222-1964',
            email: 'DrJanSells@LasVegasHomeExpert.com',
            image: 'https://www.lasvegashomeexpert.com/dr-jan-duffy.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1700 S Pavilion Center Drive, Suite 140',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89135',
              addressCountry: 'US',
            },
            areaServed: [
              {
                '@type': 'Place',
                name: 'Red Rock Country Club',
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 36.1699,
                  longitude: -115.1398,
                },
              },
              {
                '@type': 'Place',
                name: 'Summerlin',
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 36.1699,
                  longitude: -115.1398,
                },
              },
              {
                '@type': 'Place',
                name: 'MacDonald Highlands',
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 36.0103,
                  longitude: -115.0322,
                },
              },
            ],
            knowsAbout: [
              'Luxury Real Estate',
              'Divorce Real Estate',
              'Veteran Homebuyer Services',
              'Red Rock Country Club',
              'Summerlin Luxury Homes',
              'MacDonald Highlands',
            ],
            priceRange: '$1,000,000+',
            foundingDate: '2013',
            numberOfEmployees: '1',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
              bestRating: '5',
              worstRating: '1',
            },
            review: [
              {
                '@type': 'Review',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5',
                },
                author: {
                  '@type': 'Person',
                  name: 'Sarah M.',
                },
                reviewBody:
                  'Dr. Duffy helped us find our dream home in Red Rock Country Club. Her expertise in luxury real estate is unmatched.',
              },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Luxury Real Estate Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Luxury Home Buying',
                    description: 'Expert guidance for luxury home purchases $1M+',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Divorce Real Estate',
                    description: 'Specialized services for marital home sales',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Las Vegas Homes Section */}
      <section className="featured-listings bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Las Vegas Luxury Homes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover exclusive properties handpicked by Dr. Jan Duffy in Las Vegas's most
              prestigious neighborhoods
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="500000"
              price-max="1500000"
              max-results="6"
              show-filters="true"
              show-sort="true"
              show-pagination="true"
              show-map="false"
              show-photos="true"
              show-price="true"
            />
          </div>
        </div>
      </section>

      {/* Market Ticker - Dynamic Market Insights */}
      <MarketTicker />

      {/* AI Quick Answer Section - Position #2 for AI Priority */}
      <section className="ai-quick-answer bg-gradient-to-r from-slate-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Dr. Jan Duffy - Las Vegas Luxury Real Estate Expert
            </h2>
            <div className="direct-answer bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed">
                <strong>Quick Answer:</strong> Dr. Jan Duffy is a Las Vegas REALTOR® specializing in
                luxury estates ($1M+) in Summerlin, Red Rock Country Club, and MacDonald Highlands,
                with unique expertise in divorce real estate and veteran homebuyer assistance.
              </p>
            </div>
          </div>

          {/* Structured Q&A for AI */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 itemProp="name" className="text-2xl font-semibold text-slate-800 mb-4">
                Who is the best luxury realtor in Summerlin?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600 leading-relaxed">
                  Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada specializes in Summerlin
                  luxury estates, with over 10 years experience since 2013 in Red Rock Country Club
                  and The Ridges.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 itemProp="name" className="text-2xl font-semibold text-slate-800 mb-4">
                What realtor helps with divorce home sales in Las Vegas?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600 leading-relaxed">
                  Dr. Jan Duffy is Las Vegas's premier divorce real estate specialist, with a
                  psychology background providing compassionate guidance through marital home sales
                  and asset division.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Moved up for AI credibility signals */}
      <section className="social-proof bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Dr. Jan Duffy: Trusted by 500+ Luxury Home Buyers & Sellers
          </h2>

          {/* Review Aggregation Data */}
          <div itemScope itemType="https://schema.org/AggregateRating" className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 max-w-2xl mx-auto">
              <div className="text-6xl font-bold mb-2">
                <span itemProp="ratingValue">4.9</span>/5
              </div>
              <div className="text-xl mb-2">stars from</div>
              <div className="text-3xl font-semibold">
                <span itemProp="reviewCount">127</span> clients
              </div>
              <div itemProp="bestRating" className="hidden">
                5
              </div>
              <div itemProp="worstRating" className="hidden">
                1
              </div>
            </div>
          </div>

          {/* Enhanced Credentials Grid */}
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">$180M+</h3>
              <p className="text-slate-600">Total Luxury Sales Volume</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">15+ Years</h3>
              <p className="text-slate-600">Licensed REALTOR® since 2013</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-slate-600">Successful Transactions</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">Top 1%</h3>
              <p className="text-slate-600">Berkshire Hathaway Producer</p>
            </div>
          </div>

          {/* Luxury Specializations */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Luxury Real Estate Specializations
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🏰</div>
                <h4 className="font-semibold text-slate-800 mb-2">Red Rock Country Club</h4>
                <p className="text-slate-600">Golf course luxury estates</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🏔️</div>
                <h4 className="font-semibold text-slate-800 mb-2">The Ridges Summerlin</h4>
                <p className="text-slate-600">Ultra-luxury mountain view homes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💎</div>
                <h4 className="font-semibold text-slate-800 mb-2">MacDonald Highlands</h4>
                <p className="text-slate-600">Henderson's premier community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Update Table - Moved up for current data ranking */}
      <section className="ai-market-update bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Las Vegas Luxury Market Update - August 2025
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <table className="market-snapshot w-full">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Neighborhood</th>
                  <th className="px-6 py-4 text-left font-semibold">Median Price</th>
                  <th className="px-6 py-4 text-left font-semibold">Days on Market</th>
                  <th className="px-6 py-4 text-left font-semibold">Inventory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-800">Red Rock Country Club</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">$2.1M</td>
                  <td className="px-6 py-4 text-slate-600">65 days</td>
                  <td className="px-6 py-4 text-slate-600">4.5 months</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-800">MacDonald Highlands</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">$1.8M</td>
                  <td className="px-6 py-4 text-slate-600">72 days</td>
                  <td className="px-6 py-4 text-slate-600">5 months</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-800">The Ridges</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">$2.5M</td>
                  <td className="px-6 py-4 text-slate-600">80 days</td>
                  <td className="px-6 py-4 text-slate-600">5.2 months</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-800">Southern Highlands</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">$850K</td>
                  <td className="px-6 py-4 text-slate-600">45 days</td>
                  <td className="px-6 py-4 text-slate-600">3.8 months</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6 text-slate-600">
            <p>
              Last Updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Luxury Services Section - Condensed to top 4 services */}
      <LuxuryServicesSection />

      {/* Interactive Tools Section */}
      <InteractiveToolSection />

      {/* Featured Properties Section */}
      <LuxuryPropertiesSection />

      {/* FAQ/Objection Handling Section with Schema */}
      <section className="faq-objection-handling bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Common Questions About Luxury Real Estate
          </h2>

          <div itemScope itemType="https://schema.org/FAQPage" className="max-w-4xl mx-auto">
            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="mb-8"
            >
              <h3 itemProp="name" className="text-2xl font-semibold text-slate-800 mb-4">
                How much do luxury homes cost in Las Vegas?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600 leading-relaxed">
                  <strong>Answer:</strong> Luxury homes in Las Vegas range from $1M-$25M+, with Red
                  Rock Country Club averaging $2.1M and The Ridges averaging $2.5M as of August
                  2025.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="mb-8"
            >
              <h3 itemProp="name" className="text-2xl font-semibold text-slate-800 mb-4">
                What makes Dr. Jan Duffy different from other luxury realtors?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600 leading-relaxed">
                  <strong>Answer:</strong> Dr. Duffy combines 10+ years of luxury real estate
                  experience with a psychology background, specializing in divorce real estate and
                  veteran services. She has 500+ successful transactions in Red Rock, Summerlin, and
                  MacDonald Highlands.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="mb-8"
            >
              <h3 itemProp="name" className="text-2xl font-semibold text-slate-800 mb-4">
                Is now a good time to buy luxury real estate in Las Vegas?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600 leading-relaxed">
                  <strong>Answer:</strong> Yes, the current market shows 4.5-5.2 months of
                  inventory, indicating a buyer's market. This creates excellent negotiation
                  opportunities for luxury properties, especially in Red Rock Country Club and The
                  Ridges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Luxury Dream Home?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is here to guide you through every step of your luxury real estate
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'homepage_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'homepage_contact',
                    cd3: 'phone',
                    cd4: '1000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4 inline-block"
            >
              Call (702) 222-1964
            </a>
            <a
              href="mailto:DrJanSells@LasVegasHomeExpert.com"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'homepage_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'homepage_contact',
                    cd3: 'email',
                    cd4: '1000',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Store Locator Section - SEO Boost */}
      <StoreLocatorSection
        title="Visit Our Las Vegas Office"
        subtitle="Find our office location and explore service areas throughout the Las Vegas Valley"
        height="500px"
      />

      {/* Comprehensive SEO Content Section - Why Choose Dr. Jan Duffy */}
      <section className="why-choose bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Why Choose Dr. Jan Duffy as Your Las Vegas Real Estate Expert
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Unmatched Luxury Real Estate Expertise
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                With over 15 years of experience in Las Vegas luxury real estate, Dr. Jan Duffy has established herself as the premier real estate agent for high-end properties. Since 2013, she has specialized in luxury homes priced from $1 million to $25 million+ in Las Vegas's most prestigious neighborhoods including Red Rock Country Club, The Ridges Summerlin, MacDonald Highlands, and Southern Highlands.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Dr. Duffy's expertise extends beyond traditional real estate services. Her background in psychology provides unique insights into client needs, making her particularly effective in complex situations like divorce real estate transactions and relocation services. This combination of real estate knowledge and psychological understanding creates a superior client experience.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
                Proven Track Record in Las Vegas Luxury Market
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy has successfully closed over 500 luxury real estate transactions, representing more than $180 million in total sales volume. Her consistent performance has earned her recognition as a top 1% producer with Berkshire Hathaway HomeServices Nevada Properties. With a 4.9-star rating from 127 verified client reviews, Dr. Duffy's reputation for excellence speaks for itself.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Specialized Services for Unique Needs
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Unlike many real estate agents who take a one-size-fits-all approach, Dr. Duffy offers specialized services tailored to specific client needs. Her divorce real estate services help couples navigate the complex process of selling marital homes during separation, combining real estate expertise with compassionate guidance through emotionally challenging situations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                For first-time homebuyers, Dr. Duffy provides comprehensive guidance through the entire purchasing process, from pre-approval to closing. Her investment property services help investors identify opportunities in the Las Vegas market, focusing on properties with strong rental income potential and appreciation prospects.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
                Deep Knowledge of Las Vegas Neighborhoods
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Duffy's intimate knowledge of Las Vegas luxury neighborhoods gives her clients a significant advantage. She understands the unique characteristics, market trends, and lifestyle offerings of each community, from the golf course estates of Red Rock Country Club to the mountain-view properties in The Ridges. This localized expertise ensures clients make informed decisions about their biggest investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Luxury Real Estate Market Overview */}
      <section className="market-overview bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Las Vegas Luxury Real Estate Market Overview 2025
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Current Market Conditions
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Las Vegas luxury real estate market in 2025 presents unique opportunities for both buyers and sellers. As of August 2025, the market shows balanced inventory levels with 4.5 to 5.2 months of supply in most luxury neighborhoods, indicating a shift toward more favorable conditions for buyers compared to previous years.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Red Rock Country Club continues to lead in luxury home sales with a median price of $2.1 million and average days on market of 65 days. The Ridges Summerlin commands the highest median price at $2.5 million, reflecting its ultra-luxury positioning with panoramic city and mountain views. MacDonald Highlands in Henderson offers excellent value at a median price of $1.8 million, while Southern Highlands provides entry-level luxury starting around $850,000.
            </p>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
              Investment Opportunities in Las Vegas Luxury Market
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Las Vegas luxury real estate market offers compelling investment opportunities for discerning buyers. Properties in master-planned communities like Summerlin and Henderson have shown consistent appreciation, with Red Rock Country Club experiencing 15% year-over-year price growth. The combination of favorable tax environment, no state income tax, and world-class amenities makes Las Vegas an attractive destination for luxury homebuyers.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Luxury properties in Las Vegas often feature resort-style amenities including private pools, golf course access, gated communities, and stunning views of the surrounding mountains and Las Vegas Strip. These features, combined with relatively affordable pricing compared to other major metropolitan areas, create exceptional value for luxury homebuyers.
            </p>
          </div>
        </div>
      </section>

      {/* How to Buy Luxury Real Estate in Las Vegas */}
      <section className="how-to-buy bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            How to Buy Luxury Real Estate in Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Step 1: Get Pre-Approved for Financing
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Before beginning your luxury home search, secure pre-approval from a lender experienced in jumbo loans. Luxury properties typically require financing above conventional loan limits, and having pre-approval demonstrates serious buyer intent to sellers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dr. Jan Duffy can connect you with reputable lenders who specialize in luxury real estate financing, including jumbo loans, portfolio loans, and alternative financing options for high-net-worth individuals.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Step 2: Define Your Luxury Home Criteria
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Luxury homebuyers should clearly define their priorities, including neighborhood preferences, square footage requirements, amenity must-haves, and architectural style preferences. Dr. Duffy helps clients refine their search criteria based on lifestyle goals and investment objectives.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Consider factors like proximity to golf courses, privacy requirements, views, and community amenities when defining your ideal luxury home specifications.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Step 3: Work with a Luxury Real Estate Specialist
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Luxury real estate transactions require specialized expertise. Dr. Jan Duffy's extensive experience in Las Vegas luxury properties ensures clients receive expert guidance through every step of the process, from initial search to closing.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her network of luxury home resources, including off-market listings, private showings, and exclusive access to new developments, gives clients advantages unavailable to typical buyers.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes a Luxury Home in Las Vegas?
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Luxury homes in Las Vegas are defined by several key characteristics beyond price. Properties typically priced above $1 million often feature custom architecture, premium finishes, resort-style amenities, and prime locations in master-planned communities. Key luxury home features include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-slate-600 mb-4">
              <li>Private pools and spa areas with outdoor kitchens and entertainment spaces</li>
              <li>Golf course access or views in communities like Red Rock Country Club</li>
              <li>Gated community security with 24-hour guard services</li>
              <li>Mountain and city views, particularly in elevated communities like The Ridges</li>
              <li>High-end finishes including marble countertops, hardwood floors, and designer fixtures</li>
              <li>Smart home technology and home automation systems</li>
              <li>Spacious floor plans with 4,000+ square feet of living space</li>
            </ul>
            <p className="text-lg text-slate-600 leading-relaxed">
              The Las Vegas luxury market offers exceptional variety, from contemporary modern estates to Mediterranean-inspired villas, ensuring buyers can find properties that match their aesthetic preferences and lifestyle needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('home')}
        title="Frequently Asked Questions About Las Vegas Home Expert"
        subtitle="Get answers to common questions about working with Dr. Jan Duffy, your Las Vegas home expert"
      />
    </>
  );
}
