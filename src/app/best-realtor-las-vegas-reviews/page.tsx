'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
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

      {/* Comprehensive Reviews Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Why Dr. Jan Duffy is the Best Realtor in Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Exceptional Client Satisfaction and Reviews
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Dr. Jan Duffy's 4.9-star rating from 127 verified client reviews demonstrates her commitment to exceptional service and client satisfaction. With 98% of reviews being 5-star ratings, Dr. Duffy consistently exceeds client expectations while delivering outstanding results. This exceptional rating reflects her expertise, professionalism, and dedication to client success.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Client reviews consistently highlight Dr. Duffy's market knowledge, negotiation skills, attention to detail, and personal service. Many clients become repeat clients, returning to Dr. Duffy for subsequent transactions because of the positive experience and results achieved. This client loyalty demonstrates the value Dr. Duffy provides throughout the real estate process.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Proven Track Record of Excellence
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Duffy's 15+ years of experience and 500+ successful transactions demonstrate her ability to deliver consistent results. Her recognition as a top 1% producer with Berkshire Hathaway HomeServices Nevada Properties reflects her exceptional performance and commitment to excellence. This track record of success provides confidence to clients seeking the best realtor in Las Vegas.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                What Makes Dr. Jan Duffy the Best Choice
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Dr. Duffy's combination of real estate expertise, psychology background, and personalized service creates unique advantages for clients. Her understanding of client needs, motivations, and decision-making processes enables her to serve clients more effectively, particularly in complex situations. This combination of expertise and insight sets Dr. Duffy apart from other realtors.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Her extensive knowledge of Las Vegas neighborhoods, market conditions, and buyer preferences enables her to provide accurate guidance and strategic advice. This expertise, combined with her commitment to client success, ensures clients achieve optimal outcomes whether buying or selling luxury properties.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">
                Client Testimonials and Success Stories
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Client testimonials consistently praise Dr. Duffy's professionalism, market knowledge, negotiation skills, and results. These authentic reviews provide insights into what clients value most about working with Dr. Duffy, including her attention to detail, personal service, and ability to achieve exceptional outcomes. Reading these reviews helps potential clients understand the value Dr. Duffy provides.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Why Clients Choose Dr. Jan Duffy Over Other Realtors
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Exceptional Service and Results</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Dr. Duffy's commitment to exceptional service and results sets her apart from other realtors. Her 4.9-star rating and 98% 5-star reviews demonstrate consistent excellence in service delivery. Clients consistently praise her professionalism, market knowledge, and ability to achieve optimal outcomes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This commitment to excellence ensures clients receive the highest level of service while achieving their real estate goals. Dr. Duffy's focus on results combined with exceptional service creates value that exceeds what other realtors provide.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Unique Expertise and Background</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Dr. Duffy's unique combination of real estate expertise and psychology background provides advantages that other realtors cannot offer. Her understanding of client motivations and decision-making processes enables her to serve clients more effectively, particularly in complex or emotionally charged situations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This unique expertise creates value for clients who benefit from Dr. Duffy's deep understanding of both real estate and human psychology. The combination of these skills ensures clients receive guidance that addresses both practical and emotional aspects of real estate transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('service')}
        title="Frequently Asked Questions About Las Vegas Real Estate Agents"
        subtitle="Common questions about choosing and working with the best realtor, answered by your Las Vegas home expert"
      />
    </>
  );
}
