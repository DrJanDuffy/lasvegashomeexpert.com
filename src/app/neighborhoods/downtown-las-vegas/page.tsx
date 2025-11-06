'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function DowntownLasVegasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Downtown Las Vegas - Urban Luxury Living
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$450K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">42</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">3.8</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">14%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the vibrant energy of Downtown Las Vegas with luxury high-rise condos and
            urban living. Dr. Jan Duffy specializes in premium downtown properties with spectacular
            city views and world-class amenities.
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
                  label: 'downtown_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'consultation',
                    cd4: '1500',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Downtown Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'downtown_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'properties',
                    cd4: '1500',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              View Available Condos
            </button>
          </div>
        </div>
      </section>

      {/* Featured Downtown Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Downtown Las Vegas Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Luxury high-rise condos with spectacular city views and premium urban amenities
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="MF,OTHER"
              price-min="300000"
              location="Downtown Las Vegas, NV"
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

      {/* Downtown Features Section */}
      <section className="downtown-features bg-gradient-to-r from-purple-50 to-violet-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Downtown Las Vegas Urban Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🌆</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">City Views</h3>
              <p className="text-slate-600">
                Spectacular panoramic views of the Las Vegas Strip and surrounding mountains
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎰</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Entertainment</h3>
              <p className="text-slate-600">
                Walking distance to casinos, restaurants, shows, and cultural attractions
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🚇</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Transportation</h3>
              <p className="text-slate-600">
                Easy access to monorail, buses, and major highways for convenient travel
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Urban Lifestyle</h3>
              <p className="text-slate-600">
                Vibrant city atmosphere with shopping, dining, and cultural experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Downtown Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury High-Rise Condos */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Luxury High-Rise Condos</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$400K - $1.2M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,200-3,500+ sq ft</li>
                <li>• Floor-to-ceiling windows</li>
                <li>• Premium finishes</li>
                <li>• Concierge services</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'luxury_high_rise_condos',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'downtown_page',
                      cd3: 'luxury_high_rise_condos',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View High-Rise Condos
              </button>
            </div>

            {/* Penthouse Suites */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏙️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Penthouse Suites</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K - $3M+</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,500-6,000+ sq ft</li>
                <li>• Private terraces</li>
                <li>• Luxury amenities</li>
                <li>• Exclusive access</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'penthouse_suites',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'downtown_page',
                      cd3: 'penthouse_suites',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Penthouse Suites
              </button>
            </div>

            {/* Urban Townhomes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Urban Townhomes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$350K - $900K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,500-3,000+ sq ft</li>
                <li>• Private entrances</li>
                <li>• Urban convenience</li>
                <li>• Community amenities</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'urban_townhomes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'downtown_page',
                      cd3: 'urban_townhomes',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Urban Townhomes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Downtown Las Vegas Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Urban Growth</h4>
                  <p className="text-slate-600">
                    14% year-over-year appreciation with $450K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">High Demand</h4>
                  <p className="text-slate-600">
                    Strong interest from professionals and luxury buyers seeking urban lifestyle
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Location Premium</h4>
                  <p className="text-slate-600">
                    Premium pricing for properties with city views and downtown access
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Urban Development</h4>
                  <p className="text-slate-600">
                    Continued downtown revitalization supports long-term value growth
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Tourism Impact</h4>
                  <p className="text-slate-600">
                    Strong tourism economy provides rental income opportunities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Transportation Hub</h4>
                  <p className="text-slate-600">
                    Central location with excellent connectivity maintains desirability
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
            Dr. Jan Duffy: Downtown Las Vegas Urban Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Urban Luxury Expert</h3>
              <p className="text-slate-600">
                Specialized knowledge of downtown luxury properties with $25M+ in urban sales
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">High-Rise Specialist</h3>
              <p className="text-slate-600">
                Deep understanding of luxury high-rise living and premium urban amenities
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction in downtown luxury real estate market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Downtown Luxury Living?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your downtown specialist. Discover urban luxury living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'downtown_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'phone',
                    cd4: '1500',
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
                  label: 'downtown_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'downtown_page',
                    cd3: 'email',
                    cd4: '1500',
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

      {/* Comprehensive Downtown Las Vegas Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Downtown Las Vegas Urban Luxury Living
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Downtown Las Vegas: Urban Luxury Living
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Downtown Las Vegas offers urban luxury living with high-rise condos, luxury lofts, and modern residences featuring spectacular city views and world-class amenities. This vibrant urban area provides residents with proximity to entertainment, dining, shopping, and cultural attractions, creating unique living experiences for urban luxury seekers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The area's ongoing revitalization has created new luxury residential developments with modern amenities, contemporary designs, and access to downtown's vibrant culture. Downtown Las Vegas' urban living appeals to professionals, empty nesters, and investors seeking luxury living in the heart of Las Vegas.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Luxury Properties in Downtown Las Vegas
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Downtown Las Vegas properties range from $300,000 to over $2 million, featuring high-rise condos, luxury lofts, and modern residences with city views and contemporary amenities. Properties typically include modern finishes, spectacular views, and access to downtown amenities. The area's urban luxury properties appeal to buyers seeking vibrant city living with luxury amenities.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Downtown Las Vegas
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Downtown Las Vegas offers luxury homebuyers exceptional value through urban location, proximity to entertainment, strong appreciation potential, and vibrant culture. The area's median price of $450,000 represents excellent value for urban luxury living, while providing access to comprehensive amenities and lifestyle options.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The area's real estate market shows strong fundamentals with 14% year-over-year appreciation, 42 days average on market, and 3.8 months of inventory. These metrics indicate a healthy market with strong demand and appreciation potential, making Downtown Las Vegas an attractive investment opportunity.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Downtown Las Vegas
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Downtown Las Vegas real estate, with extensive knowledge of the area's properties, market conditions, and buyer preferences. Her expertise in urban luxury properties enables her to help buyers find properties that match their lifestyle and investment goals in this vibrant urban area.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Downtown Las Vegas Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Vibrant Urban Culture and Entertainment</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Downtown Las Vegas provides residents with proximity to world-class entertainment, dining, shopping, and cultural attractions. The area's vibrant culture and ongoing revitalization create unique living experiences that appeal to urban luxury seekers seeking vibrant city living.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This proximity to entertainment and culture creates opportunities for residents to enjoy Las Vegas's vibrant urban scene while maintaining luxury living with modern amenities. The area's ongoing development ensures continued desirability and value growth for urban luxury properties.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Spectacular City Views and Modern Amenities</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Downtown Las Vegas properties feature spectacular city views of the Las Vegas Strip, surrounding mountains, and valley below. The area's modern residential developments include contemporary amenities, luxury finishes, and access to downtown facilities that create exceptional urban living experiences.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The combination of spectacular views and modern amenities creates unique living experiences that appeal to urban luxury buyers seeking both lifestyle and investment value. The area's commitment to modern development ensures long-term value and desirability for urban luxury properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Downtown Las Vegas"
        subtitle="Common questions about living and buying in Downtown Las Vegas, answered by your Las Vegas home expert"
      />
    </>
  );
}
