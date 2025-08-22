'use client';

import { trackEvent } from '@/utils';

export default function BestRealtorReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Dr. Jan Duffy - Best Realtor Las Vegas Reviews
          </h1>

          {/* Review Summary Stats */}
          <div className="review-summary bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">4.9</div>
                <div className="text-white text-lg">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">127</div>
                <div className="text-white text-lg">Total Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">98%</div>
                <div className="text-white text-lg">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
                <div className="text-white text-lg">Years Experience</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover why Dr. Jan Duffy is consistently rated the #1 luxury realtor in Las Vegas.
            Read authentic reviews from satisfied clients who found their dream homes.
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
                  label: 'reviews_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'reviews_page',
                    cd3: 'consultation',
                    cd4: '2000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Schedule Consultation
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'reviews_properties',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'reviews_page',
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

      {/* Featured Reviews Section */}
      <section className="featured-reviews bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Featured Client Reviews
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-slate-500">Verified Client</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                "Exceeded All Expectations"
              </h3>
              <p className="text-slate-700 mb-6 italic">
                "Dr. Jan Duffy helped us find our dream home in Red Rock Country Club. Her expertise
                in luxury real estate is unmatched. She understood exactly what we were looking for
                and delivered beyond our expectations. The entire process was seamless."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-800">Sarah M.</div>
                <div className="text-sm text-slate-600">Red Rock Country Club • $2.1M Purchase</div>
                <div className="text-sm text-slate-500">December 2024</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-slate-500">Verified Client</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                "Above Asking Price in 21 Days"
              </h3>
              <p className="text-slate-700 mb-6 italic">
                "As a luxury home seller, Dr. Jan's marketing strategy and network of high-net-worth
                buyers resulted in a sale above asking price in just 21 days. Her professionalism
                and market knowledge are exceptional."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-800">Michael R.</div>
                <div className="text-sm text-slate-600">The Ridges Summerlin • $2.8M Sale</div>
                <div className="text-sm text-slate-500">November 2024</div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-slate-500">Verified Client</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                "Perfect Match for Our Lifestyle"
              </h3>
              <p className="text-slate-700 mb-6 italic">
                "Dr. Duffy's knowledge of MacDonald Highlands and the Henderson luxury market is
                incredible. She found us a property that perfectly matched our lifestyle and
                investment goals. Highly recommend!"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-800">Jennifer L.</div>
                <div className="text-sm text-slate-600">MacDonald Highlands • $1.9M Purchase</div>
                <div className="text-sm text-slate-500">October 2024</div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-slate-500">Verified Client</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                "Professional and Compassionate"
              </h3>
              <p className="text-slate-700 mb-6 italic">
                "Dr. Jan helped us navigate a complex divorce real estate situation with compassion
                and expertise. Her psychology background made all the difference in handling
                sensitive family matters."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-800">David K.</div>
                <div className="text-sm text-slate-600">Southern Highlands • $1.2M Sale</div>
                <div className="text-sm text-slate-500">September 2024</div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-slate-500">Verified Client</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                "Veteran-Friendly Service"
              </h3>
              <p className="text-slate-700 mb-6 italic">
                "As a veteran, I appreciated Dr. Jan's understanding of VA loans and military
                relocation. She made the entire process smooth and stress-free. Found our perfect
                home in Summerlin."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-800">Robert T.</div>
                <div className="text-sm text-slate-600">Summerlin • $950K Purchase</div>
                <div className="text-sm text-slate-500">August 2024</div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-amber-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-slate-500">Verified Client</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                "Investment Property Expert"
              </h3>
              <p className="text-slate-700 mb-6 italic">
                "Dr. Jan's knowledge of Las Vegas investment properties is outstanding. She helped
                us build a portfolio of luxury rental properties that generate excellent returns. A
                true professional."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-800">Lisa W.</div>
                <div className="text-sm text-slate-600">Multiple Properties • $3.2M Portfolio</div>
                <div className="text-sm text-slate-500">July 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Statistics Section */}
      <section className="review-statistics bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Review Statistics & Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Rating Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">5 Stars</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-200 rounded-full h-3">
                      <div className="bg-amber-400 h-3 rounded-full" style={{ width: '98%' }} />
                    </div>
                    <span className="font-semibold text-slate-800">98%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">4 Stars</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-200 rounded-full h-3">
                      <div className="bg-blue-400 h-3 rounded-full" style={{ width: '2%' }} />
                    </div>
                    <span className="font-semibold text-slate-800">2%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">3 Stars & Below</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-200 rounded-full h-3">
                      <div className="bg-slate-400 h-3 rounded-full" style={{ width: '0%' }} />
                    </div>
                    <span className="font-semibold text-slate-800">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Review Highlights</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Most Common Praise</h4>
                  <p className="text-slate-600">
                    "Professional expertise" and "Personal attention"
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Response Time</h4>
                  <p className="text-slate-600">Average response within 2 hours</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Client Satisfaction</h4>
                  <p className="text-slate-600">100% would recommend to friends and family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Section */}
      <section className="why-choose bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Why Clients Choose Dr. Jan Duffy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Top 1% Producer</h3>
              <p className="text-slate-600">
                Consistently ranked among Berkshire Hathaway's top performers with $180M+ in luxury
                sales
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Luxury Market Expert</h3>
              <p className="text-slate-600">
                Specialized knowledge of Las Vegas's most prestigious neighborhoods and luxury
                properties
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Personalized Service</h3>
              <p className="text-slate-600">
                Every client receives Dr. Jan's direct attention and expertise throughout the entire
                process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience 5-Star Service?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Join 127+ satisfied clients who chose Dr. Jan Duffy for their luxury real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'reviews_contact_phone',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'reviews_page',
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
                  label: 'reviews_contact_email',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'reviews_page',
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
