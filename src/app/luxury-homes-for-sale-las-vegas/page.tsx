'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
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
            Discover exclusive luxury homes in Las Vegas's most prestigious neighborhoods. From Red
            Rock Country Club to The Ridges Summerlin, find your dream property with Dr. Jan Duffy.
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
                  label: 'luxury_homes_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
                    cd3: 'consultation',
                    cd4: '2500',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Luxury Consultation
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
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
                })
              }
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Luxury Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Handpicked luxury homes with premium features, stunning views, and exceptional
              locations
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
                onClick={() =>
                  trackEvent({
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
                  })
                }
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
                onClick={() =>
                  trackEvent({
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
                  })
                }
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
                onClick={() =>
                  trackEvent({
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
                  })
                }
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
                onClick={() =>
                  trackEvent({
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
                  })
                }
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
                onClick={() =>
                  trackEvent({
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
                  })
                }
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
                Can't find what you're looking for? Let Dr. Jan Duffy create a custom search based
                on your specific requirements and preferences.
              </p>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
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
                  })
                }
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
              <p className="text-slate-600">
                Infinity pools, spa features, and resort-style amenities
              </p>
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
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Current Market Trends</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Buyer's Market Emerging</h4>
                  <p className="text-slate-600">
                    4.5 months of inventory creates excellent negotiation opportunities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Price Appreciation</h4>
                  <p className="text-slate-600">
                    15% average increase across luxury neighborhoods year-over-year
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Days on Market</h4>
                  <p className="text-slate-600">65 days average, down from 80 days last quarter</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Opportunities</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Rental Income</h4>
                  <p className="text-slate-600">
                    Luxury properties generate $8K-$15K monthly rental income
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Appreciation Potential</h4>
                  <p className="text-slate-600">
                    Strong fundamentals support continued price growth
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Tax Benefits</h4>
                  <p className="text-slate-600">
                    Nevada's tax-friendly environment for real estate investors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Luxury Dream Home?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is here to guide you through every step of your luxury home search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
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
                  label: 'luxury_homes_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_homes_page',
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

      {/* Comprehensive Guide to Buying Luxury Homes */}
      <section className="buying-guide bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Buying Luxury Homes in Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Understanding the Las Vegas Luxury Real Estate Market
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The Las Vegas luxury real estate market represents one of the most dynamic and attractive markets in the United States. With properties ranging from $1 million to over $25 million, Las Vegas offers luxury homebuyers exceptional value compared to other major metropolitan areas like Los Angeles, San Francisco, or New York.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                What makes Las Vegas unique for luxury homebuyers is the combination of world-class amenities, favorable tax environment with no state income tax, and the ability to own a resort-style property at a fraction of the cost found in coastal markets. Luxury homes in Las Vegas feature private pools, golf course access, gated communities, and stunning views of the surrounding mountains and Las Vegas Strip.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Why Red Rock Country Club is Las Vegas's Premier Luxury Community
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Red Rock Country Club stands as Las Vegas's most prestigious golf course community, with luxury homes averaging $2.1 million. This exclusive master-planned community features two championship golf courses, private club facilities, and luxury estates with unparalleled views of the Red Rock Canyon National Conservation Area.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Properties in Red Rock Country Club typically feature 4,000 to 8,000 square feet of living space, custom architecture, and resort-style amenities. The community has experienced 15% year-over-year price appreciation, making it an attractive investment opportunity for luxury homebuyers seeking both lifestyle and financial returns.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                The Ridges Summerlin: Ultra-Luxury Living at Its Finest
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The Ridges Summerlin represents the pinnacle of luxury living in Las Vegas, with homes commanding a median price of $2.5 million. This exclusive community features ultra-luxury estates positioned on elevated sites offering panoramic views of the Las Vegas Strip, surrounding mountains, and the valley below.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Homes in The Ridges typically span 5,000 to 12,000 square feet, featuring contemporary architecture, smart home technology, and premium finishes throughout. The community's private golf course and club facilities provide residents with exclusive access to world-class amenities, while the elevated location ensures privacy and spectacular views.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                MacDonald Highlands: Henderson's Premier Luxury Community
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                MacDonald Highlands in Henderson offers luxury homebuyers exceptional value with a median price of $1.8 million. This master-planned community features custom estates, mountain views, and access to the Dragon Ridge Golf Club. The community's location in Henderson provides a quieter, more residential feel while maintaining easy access to Las Vegas amenities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Properties in MacDonald Highlands range from 3,500 to 10,000 square feet, with many featuring Mediterranean-inspired architecture, private pools, and outdoor entertainment areas. The community has shown strong appreciation with 18% year-over-year growth, making it an attractive option for luxury homebuyers seeking both lifestyle and investment value.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What to Look for When Buying Luxury Homes in Las Vegas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Location and Neighborhood</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The location of your luxury home significantly impacts both lifestyle and investment value. Master-planned communities like Summerlin and Henderson offer world-class amenities, excellent schools, and strong community infrastructure. Consider proximity to golf courses, shopping, dining, and entertainment when selecting your luxury home location.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Neighborhoods with established reputations like Red Rock Country Club and The Ridges tend to maintain value better and offer more consistent appreciation. These communities also provide better access to exclusive amenities and social networks within the luxury market.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Property Features and Amenities</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Luxury homes in Las Vegas are defined by premium features including private pools and spas, outdoor kitchens, smart home technology, and high-end finishes. Look for properties with custom architecture, premium materials, and resort-style amenities that enhance your lifestyle and provide enjoyment for family and guests.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Properties with golf course access, mountain views, or Strip views command premium prices and offer better long-term appreciation potential. Gated communities with 24-hour security provide peace of mind and exclusivity that luxury homebuyers value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working with a Luxury Real Estate Expert */}
      <section className="expert-guidance bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Why Work with Dr. Jan Duffy for Your Luxury Home Purchase
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Exclusive Access to Off-Market Listings
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dr. Jan Duffy's extensive network and reputation in the Las Vegas luxury market provide access to exclusive off-market listings and pocket listings that never appear on public MLS. These properties often represent the best opportunities for luxury homebuyers, offering better pricing and less competition.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her relationships with luxury home sellers, developers, and other real estate professionals ensure clients see properties before they hit the market, giving them a significant advantage in competitive situations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Expert Negotiation and Transaction Management
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Luxury real estate transactions require sophisticated negotiation skills and attention to detail. Dr. Duffy's experience with over 500 luxury transactions has honed her ability to negotiate favorable terms, handle complex contingencies, and navigate the intricacies of high-value real estate deals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her background in psychology provides unique insights into seller motivations and negotiation dynamics, ensuring clients achieve optimal outcomes while maintaining positive relationships throughout the transaction process.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Comprehensive Market Knowledge
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                With over 15 years of experience in Las Vegas luxury real estate, Dr. Duffy possesses deep knowledge of market trends, property values, and neighborhood characteristics. This expertise enables her to help clients make informed decisions about their luxury home purchases.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her understanding of Las Vegas luxury neighborhoods, from Red Rock Country Club to The Ridges, ensures clients receive accurate market analysis and property valuations that reflect true market conditions and future appreciation potential.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              The Luxury Home Buying Process with Dr. Jan Duffy
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Initial Consultation and Needs Assessment</h4>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Duffy begins every luxury home search with a comprehensive consultation to understand your lifestyle needs, investment objectives, and specific property preferences. This initial assessment ensures the search process targets properties that truly match your requirements, saving time and maximizing the likelihood of finding your ideal luxury home.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Custom Property Search and Showings</h4>
                <p className="text-slate-600 leading-relaxed">
                  Based on your criteria, Dr. Duffy creates a custom search strategy that includes both on-market and off-market properties. She arranges private showings at your convenience, providing detailed property analysis and neighborhood insights to help you evaluate each opportunity thoroughly.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Offer Strategy and Negotiation</h4>
                <p className="text-slate-600 leading-relaxed">
                  Once you've identified your ideal luxury home, Dr. Duffy develops a strategic offer approach based on market analysis, comparable sales, and seller motivations. Her negotiation expertise ensures you secure the property at the best possible terms while protecting your interests throughout the transaction.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Due Diligence and Closing Management</h4>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Duffy coordinates all aspects of the luxury home purchase, from inspections and appraisals to title work and financing. Her attention to detail and experience with luxury transactions ensures a smooth closing process, addressing any issues that arise and keeping you informed every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('buying')}
        title="Frequently Asked Questions About Luxury Homes for Sale in Las Vegas"
        subtitle="Common questions about buying luxury properties, answered by your Las Vegas home expert"
      />
    </>
  );
}
