'use client';

import { trackEvent } from '@/utils';

export default function DowntownLasVegasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Downtown Las Vegas - Urban Luxury Living
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$450K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">42</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">3.8</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">14%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the vibrant energy of Downtown Las Vegas with luxury high-rise condos and
            urban living. Dr. Jan Duffy specializes in premium downtown properties with spectacular
            city views and world-class amenities.
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
                  label: 'downtown_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'consultation',
                    cd4: '1500',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Downtown Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'downtown_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'properties',
                    cd4: '1500',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              View Available Condos
            </button>
          </div>
        </div>
      </section>

      {/* Featured Downtown Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Downtown Las Vegas Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Luxury high-rise condos with spectacular city views and premium urban amenities
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="MF,OTHER"
              price-min="300000"
              location="Downtown Las Vegas, NV"
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

      {/* Downtown Features Section */}
      <section className="downtown-features bg-gradient-to-r from-purple-50 to-violet-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Downtown Las Vegas Urban Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🌆</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">City Views</h3>
              <p className="text-slate-600">
                Spectacular panoramic views of the Las Vegas Strip and surrounding mountains
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎰</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Entertainment</h3>
              <p className="text-slate-600">
                Walking distance to casinos, restaurants, shows, and cultural attractions
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🚇</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Transportation</h3>
              <p className="text-slate-600">
                Easy access to monorail, buses, and major highways for convenient travel
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Urban Lifestyle</h3>
              <p className="text-slate-600">
                Vibrant city atmosphere with shopping, dining, and cultural experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Downtown Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury High-Rise Condos */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Luxury High-Rise Condos</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$400K - $1.2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,200-3,500+ sq ft</li>
                <li>• Floor-to-ceiling windows</li>
                <li>• Premium finishes</li>
                <li>• Concierge services</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'luxury_high_rise_condos',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'downtown_page',
                      cd3: 'luxury_high_rise_condos',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View High-Rise Condos
              </button>
            </div>

            {/* Penthouse Suites */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏙️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Penthouse Suites</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $3M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,500-6,000+ sq ft</li>
                <li>• Private terraces</li>
                <li>• Luxury amenities</li>
                <li>• Exclusive access</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'penthouse_suites',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'downtown_page',
                      cd3: 'penthouse_suites',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Penthouse Suites
              </button>
            </div>

            {/* Urban Townhomes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Urban Townhomes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$350K - $900K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,500-3,000+ sq ft</li>
                <li>• Private entrances</li>
                <li>• Urban convenience</li>
                <li>• Community amenities</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'urban_townhomes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'downtown_page',
                      cd3: 'urban_townhomes',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Urban Townhomes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Downtown Las Vegas Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Market Performance
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Urban Growth</h4>
                  <p className="text-slate-600">
                    14% year-over-year appreciation with $450K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">High Demand</h4>
                  <p className="text-slate-600">
                    Strong interest from professionals and luxury buyers seeking urban lifestyle
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Location Premium</h4>
                  <p className="text-slate-600">
                    Premium pricing for properties with city views and downtown access
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
                  <h4 className="font-semibold text-slate-800 mb-2">Urban Development</h4>
                  <p className="text-slate-600">
                    Continued downtown revitalization supports long-term value growth
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Tourism Impact</h4>
                  <p className="text-slate-600">
                    Strong tourism economy provides rental income opportunities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Transportation Hub</h4>
                  <p className="text-slate-600">
                    Central location with excellent connectivity maintains desirability
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
            Dr. Jan Duffy: Downtown Las Vegas Urban Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Urban Luxury Expert</h3>
              <p className="text-slate-600">
                Specialized knowledge of downtown luxury properties with $25M+ in urban sales
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">High-Rise Specialist</h3>
              <p className="text-slate-600">
                Deep understanding of luxury high-rise living and premium urban amenities
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction in downtown luxury real estate market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Downtown Luxury Living?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your downtown specialist. Discover urban luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'downtown_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'phone',
                    cd4: '1500',
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
                  label: 'downtown_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'email',
                    cd4: '1500',
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
