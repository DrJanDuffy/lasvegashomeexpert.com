'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function HomeStagingServicesPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'staging_services_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'home_seller',
        cd2: 'staging_services_page',
        cd3: '7',
        cd4: '350',
      },
    });
  };

  const stagingServices = [
    {
      service: 'Professional Consultation',
      description: "Expert assessment of your home's staging needs",
      icon: '📋',
      value: 'Maximize appeal potential',
    },
    {
      service: 'Furniture & Décor Rental',
      description: 'High-quality furniture and accessories for staging',
      icon: '🪑',
      value: 'Professional presentation',
    },
    {
      service: 'Space Planning',
      description: 'Optimal furniture placement and room flow',
      icon: '📐',
      value: 'Better room utilization',
    },
    {
      service: 'Color & Lighting',
      description: 'Strategic color schemes and lighting enhancement',
      icon: '💡',
      value: 'Enhanced atmosphere',
    },
    {
      service: 'Curb Appeal Enhancement',
      description: 'Exterior staging and landscaping improvements',
      icon: '🌺',
      value: 'Strong first impression',
    },
    {
      service: 'Photography Coordination',
      description: 'Work with photographers for stunning listing photos',
      icon: '📸',
      value: 'Professional marketing',
    },
  ];

  const stagingBenefits = [
    {
      benefit: 'Faster Sale',
      value: '3x faster',
      description: 'Staged homes sell significantly faster than unstaged homes',
      icon: '⚡',
    },
    {
      benefit: 'Higher Sale Price',
      value: '+17%',
      description: 'Staged homes typically sell for 17% more on average',
      icon: '💰',
    },
    {
      benefit: 'More Showings',
      value: '+40%',
      description: 'Staged homes receive 40% more showings',
      icon: '👥',
    },
    {
      benefit: 'Better Offers',
      value: '+25%',
      description: 'Staged homes receive more competitive offers',
      icon: '📈',
    },
  ];

  const stagingProcess = [
    {
      step: '1',
      title: 'Home Assessment',
      description: 'Professional evaluation of staging needs and opportunities',
      duration: '1-2 hours',
    },
    {
      step: '2',
      title: 'Staging Plan',
      description: 'Customized staging strategy and furniture selection',
      duration: '2-3 days',
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Professional staging installation and setup',
      duration: '1-2 days',
    },
    {
      step: '4',
      title: 'Photography',
      description: 'Professional photography of staged home',
      duration: '2-4 hours',
    },
    {
      step: '5',
      title: 'Maintenance',
      description: 'Ongoing staging maintenance during showings',
      duration: 'Ongoing',
    },
  ];

  const stagingExamples = [
    {
      room: 'Living Room',
      before: 'Cluttered, personal items, dated furniture',
      after: 'Clean, spacious, modern furniture, neutral décor',
      impact: 'Creates welcoming first impression',
    },
    {
      room: 'Kitchen',
      before: 'Counter clutter, personal items, dated accessories',
      after: 'Clean counters, fresh flowers, modern accents',
      impact: 'Highlights functionality and appeal',
    },
    {
      room: 'Master Bedroom',
      before: 'Personal items, cluttered surfaces, dated bedding',
      after: 'Luxurious bedding, minimal décor, spa-like atmosphere',
      impact: 'Creates luxury retreat feeling',
    },
    {
      room: 'Bathroom',
      before: 'Personal items, dated fixtures, cluttered surfaces',
      after: 'Clean surfaces, fresh towels, spa-like accessories',
      impact: 'Enhances luxury and cleanliness',
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
                <span className="text-2xl">🏠</span>
                <span className="font-semibold">Professional Home Staging</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">200+ Homes Staged</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Home Staging Services
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Expert
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">Why Choose Professional Home Staging?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Homes Sell 3x Faster</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>+17% Higher Sale Price</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>40% More Showings</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Staging Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('get_quote')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Get Staging Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staging Benefits */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Proven Staging Results</h2>
            <p className="text-xl text-neutral-600">
              Professional staging delivers measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stagingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{benefit.benefit}</h3>
                <div className="text-2xl font-bold text-accent-success mb-2">{benefit.value}</div>
                <p className="text-sm text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staging Services */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Comprehensive Staging Services
            </h2>
            <p className="text-xl text-neutral-600">
              Every service designed to maximize your home's appeal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stagingServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{service.service}</h3>
                <p className="text-sm text-neutral-600 mb-3">{service.description}</p>
                <div className="text-sm font-semibold text-accent-success">{service.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staging Process */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Your Staging Journey</h2>
            <p className="text-xl text-neutral-600">A proven 5-step process for stunning results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {stagingProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{step.description}</p>
                <div className="text-xs text-primary-600 font-semibold">{step.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staging Examples */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Before & After Examples</h2>
            <p className="text-xl text-neutral-600">
              See the transformation power of professional staging
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stagingExamples.map((example, index) => (
              <motion.div
                key={example.room}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-6">{example.room}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-neutral-700 mb-2">Before:</h4>
                    <p className="text-sm text-neutral-600">{example.before}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-success mb-2">After:</h4>
                    <p className="text-sm text-neutral-600">{example.after}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-700">
                    <strong>Impact:</strong> {example.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staged Home Listings - RealScout Integration */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Recently Staged Homes</h2>
            <p className="text-xl text-neutral-600">
              See how staging transforms properties for sale
            </p>
          </motion.div>

          <div className="staged-homes">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,CONDO"
              price-min="400000"
              price-max="1200000"
              max-results="6"
            />
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let professional staging maximize your home's appeal and help you achieve the highest
              possible sale price in the shortest time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Staging Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('get_quote')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Get Staging Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
