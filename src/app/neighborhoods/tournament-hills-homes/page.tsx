'use client';

import type { Metadata } from 'next';
import { trackEvent } from '@/utils';

export default function TournamentHillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Tournament Hills Luxury Homes
          </h1>
          
          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$1.2M</div>
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
                <div className="text-4xl font-bold text-amber-400 mb-2">10%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover championship golf living at Tournament Hills. Dr. Jan Duffy specializes in this 
            exclusive community featuring luxury homes, resort amenities, and pristine golf courses.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              type="button"
              onClick={() => trackEvent({
                event: 'cta_click',
                category: 'conversion',
                action: 'cta_click',
                label: 'tournament_hills_consultation',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'tournament_hills_page',
                  cd3: 'consultation',
                  cd4: '2000',
                },
              })}
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Golf Tour
            </button>
            <button
              type="button"
              onClick={() => trackEvent({
                event: 'cta_click',
                category: 'conversion',
                action: 'cta_click',
                label: 'tournament_hills_properties',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'tournament_hills_page',
                  cd3: 'properties',
                  cd4: '2000',
                },
              })}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Available Homes
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tournament Hills Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Tournament Hills Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Championship golf course homes and luxury townhomes in this prestigious gated community
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="PRICE_DESC" 
              listing-status="For Sale" 
              property-types="SFR,MF" 
              price-min="800000"
              location="Tournament Hills, Las Vegas, NV"
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
            Tournament Hills Amenities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Championship Golf</h3>
              <p className="text-slate-600">
                Two 18-hole championship golf courses with professional tournament standards
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Resort Pools</h3>
              <p className="text-slate-600">
                Multiple resort-style pools, spas, and aquatic facilities throughout the community
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎾</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Tennis & Fitness</h3>
              <p className="text-slate-600">
                Professional tennis courts and state-of-the-art fitness centers for active lifestyles
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Dining & Events</h3>
              <p className="text-slate-600">
                Multiple restaurants, banquet facilities, and event spaces for social gatherings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Tournament Hills Home Options
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Golf Course Homes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⛳</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Golf Course Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.5M - $3M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Golf course frontage</li>
                <li>• 3,000-5,500+ sq ft</li>
                <li>• Private putting greens</li>
                <li>• Resort-style backyards</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'property_type_click',
                  category: 'exploration',
                  action: 'property_type_view',
                  label: 'golf_course_homes',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'tournament_hills_page',
                    cd3: 'golf_homes',
                    cd4: '1500',
                  },
                })}
                className="w-full btn-accent-buyer py-3"
              >
                View Golf Course Homes
              </button>
            </div>

            {/* Luxury Townhomes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Luxury Townhomes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $1.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Low-maintenance living</li>
                <li>• 2,000-3,500+ sq ft</li>
                <li>• Private patios</li>
                <li>• Community amenities</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'property_type_click',
                  category: 'exploration',
                  action: 'property_type_view',
                  label: 'luxury_townhomes',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'tournament_hills_page',
                    cd3: 'townhomes',
                    cd4: '1500',
                  },
                })}
                className="w-full btn-accent-buyer py-3"
              >
                View Luxury Townhomes
              </button>
            </div>

            {/* Custom Luxury Homes */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Custom Luxury Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2M - $5M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Custom architecture</li>
                <li>• 4,000-8,000+ sq ft</li>
                <li>• Premium lot locations</li>
                <li>• Luxury finishes</li>
              </ul>
              <button
                type="button"
                onClick={() => trackEvent({
                  event: 'property_type_click',
                  category: 'exploration',
                  action: 'property_type_view',
                  label: 'custom_luxury_homes',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'tournament_hills_page',
                    cd3: 'custom_homes',
                    cd4: '1500',
                  },
                })}
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
            Tournament Hills Market Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Market Performance
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Steady Growth</h4>
                  <p className="text-slate-600">10% year-over-year appreciation with $1.2M median price</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Quick Sales</h4>
                  <p className="text-slate-600">45 days average market time, faster than Las Vegas average</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Golf Premium</h4>
                  <p className="text-slate-600">Golf course homes command 15-25% premium over interior lots</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Lifestyle Benefits
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Golf Lifestyle</h4>
                  <p className="text-slate-600">Two championship courses with professional tournament quality</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Resort Amenities</h4>
                  <p className="text-slate-600">Pools, tennis, fitness, and dining within the community</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Active Community</h4>
                  <p className="text-slate-600">Vibrant social calendar with events and tournaments</p>
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
            Dr. Jan Duffy: Tournament Hills Expert
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🏌️</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Golf Community Specialist</h3>
              <p className="text-slate-600">
                Deep understanding of golf lifestyle and Tournament Hills community dynamics
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Connections</h3>
              <p className="text-slate-600">
                Strong relationships with Tournament Hills residents and community management
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Market Performance</h3>
              <p className="text-slate-600">
                $25M+ in Tournament Hills sales with exceptional client satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Tournament Hills Golf Living?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Tournament Hills specialist. Discover championship golf lifestyle today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => trackEvent({
                event: 'cta_click',
                category: 'conversion',
                action: 'cta_click',
                label: 'tournament_hills_contact_phone',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'tournament_hills_page',
                  cd3: 'phone',
                  cd4: '2000',
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
                label: 'tournament_hills_contact_email',
                customDimensions: {
                  cd1: 'luxury_buyer',
                  cd2: 'tournament_hills_page',
                  cd3: 'email',
                  cd4: '2000',
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
