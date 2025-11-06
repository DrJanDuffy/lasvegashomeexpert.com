'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function AnthemHomesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Anthem Luxury Homes for Sale
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$950K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">55</div>
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
            Experience master-planned luxury living in Anthem. Dr. Jan Duffy specializes in this
            prestigious community with golf courses, parks, and world-class amenities.
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
                  label: 'anthem_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'anthem_page',
                    cd3: 'consultation',
                    cd4: '2100',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Anthem Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'anthem_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'anthem_page',
                    cd3: 'properties',
                    cd4: '2100',
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

      {/* Featured Anthem Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Anthem Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Master-planned luxury homes with golf courses, parks, and world-class amenities in
              Henderson
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="700000"
              location="Anthem, Henderson, NV"
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
            Anthem Master-Planned Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">⛳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Anthem Country Club</h3>
              <p className="text-slate-600">
                Championship golf course with private club access and dining facilities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Parks & Trails</h3>
              <p className="text-slate-600">
                Extensive park system with walking trails and outdoor recreational facilities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Top Schools</h3>
              <p className="text-slate-600">
                A-rated public schools and private education options within the community
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Shopping & Dining</h3>
              <p className="text-slate-600">
                Premium shopping centers and fine dining establishments nearby
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Anthem Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Golf Course Homes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏌️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Golf Course Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1M - $2.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Golf course frontage</li>
                <li>• 3,500-6,000+ sq ft</li>
                <li>• Mountain views</li>
                <li>• Country club access</li>
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
                      cd2: 'anthem_page',
                      cd3: 'golf_homes',
                      cd4: '1500',
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
                <div className="text-3xl font-bold text-green-600 mb-2">$1.5M - $4M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Custom architecture</li>
                <li>• 5,000-10,000+ sq ft</li>
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
                      cd2: 'anthem_page',
                      cd3: 'luxury_estates',
                      cd4: '1500',
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
                <div className="text-3xl font-bold text-green-600 mb-2">$700K - $1.5M</div>
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
                      cd2: 'anthem_page',
                      cd3: 'family_homes',
                      cd4: '1500',
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
            Anthem Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Strong Growth</h4>
                  <p className="text-slate-600">
                    15% year-over-year appreciation with $950K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Premium Location</h4>
                  <p className="text-slate-600">
                    Anthem commands premium over Henderson average due to amenities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Golf Premium</h4>
                  <p className="text-slate-600">
                    Golf course homes show 20% premium over non-golf properties
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
                  <h4 className="font-semibold text-slate-800 mb-2">Golf Lifestyle</h4>
                  <p className="text-slate-600">
                    Country club access creates premium living experience
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Family Appeal</h4>
                  <p className="text-slate-600">
                    Excellent schools and amenities attract high-income families
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
            Dr. Jan Duffy: Anthem Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Local Expert</h3>
              <p className="text-slate-600">
                Deep knowledge of Anthem market with $40M+ in sales in this community
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Connections</h3>
              <p className="text-slate-600">
                Strong relationships with Anthem residents, builders, and community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction and market knowledge for Anthem luxury market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Anthem Living?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Anthem specialist. Discover master-planned luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'anthem_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'anthem_page',
                    cd3: 'phone',
                    cd4: '2100',
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
                  label: 'anthem_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'anthem_page',
                    cd3: 'email',
                    cd4: '2100',
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

      {/* Comprehensive Anthem Homes Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Anthem Luxury Homes for Sale Henderson Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Anthem: Master-Planned Luxury Living in Henderson
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Anthem offers luxury living in Henderson with access to master-planned community amenities, golf courses, parks, and world-class facilities. This premier master-planned community features luxury homes designed for families and professionals seeking quality living with comprehensive amenities and family-oriented environment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's location in Henderson provides residents with a quieter, more residential feel while maintaining easy access to Las Vegas amenities. Anthem's master-planned design includes parks, trails, shopping centers, and recreational facilities that support active lifestyles and family living.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Luxury Homes in Anthem
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Anthem homes range from $700,000 to over $2.5 million, featuring quality construction, modern designs, and access to community amenities. Properties typically include 2,500 to 6,000 square feet of living space, private yards, and modern finishes. The community's luxury homes appeal to families and professionals seeking luxury living with family-oriented amenities.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Buy Luxury Homes in Anthem
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Anthem offers luxury homebuyers exceptional value through master-planned community amenities, excellent schools, strong appreciation, and family-friendly environment. The community's median price of $950,000 represents excellent value for luxury living, while providing access to comprehensive amenities and lifestyle options.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's real estate market shows strong fundamentals with 15% year-over-year appreciation, 55 days average on market, and 4.2 months of inventory. These metrics indicate a healthy market with strong demand and appreciation potential, making Anthem an attractive investment opportunity.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Anthem Homes
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Anthem real estate, with extensive knowledge of the community's properties, market conditions, and buyer preferences. Her expertise in Henderson master-planned communities enables her to help buyers find properties that match their lifestyle and investment goals in this premier community.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Anthem Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Master-Planned Community Excellence</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Anthem's master-planned design provides residents with comprehensive amenities including golf courses, parks, trails, shopping centers, and recreational facilities. The community's commitment to maintaining high standards and providing ongoing development ensures residents enjoy premium amenities that enhance quality of life.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The community's amenities support active lifestyles and family living, creating opportunities for outdoor recreation, social connection, and community engagement. This comprehensive approach to community development creates exceptional value for luxury homebuyers seeking both lifestyle and family support.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Mountain Views and Natural Setting</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Anthem's location in Henderson provides residents with mountain views and proximity to natural areas, creating unique living experiences that appeal to buyers seeking both luxury living and natural beauty. The community's commitment to preserving views and natural areas ensures long-term value and desirability.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This combination of luxury living and natural setting makes Anthem attractive to luxury homebuyers seeking both lifestyle and connection to nature. The community's commitment to maintaining these characteristics ensures long-term value and desirability for luxury homebuyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Anthem Homes"
        subtitle="Common questions about buying homes in Anthem, answered by your Las Vegas home expert"
      />
    </>
  );
}
