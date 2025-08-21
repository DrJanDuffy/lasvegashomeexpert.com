'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function FirstTimeHomeBuyerPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'first_time_buyer_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'first_time_buyer',
        cd2: 'first_time_buyer_page',
        cd3: '6',
        cd4: '300',
      },
    });
  };

  const buyerBenefits = [
    'No Down Payment Programs Available',
    'First-Time Buyer Tax Credits',
    'Lower Interest Rates',
    'Down Payment Assistance',
    'Closing Cost Assistance',
    'Homebuyer Education Classes',
  ];

  const buyingProcess = [
    {
      step: '1',
      title: 'Get Pre-Approved',
      description: 'Understand your budget and financing options',
      icon: '📋',
      duration: '1-2 days',
    },
    {
      step: '2',
      title: 'Find Your Home',
      description: 'Browse properties that fit your criteria',
      icon: '🏠',
      duration: '2-4 weeks',
    },
    {
      step: '3',
      title: 'Make an Offer',
      description: 'Submit competitive offer with guidance',
      icon: '✍️',
      duration: '1-3 days',
    },
    {
      step: '4',
      title: 'Home Inspection',
      description: 'Professional inspection of the property',
      icon: '🔍',
      duration: '1-2 days',
    },
    {
      step: '5',
      title: 'Closing',
      description: 'Finalize paperwork and get your keys',
      icon: '🔑',
      duration: '30-45 days',
    },
  ];

  const starterNeighborhoods = [
    {
      name: 'Henderson',
      avgPrice: '$450k',
      features: 'Family-friendly, great schools, parks',
      commute: '20 min to Strip',
    },
    {
      name: 'Green Valley',
      avgPrice: '$420k',
      features: 'Safe community, shopping, dining',
      commute: '25 min to Strip',
    },
    {
      name: 'Anthem',
      avgPrice: '$480k',
      features: 'Mountain views, hiking trails, quiet',
      commute: '30 min to Strip',
    },
    {
      name: 'Summerlin',
      avgPrice: '$520k',
      features: 'Master-planned, amenities, schools',
      commute: '25 min to Strip',
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
                <span className="text-2xl">🎯</span>
                <span className="font-semibold">First-Time Buyer Specialist</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">500+ First-Time Buyers Helped</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              First-Time Home Buyer
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Expert Guide
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Why Choose Dr. Jan Duffy for Your First Home?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>500+ First-Time Buyers Helped</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Access to Down Payment Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Step-by-Step Guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Negotiation Expertise</span>
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
                Schedule Free Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download First-Time Buyer Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* First-Time Buyer Benefits */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">First-Time Buyer Benefits</h2>
            <p className="text-xl text-neutral-600">
              Special programs and advantages available to first-time homebuyers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-semibold text-primary-900">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Your Home Buying Journey</h2>
            <p className="text-xl text-neutral-600">
              Step-by-step process to make your first home purchase smooth and successful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {buyingProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{step.description}</p>
                <div className="text-xs text-primary-600 font-semibold">{step.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Starter Neighborhoods */}
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
              Perfect Starter Neighborhoods
            </h2>
            <p className="text-xl text-neutral-600">
              Family-friendly areas perfect for first-time buyers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {starterNeighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{neighborhood.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Avg Price:</span>
                    <span className="font-bold text-accent-success">{neighborhood.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commute:</span>
                    <span className="font-bold">{neighborhood.commute}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">{neighborhood.features}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* First-Time Buyer Listings - RealScout Integration */}
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
              Perfect First Homes Available
            </h2>
            <p className="text-xl text-neutral-600">
              Browse starter homes perfect for first-time buyers
            </p>
          </motion.div>

          <div className="starter-homes">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_ASC"
              listing-status="For Sale"
              property-types="SFR,CONDO,TOWNHOME"
              price-min="250000"
              price-max="450000"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Buy Your First Home?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you through every step of your first home purchase with expert
              advice and access to exclusive first-time buyer programs.
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
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download First-Time Buyer Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
