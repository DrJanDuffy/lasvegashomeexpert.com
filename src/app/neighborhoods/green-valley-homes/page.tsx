'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function GreenValleyHomesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Green Valley Luxury Homes for Sale
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$750K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">48</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">4.0</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">12%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover established luxury living in Green Valley. Dr. Jan Duffy specializes in this
            mature community with excellent schools, parks, and established amenities.
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
                  label: 'green_valley_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
                    cd3: 'consultation',
                    cd4: '2000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Green Valley Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'green_valley_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
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

      {/* Featured Green Valley Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Green Valley Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Established luxury homes with mature landscaping and excellent schools in Henderson
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="600000"
              location="Green Valley, Henderson, NV"
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
            Green Valley Community Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Top-Rated Schools</h3>
              <p className="text-slate-600">
                A-rated public schools including Green Valley High School and elementary schools
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Parks & Recreation</h3>
              <p className="text-slate-600">
                Multiple parks, walking trails, and recreational facilities throughout the community
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Shopping & Dining</h3>
              <p className="text-slate-600">
                Green Valley Ranch and multiple shopping centers with premium retail options
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community Pools</h3>
              <p className="text-slate-600">
                Multiple swimming pools and spa facilities for residents' enjoyment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Green Valley Home Styles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Established Luxury Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Established Luxury</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$600K - $1.2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,500-4,500+ sq ft</li>
                <li>• 3-5 bedrooms</li>
                <li>• Mature landscaping</li>
                <li>• Established neighborhoods</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'established_luxury_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'green_valley_page',
                      cd3: 'established_homes',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Established Homes
              </button>
            </div>

            {/* Executive Estates */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Executive Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1M - $2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 4,000-6,000+ sq ft</li>
                <li>• Premium lot locations</li>
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
                    label: 'executive_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'green_valley_page',
                      cd3: 'executive_estates',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Executive Estates
              </button>
            </div>

            {/* Family Homes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Family Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$500K - $900K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,000-3,500+ sq ft</li>
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
                      cd2: 'green_valley_page',
                      cd3: 'family_homes',
                      cd4: '1200',
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
            Green Valley Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Steady Growth</h4>
                  <p className="text-slate-600">
                    12% year-over-year appreciation with $750K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Established Community</h4>
                  <p className="text-slate-600">
                    Mature neighborhood with proven value appreciation over time
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Family Appeal</h4>
                  <p className="text-slate-600">
                    High demand from families seeking established schools and amenities
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Mature Infrastructure</h4>
                  <p className="text-slate-600">
                    Established utilities, roads, and community facilities support value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">School District</h4>
                  <p className="text-slate-600">
                    Top-rated schools maintain strong demand and property values
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Location Premium</h4>
                  <p className="text-slate-600">
                    Convenient access to shopping, dining, and major highways
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
            Dr. Jan Duffy: Green Valley Expert
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Local Specialist</h3>
              <p className="text-slate-600">
                Deep knowledge of Green Valley market with $25M+ in sales in this community
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Knowledge</h3>
              <p className="text-slate-600">
                Strong relationships with Green Valley residents and community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction and market knowledge for Green Valley
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Green Valley Home?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Green Valley specialist. Discover established luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'green_valley_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
                    cd3: 'phone',
                    cd4: '2000',
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
                  label: 'green_valley_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'green_valley_page',
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

      {/* Comprehensive Green Valley Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Green Valley Luxury Homes Henderson Las Vegas
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Green Valley: Established Luxury Living in Henderson
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Green Valley in Henderson offers established luxury living with mature
                neighborhoods, excellent schools, and well-maintained properties. This established
                community features mature trees, well-maintained landscaping, and quality
                construction that has stood the test of time. The community's established nature
                creates a sense of permanence and stability that appeals to luxury homebuyers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's location in Henderson provides residents with a quieter, more
                residential feel while maintaining easy access to Las Vegas amenities. Green
                Valley's established infrastructure, excellent schools, and strong community
                character make it attractive to families and professionals seeking luxury living in
                a mature, well-established community.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Luxury Homes in Green Valley
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Green Valley homes range from $500,000 to over $2 million, featuring quality
                construction, mature landscaping, and established neighborhoods. Properties
                typically include 2,000 to 5,000 square feet of living space, private yards with
                mature trees, and well-maintained exteriors. The community's established nature
                provides luxury living at accessible price points.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Green Valley</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Green Valley offers luxury homebuyers exceptional value through established
                neighborhoods, excellent schools, strong appreciation, and mature community
                character. The community's median price of $750,000 represents excellent value for
                luxury living, while providing access to established amenities and infrastructure.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The community's real estate market shows strong fundamentals with 12% year-over-year
                appreciation, 48 days average on market, and 4.0 months of inventory. These metrics
                indicate a healthy market with strong demand and appreciation potential, making
                Green Valley an attractive investment opportunity.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Green Valley
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Green Valley real estate, with extensive knowledge of
                the community's established neighborhoods, market conditions, and buyer preferences.
                Her expertise in Henderson luxury communities enables her to help buyers find
                properties that match their lifestyle and investment goals in this established
                luxury community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Green Valley Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Established Neighborhoods and Mature Landscaping
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Green Valley's established neighborhoods feature mature trees, well-maintained
                  landscaping, and quality construction that has proven its value over time. The
                  community's mature character creates a sense of permanence and stability that
                  appeals to luxury homebuyers seeking established luxury living.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This established nature provides luxury living in a mature, well-maintained
                  environment that appeals to buyers seeking quality construction and established
                  neighborhoods. The community's commitment to maintaining high standards ensures
                  long-term value and desirability.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Excellent Schools and Family-Friendly Environment
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Green Valley features excellent schools that are consistently ranked among
                  Nevada's best. The community's family-friendly environment, safe neighborhoods,
                  and established amenities make it ideal for families seeking luxury living with
                  family-oriented amenities. This combination appeals to luxury homebuyers with
                  children or those planning families.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The community's commitment to education and family services ensures residents have
                  access to resources that support family life. This family-friendly focus combined
                  with luxury amenities creates an environment that appeals to luxury homebuyers
                  seeking both lifestyle and family support in an established community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Green Valley Homes"
        subtitle="Common questions about buying homes in Green Valley, answered by your Las Vegas home expert"
      />
    </>
  );
}
