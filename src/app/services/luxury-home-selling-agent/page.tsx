'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function LuxuryHomeSellingAgentPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'selling_agent_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_seller',
        cd2: 'selling_agent_page',
        cd3: '8',
        cd4: '450',
      },
    });
  };

  const sellingServices = [
    {
      service: 'Luxury Market Analysis',
      description: 'Comprehensive pricing strategy and market positioning',
      icon: '📊',
      value: 'Maximize your sale price',
    },
    {
      service: 'Professional Photography',
      description: 'High-end photography and virtual tours',
      icon: '📸',
      value: 'Showcase your home beautifully',
    },
    {
      service: 'Strategic Marketing',
      description: 'Targeted campaigns to luxury buyers worldwide',
      icon: '🎯',
      value: 'Reach qualified buyers',
    },
    {
      service: 'Negotiation Expertise',
      description: 'Expert negotiation to maximize your return',
      icon: '🤝',
      value: 'Get the best possible deal',
    },
    {
      service: 'Staging & Presentation',
      description: 'Professional staging for maximum appeal',
      icon: '🏠',
      value: 'Create buyer desire',
    },
    {
      service: 'Closing Support',
      description: 'Smooth transaction from offer to closing',
      icon: '🔑',
      value: 'Stress-free selling experience',
    },
  ];

  const marketInsights = [
    {
      metric: 'Average Days on Market',
      value: '18 Days',
      trend: '+12% faster than market average',
      icon: '⚡',
    },
    {
      metric: 'Sale Price vs. List Price',
      value: '98.5%',
      trend: '+3.2% above market average',
      icon: '💰',
    },
    {
      metric: 'Luxury Market Share',
      value: '23%',
      trend: 'Dominant market presence',
      icon: '🏆',
    },
    {
      metric: 'Client Satisfaction',
      value: '100%',
      trend: 'Perfect satisfaction score',
      icon: '⭐',
    },
  ];

  const sellingProcess = [
    {
      step: '1',
      title: 'Market Analysis',
      description: 'Comprehensive pricing strategy and market positioning',
      duration: '1-2 days',
    },
    {
      step: '2',
      title: 'Preparation',
      description: 'Professional photography, staging, and marketing materials',
      duration: '3-5 days',
    },
    {
      step: '3',
      title: 'Launch',
      description: 'Strategic marketing campaign to luxury buyers worldwide',
      duration: '1 day',
    },
    {
      step: '4',
      title: 'Showings',
      description: 'Coordinated showings and open houses for qualified buyers',
      duration: 'Ongoing',
    },
    {
      step: '5',
      title: 'Negotiation',
      description: 'Expert negotiation to maximize your return on investment',
      duration: '1-3 days',
    },
    {
      step: '6',
      title: 'Closing',
      description: 'Smooth transaction management from contract to closing',
      duration: '30-45 days',
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
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">#1 Luxury Selling Agent</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">$180M+ in Sales</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Luxury Home Selling Agent
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Expert
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Why Choose Dr. Jan Duffy to Sell Your Luxury Home?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>$180M+ in Luxury Sales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>98.5% Sale Price vs. List</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>18 Days Average on Market</span>
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
                onClick={() => handleCTAClick('get_home_value')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Get Your Home Value
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selling Services */}
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
              Comprehensive Selling Services
            </h2>
            <p className="text-xl text-neutral-600">
              Every service designed to maximize your luxury home sale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellingServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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

      {/* Market Performance */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Proven Market Performance</h2>
            <p className="text-xl text-neutral-600">Results that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{insight.metric}</h3>
                <div className="text-2xl font-bold text-accent-success mb-2">{insight.value}</div>
                <p className="text-sm text-neutral-600">{insight.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Process */}
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
              Your Luxury Home Selling Journey
            </h2>
            <p className="text-xl text-neutral-600">
              A proven 6-step process that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellingProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
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

      {/* Current Luxury Inventory - RealScout Integration */}
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
              Current Luxury Market Competition
            </h2>
            <p className="text-xl text-neutral-600">
              See what other luxury homes are selling for in your area
            </p>
          </motion.div>

          <div className="market-competition">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="1000000"
              max-results="8"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Maximize Your Home Sale?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy's proven selling strategies and luxury market expertise help you
              achieve the highest possible return on your investment.
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
                onClick={() => handleCTAClick('get_home_value')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Get Your Home Value
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
