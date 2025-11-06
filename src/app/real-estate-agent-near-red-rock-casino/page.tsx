import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Agent Near Red Rock Casino | Dr. Jan Duffy',
  description:
    'Your local real estate expert near Red Rock Casino. Dr. Jan Duffy serves communities within 5 miles including Red Rock Country Club, The Ridges, and Summerlin West.',
  keywords:
    'real estate agent near Red Rock Casino, Red Rock Country Club, The Ridges, Summerlin West, Dr. Jan Duffy',
  openGraph: {
    title: 'Real Estate Agent Near Red Rock Casino | Dr. Jan Duffy',
    description: 'Local real estate expert serving communities near Red Rock Casino in Summerlin.',
    type: 'website',
    url: 'https://lasvegashomeexpert.com/real-estate-agent-near-red-rock-casino',
  },
};

export default function RealEstateAgentNearRedRockCasinoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Schema for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1700 S Pavilion Center Drive, Suite 140',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89135',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.1699,
              longitude: -115.1398,
            },
            areaServed: {
              '@type': 'Place',
              name: 'Red Rock Casino Area',
            },
            knowsAbout: ['Luxury Real Estate', 'Red Rock Country Club', 'The Ridges'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Local Real Estate Expert Near Red Rock Casino
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Dr. Jan Duffy serves the prestigious communities surrounding Red Rock Casino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-primary px-8 py-4 text-lg">
                Schedule Local Consultation
              </button>
              <button type="button" className="btn-secondary px-8 py-4 text-lg">
                View Area Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Geo-Optimized Content */}
      <section className="location-specific py-16">
        <div className="container-responsive">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury-lg max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Location & Service Area
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-400">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-4">
                <strong>Location:</strong> Serving communities within 5 miles of Red Rock Casino
                including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-slate-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  Red Rock Country Club (0.5 miles)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  The Ridges (2 miles)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  Summerlin West (1 mile)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  Downtown Summerlin (3 miles)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Near Me Optimization */}
      <section className="near-me-content py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Dr. Duffy Near Red Rock?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Local expertise and convenient access to Red Rock Casino area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Convenient Location</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Office 5 minutes from Red Rock Casino
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Specializes in Red Rock Country Club listings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Lives in the Summerlin area
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Available for showings 7 days a week
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Market Knowledge</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Deep understanding of Red Rock area values
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Relationships with local HOA boards
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Knowledge of upcoming developments
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Access to off-market properties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Area Highlights */}
      <section className="area-highlights py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Red Rock Casino Area Highlights
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover why this area is one of Las Vegas's most prestigious locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Red Rock Casino',
                description: 'World-class entertainment and dining just minutes away',
                icon: '🎰',
                features: ['Fine Dining', 'Entertainment', 'Shopping', 'Casino Gaming'],
              },
              {
                title: 'Red Rock Country Club',
                description: 'Premier golf course community with luxury homes',
                icon: '⛳',
                features: [
                  '18-Hole Golf Course',
                  'Country Club Amenities',
                  'Gated Community',
                  'Mountain Views',
                ],
              },
              {
                title: 'The Ridges',
                description: 'Exclusive custom estates with panoramic views',
                icon: '🏔️',
                features: ['Custom Homes', 'Panoramic Views', 'Privacy', 'Luxury Amenities'],
              },
            ].map((highlight, index) => (
              <div
                key={highlight.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-slate-300 mb-4">{highlight.description}</p>
                <ul className="space-y-2">
                  {highlight.features.map((feature) => (
                    <li key={feature} className="text-slate-200 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Market Stats */}
      <section className="local-market-stats py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Red Rock Casino Area Market Statistics
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Current market conditions for properties near Red Rock Casino
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { stat: '0.5 miles', label: 'Distance to Red Rock Casino' },
              { stat: '$2.1M', label: 'Red Rock Country Club Median' },
              { stat: '65 days', label: 'Average Days on Market' },
              { stat: '4.5 months', label: 'Current Inventory' },
            ].map((item, index) => (
              <div
                key={item.label}
                className="text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{item.stat}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-responsive text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Home Near Red Rock Casino?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Dr. Jan Duffy provides local expertise and convenient access to Red Rock Casino area
              properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-accent-buyer px-8 py-4 text-lg">
                Schedule Local Consultation
              </button>
              <button
                type="button"
                className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-green-700"
              >
                View Area Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Red Rock Casino Area Guide */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Real Estate Near Red Rock Casino Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Red Rock Casino Area: Premier Luxury Living
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The area surrounding Red Rock Casino features some of Las Vegas's most prestigious luxury communities including Red Rock Country Club, The Ridges Summerlin, and Summerlin West. This premier location provides residents with access to world-class amenities, excellent schools, and exceptional quality of life while maintaining proximity to Red Rock Casino and entertainment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The area's location on Summerlin's west side provides easy access to Red Rock Canyon National Conservation Area, offering residents access to outdoor recreation, hiking, and natural beauty. The combination of luxury living, natural beauty, and entertainment access creates unique living experiences that appeal to luxury homebuyers.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Premier Communities Near Red Rock Casino
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Communities near Red Rock Casino include Red Rock Country Club (0.5 miles), The Ridges (2 miles), and Summerlin West (1 mile), each offering unique characteristics and amenities. These communities feature luxury homes with golf course access, mountain views, and resort-style amenities. Dr. Jan Duffy's expertise in this area enables her to help buyers find properties that match their lifestyle and investment goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Real Estate Near Red Rock Casino
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Real estate near Red Rock Casino offers luxury homebuyers exceptional value through premier location, access to luxury communities, strong appreciation, and exceptional amenities. The area's proximity to Red Rock Casino provides entertainment and dining options, while nearby communities offer luxury living with comprehensive amenities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The area's real estate market shows strong fundamentals with appreciation rates ranging from 12% to 15% year-over-year depending on the community. These metrics indicate healthy markets with strong demand and appreciation potential, making the Red Rock Casino area an attractive investment opportunity.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy Near Red Rock Casino
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in real estate near Red Rock Casino, with extensive knowledge of the area's communities, market conditions, and buyer preferences. Her expertise in this premier area enables her to help buyers find properties that match their lifestyle and investment goals in communities surrounding Red Rock Casino.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes the Red Rock Casino Area Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Premier Location and Access</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The Red Rock Casino area provides residents with premier location and access to entertainment, dining, shopping, and outdoor recreation. The area's proximity to Red Rock Casino offers entertainment and dining options, while nearby communities provide luxury living with comprehensive amenities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This combination of location and access creates unique living experiences that appeal to luxury homebuyers seeking both lifestyle and convenience. The area's commitment to maintaining high standards and providing comprehensive amenities ensures long-term value and desirability.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Proximity to Natural Beauty and Recreation</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The area's proximity to Red Rock Canyon National Conservation Area provides residents with access to outdoor recreation, hiking, and natural beauty. This natural setting creates opportunities for outdoor lifestyle activities while maintaining luxury living with modern amenities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This combination of natural beauty and luxury living appeals to buyers seeking both lifestyle and connection to nature. The area's commitment to preserving natural areas and providing outdoor recreation access ensures long-term value and desirability for luxury homebuyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('service')}
        title="Frequently Asked Questions About Real Estate Near Red Rock Casino"
        subtitle="Common questions about real estate services in the Red Rock area, answered by your Las Vegas home expert"
      />
    </main>
  );
}
