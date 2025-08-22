'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'final_cta_click',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'buyer',
        cd2: 'final_cta',
        cd3: '6',
        cd4: '200',
      },
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary-800 to-primary-900 text-white"
    >
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Don't wait another day. Join hundreds of satisfied clients who've already transformed
            their real estate experience with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-input bg-white/20 border-white/30 text-white placeholder-white/70"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-input bg-white/20 border-white/30 text-white placeholder-white/70"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <select
                  className="form-input bg-white/20 border-white/30 text-white"
                  aria-label="What are you looking for?"
                >
                  <option value="">What are you looking for?</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="investing">Real Estate Investment</option>
                  <option value="general">General Inquiry</option>
                </select>
                <textarea
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="form-input bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <button
                  type="submit"
                  onClick={() => handleCTAClick('form_submit')}
                  className="w-full btn-accent-buyer text-lg py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-primary-100">
                  <li className="flex items-center">
                    <span className="text-accent-success mr-3">✓</span>
                    Free consultation and property search
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-success mr-3">✓</span>
                    No hidden fees or surprises
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-success mr-3">✓</span>
                    24/7 support and guidance
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-success mr-3">✓</span>
                    Cutting-edge technology
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-primary-100">
                  <p>📍 Las Vegas, NV</p>
                  <p>📞 (702) 555-0123</p>
                  <p>✉️ hello@lasvegashomeexpert.com</p>
                  <p>🕒 Mon-Sun: 24/7 Support</p>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('schedule_call')}
                  className="w-full btn-accent-buyer text-lg py-4 inline-block text-center"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/contact"
                  onClick={() => handleCTAClick('download_guide')}
                  className="w-full btn-secondary text-lg py-4 border-white/30 text-white hover:bg-white/20 inline-block text-center"
                >
                  Download Homebuyer Guide
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
