'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function LuxuryHomeBuyerAgentPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'buyer_service_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'buyer_agent_page',
        cd3: '8',
        cd4: '450',
      },
    });
  };

  const buyerServices = [
    {
      title: 'Exclusive Access',
      description: 'Off-market properties and pre-market listings',
      icon: '🔐',
    },
    {
      title: 'Market Analysis',
      description: 'Comprehensive neighborhood and price analysis',
      icon: '📊',
    },
    {
      title: 'Negotiation',
      description: 'Expert negotiation to secure the best deal',
      icon: '🤝',
    },
    {
      title: 'Due Diligence',
      description: 'Thorough property inspection and research',
      icon: '🔍',
    },
    {
      title: 'Closing Support',
      description: 'Seamless transaction from offer to closing',
      icon: '✅',
    },
    {
      title: 'Post-Purchase',
      description: 'Ongoing support after your purchase',
      icon: '🏠',
    },
  ];

  const buyerProcess = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Understand your needs, budget, and preferences',
    },
    {
      step: '2',
      title: 'Market Research',
      description: 'Analyze current inventory and market conditions',
    },
    {
      step: '3',
      title: 'Property Search',
      description: 'Curated selection of luxury properties',
    },
    {
      step: '4',
      title: 'Property Tours',
      description: 'Private viewings of selected properties',
    },
    {
      step: '5',
      title: 'Offer & Negotiation',
      description: 'Strategic offer and expert negotiation',
    },
    {
      step: '6',
      title: 'Closing & Beyond',
      description: 'Seamless closing and ongoing support',
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
                <span className="text-2xl">👑</span>
                <span className="font-semibold">Luxury Buyer Specialist</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">$180M+ in Sales</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Luxury Home Buyer Agent
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Elite Properties
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-2">
                Why Choose Dr. Jan Duffy as Your Luxury Buyer Agent?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Exclusive Off-Market Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Negotiate Below Market Value</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>95% Success Rate</span>
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
                onClick={() => handleCTAClick('view_luxury_listings')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                View Luxury Listings
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Buyer Services */}
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
              Comprehensive Buyer Services
            </h2>
            <p className="text-xl text-neutral-600">
              Everything you need to find and secure your dream luxury home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyerServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Process */}
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
              Your Luxury Home Buying Journey
            </h2>
            <p className="text-xl text-neutral-600">A proven 6-step process that ensures success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-success text-white text-xl font-bold rounded-full mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Luxury Inventory */}
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
              Current Luxury Home Inventory
            </h2>
            <p className="text-xl text-neutral-600">
              Browse our exclusive collection of luxury properties
            </p>
          </motion.div>

          <div className="luxury-buyer-listings">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="1000000"
              features="Pool,Golf,Gated"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">What Our Luxury Buyers Say</h2>
            <p className="text-xl text-neutral-600">
              Real testimonials from satisfied luxury home buyers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-lg text-neutral-700 mb-6 italic">
                "Dr. Jan found us our dream home in Red Rock Country Club in just 3 weeks. Her
                market knowledge and negotiation skills saved us over $200,000!"
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-primary-900">Sarah & Michael Chen</p>
                <p className="text-neutral-600">Red Rock Country Club Buyers</p>
                <p className="text-accent-success font-bold">$2.1M Purchase</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-lg text-neutral-700 mb-6 italic">
                "Dr. Jan's exclusive access to off-market properties gave us the edge we needed. We
                got our home before it even hit the market!"
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-primary-900">David Rodriguez</p>
                <p className="text-neutral-600">The Ridges Buyer</p>
                <p className="text-accent-success font-bold">$1.8M Purchase</p>
              </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Luxury Home?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you through the luxury home buying process with exclusive
              access and expert negotiation.
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
                Download Buyer Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
