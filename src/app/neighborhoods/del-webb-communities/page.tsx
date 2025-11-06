'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function DelWebbCommunitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Del Webb Communities - Modern 55+ Luxury
          </h1>

          {/* Market Stats */}
          <div className="market-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$700K</div>
                <div className="text-white text-lg">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">38</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">3.2</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">16%</div>
                <div className="text-white text-lg">YoY Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience modern luxury 55+ living in Del Webb communities. Dr. Jan Duffy specializes
            in these contemporary retirement communities with cutting-edge amenities and
            resort-style living.
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
                  label: 'del_webb_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
                    cd3: 'consultation',
                    cd4: '2000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Del Webb Tour
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'del_webb_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
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

      {/* Featured Del Webb Properties */}
      <section className="featured-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Del Webb Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Modern 55+ luxury homes with cutting-edge amenities and resort-style living
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="550000"
              location="Del Webb, Las Vegas, NV"
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
            Del Webb Modern 55+ Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Modern Recreation</h3>
              <p className="text-slate-600">
                State-of-the-art fitness centers, pools, and sports facilities with latest
                technology
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Arts & Innovation</h3>
              <p className="text-slate-600">
                Creative arts studios, digital media labs, and cultural enrichment programs
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Social Innovation</h3>
              <p className="text-slate-600">
                Modern social spaces, technology clubs, and innovative community programs
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Wellness Focus</h3>
              <p className="text-slate-600">
                Holistic wellness programs, meditation gardens, and health-focused amenities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Styles Section */}
      <section className="home-styles bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Del Webb Home Styles & Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Modern Luxury Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Modern Luxury Homes</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$550K - $1.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 2,500-4,500+ sq ft</li>
                <li>• Contemporary design</li>
                <li>• Smart home features</li>
                <li>• Modern amenities</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'modern_luxury_homes',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'del_webb_page',
                      cd3: 'modern_luxury_homes',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Modern Luxury Homes
              </button>
            </div>

            {/* Contemporary Estates */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Contemporary Estates</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$900K - $2.5M</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 4,000-7,000+ sq ft</li>
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
                    label: 'contemporary_estates',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'del_webb_page',
                      cd3: 'contemporary_estates',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Contemporary Estates
              </button>
            </div>

            {/* Modern Condos */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Modern Condos</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$450K - $900K</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• 1,800-3,000+ sq ft</li>
                <li>• Resort-style living</li>
                <li>• Modern amenities</li>
                <li>• Maintenance included</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'property_type_click',
                    category: 'exploration',
                    action: 'property_type_view',
                    label: 'modern_condos',
                    customDimensions: {
                      cd1: 'luxury_buyer',
                      cd2: 'del_webb_page',
                      cd3: 'modern_condos',
                      cd4: '1200',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Modern Condos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="market-insights bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Del Webb Market Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Strong Growth</h4>
                  <p className="text-slate-600">
                    16% year-over-year appreciation with $700K median price
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Modern Appeal</h4>
                  <p className="text-slate-600">
                    High demand from tech-savvy retirees seeking contemporary amenities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Innovation Premium</h4>
                  <p className="text-slate-600">
                    Premium pricing for homes with modern technology and amenities
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Modern Infrastructure</h4>
                  <p className="text-slate-600">
                    Cutting-edge facilities and technology support premium value
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Innovation Focus</h4>
                  <p className="text-slate-600">
                    Technology-forward approach appeals to modern active adults
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Future-Proof</h4>
                  <p className="text-slate-600">
                    Modern design and amenities maintain long-term value
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
            Dr. Jan Duffy: Del Webb Modern 55+ Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Modern Active Adult Expert</h3>
              <p className="text-slate-600">
                Specialized knowledge of contemporary 55+ communities with $30M+ in Del Webb sales
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Innovation</h3>
              <p className="text-slate-600">
                Strong relationships with Del Webb residents and innovative community management
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600">
                Exceptional client satisfaction in modern active adult luxury market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Del Webb Living?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is your Del Webb specialist. Discover modern luxury 55+ living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'del_webb_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
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
                  label: 'del_webb_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'del_webb_page',
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

      {/* Comprehensive Del Webb Communities Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Complete Guide to Del Webb Communities 55+ Luxury Living Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Del Webb Communities: Modern 55+ Active Adult Living
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Del Webb Communities offer modern 55+ active adult living in Las Vegas, featuring contemporary luxury homes with access to cutting-edge amenities, recreation centers, and resort-style facilities. These age-restricted communities provide active adults with maintenance-free living, comprehensive amenities, and vibrant social environments that support active lifestyles.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The communities' locations in Henderson and Las Vegas Valley provide residents with access to world-class amenities, excellent healthcare facilities, and diverse entertainment options. Del Webb's commitment to modern active adult living creates exceptional value for 55+ buyers seeking vibrant retirement experiences with contemporary amenities.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Luxury Homes in Del Webb Communities
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Del Webb Communities homes range from $500,000 to over $1.5 million, featuring contemporary construction, modern designs, and access to community amenities. Properties typically include 1,800 to 4,500 square feet of living space, low-maintenance landscaping, and modern finishes. The communities' luxury homes appeal to active adults seeking maintenance-free living with contemporary amenities.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Del Webb Communities
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Del Webb Communities offer active adults exceptional value through maintenance-free living, cutting-edge amenities, strong appreciation, and vibrant social environments. The communities' median price of $700,000 represents excellent value for 55+ luxury living, while providing access to world-class amenities and lifestyle options.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The communities' real estate markets show strong fundamentals with 16% year-over-year appreciation, 38 days average on market, and 3.2 months of inventory. These metrics indicate healthy markets with strong demand and appreciation potential, making Del Webb Communities attractive investment opportunities.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Working with Dr. Jan Duffy for Del Webb Communities
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Jan Duffy specializes in Del Webb Communities real estate, with extensive knowledge of the communities' properties, market conditions, and buyer preferences. Her expertise in 55+ active adult communities enables her to help buyers find properties that match their lifestyle and investment goals in these modern retirement communities.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              What Makes Del Webb Communities Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Cutting-Edge Amenities and Modern Living</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Del Webb Communities feature cutting-edge amenities including modern recreation centers, fitness facilities, technology centers, and contemporary design elements that appeal to modern active adults. The communities' commitment to providing contemporary amenities ensures residents enjoy modern, engaging retirement experiences.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The communities' modern approach to active adult living creates unique experiences that appeal to buyers seeking contemporary luxury living with modern amenities. This commitment to modern development creates exceptional value for 55+ buyers seeking both lifestyle and contemporary living.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Maintenance-Free Living and Active Lifestyle</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Del Webb Communities offer maintenance-free living with community services that handle exterior maintenance, landscaping, and common area upkeep. This maintenance-free approach allows residents to focus on enjoying their active lifestyles without the burden of property maintenance responsibilities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The communities' maintenance-free living creates opportunities for active adults to travel, pursue hobbies, and engage in community activities without worrying about property upkeep. This freedom enhances quality of life and contributes to the vibrant retirement experiences that define Del Webb Communities living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Del Webb Communities"
        subtitle="Common questions about living and buying in Del Webb Communities, answered by your Las Vegas home expert"
      />
    </>
  );
}
