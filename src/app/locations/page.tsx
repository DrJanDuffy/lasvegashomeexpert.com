'use client';

import { motion } from 'framer-motion';
import StoreLocatorSection from '@/components/sections/StoreLocatorSection';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function LocationsPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'locations_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'prospect',
        cd2: 'locations_page',
        cd3: '5',
        cd4: '100',
      },
    });
  };

  const serviceAreas = [
    'Summerlin',
    'Henderson',
    'Red Rock Country Club',
    'The Ridges Summerlin',
    'Tournament Hills',
    'Southern Highlands',
    'MacDonald Highlands',
    'Anthem',
    'Green Valley',
    'Mountains Edge',
    'Downtown Las Vegas',
    'Las Vegas Strip Area',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Office Location & Service Areas
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Visit our Las Vegas office or explore the neighborhoods we serve throughout the Las
              Vegas Valley
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Locator - Full Width */}
      <StoreLocatorSection
        title="Find Our Las Vegas Office"
        subtitle="Interactive map showing our office location and service areas"
        height="700px"
      />

      {/* Service Areas Section */}
      <section className="service-areas bg-gradient-to-br from-primary-50 to-neutral-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Areas We Serve</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              As your Las Vegas home expert, Dr. Jan Duffy serves the entire Las Vegas Valley and
              surrounding communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-primary-900">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="office-info bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary-900 mb-6">Visit Our Office</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Address</h3>
                  <p className="text-slate-700">
                    1700 S Pavilion Center Drive, Suite 140
                    <br />
                    Las Vegas, NV 89135
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Contact</h3>
                  <p className="text-slate-700">
                    Phone:{' '}
                    <a
                      href="tel:7022221964"
                      className="text-primary-600 hover:underline font-semibold"
                      onClick={() => handleCTAClick('phone')}
                    >
                      (702) 222-1964
                    </a>
                    <br />
                    Email:{' '}
                    <a
                      href="mailto:DrJanSells@LasVegasHomeExpert.com"
                      className="text-primary-600 hover:underline font-semibold"
                      onClick={() => handleCTAClick('email')}
                    >
                      DrJanSells@LasVegasHomeExpert.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Office Hours</h3>
                  <div className="space-y-2 text-slate-700">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Parking</h3>
                  <p className="text-slate-700">
                    Free parking available in front of the building. Visitor parking spaces are
                    clearly marked.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Why Visit In Person?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Personal Consultation</h4>
                    <p className="text-slate-600">
                      Meet face-to-face with Dr. Jan Duffy to discuss your real estate goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📋</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Review Documents</h4>
                    <p className="text-slate-600">
                      Bring contracts, listings, or documents for detailed review
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🗺️</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Neighborhood Maps</h4>
                    <p className="text-slate-600">
                      Access detailed maps and neighborhood information
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">☕</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Comfortable Environment</h4>
                    <p className="text-slate-600">
                      Relax in our professional office space while we discuss your needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => handleCTAClick('schedule_appointment')}
                  className="btn-accent-buyer w-full px-6 py-3 text-lg"
                >
                  Schedule an Office Visit
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('general')}
        title="Frequently Asked Questions About Our Location"
        subtitle="Common questions about visiting our office and service areas"
      />
    </main>
  );
}

