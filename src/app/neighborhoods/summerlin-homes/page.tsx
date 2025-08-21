'use client';

import { trackEvent } from '@/utils';

export default function SummerlinHomesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Summerlin Luxury Homes for Sale
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$1.8M</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">58</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">4.1</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">16%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience master-planned luxury living in Summerlin. Dr. Jan Duffy specializes in this
            prestigious community with golf courses, parks, shopping, and world-class amenities.
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
                  label: 'summerlin_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'summerlin_page',
                    cd3: 'consultation',
                    cd4: '2500',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Summerlin Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'summerlin_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'summerlin_page',
                    cd3: 'properties',
                    cd4: '2500',
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

      {/* Featured Summerlin Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Summerlin Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Master-planned luxury homes with golf courses, parks, and world-class amenities in Las
              Vegas
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="800000"
              location="Summerlin, Las Vegas, NV"
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
            Summerlin Master-Planned Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">⛳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Golf Courses</h3>
              <p className="text-slate-600">
                Multiple championship golf courses including TPC Summerlin and Red Rock Country Club
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Parks & Trails</h3>
              <p className="text-slate-600">
                Over 150 parks, 150+ miles of trails, and the 2,000-acre Summerlin Trail System
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Downtown Summerlin</h3>
              <p className="text-slate-600">
                Premier shopping, dining, and entertainment destination with 125+ stores
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Arts & Culture</h3>
              <p className="text-slate-600">
                Smith Center for the Performing Arts and multiple cultural venues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Summerlin Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Golf Course Homes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏌️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Golf Course Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.2M - $3M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Golf course frontage</li>
                <li>• 3,500-6,000+ sq ft</li>
                <li>• Mountain views</li>
                <li>• Resort-style amenities</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'golf_course_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'summerlin_page',
                      cd3: 'golf_homes',
                      cd4: '1800',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Golf Course Homes
              </button>
            </div>

            {/* Luxury Estates */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Luxury Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2M - $8M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Custom architecture</li>
                <li>• 5,000-15,000+ sq ft</li>
                <li>• Premium locations</li>
                <li>• Luxury finishes</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'luxury_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'summerlin_page',
                      cd3: 'luxury_estates',
                      cd4: '1800',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Luxury Estates
              </button>
            </div>

            {/* Family Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Family Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $1.8M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 3,000-5,000+ sq ft</li>
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
                      cd2: 'summerlin_page',
                      cd3: 'family_homes',
                      cd4: '1800',
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
            Summerlin Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Strong Appreciation</h4>
                  <p className="text-slate-600">
                    16% year-over-year growth with $1.8M median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Premium Location</h4>
                  <p className="text-slate-600">
                    Summerlin commands 20-30% premium over Las Vegas average
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Limited Inventory</h4>
                  <p className="text-slate-600">
                    4.1 months inventory maintains strong seller leverage
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Master-Planned</h4>
                  <p className="text-slate-600">
                    Comprehensive infrastructure and amenities support value appreciation
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Lifestyle Investment</h4>
                  <p className="text-slate-600">
                    Golf, parks, shopping, and entertainment create premium living experience
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Future Growth</h4>
                  <p className="text-slate-600">
                    Continued development and infrastructure improvements
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
            Dr. Jan Duffy: Summerlin Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Local Expert</h3>
              <p className="text-slate-600">
                15+ years of experience selling Summerlin properties with insider market knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Connections</h3>
              <p className="text-slate-600">
                Strong relationships with Summerlin residents, builders, and community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                $100M+ in Summerlin sales with exceptional client satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Summerlin Living?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Summerlin specialist. Discover master-planned luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'summerlin_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'summerlin_page',
                    cd3: 'phone',
                    cd4: '2500',
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
                  label: 'summerlin_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'summerlin_page',
                    cd3: 'email',
                    cd4: '2500',
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
