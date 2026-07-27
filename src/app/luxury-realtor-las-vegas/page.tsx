'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function LuxuryRealtorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Dr. Jan Duffy - Premier Luxury Realtor Las Vegas
          </h1>

          {/* Credibility Stats */}
          <div className="credibility-stats grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">$180M+</div>
              <div className="text-white text-lg">Total Sales Volume</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">127</div>
              <div className="text-white text-lg">Five-Star Reviews</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-white text-lg">Years Experience</div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Las Vegas luxury real estate expert with $180M+ in sales, specializing in Red Rock
            Country Club, The Ridges Summerlin, and MacDonald Highlands. Discover why discerning
            buyers choose Dr. Jan Duffy.
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
                  label: 'luxury_realtor_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_realtor_page',
                    cd3: 'consultation',
                    cd4: '2000',
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
                  label: 'luxury_realtor_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_realtor_page',
                    cd3: 'properties',
                    cd4: '2000',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              View Luxury Properties
            </button>
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="property-listings bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Luxury Properties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Handpicked luxury homes with premium features: Pool, Golf Course Access, Gated
              Communities
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

      {/* Client Testimonials */}
      <section className="client-testimonials bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            What Luxury Home Buyers Say About Dr. Jan Duffy
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Dr. Duffy helped us find our dream home in Red Rock Country Club. Her expertise in
                luxury real estate is unmatched. She understood exactly what we were looking for and
                delivered beyond our expectations."
              </p>
              <div className="font-semibold text-slate-800">- Sarah M., Red Rock Country Club</div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-slate-700 mb-6 italic">
                "As a luxury home seller, Dr. Jan's marketing strategy and network of high-net-worth
                buyers resulted in a sale above asking price in just 21 days. Her professionalism is
                exceptional."
              </p>
              <div className="font-semibold text-slate-800">- Michael R., The Ridges Summerlin</div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Dr. Duffy's knowledge of MacDonald Highlands and the Henderson luxury market is
                incredible. She found us a property that perfectly matched our lifestyle and
                investment goals."
              </p>
              <div className="font-semibold text-slate-800">- Jennifer L., MacDonald Highlands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="market-insights bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Las Vegas Luxury Market Insights
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Current Market Trends</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Red Rock Country Club</h4>
                  <p className="text-slate-600">
                    Median price: $2.1M (+15% YoY), 65 days on market
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-2">The Ridges Summerlin</h4>
                  <p className="text-slate-600">
                    Median price: $2.5M (+12% YoY), 80 days on market
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-2">MacDonald Highlands</h4>
                  <p className="text-slate-600">
                    Median price: $1.8M (+18% YoY), 72 days on market
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Dr. Jan Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600">🏆</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Top 1% Producer</h4>
                    <p className="text-slate-600">
                      Consistently ranked among Berkshire Hathaway's top performers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600">🎯</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Luxury Market Expert</h4>
                    <p className="text-slate-600">
                      Specialized knowledge of Las Vegas's most prestigious neighborhoods
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600">🤝</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Personalized Service</h4>
                    <p className="text-slate-600">
                      Every client receives Dr. Jan's direct attention and expertise
                    </p>
                  </div>
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
            Ready to Work with Las Vegas's Premier Luxury Realtor?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is here to guide you through every step of your luxury real estate
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'luxury_realtor_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_realtor_page',
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
                  label: 'luxury_realtor_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'luxury_realtor_page',
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

      {/* Comprehensive Luxury Realtor Content */}
      <section className="luxury-realtor-content bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            What Makes Dr. Jan Duffy Las Vegas's Premier Luxury Realtor
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Unmatched Expertise in Las Vegas Luxury Real Estate
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Dr. Jan Duffy has established herself as Las Vegas's premier luxury realtor through
                over 15 years of dedicated service and exceptional results. With more than $180
                million in luxury sales volume and 500+ successful transactions, she has proven her
                ability to navigate the complexities of high-end real estate transactions while
                delivering outstanding outcomes for clients.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Her specialization in luxury properties from $1 million to over $25 million requires
                deep market knowledge, sophisticated negotiation skills, and access to exclusive
                listings. Dr. Duffy's expertise extends to Las Vegas's most prestigious
                neighborhoods including Red Rock Country Club, The Ridges Summerlin, MacDonald
                Highlands, and Southern Highlands, where she maintains intimate knowledge of market
                trends, property values, and buyer preferences.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Exclusive Access to Off-Market Luxury Properties
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                One of the key advantages of working with Dr. Jan Duffy is access to exclusive
                off-market listings and pocket listings that never appear on public MLS. Her
                extensive network of luxury home sellers, developers, and other real estate
                professionals provides clients with opportunities unavailable to typical buyers.
                These properties often represent the best opportunities, offering better pricing and
                less competition.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Sophisticated Marketing for Luxury Properties
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Marketing luxury properties requires sophisticated strategies that reach
                high-net-worth buyers effectively. Dr. Duffy employs comprehensive marketing
                approaches including professional photography, virtual tours, luxury lifestyle
                publications, targeted digital advertising, and her extensive network of luxury
                buyers and agents. This multi-channel strategy ensures maximum exposure to qualified
                buyers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                For sellers, Dr. Duffy's marketing expertise translates into faster sales and higher
                prices. Her understanding of luxury buyer preferences and effective presentation
                strategies ensures properties are showcased in ways that resonate with discerning
                buyers, highlighting unique features and lifestyle benefits that command premium
                prices.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Personalized Service for Discerning Clients
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Luxury real estate transactions demand personalized attention and discretion. Dr.
                Duffy provides white-glove service throughout every transaction, from initial
                consultation to closing and beyond. Her background in psychology enables her to
                understand client needs deeply, while her real estate expertise ensures optimal
                outcomes. This combination of personal attention and professional excellence creates
                exceptional experiences for luxury clients.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Why Luxury Home Buyers Choose Dr. Jan Duffy
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Deep Market Knowledge</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Dr. Duffy's 15+ years of experience in Las Vegas luxury real estate provides
                  comprehensive understanding of market dynamics, property values, and neighborhood
                  characteristics. This expertise enables her to identify opportunities, assess
                  value accurately, and guide clients to properties that match their lifestyle and
                  investment objectives.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Her knowledge extends beyond current market conditions to future trends and
                  appreciation potential. This forward-looking perspective helps luxury buyers make
                  informed decisions that align with both immediate needs and long-term goals.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Proven Negotiation Expertise
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Luxury real estate transactions often involve complex negotiations with multiple
                  parties, sophisticated buyers, and high stakes. Dr. Duffy's experience with
                  hundreds of luxury transactions has honed her negotiation skills, enabling her to
                  achieve favorable terms while protecting client interests throughout the process.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Her background in psychology provides unique insights into negotiation dynamics
                  and motivations, giving clients advantages in competitive situations. This
                  combination of expertise and insight ensures optimal outcomes whether buying or
                  selling luxury properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Realtor Services */}
      <section className="luxury-services bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Comprehensive Luxury Real Estate Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Luxury Home Buying</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dr. Duffy provides comprehensive luxury home buying services from initial
                consultation through closing. She helps clients define their requirements,
                identifies suitable properties including off-market opportunities, arranges private
                showings, and provides detailed property analysis. Her expertise in luxury
                neighborhoods ensures clients find properties that match their lifestyle and
                investment goals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her network and market knowledge provide access to properties before they hit the
                market, giving clients advantages in competitive situations. This early access
                combined with expert guidance ensures clients secure their ideal luxury home at
                optimal terms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Luxury Home Selling</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Selling luxury properties requires sophisticated marketing, accurate pricing, and
                access to qualified buyers. Dr. Duffy's proven track record includes faster sales
                and higher prices through comprehensive marketing strategies, strategic pricing, and
                her network of luxury buyers. Her understanding of luxury buyer preferences ensures
                properties are presented effectively.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her marketing approach reaches high-net-worth buyers through multiple channels,
                maximizing exposure and generating competitive interest. This comprehensive strategy
                combined with her negotiation expertise ensures sellers achieve maximum value while
                minimizing time on market.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Luxury Investment Properties
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Luxury real estate investment requires analysis of appreciation potential, rental
                income, tax benefits, and market trends. Dr. Duffy helps investors identify
                opportunities in Las Vegas luxury market, analyzing properties for investment
                potential and providing strategic guidance on portfolio development and management.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her understanding of luxury market dynamics and investment factors enables her to
                help investors build portfolios that generate income while appreciating in value.
                This investment-focused expertise provides clients with opportunities to build
                wealth through luxury real estate.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              The Luxury Real Estate Process with Dr. Jan Duffy
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Initial Consultation and Strategy Development
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Duffy begins every luxury transaction with a comprehensive consultation to
                  understand client goals, preferences, timeline, and budget. For buyers, this
                  includes defining lifestyle requirements, investment objectives, and property
                  criteria. For sellers, it involves understanding sale goals, timeline, and
                  property characteristics. This initial assessment ensures strategies align with
                  client objectives.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Property Search and Evaluation
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  For buyers, Dr. Duffy creates custom search strategies including both on-market
                  and off-market properties. She arranges private showings, provides detailed
                  property analysis, and evaluates properties against client criteria. Her market
                  knowledge ensures clients see properties that truly match their needs while
                  identifying opportunities others might miss.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Negotiation and Transaction Management
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Once properties are identified or offers are received, Dr. Duffy's negotiation
                  expertise ensures optimal terms. She manages all aspects of transactions including
                  inspections, appraisals, financing, and closing coordination. Her attention to
                  detail and experience with luxury transactions ensures smooth processes from
                  contract to closing.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Post-Closing Support</h4>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Duffy's service extends beyond closing, providing ongoing support including
                  referrals to trusted professionals, property management resources, and market
                  updates. This continued relationship ensures clients have ongoing support and
                  access to resources that enhance their luxury real estate experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('service')}
        title="Frequently Asked Questions About Luxury Realtor Las Vegas"
        subtitle="Common questions about working with Dr. Jan Duffy, your Las Vegas luxury real estate expert"
      />
    </>
  );
}
