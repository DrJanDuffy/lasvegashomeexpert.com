'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import StoreLocatorSection from '@/components/sections/StoreLocatorSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function ContactPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'contact_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'prospect',
        cd2: 'contact_page',
        cd3: '4',
        cd4: '150',
      },
    });
  };

  const contactMethods = [
    {
      method: 'Phone',
      value: '(702) 222-1964',
      description: 'Speak directly with Dr. Jan Duffy',
      icon: '📞',
      action: 'call',
      availability: '24/7 response',
    },
    {
      method: 'Email',
      value: 'DrJanSells@LasVegasHomeExpert.com',
      description: 'Send us a detailed message',
      icon: '✉️',
      action: 'email',
      availability: '24/7 response',
    },
    {
      method: 'Text',
      value: '(702) 222-1964',
      description: 'Quick questions and updates',
      icon: '💬',
      action: 'text',
      availability: '24/7 response',
    },
    {
      method: 'Office',
      value: '1700 S Pavilion Center Drive, Suite 140',
      description: 'Visit our office for in-person meetings',
      icon: '🏢',
      action: 'visit',
      availability: 'By appointment only',
    },
  ];

  const officeHours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const serviceAreas = [
    'Summerlin',
    'Southern Highlands',
    'Tournament Hills',
    'The Lakes',
    'Centennial Hills',
    'Green Valley',
    'Anthem',
    'Henderson',
    'North Las Vegas',
    'Boulder City',
  ];

  const quickActions = [
    {
      action: 'Schedule Consultation',
      description: 'Book a free 30-minute consultation',
      icon: '📅',
      buttonText: 'Book Now',
      color: 'accent-buyer',
    },
    {
      action: 'Get Market Report',
      description: 'Receive current market insights',
      icon: '📊',
      buttonText: 'Download',
      color: 'accent-seller',
    },
    {
      action: 'Property Valuation',
      description: "Get your home's current value",
      icon: '💰',
      buttonText: 'Get Value',
      color: 'accent-success',
    },
    {
      action: 'View Listings',
      description: 'Browse current properties',
      icon: '🏠',
      buttonText: 'Browse',
      color: 'primary',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section */}
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
                <span className="text-2xl">📞</span>
                <span className="font-semibold">Multiple Contact Methods</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">24/7 Response</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">Free Consultation</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Contact Dr. Jan Duffy
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Real Estate Expert
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">Ready to Start Your Real Estate Journey?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Multiple Contact Methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>24/7 Response</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:702-222-1964"
                onClick={() => handleCTAClick('call_now')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm inline-block"
              >
                Call Now: (702) 222-1964
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Quick Actions</h2>
            <p className="text-xl text-neutral-600">Get started with these popular services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{action.action}</h3>
                <p className="text-sm text-neutral-600 mb-4">{action.description}</p>
                <button
                  type="button"
                  onClick={() => handleCTAClick(action.action.toLowerCase().replace(' ', '_'))}
                  className={`btn-${action.color} w-full px-4 py-2`}
                >
                  {action.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Multiple Ways to Connect</h2>
            <p className="text-xl text-neutral-600">
              Choose the contact method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.method}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">{method.method}</h3>
                <div className="text-xl font-bold text-accent-success mb-2">{method.value}</div>
                <p className="text-neutral-600 mb-4">{method.description}</p>
                <div className="text-sm text-primary-600 font-semibold mb-4">
                  {method.availability}
                </div>
                <button
                  type="button"
                  onClick={() => handleCTAClick(`${method.action}_${method.method.toLowerCase()}`)}
                  className="btn-accent-buyer w-full px-6 py-3"
                >
                  {method.action === 'call' && 'Call Now'}
                  {method.action === 'email' && 'Send Email'}
                  {method.action === 'text' && 'Send Text'}
                  {method.action === 'visit' && 'Get Directions'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-neutral-600">
                Fill out the form below and we\'ll get back to you within 2 hours
              </p>
            </div>

            <form className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-primary-900 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-primary-900 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-primary-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-primary-900 mb-2"
                >
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="investment">Investment Properties</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary-900 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your real estate needs..."
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  onClick={() => handleCTAClick('submit_contact_form')}
                  className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary-900 mb-6">Office Hours</h2>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                {officeHours.map((schedule, index) => (
                  <div
                    key={schedule.day}
                    className={`flex justify-between items-center py-3 ${
                      index !== officeHours.length - 1 ? 'border-b border-neutral-200' : ''
                    }`}
                  >
                    <span className="font-semibold text-primary-900">{schedule.day}</span>
                    <span className="text-neutral-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-primary-900 mb-6">Service Areas</h2>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={area} className="flex items-center space-x-3">
                      <span className="text-accent-success text-xl">📍</span>
                      <span className="text-neutral-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-neutral-600">
              Located in the heart of Las Vegas for your convenience
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Office Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-success text-xl">🏢</span>
                    <div>
                      <div className="font-semibold text-neutral-700">Las Vegas Home Expert</div>
                      <div className="text-neutral-600">
                        1700 S Pavilion Center Drive, Suite 140
                      </div>
                      <div className="text-neutral-600">Las Vegas, NV 89135</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-success text-xl">🚗</span>
                    <div>
                      <div className="font-semibold text-neutral-700">Parking</div>
                      <div className="text-neutral-600">
                        Free parking available in front of building
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-success text-xl">🚌</span>
                    <div>
                      <div className="font-semibold text-neutral-700">Public Transit</div>
                      <div className="text-neutral-600">
                        Bus routes 101, 102, and 103 stop nearby
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-neutral-600">Interactive Map Coming Soon</p>
                  <button
                    type="button"
                    onClick={() => handleCTAClick('get_directions')}
                    className="btn-accent-buyer mt-4 px-6 py-2"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Don\'t wait to begin your real estate journey. Contact us today for expert guidance
              and personalized service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Free Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('call_now')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Call Now: (702) 222-1964
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Store Locator Section */}
      <StoreLocatorSection
        title="Find Our Office Location"
        subtitle="Visit us at our Las Vegas office or explore our service area"
        height="600px"
      />

      {/* Comprehensive Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Why Contact Dr. Jan Duffy for Your Las Vegas Real Estate Needs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Expert Real Estate Guidance at Your Fingertips
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Dr. Jan Duffy makes it easy to get in touch and start your real estate journey. Whether you're buying your first home, selling a luxury property, or investing in Las Vegas real estate, Dr. Duffy provides personalized service tailored to your needs. Her 15+ years of experience and 500+ successful transactions demonstrate her ability to deliver exceptional results.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Contacting Dr. Duffy is the first step toward achieving your real estate goals. She offers multiple ways to connect including phone, email, text, and in-person office visits. Her responsive approach ensures you receive timely answers to questions and prompt attention to your real estate needs, whether you're a local buyer or relocating to Las Vegas.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Free Consultations for All Real Estate Needs
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Duffy offers free consultations to discuss your real estate goals, answer questions, and provide expert guidance. These consultations cover topics like market conditions, property values, buying strategies, selling strategies, and investment opportunities. There's no obligation, making it easy to explore your options and understand how Dr. Duffy can help.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Multiple Contact Methods for Your Convenience
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Dr. Duffy understands that different clients prefer different communication methods. She offers phone, email, text messaging, and in-person office visits to accommodate your preferences. Her flexible approach ensures you can reach her in the way that works best for you, whether you need immediate assistance or prefer to schedule a consultation.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                For urgent matters or time-sensitive questions, phone and text provide immediate access. For detailed inquiries or documentation, email offers a convenient option. For comprehensive consultations or in-depth discussions, office visits provide focused attention and personalized service. Dr. Duffy's responsive approach ensures you receive the attention you need when you need it.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Office Location and Service Areas
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Duffy's office is conveniently located at 1700 S Pavilion Center Drive, Suite 140, in Las Vegas, providing easy access for clients throughout the Las Vegas Valley. She serves all Las Vegas neighborhoods including Summerlin, Henderson, Green Valley, Southern Highlands, Red Rock Country Club, The Ridges, and MacDonald Highlands, ensuring comprehensive coverage of the Las Vegas real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('general')}
        title="Frequently Asked Questions About Contacting Las Vegas Home Expert"
        subtitle="Common questions about reaching out and working with Dr. Jan Duffy"
      />
    </main>
  );
}
