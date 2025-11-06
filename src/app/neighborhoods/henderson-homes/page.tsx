'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function HendersonHomesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Henderson Luxury Homes for Sale
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$1.6M</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">52</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">4.3</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">14%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover luxury living in Henderson, including the prestigious MacDonald Highlands. Dr.
            Jan Duffy specializes in this area with mountain views, golf courses, and exclusive
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
                  label: 'henderson_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'henderson_page',
                    cd3: 'consultation',
                    cd4: '2200',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Henderson Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'henderson_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'henderson_page',
                    cd3: 'properties',
                    cd4: '2200',
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

      {/* Featured Henderson Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Henderson Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Luxury homes in Henderson including MacDonald Highlands, Anthem, and Green Valley
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="700000"
              location="Henderson, NV"
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

      {/* MacDonald Highlands Spotlight */}
      <section className="macdonald-highlands bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            MacDonald Highlands - Henderson's Crown Jewel
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Ultra-Luxury Mountain Living
              </h3>
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Mountain Views</h4>
                  <p className="text-slate-600">
                    Panoramic views of the Black Mountain Range and Las Vegas Valley
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Golf Course Access</h4>
                  <p className="text-slate-600">
                    Private access to Anthem Country Club and other premier golf courses
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Exclusive Community</h4>
                  <p className="text-slate-600">
                    Gated security with only 1,200 homesites ensuring privacy
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'cta_click',
                    category: 'conversion',
                    action: 'cta_click',
                    label: 'macdonald_highlands_tour',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'henderson_page',
                      cd3: 'macdonald_tour',
                      cd4: '2200',
                    },
                  })
                }
                className="btn-accent-buyer text-lg px-8 py-4"
              >
                Tour MacDonald Highlands
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                MacDonald Highlands Market Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Median Price:</span>
                  <span className="text-2xl font-bold text-green-600">$1.8M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Days on Market:</span>
                  <span className="text-2xl font-bold text-blue-600">45</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">YoY Appreciation:</span>
                  <span className="text-2xl font-bold text-green-600">18%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-slate-700">Inventory:</span>
                  <span className="text-2xl font-bold text-orange-600">3.2 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features Section */}
      <section className="community-features bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Henderson Community Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">⛰️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Mountain Views</h3>
              <p className="text-slate-600">
                Stunning Black Mountain Range views throughout Henderson communities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">⛳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Golf Courses</h3>
              <p className="text-slate-600">
                Multiple championship golf courses including Anthem Country Club
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Parks & Recreation</h3>
              <p className="text-slate-600">
                Extensive park system with hiking trails and outdoor activities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Shopping & Dining</h3>
              <p className="text-slate-600">
                Premium shopping centers and fine dining establishments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Henderson Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MacDonald Highlands Estates */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">MacDonald Highlands</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.5M - $5M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Mountain view estates</li>
                <li>• 4,000-10,000+ sq ft</li>
                <li>• Golf course access</li>
                <li>• Ultra-exclusive</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'macdonald_highlands_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'henderson_page',
                      cd3: 'macdonald_estates',
                      cd4: '1500',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View MacDonald Highlands
              </button>
            </div>

            {/* Anthem Luxury Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Anthem Luxury</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $2.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Master-planned community</li>
                <li>• 3,000-6,000+ sq ft</li>
                <li>• Country club access</li>
                <li>• Family-friendly</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'anthem_luxury_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'henderson_page',
                      cd3: 'anthem_homes',
                      cd4: '1500',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Anthem Homes
              </button>
            </div>

            {/* Green Valley Estates */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Green Valley</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$700K - $1.8M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Established community</li>
                <li>• 2,500-5,000+ sq ft</li>
                <li>• Mature landscaping</li>
                <li>• Excellent schools</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'green_valley_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'henderson_page',
                      cd3: 'green_valley',
                      cd4: '1500',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Green Valley
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Henderson Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Strong Growth</h4>
                  <p className="text-slate-600">
                    14% year-over-year appreciation with $1.6M median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Premium Location</h4>
                  <p className="text-slate-600">
                    Henderson commands premium over Las Vegas average due to amenities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">MacDonald Highlands</h4>
                  <p className="text-slate-600">
                    Ultra-luxury segment shows 18% appreciation with limited inventory
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Mountain Views</h4>
                  <p className="text-slate-600">
                    Protected mountain views that cannot be built out maintain value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Golf Lifestyle</h4>
                  <p className="text-slate-600">
                    Multiple championship golf courses support luxury market
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
            Dr. Jan Duffy: Henderson & MacDonald Highlands Expert
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Local Specialist</h3>
              <p className="text-slate-600">
                Deep knowledge of Henderson market with $60M+ in sales including MacDonald Highlands
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Connections</h3>
              <p className="text-slate-600">
                Strong relationships with Henderson residents, builders, and community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction and market knowledge for Henderson luxury market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Henderson Luxury Home?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Henderson specialist. Discover mountain view luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'henderson_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'henderson_page',
                    cd3: 'phone',
                    cd4: '2200',
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
                  label: 'henderson_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'henderson_page',
                    cd3: 'email',
                    cd4: '2200',
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

      {/* Comprehensive Henderson Homes Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Henderson Luxury Homes for Sale Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Henderson: Premier Luxury Living in Las Vegas Valley
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Henderson offers luxury living with a quieter, more residential feel while maintaining easy access to Las Vegas amenities. This established city features master-planned communities, excellent schools, and strong community infrastructure that appeals to luxury homebuyers seeking quality living with family-oriented amenities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The city's location southeast of Las Vegas provides residents with proximity to Lake Las Vegas, Lake Mead, and outdoor recreation while maintaining access to Las Vegas employment, shopping, and entertainment. Henderson's established reputation and ongoing development ensure continued desirability and value growth for luxury homebuyers.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Luxury Neighborhoods in Henderson
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Henderson features several luxury neighborhoods including MacDonald Highlands, Green Valley, and Anthem, each offering unique characteristics and amenities. These neighborhoods feature luxury homes with mountain views, golf course access, and resort-style amenities. Dr. Jan Duffy's expertise in Henderson luxury neighborhoods enables her to help buyers identify properties that match their lifestyle and investment goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Buy Luxury Homes in Henderson
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Henderson offers luxury homebuyers exceptional value through established neighborhoods, excellent schools, strong appreciation, and family-friendly environment. The city's median home price of $1.6 million represents excellent value for luxury living, while providing access to comprehensive amenities and lifestyle options.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The city's real estate market shows strong fundamentals with 14% year-over-year appreciation, 52 days average on market, and 4.3 months of inventory. These metrics indicate a healthy market with strong demand and appreciation potential, making Henderson an attractive investment opportunity.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Henderson Homes
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Henderson luxury real estate, with extensive knowledge of the city's neighborhoods, market conditions, and buyer preferences. Her expertise in Henderson communities enables her to help buyers find properties that match their lifestyle and investment goals in this premier Las Vegas Valley city.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Henderson Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Master-Planned Communities and Luxury Neighborhoods</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Henderson features several master-planned communities and luxury neighborhoods including MacDonald Highlands, Green Valley, and Anthem, each offering unique characteristics and amenities. These communities provide luxury homebuyers with diverse options that match different preferences and budgets.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The city's commitment to master-planned development ensures residents enjoy comprehensive amenities, excellent schools, and strong community infrastructure. This commitment to quality development creates exceptional value for luxury homebuyers seeking both lifestyle and investment value.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Excellent Schools and Family-Friendly Environment</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Henderson features excellent schools that are consistently ranked among Nevada's best. The city's family-friendly environment, safe neighborhoods, and comprehensive amenities make it ideal for families seeking luxury living with family-oriented amenities. This combination appeals to luxury homebuyers with children or those planning families.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The city's commitment to education and family services ensures residents have access to resources that support family life. This family-friendly focus combined with luxury amenities creates an environment that appeals to luxury homebuyers seeking both lifestyle and family support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Henderson Homes"
        subtitle="Common questions about living and buying in Henderson, answered by your Las Vegas home expert"
      />
    </>
  );
}
