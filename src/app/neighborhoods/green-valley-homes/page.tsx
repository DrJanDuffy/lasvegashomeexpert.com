'use client';

import { trackEvent } from '@/utils';

export default function GreenValleyHomesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Green Valley Luxury Homes for Sale
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$750K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">48</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">4.0</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">12%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover established luxury living in Green Valley. Dr. Jan Duffy specializes in this
            mature community with excellent schools, parks, and established amenities.
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
                  label: 'green_valley_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
                    cd3: 'consultation',
                    cd4: '2000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Green Valley Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'green_valley_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
                    cd3: 'properties',
                    cd4: '2000',
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

      {/* Featured Green Valley Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Green Valley Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Established luxury homes with mature landscaping and excellent schools in Henderson
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="600000"
              location="Green Valley, Henderson, NV"
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
      <section className="community-features bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Green Valley Community Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Top-Rated Schools</h3>
              <p className="text-slate-600">
                A-rated public schools including Green Valley High School and elementary schools
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Parks & Recreation</h3>
              <p className="text-slate-600">
                Multiple parks, walking trails, and recreational facilities throughout the community
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Shopping & Dining</h3>
              <p className="text-slate-600">
                Green Valley Ranch and multiple shopping centers with premium retail options
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community Pools</h3>
              <p className="text-slate-600">
                Multiple swimming pools and spa facilities for residents' enjoyment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Green Valley Home Styles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Established Luxury Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Established Luxury</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$600K - $1.2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,500-4,500+ sq ft</li>
                <li>• 3-5 bedrooms</li>
                <li>• Mature landscaping</li>
                <li>• Established neighborhoods</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'established_luxury_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'green_valley_page',
                      cd3: 'established_homes',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Established Homes
              </button>
            </div>

            {/* Executive Estates */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Executive Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1M - $2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 4,000-6,000+ sq ft</li>
                <li>• Premium lot locations</li>
                <li>• Luxury finishes</li>
                <li>• Custom features</li>
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
                      cd2: 'green_valley_page',
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

            {/* Family Homes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Family Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$500K - $900K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,000-3,500+ sq ft</li>
                <li>• Family-friendly layouts</li>
                <li>• Community amenities</li>
                <li>• Excellent schools</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'family_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'green_valley_page',
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
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Green Valley Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Market Performance
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Steady Growth</h4>
                  <p className="text-slate-600">
                    12% year-over-year appreciation with $750K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Established Community</h4>
                  <p className="text-slate-600">
                    Mature neighborhood with proven value appreciation over time
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Family Appeal</h4>
                  <p className="text-slate-600">
                    High demand from families seeking established schools and amenities
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Investment Advantages
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Mature Infrastructure</h4>
                  <p className="text-slate-600">
                    Established utilities, roads, and community facilities support value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">School District</h4>
                  <p className="text-slate-600">
                    Top-rated schools maintain strong demand and property values
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Location Premium</h4>
                  <p className="text-slate-600">
                    Convenient access to shopping, dining, and major highways
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
            Dr. Jan Duffy: Green Valley Expert
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Local Specialist</h3>
              <p className="text-slate-600">
                Deep knowledge of Green Valley market with $25M+ in sales in this community
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Knowledge</h3>
              <p className="text-slate-600">
                Strong relationships with Green Valley residents and community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction and market knowledge for Green Valley
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Green Valley Home?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Green Valley specialist. Discover established luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'green_valley_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
                    cd3: 'phone',
                    cd4: '2000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Call (702) 555-0123
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'green_valley_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
                    cd3: 'email',
                    cd4: '2000',
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
    </>
  );
}
