'use client';
import { trackEvent } from '@/utils';

export default function TheRidgesSummerlinPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            The Ridges Summerlin Luxury Homes
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$2.5M</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">80</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">5.2</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">12%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience ultra-luxury living at The Ridges in Summerlin. Dr. Jan Duffy specializes in
            these exclusive mountain-view estates with panoramic Las Vegas valley and Red Rock
            Canyon vistas.
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
                  label: 'ridges_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'ridges_page',
                    cd3: 'consultation',
                    cd4: '3500',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Ridges Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'ridges_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'ridges_page',
                    cd3: 'properties',
                    cd4: '3500',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              View Ridges Homes
            </button>
          </div>
        </div>
      </section>

      {/* Featured Ridges Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              The Ridges Summerlin Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ultra-luxury mountain estates with breathtaking views in Summerlin's most exclusive
              community
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR"
              price-min="2000000"
              location="The Ridges, Summerlin, Las Vegas, NV"
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
            The Ridges Exclusive Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏔️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Mountain Views</h3>
              <p className="text-slate-600">
                Panoramic Red Rock Canyon and Spring Mountain views from elevated home sites
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏌️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Private Golf</h3>
              <p className="text-slate-600">
                Exclusive access to The Ridges private golf course and country club amenities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🚁</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Helicopter Pad</h3>
              <p className="text-slate-600">
                Private helicopter access for the ultimate in luxury transportation convenience
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Ultra-Exclusive</h3>
              <p className="text-slate-600">
                Limited to only 180 homesites ensuring privacy and exclusivity for residents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            The Ridges Home Styles & Architecture
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mountain View Estates */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⛰️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Mountain View Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$3M - $8M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Red Rock Canyon views</li>
                <li>• 5,000-12,000+ sq ft</li>
                <li>• Elevated ridge locations</li>
                <li>• Contemporary architecture</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'mountain_view_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'ridges_page',
                      cd3: 'mountain_estates',
                      cd4: '2500',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Mountain Estates
              </button>
            </div>

            {/* Golf Course Properties */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏌️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Golf Course Properties</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.5M - $6M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Golf course frontage</li>
                <li>• 4,000-8,000+ sq ft</li>
                <li>• Private putting greens</li>
                <li>• Resort-style pools</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'golf_course_properties',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'ridges_page',
                      cd3: 'golf_properties',
                      cd4: '2500',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Golf Properties
              </button>
            </div>

            {/* Custom Architectural Masterpieces */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Architectural Masterpieces
                </h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$5M - $15M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Award-winning designs</li>
                <li>• 8,000-20,000+ sq ft</li>
                <li>• Premium ridge lots</li>
                <li>• Luxury amenities</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'architectural_masterpieces',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'ridges_page',
                      cd3: 'masterpieces',
                      cd4: '2500',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Masterpieces
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            The Ridges Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Premium Appreciation</h4>
                  <p className="text-slate-600">
                    12% year-over-year growth with $2.5M median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Ultra-Exclusive Inventory</h4>
                  <p className="text-slate-600">
                    Limited to 180 homesites ensuring scarcity and value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Celebrity Appeal</h4>
                  <p className="text-slate-600">
                    Home to entertainers, athletes, and business executives
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Unmatched Views</h4>
                  <p className="text-slate-600">
                    Protected Red Rock Canyon views that cannot be built out
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Resort Lifestyle</h4>
                  <p className="text-slate-600">Private golf course and country club amenities</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Prestige Location</h4>
                  <p className="text-slate-600">Las Vegas's most prestigious residential address</p>
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
            Dr. Jan Duffy: The Ridges Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ultra-Luxury Expert</h3>
              <p className="text-slate-600">
                Specialized expertise in The Ridges market with $75M+ in sales in this exclusive
                community
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Exclusive Network</h3>
              <p className="text-slate-600">
                Direct connections with architects, builders, and residents in The Ridges community
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Luxury Marketing</h3>
              <p className="text-slate-600">
                World-class marketing strategies specifically designed for ultra-luxury properties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience The Ridges Lifestyle?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Ridges specialist. Discover your ultra-luxury mountain estate
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'ridges_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'ridges_page',
                    cd3: 'phone',
                    cd4: '3500',
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
                  label: 'ridges_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'ridges_page',
                    cd3: 'email',
                    cd4: '3500',
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
