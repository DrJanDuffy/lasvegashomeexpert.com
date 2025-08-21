'use client';

import { trackEvent } from '@/utils';

export default function LuxuryHomesForSalePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Luxury Homes for Sale Las Vegas
          </h1>
          
          {/* Market Overview Stats */}
          <div className="market-overview bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
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
                <div className="text-4xl font-bold text-amber-400 mb-2">4.5</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">15%</div>
                <div className="text-white text-lg">Price Appreciation</div>
              </div>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover exclusive luxury homes in Las Vegas's most prestigious neighborhoods. 
            From Red Rock Country Club to The Ridges Summerlin, find your dream property with Dr. Jan Duffy.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              type="button"
              onClick={() => trackEvent({
                event: 'cta_click',
                category: 'conversion',
                action: 'cta_click',
                label: 'luxury_homes_consultation',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'luxury_homes_page',
                  cd3: 'consultation',
                  cd4: '2500',
                },
              })}
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Luxury Consultation
            </button>
            <button
              type="button"
              onClick={() => trackEvent({
                event: 'cta_click',
                category: 'conversion',
                action: 'cta_click',
                label: 'luxury_homes_search',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'luxury_homes_page',
                  cd3: 'search',
                  cd4: '2500',
                },
              })}
              className="btn-secondary text-lg px-8 py-4"
            >
              Search All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Featured Luxury Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Featured Luxury Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Handpicked luxury homes with premium features, stunning views, and exceptional locations
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="PRICE_DESC" 
              listing-status="For Sale" 
              property-types="SFR,MF" 
              price-min="1000000"
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

      {/* Luxury Neighborhoods Section */}
      <section className="luxury-neighborhoods bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Las Vegas Luxury Neighborhoods
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Red Rock Country Club */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⛳</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Red Rock Country Club</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.1M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Golf course luxury estates</li>
                <li>• Mountain and city views</li>
                <li>• Gated community</li>
                <li>• 15% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'neighborhood_click',
                  category: 'exploration',
                  action: 'neighborhood_view',
                  label: 'red_rock_country_club',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
                    cd3: 'red_rock',
                    cd4: '1000',
                  },
                })}
                className="w-full btn-accent-buyer py-3"
              >
                View Red Rock Properties
              </button>
            </div>

            {/* The Ridges */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">The Ridges Summerlin</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.5M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Ultra-luxury mountain homes</li>
                <li>• Panoramic city views</li>
                <li>• Private golf course</li>
                <li>• 12% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'neighborhood_click',
                  category: 'exploration',
                  action: 'neighborhood_view',
                  label: 'the_ridges',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
                    cd3: 'the_ridges',
                    cd4: '1000',
                  },
                })}
                className="w-full btn-accent-buyer py-3"
              >
                View The Ridges Properties
              </button>
            </div>

            {/* MacDonald Highlands */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">MacDonald Highlands</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.8M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Henderson's premier community</li>
                <li>• Luxury amenities</li>
                <li>• Mountain backdrop</li>
                <li>• 18% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'neighborhood_click',
                  category: 'exploration',
                  action: 'neighborhood_view',
                  label: 'macdonald_highlands',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
                    cd3: 'macdonald_highlands',
                    cd4: '1000',
                  },
                })}
                className="w-full btn-accent-buyer py-3"
              >
                View MacDonald Properties
              </button>
            </div>

            {/* Southern Highlands */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏌️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Southern Highlands</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$850K</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Affordable luxury</li>
                <li>• Golf course access</li>
                <li>• Family-friendly</li>
                <li>• 8% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'neighborhood_click',
                  category: 'exploration',
                  action: 'neighborhood_view',
                  label: 'southern_highlands',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
                    cd3: 'southern_highlands',
                    cd4: '1000',
                  },
                })}
                className="w-full btn-accent-buyer py-3"
              >
                View Southern Highlands Properties
              </button>
            </div>

            {/* Tournament Hills */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Tournament Hills</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.2M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Championship golf</li>
                <li>• Luxury townhomes</li>
                <li>• Resort-style living</li>
                <li>• 10% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'neighborhood_click',
                  category: 'exploration',
                  action: 'neighborhood_view',
                  label: 'tournament_hills',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
                    cd3: 'tournament_hills',
                    cd4: '1000',
                  },
                })}
                className="w-full btn-accent-buyer py-3"
              >
                View Tournament Hills Properties
              </button>
            </div>

            {/* Custom Search */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Custom Search</h3>
                <div className="text-lg text-slate-600 mb-4">Find Your Perfect Home</div>
              </div>
              <p className="text-slate-700 mb-6">
                Can't find what you're looking for? Let Dr. Jan Duffy create a custom search 
                based on your specific requirements and preferences.
              </p>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'custom_search_request',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
                    cd3: 'custom_search',
                    cd4: '1500',
                  },
                })}
                className="w-full btn-secondary py-3"
              >
                Request Custom Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="luxury-features bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Luxury Home Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Private Pools</h3>
              <p className="text-slate-600">Infinity pools, spa features, and resort-style amenities</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">⛳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Golf Course Access</h3>
              <p className="text-slate-600">Championship courses and private club memberships</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Gated Communities</h3>
              <p className="text-slate-600">24/7 security and exclusive neighborhood access</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🌅</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Stunning Views</h3>
              <p className="text-slate-600">Mountain, city, and golf course panoramas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Las Vegas Luxury Market Insights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Current Market Trends
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Buyer's Market Emerging</h4>
                  <p className="text-slate-600">4.5 months of inventory creates excellent negotiation opportunities</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Price Appreciation</h4>
                  <p className="text-slate-600">15% average increase across luxury neighborhoods year-over-year</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Days on Market</h4>
                  <p className="text-slate-600">65 days average, down from 80 days last quarter</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Investment Opportunities
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Rental Income</h4>
                  <p className="text-slate-600">Luxury properties generate $8K-$15K monthly rental income</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Appreciation Potential</h4>
                  <p className="text-slate-600">Strong fundamentals support continued price growth</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Tax Benefits</h4>
                  <p className="text-slate-600">Nevada's tax-friendly environment for real estate investors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Luxury Dream Home?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is here to guide you through every step of your luxury home search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => trackEvent({
                event: 'cta_click',
                category: 'conversion',
                action: 'cta_click',
                label: 'luxury_homes_contact_phone',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'luxury_homes_page',
                  cd3: 'phone',
                  cd4: '2500',
                },
              })}
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Call (702) 555-0123
            </button>
            <button
              type="button"
              onClick={() => trackEvent({
                event: 'cta_click',
                category: 'conversion',
                action: 'cta_click',
                label: 'luxury_homes_contact_email',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'luxury_homes_page',
                  cd3: 'email',
                  cd4: '2500',
                },
              })}
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
