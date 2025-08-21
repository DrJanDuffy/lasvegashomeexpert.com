'use client';

import { trackEvent } from '@/utils';

export default function DelWebbCommunitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Del Webb Communities - Modern 55+ Luxury
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$700K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">38</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">3.2</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">16%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience modern luxury 55+ living in Del Webb communities. Dr. Jan Duffy specializes in
            these contemporary retirement communities with cutting-edge amenities and resort-style living.
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
                  label: 'del_webb_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
                    cd3: 'consultation',
                    cd4: '2000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Del Webb Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'del_webb_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
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

      {/* Featured Del Webb Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Del Webb Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Modern 55+ luxury homes with cutting-edge amenities and resort-style living
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="550000"
              location="Del Webb, Las Vegas, NV"
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
            Del Webb Modern 55+ Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Modern Recreation</h3>
              <p className="text-slate-600">
                State-of-the-art fitness centers, pools, and sports facilities with latest technology
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Arts & Innovation</h3>
              <p className="text-slate-600">
                Creative arts studios, digital media labs, and cultural enrichment programs
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Social Innovation</h3>
              <p className="text-slate-600">
                Modern social spaces, technology clubs, and innovative community programs
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Wellness Focus</h3>
              <p className="text-slate-600">
                Holistic wellness programs, meditation gardens, and health-focused amenities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Del Webb Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Modern Luxury Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Modern Luxury Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$550K - $1.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,500-4,500+ sq ft</li>
                <li>• Contemporary design</li>
                <li>• Smart home features</li>
                <li>• Modern amenities</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'modern_luxury_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'del_webb_page',
                      cd3: 'modern_luxury_homes',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Modern Luxury Homes
              </button>
            </div>

            {/* Contemporary Estates */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Contemporary Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$900K - $2.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 4,000-7,000+ sq ft</li>
                <li>• Premium locations</li>
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
                    label: 'contemporary_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'del_webb_page',
                      cd3: 'contemporary_estates',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Contemporary Estates
              </button>
            </div>

            {/* Modern Condos */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Modern Condos</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$450K - $900K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,800-3,000+ sq ft</li>
                <li>• Resort-style living</li>
                <li>• Modern amenities</li>
                <li>• Maintenance included</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'modern_condos',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'del_webb_page',
                      cd3: 'modern_condos',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Modern Condos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Del Webb Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Market Performance
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Strong Growth</h4>
                  <p className="text-slate-600">
                    16% year-over-year appreciation with $700K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Modern Appeal</h4>
                  <p className="text-slate-600">
                    High demand from tech-savvy retirees seeking contemporary amenities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Innovation Premium</h4>
                  <p className="text-slate-600">
                    Premium pricing for homes with modern technology and amenities
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
                  <h4 className="font-semibold text-slate-800 mb-2">Modern Infrastructure</h4>
                  <p className="text-slate-600">
                    Cutting-edge facilities and technology support premium value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Innovation Focus</h4>
                  <p className="text-slate-600">
                    Technology-forward approach appeals to modern active adults
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Future-Proof</h4>
                  <p className="text-slate-600">
                    Modern design and amenities maintain long-term value
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
            Dr. Jan Duffy: Del Webb Modern 55+ Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Modern Active Adult Expert</h3>
              <p className="text-slate-600">
                Specialized knowledge of contemporary 55+ communities with $30M+ in Del Webb sales
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Innovation</h3>
              <p className="text-slate-600">
                Strong relationships with Del Webb residents and innovative community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction in modern active adult luxury market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Del Webb Living?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Del Webb specialist. Discover modern luxury 55+ living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'del_webb_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
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
                  label: 'del_webb_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
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
