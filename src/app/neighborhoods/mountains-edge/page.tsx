'use client';

import { trackEvent } from '@/utils';

export default function MountainsEdgePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Mountains Edge - Luxury Foothills Living
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$650K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">48</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">4.1</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">13%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover luxury living in the foothills of the Spring Mountains. Dr. Jan Duffy specializes
            in Mountains Edge properties offering spectacular mountain views, modern amenities, and
            a peaceful retreat from city life.
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
                  label: 'mountains_edge_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'mountains_edge_page',
                    cd3: 'consultation',
                    cd4: '1800',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Mountains Edge Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'mountains_edge_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'mountains_edge_page',
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

      {/* Featured Mountains Edge Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Mountains Edge Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Luxury foothills homes with spectacular mountain views and modern amenities
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="500000"
              location="Mountains Edge, Las Vegas, NV"
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
            Mountains Edge Foothills Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏔️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Mountain Views</h3>
              <p className="text-slate-600">
                Spectacular panoramic views of the Spring Mountains and Red Rock Canyon
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Natural Beauty</h3>
              <p className="text-slate-600">
                Surrounded by desert landscape with hiking trails and outdoor recreation
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Resort Amenities</h3>
              <p className="text-slate-600">
                Community pools, fitness centers, and recreational facilities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Easy Access</h3>
              <p className="text-slate-600">
                Convenient access to major highways while maintaining peaceful seclusion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Mountains Edge Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Foothills Luxury Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Foothills Luxury Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$500K - $1.2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,000-4,000+ sq ft</li>
                <li>• Mountain views</li>
                <li>• Modern design</li>
                <li>• Premium finishes</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'foothills_luxury_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'mountains_edge_page',
                      cd3: 'foothills_luxury_homes',
                      cd4: '1400',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Foothills Homes
              </button>
            </div>

            {/* Mountain Estates */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Mountain Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $2M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 3,500-6,000+ sq ft</li>
                <li>• Premium locations</li>
                <li>• Luxury amenities</li>
                <li>• Custom features</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'mountain_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'mountains_edge_page',
                      cd3: 'mountain_estates',
                      cd4: '1400',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Mountain Estates
              </button>
            </div>

            {/* Modern Family Homes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Modern Family Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$450K - $900K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,800-3,500+ sq ft</li>
                <li>• Family-friendly</li>
                <li>• Community amenities</li>
                <li>• Great schools nearby</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'modern_family_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'mountains_edge_page',
                      cd3: 'modern_family_homes',
                      cd4: '1400',
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
            Mountains Edge Market Analysis
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
                    13% year-over-year appreciation with $650K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Natural Appeal</h4>
                  <p className="text-slate-600">
                    High demand from buyers seeking mountain views and peaceful living
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Location Premium</h4>
                  <p className="text-slate-600">
                    Premium pricing for properties with mountain views and natural surroundings
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
                  <h4 className="font-semibold text-slate-800 mb-2">Natural Beauty</h4>
                  <p className="text-slate-600">
                    Mountain views and natural landscape maintain long-term value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Growing Community</h4>
                  <p className="text-slate-600">
                    Continued development and amenities support property values
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Peaceful Retreat</h4>
                  <p className="text-slate-600">
                    Secluded location with city access appeals to luxury buyers
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
            Dr. Jan Duffy: Mountains Edge Foothills Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Foothills Expert</h3>
              <p className="text-slate-600">
                Specialized knowledge of Mountains Edge properties with $20M+ in foothills sales
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🏔️</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Mountain Specialist</h3>
              <p className="text-slate-600">
                Deep understanding of mountain view properties and natural landscape appeal
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction in Mountains Edge luxury real estate market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Mountains Edge Living?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Mountains Edge specialist. Discover foothills luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'mountains_edge_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'mountains_edge_page',
                    cd3: 'phone',
                    cd4: '1800',
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
                  label: 'mountains_edge_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'mountains_edge_page',
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
    </>
  );
}
