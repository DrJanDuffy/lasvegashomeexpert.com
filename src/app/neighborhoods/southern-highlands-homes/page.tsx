'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function SouthernHighlandsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Southern Highlands Luxury Homes
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$850K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">45</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">3.8</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">18%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover family-friendly luxury living at Southern Highlands. Dr. Jan Duffy specializes
            in this master-planned community with excellent schools, parks, and luxury amenities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'southern_highlands_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'southern_highlands_page',
                    cd3: 'consultation',
                    cd4: '1800',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Community Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'southern_highlands_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'southern_highlands_page',
                    cd3: 'properties',
                    cd4: '1800',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              View Available Homes
            </button>
          </div>
        </div>
      </section>

      {/* Featured Southern Highlands Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Southern Highlands Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Family-friendly luxury homes with excellent schools and community amenities in
              Henderson
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="600000"
              location="Southern Highlands, Henderson, NV"
              max-results="12"
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

      {/* Community Features Section */}
      <section className="community-features bg-gradient-to-r from-green-50 to-emerald-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Southern Highlands Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Top-Rated Schools</h3>
              <p className="text-slate-600">
                A-rated public schools and private education options within walking distance
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Parks & Recreation</h3>
              <p className="text-slate-600">
                Multiple parks, playgrounds, and walking trails throughout the community
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community Pools</h3>
              <p className="text-slate-600">
                Multiple swimming pools and spa facilities for residents' enjoyment
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Shopping & Dining</h3>
              <p className="text-slate-600">
                Convenient access to shopping centers, restaurants, and entertainment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Southern Highlands Home Styles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury Family Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Luxury Family Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $1.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 3,000-5,000+ sq ft</li>
                <li>• 4-6 bedrooms</li>
                <li>• Large backyards</li>
                <li>• Modern kitchens</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'luxury_family_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'southern_highlands_page',
                      cd3: 'family_homes',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Family Homes
              </button>
            </div>

            {/* Executive Estates */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Executive Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.2M - $2.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 4,000-7,000+ sq ft</li>
                <li>• Premium lot locations</li>
                <li>• Luxury finishes</li>
                <li>• Smart home features</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'executive_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'southern_highlands_page',
                      cd3: 'executive_estates',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Executive Estates
              </button>
            </div>

            {/* Luxury Townhomes */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Luxury Townhomes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$600K - $1M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,000-3,500+ sq ft</li>
                <li>• Low maintenance</li>
                <li>• Community amenities</li>
                <li>• Modern design</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'luxury_townhomes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'southern_highlands_page',
                      cd3: 'townhomes',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Luxury Townhomes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Southern Highlands Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Strong Growth</h4>
                  <p className="text-slate-600">
                    18% year-over-year appreciation with $850K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Quick Sales</h4>
                  <p className="text-slate-600">
                    45 days average market time, faster than Henderson average
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Family Appeal</h4>
                  <p className="text-slate-600">
                    High demand from families seeking quality schools and amenities
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Lifestyle Benefits</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Family-Friendly</h4>
                  <p className="text-slate-600">
                    Excellent schools, parks, and safe community environment
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Convenience</h4>
                  <p className="text-slate-600">
                    Easy access to shopping, dining, and major highways
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Investment Value</h4>
                  <p className="text-slate-600">
                    Strong appreciation and rental demand from families
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Jan's Expertise Section */}
      <section className="expertise bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Dr. Jan Duffy: Southern Highlands Expert
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Local Specialist</h3>
              <p className="text-slate-600">
                Deep knowledge of Southern Highlands market with $30M+ in sales in this community
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Family Focus</h3>
              <p className="text-slate-600">
                Specialized expertise in helping families find their perfect luxury home
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction and market knowledge for Southern Highlands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Southern Highlands Home?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Southern Highlands specialist. Discover family-friendly luxury
            living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'southern_highlands_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'southern_highlands_page',
                    cd3: 'phone',
                    cd4: '1800',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Call (702) 222-1964
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'southern_highlands_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'southern_highlands_page',
                    cd3: 'email',
                    cd4: '1800',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* Comprehensive Southern Highlands Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Southern Highlands Luxury Homes Las Vegas
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Southern Highlands: Family-Friendly Luxury Living
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Southern Highlands offers luxury living in a family-friendly environment, with homes
                averaging $850,000 and featuring access to excellent schools, parks, and community
                amenities. This master-planned community provides luxury lifestyle options at more
                accessible price points, making it attractive to families seeking luxury living with
                family-oriented amenities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's location in southwest Las Vegas provides residents with easy access
                to Las Vegas amenities while maintaining a residential feel. Southern Highlands'
                master-planned design includes parks, trails, shopping centers, and recreational
                facilities that support active lifestyles and family living.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Luxury Homes in Southern Highlands
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Southern Highlands homes range from $600,000 to over $2 million, featuring quality
                construction, modern designs, and access to community amenities. Properties
                typically include 2,500 to 6,000 square feet of living space, private yards, and
                modern finishes. The community's diverse housing options appeal to families and
                professionals seeking luxury living at accessible price points.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Southern Highlands
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Southern Highlands offers luxury homebuyers exceptional value through master-planned
                community amenities, excellent schools, strong appreciation, and family-friendly
                environment. The community's median price of $850,000 represents excellent value for
                luxury living, while providing access to comprehensive amenities and lifestyle
                options.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's real estate market shows strong fundamentals with 18% year-over-year
                appreciation, 45 days average on market, and 3.8 months of inventory. These metrics
                indicate a healthy market with strong demand and appreciation potential, making
                Southern Highlands an attractive investment opportunity.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Southern Highlands
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Southern Highlands real estate, with extensive
                knowledge of the community's properties, market conditions, and buyer preferences.
                Her expertise in master-planned communities enables her to help buyers find
                properties that match their lifestyle and investment goals in this family-friendly
                luxury community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Southern Highlands Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Family-Friendly Luxury</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Southern Highlands combines luxury living with family-friendly amenities, creating
                  an environment that appeals to families seeking luxury lifestyle options. The
                  community's excellent schools, parks, and recreational facilities support family
                  life while providing luxury amenities that enhance quality of life.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This combination of luxury and family-friendliness makes Southern Highlands
                  attractive to luxury homebuyers with children or those planning families. The
                  community's commitment to maintaining high standards and providing comprehensive
                  amenities ensures long-term value and desirability.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Master-Planned Community Benefits
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Southern Highlands' master-planned design provides residents with comprehensive
                  amenities including parks, trails, shopping centers, and recreational facilities.
                  The community's commitment to maintaining high standards and providing ongoing
                  development ensures residents enjoy premium amenities that enhance quality of
                  life.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The community's amenities support active lifestyles and family living, creating
                  opportunities for outdoor recreation, social connection, and community engagement.
                  This comprehensive approach to community development creates exceptional value for
                  luxury homebuyers seeking both lifestyle and family support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Southern Highlands Homes"
        subtitle="Common questions about buying homes in Southern Highlands, answered by your Las Vegas home expert"
      />
    </>
  );
}
