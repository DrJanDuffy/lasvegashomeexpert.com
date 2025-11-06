import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summerlin Luxury Homes Expert | Dr. Jan Duffy | $1M+ Properties',
  description:
    'Find luxury homes in Summerlin with Dr. Jan Duffy. Specializing in Red Rock Country Club, The Ridges, and custom estates over $1M. Berkshire Hathaway HomeServices.',
  keywords:
    'Summerlin luxury homes, Red Rock Country Club, The Ridges, MacDonald Highlands, luxury realtor Summerlin, Dr. Jan Duffy',
  openGraph: {
    title: 'Summerlin Luxury Homes Expert | Dr. Jan Duffy',
    description:
      'Find luxury homes in Summerlin with Dr. Jan Duffy. Specializing in Red Rock Country Club, The Ridges, and custom estates over $1M.',
    type: 'website',
    url: 'https://lasvegashomeexpert.com/luxury-homes-summerlin',
  },
};

export default function LuxuryHomesSummerlinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Summerlin Luxury Homes for Sale with Dr. Jan Duffy
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover the most prestigious properties in Summerlin's premier communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-primary px-8 py-4 text-lg">
                View Current Listings
              </button>
              <button type="button" className="btn-secondary px-8 py-4 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Answer Box */}
      <section className="ai-summary py-16">
        <div className="container-responsive">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury-lg max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Quick Market Summary
            </h2>
            <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-6 border-l-4 border-amber-400">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                <strong>August 2025 Summerlin Luxury Market:</strong> Median price $1.8M, 65 days on
                market, buyer's market emerging with 4.5 months inventory. Best time to negotiate on
                luxury properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Search Optimization */}
      <section className="voice-search-ready py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ask Dr. Duffy About Summerlin
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Voice search optimized answers for your luxury real estate questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
              <dt className="text-lg font-semibold text-slate-900 mb-3">
                "Hey Siri, who sells luxury homes in Summerlin?"
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Dr. Jan Duffy with Berkshire Hathaway specializes in Summerlin luxury estates.
              </dd>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
              <dt className="text-lg font-semibold text-slate-900 mb-3">
                "Alexa, what's the average price in Red Rock Country Club?"
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Red Rock Country Club homes average $2.1 million as of August 2025.
              </dd>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
              <dt className="text-lg font-semibold text-slate-900 mb-3">
                "OK Google, find Summerlin golf course homes"
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Dr. Duffy specializes in golf course properties throughout Summerlin's premier
                clubs.
              </dd>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Communities */}
      <section className="summerlin-communities py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Premier Summerlin Communities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Exclusive access to Summerlin's most prestigious neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Red Rock Country Club',
                price: '$2.1M',
                features: ['Golf Course', 'Mountain Views', 'Gated Community'],
                icon: '🏌️',
              },
              {
                name: 'The Ridges',
                price: '$2.5M',
                features: ['Custom Estates', 'Panoramic Views', 'Privacy'],
                icon: '🏔️',
              },
              {
                name: 'MacDonald Highlands',
                price: '$1.8M',
                features: ['Golf Views', 'Luxury Amenities', 'Family Friendly'],
                icon: '⛳',
              },
              {
                name: 'Southern Highlands',
                price: '$850K',
                features: ['Affordable Luxury', 'Great Schools', 'Convenient Location'],
                icon: '🏠',
              },
            ].map((community, index) => (
              <div
                key={community.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{community.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{community.name}</h3>
                <p className="text-amber-400 font-bold text-lg mb-4">{community.price}</p>
                <ul className="space-y-2">
                  {community.features.map((feature) => (
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

      {/* CTA Section */}
      <section className="cta-section py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-responsive text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Summerlin Luxury Home?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Dr. Jan Duffy provides exclusive access to Summerlin's most prestigious properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-accent-buyer px-8 py-4 text-lg">
                Schedule Luxury Consultation
              </button>
              <button
                type="button"
                className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary-700"
              >
                View Current Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Summerlin Luxury Homes Guide */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Luxury Homes in Summerlin Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Summerlin: Las Vegas's Premier Luxury Community
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Summerlin stands as Las Vegas's premier master-planned community, offering luxury homes with access to world-class amenities, excellent schools, and exceptional quality of life. This 22,500-acre master-planned community features multiple villages, each with unique characteristics and amenities, creating diverse housing options for luxury homebuyers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's amenities include multiple golf courses, parks, shopping centers, restaurants, and recreational facilities. Summerlin's commitment to preserving natural open spaces, maintaining high standards, and providing comprehensive amenities has earned it recognition as one of America's best master-planned communities. This commitment to excellence creates exceptional value for luxury homebuyers.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Premier Luxury Neighborhoods in Summerlin
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Summerlin includes several luxury neighborhoods including Red Rock Country Club, The Ridges Summerlin, Tournament Hills, and MacDonald Highlands, each offering unique characteristics and amenities. These neighborhoods feature luxury homes with golf course access, mountain views, and resort-style amenities. Dr. Jan Duffy's expertise in Summerlin luxury neighborhoods enables her to help buyers identify properties that match their lifestyle and investment goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Buy Luxury Homes in Summerlin
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Summerlin offers luxury homebuyers exceptional value through master-planned community amenities, excellent schools, strong appreciation, and high quality of life. The community's median home price of $1.8 million represents excellent value compared to luxury communities in other major metropolitan areas, while providing access to world-class amenities and lifestyle options.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's location on the west side of Las Vegas provides easy access to the city while maintaining a suburban feel. Summerlin's proximity to Red Rock Canyon National Conservation Area offers residents access to outdoor recreation, while the community's amenities provide comprehensive lifestyle options within the community itself.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Summerlin Luxury Homes
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Summerlin luxury real estate, with extensive knowledge of the community's properties, market conditions, and buyer preferences. Her expertise in master-planned communities enables her to help buyers find properties that match their lifestyle and investment goals in this premier Las Vegas community.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Summerlin Luxury Homes Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Master-Planned Community Excellence</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Summerlin's master-planned design provides residents with comprehensive amenities including golf courses, parks, trails, shopping centers, and recreational facilities. The community's commitment to maintaining high standards and providing ongoing development ensures residents enjoy premium amenities that enhance quality of life.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The community's amenities are designed to support active lifestyles, with extensive trail systems, parks, and recreational facilities. These amenities create opportunities for outdoor recreation, social connection, and community engagement, contributing to the high quality of life that defines Summerlin living.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Excellent Schools and Family-Friendly Environment</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Summerlin features excellent schools that are consistently ranked among Nevada's best. The community's family-friendly environment, safe neighborhoods, and comprehensive amenities make it ideal for families seeking luxury living with family-oriented amenities. This combination appeals to luxury homebuyers with children or those planning families.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The community's commitment to education and family services ensures residents have access to resources that support family life. This family-friendly focus combined with luxury amenities creates an environment that appeals to luxury homebuyers seeking both lifestyle and family support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Luxury Homes in Summerlin"
        subtitle="Common questions about buying luxury homes in Summerlin, answered by your Las Vegas home expert"
      />
    </main>
  );
}
