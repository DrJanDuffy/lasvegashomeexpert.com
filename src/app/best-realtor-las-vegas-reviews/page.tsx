'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function BestRealtorReviewsPage() {
  const handleReviewClick = (action: string) => {
    trackEvent({
      event: 'review_page_interaction',
      category: 'social_proof',
      action: 'review_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'reviews_page',
        cd3: '8',
        cd4: '300',
      },
    });
  };

  const testimonials = [
    {
      name: 'Sarah & Michael Chen',
      role: 'Luxury Home Buyers',
      content:
        'Dr. Jan found us our dream home in Red Rock Country Club in just 3 weeks. Her market knowledge is unmatched!',
      rating: 5,
      salePrice: '$2.1M',
      location: 'Red Rock Country Club',
      image: '👨‍👩‍👧‍👦',
    },
    {
      name: 'David Rodriguez',
      role: 'Property Investor',
      content:
        "Sold my luxury home 15% above asking price in just 8 days. Dr. Jan's marketing strategy is incredible.",
      rating: 5,
      salePrice: '$1.8M',
      location: 'The Ridges',
      image: '🏠',
    },
    {
      name: 'Jennifer Thompson',
      role: 'Luxury Home Seller',
      content:
        "From $1.2M to $1.6M in just 2 weeks. Dr. Jan's staging and marketing made all the difference.",
      rating: 5,
      salePrice: '$1.6M',
      location: 'Tournament Hills',
      image: '💰',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section - Social Proof Powerhouse */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Trust Indicators */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">#1 Rated Luxury Realtor</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">127 Five-Star Reviews</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">$180M+ in Sales</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Best Realtor Las Vegas
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Client Reviews & Success Stories
              </span>
            </h1>

            {/* Review Summary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-success">4.9</div>
                  <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-lg">Google Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-success">127</div>
                  <p className="text-lg">Five-Star Reviews</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-success">98%</div>
                  <p className="text-lg">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => handleReviewClick('schedule_consultation')}
              className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Your Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Video Testimonials from Luxury Clients
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear directly from our satisfied luxury clients about their experience working with
              Dr. Jan Duffy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{testimonial.image}</div>
                  <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                </div>

                <blockquote className="text-lg text-neutral-700 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="text-center">
                  <p className="font-bold text-primary-900">{testimonial.name}</p>
                  <p className="text-neutral-600 mb-2">{testimonial.role}</p>
                  <div className="bg-accent-success/10 rounded-lg p-3">
                    <p className="text-lg font-bold text-accent-success">{testimonial.salePrice}</p>
                    <p className="text-sm text-neutral-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Integration */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Live Google Reviews Feed</h2>
            <p className="text-xl text-neutral-600">
              Real-time reviews from our Google Business Profile
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent-success pl-4">
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</span>
                      <span className="font-semibold">Amazing experience!</span>
                    </div>
                    <p className="text-neutral-600">
                      "Dr. Jan helped us find our dream home in Summerlin. Her expertise is
                      unmatched!"
                    </p>
                    <p className="text-sm text-neutral-500 mt-2">- Lisa M., 2 days ago</p>
                  </div>

                  <div className="border-l-4 border-accent-success pl-4">
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</span>
                      <span className="font-semibold">Best realtor in Vegas!</span>
                    </div>
                    <p className="text-neutral-600">
                      "Sold our luxury home above asking price in just 5 days. Incredible results!"
                    </p>
                    <p className="text-sm text-neutral-500 mt-2">- Robert K., 1 week ago</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Review Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>5 Stars</span>
                    <div className="flex-1 mx-4 bg-neutral-200 rounded-full h-2">
                      <div
                        className="bg-accent-success h-2 rounded-full"
                        style={{ width: '95%' }}
                      ></div>
                    </div>
                    <span className="font-bold">95%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>4 Stars</span>
                    <div className="flex-1 mx-4 bg-neutral-200 rounded-full h-2">
                      <div
                        className="bg-accent-success h-2 rounded-full"
                        style={{ width: '3%' }}
                      ></div>
                    </div>
                    <span className="font-bold">3%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>3 Stars</span>
                    <div className="flex-1 mx-4 bg-neutral-200 rounded-full h-2">
                      <div
                        className="bg-accent-success h-2 rounded-full"
                        style={{ width: '2%' }}
                      ></div>
                    </div>
                    <span className="font-bold">2%</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => handleReviewClick('write_review')}
                    className="btn-accent-buyer px-6 py-3"
                  >
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Success Case Studies</h2>
            <p className="text-xl text-neutral-600">Real results from real clients</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Red Rock Country Club Estate
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Original Price:</span>
                  <span className="font-bold">$1.9M</span>
                </div>
                <div className="flex justify-between">
                  <span>Final Sale Price:</span>
                  <span className="font-bold text-accent-success">$2.1M</span>
                </div>
                <div className="flex justify-between">
                  <span>Days on Market:</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI Increase:</span>
                  <span className="font-bold text-accent-success">+10.5%</span>
                </div>
              </div>
              <p className="text-neutral-600">
                "Dr. Jan's staging and marketing strategy attracted multiple offers within days. We
                couldn't be happier with the result!"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Summerlin Modern Home</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Original Price:</span>
                  <span className="font-bold">$1.5M</span>
                </div>
                <div className="flex justify-between">
                  <span>Final Sale Price:</span>
                  <span className="font-bold text-accent-success">$1.7M</span>
                </div>
                <div className="flex justify-between">
                  <span>Days on Market:</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI Increase:</span>
                  <span className="font-bold text-accent-success">+13.3%</span>
                </div>
              </div>
              <p className="text-neutral-600">
                "The professional photography and virtual tour brought in serious buyers
                immediately. Sold above asking price!"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience 5-Star Service?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Join our community of satisfied luxury clients who chose Dr. Jan Duffy for their most
              important real estate decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleReviewClick('schedule_call')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Your Free Consultation
              </button>
              <button
                type="button"
                onClick={() => handleReviewClick('view_portfolio')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                View Luxury Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
