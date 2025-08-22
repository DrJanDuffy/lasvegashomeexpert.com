'use client';

import type { Metadata } from 'next';
import { trackEvent } from '@/utils';

export default function RedRockCountryClubPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Red Rock Country Club Homes for Sale
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$2.1M</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">65</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">4.2</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">15%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover luxury golf course estates at Red Rock Country Club. Dr. Jan Duffy specializes
            in this prestigious gated community with championship golf, mountain views, and luxury
            amenities.
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
                  label: 'red_rock_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'red_rock_page',
                    cd3: 'consultation',
                    cd4: '3000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Red Rock Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'red_rock_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'red_rock_page',
                    cd3: 'properties',
                    cd4: '3000',
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

      {/* Featured Red Rock Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Red Rock Country Club Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Luxury golf course estates with mountain and city views in Las Vegas's most
              prestigious gated community
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR"
              price-min="1500000"
              location="Red Rock Country Club, Las Vegas, NV"
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
      <section className="community-features bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Red Rock Country Club Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">⛳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Championship Golf</h3>
              <p className="text-slate-600">
                18-hole championship golf course designed by Arnold Palmer with stunning Red Rock
                views
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Gated Security</h3>
              <p className="text-slate-600">
                24/7 gated security with controlled access ensuring privacy and safety for residents
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Fine Dining</h3>
              <p className="text-slate-600">
                Multiple upscale restaurants and private dining rooms with panoramic golf course
                views
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Resort Amenities</h3>
              <p className="text-slate-600">
                Pool, spa, tennis courts, and fitness center creating a resort-style living
                experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Red Rock Home Styles & Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Golf Course Estates */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏌️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Golf Course Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.5M - $5M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Direct golf course frontage</li>
                <li>• 4,000-8,000+ sq ft</li>
                <li>• Mountain & city views</li>
                <li>• Custom luxury finishes</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'golf_course_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'red_rock_page',
                      cd3: 'golf_estates',
                      cd4: '2000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Golf Course Homes
              </button>
            </div>

            {/* Mountain View Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Mountain View Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.8M - $3.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Red Rock Canyon views</li>
                <li>• 3,500-6,000+ sq ft</li>
                <li>• Private pools & spas</li>
                <li>• Gourmet kitchens</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'mountain_view_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'red_rock_page',
                      cd3: 'mountain_view',
                      cd4: '2000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Mountain View Homes
              </button>
            </div>

            {/* Custom Luxury Homes */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Custom Luxury Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$3M - $8M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• One-of-a-kind architecture</li>
                <li>• 5,000-12,000+ sq ft</li>
                <li>• Premium lot locations</li>
                <li>• Luxury amenities</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'custom_luxury_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'red_rock_page',
                      cd3: 'custom_luxury',
                      cd4: '2000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Custom Homes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Red Rock Country Club Market Insights
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Current Market Trends</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Strong Appreciation</h4>
                  <p className="text-slate-600">
                    15% year-over-year price growth, outpacing Las Vegas average
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Premium Location</h4>
                  <p className="text-slate-600">
                    Limited inventory maintains exclusivity and value appreciation
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Golf Course Premium</h4>
                  <p className="text-slate-600">
                    Golf course lots command 20-30% premium over interior lots
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Red Rock Country Club?
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Lifestyle Investment</h4>
                  <p className="text-slate-600">
                    Resort-style living with championship golf and dining
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Scenic Beauty</h4>
                  <p className="text-slate-600">
                    Stunning Red Rock Canyon backdrop and mountain views
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Prestige & Privacy</h4>
                  <p className="text-slate-600">
                    Gated security and exclusive community atmosphere
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
            Dr. Jan Duffy: Red Rock Country Club Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Local Expert</h3>
              <p className="text-slate-600">
                15+ years of experience selling Red Rock Country Club properties with insider market
                knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Connections</h3>
              <p className="text-slate-600">
                Strong relationships with Red Rock residents, builders, and community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                $50M+ in Red Rock Country Club sales with average of 95% of asking price achieved
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Red Rock Country Club Home?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Red Rock Country Club specialist. Let's find your perfect golf
            course estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'red_rock_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'red_rock_page',
                    cd3: 'phone',
                    cd4: '3000',
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
                  label: 'red_rock_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'red_rock_page',
                    cd3: 'email',
                    cd4: '3000',
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
