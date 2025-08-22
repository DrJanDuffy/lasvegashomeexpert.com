'use client';

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
    </>
  );
}
