'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function SunCityCommunitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Sun City Communities - 55+ Luxury Living
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$650K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">42</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">3.5</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">13%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover luxury 55+ active adult living in Sun City communities. Dr. Jan Duffy
            specializes in these prestigious retirement communities with golf courses, recreation
            centers, and resort-style amenities.
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
                  label: 'sun_city_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'sun_city_page',
                    cd3: 'consultation',
                    cd4: '1900',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Sun City Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'sun_city_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'sun_city_page',
                    cd3: 'properties',
                    cd4: '1900',
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

      {/* Featured Sun City Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Sun City Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              55+ luxury homes with resort-style amenities in premier retirement communities
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="500000"
              location="Sun City, Las Vegas, NV"
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
            Sun City 55+ Community Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">⛳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Golf Courses</h3>
              <p className="text-slate-600">
                Multiple championship golf courses with clubhouse dining and social events
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Recreation Centers</h3>
              <p className="text-slate-600">
                State-of-the-art fitness centers, pools, and sports facilities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Arts & Culture</h3>
              <p className="text-slate-600">
                Creative arts studios, theaters, and cultural enrichment programs
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Social Activities</h3>
              <p className="text-slate-600">
                Clubs, groups, and social events for active adult lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Sun City Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury Villas */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Luxury Villas</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$500K - $1.2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,000-3,500+ sq ft</li>
                <li>• Low maintenance</li>
                <li>• Resort-style amenities</li>
                <li>• Golf course views</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'luxury_villas',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'sun_city_page',
                      cd3: 'luxury_villas',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Luxury Villas
              </button>
            </div>

            {/* Executive Homes */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Executive Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 3,000-5,000+ sq ft</li>
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
                    label: 'executive_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'sun_city_page',
                      cd3: 'executive_homes',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Executive Homes
              </button>
            </div>

            {/* Active Adult Condos */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Active Adult Condos</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$400K - $800K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,500-2,500+ sq ft</li>
                <li>• Resort-style living</li>
                <li>• Community amenities</li>
                <li>• Maintenance included</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'active_adult_condos',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'sun_city_page',
                      cd3: 'active_adult_condos',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Active Adult Condos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Sun City Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Steady Growth</h4>
                  <p className="text-slate-600">
                    13% year-over-year appreciation with $650K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Active Adult Demand</h4>
                  <p className="text-slate-600">
                    High demand from retiring baby boomers seeking luxury amenities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Resort Lifestyle</h4>
                  <p className="text-slate-600">
                    Premium pricing for homes with golf course and amenity access
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">55+ Exclusivity</h4>
                  <p className="text-slate-600">
                    Age-restricted communities maintain premium value and demand
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Resort Amenities</h4>
                  <p className="text-slate-600">
                    Comprehensive facilities support luxury lifestyle and value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Low Maintenance</h4>
                  <p className="text-slate-600">
                    HOA services and maintenance appeal to active adult buyers
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
            Dr. Jan Duffy: Sun City 55+ Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Active Adult Expert</h3>
              <p className="text-slate-600">
                Specialized knowledge of 55+ communities with $35M+ in Sun City sales
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Knowledge</h3>
              <p className="text-slate-600">
                Strong relationships with Sun City residents and community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction in active adult luxury market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Sun City Living?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Sun City specialist. Discover luxury 55+ active adult living
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
                  label: 'sun_city_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'sun_city_page',
                    cd3: 'phone',
                    cd4: '1900',
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
                  label: 'sun_city_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'sun_city_page',
                    cd3: 'email',
                    cd4: '1900',
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

      {/* Comprehensive Sun City Communities Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Sun City Communities 55+ Luxury Living Las Vegas
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Sun City Communities: Premier 55+ Active Adult Living
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Sun City Communities offer premier 55+ active adult living in Las Vegas, featuring
                luxury homes with access to golf courses, recreation centers, and resort-style
                amenities. These age-restricted communities provide active adults with
                maintenance-free living, comprehensive amenities, and vibrant social environments
                that support active lifestyles.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The communities' locations in Summerlin and Henderson provide residents with access
                to world-class amenities, excellent healthcare facilities, and diverse entertainment
                options. Sun City's commitment to active adult living creates exceptional value for
                55+ buyers seeking vibrant retirement experiences with resort-style amenities.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Luxury Homes in Sun City Communities
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sun City Communities homes range from $400,000 to over $1.5 million, featuring
                quality construction, single-story designs, and access to community amenities.
                Properties typically include 1,500 to 4,000 square feet of living space,
                low-maintenance landscaping, and modern finishes. The communities' luxury homes
                appeal to active adults seeking maintenance-free living with comprehensive
                amenities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Sun City Communities
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Sun City Communities offer active adults exceptional value through maintenance-free
                living, comprehensive amenities, strong appreciation, and vibrant social
                environments. The communities' median price of $650,000 represents excellent value
                for 55+ luxury living, while providing access to world-class amenities and lifestyle
                options.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The communities' real estate markets show strong fundamentals with 13%
                year-over-year appreciation, 42 days average on market, and 3.5 months of inventory.
                These metrics indicate healthy markets with strong demand and appreciation
                potential, making Sun City Communities attractive investment opportunities.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Sun City Communities
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Sun City Communities real estate, with extensive
                knowledge of the communities' properties, market conditions, and buyer preferences.
                Her expertise in 55+ active adult communities enables her to help buyers find
                properties that match their lifestyle and investment goals in these premier
                retirement communities.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Sun City Communities Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Comprehensive Active Adult Amenities
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Sun City Communities feature comprehensive amenities including golf courses,
                  recreation centers, fitness facilities, swimming pools, and organized activities
                  that support active adult lifestyles. The communities' commitment to providing
                  comprehensive amenities ensures residents enjoy vibrant, engaging retirement
                  experiences.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The quality and variety of amenities can significantly impact residents' enjoyment
                  of community living. Communities with comprehensive amenities and active programs
                  provide more opportunities for engagement and social connection, contributing to
                  fulfilling active adult lifestyles.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Maintenance-Free Living</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Sun City Communities offer maintenance-free living with community services that
                  handle exterior maintenance, landscaping, and common area upkeep. This
                  maintenance-free approach allows residents to focus on enjoying their active
                  lifestyles without the burden of property maintenance responsibilities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The communities' maintenance-free living creates opportunities for active adults
                  to travel, pursue hobbies, and engage in community activities without worrying
                  about property upkeep. This freedom enhances quality of life and contributes to
                  the vibrant retirement experiences that define Sun City Communities living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Sun City Communities"
        subtitle="Common questions about living and buying in Sun City Communities, answered by your Las Vegas home expert"
      />
    </>
  );
}
