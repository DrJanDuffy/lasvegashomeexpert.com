'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function LuxuryRealtorPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'luxury_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'primary_money_page',
        cd3: '9',
        cd4: '500',
      },
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section - Authority Multiplier */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Trust Indicators - Above the Fold */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">127 Five-Star Reviews</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">$180M+ Luxury Sales</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Dr. Jan Duffy
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                #1 Luxury Realtor Las Vegas
              </span>
            </h1>

            {/* Instant Credibility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-2">Recently Sold:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>$2.1M Red Rock Estate (3 days)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>$1.7M Summerlin Modern (5 days)</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('luxury_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Luxury Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('off_market_access')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Access Off-Market Properties
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Explosion */}
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
              Why Las Vegas Elite Choose Dr. Jan Duffy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-success mb-2">$180M+</div>
                <p className="text-lg text-neutral-600">Luxury home sales in 15+ years</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-success mb-2">8%</div>
                <p className="text-lg text-neutral-600">Above market average sale price</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-success mb-2">95%</div>
                <p className="text-lg text-neutral-600">Luxury listings sell within 30 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Luxury Market Insights */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
              Current Luxury Market Insights
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="text-center mb-6">
                <p className="text-2xl font-semibold text-primary-800">
                  This week: 47 luxury homes sold above $1M (↑23% vs last month)
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">The Ridges</h3>
                  <p className="text-3xl font-bold text-accent-success">$2.1M</p>
                  <p className="text-neutral-600">avg (14 days on market)</p>
                </div>
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Red Rock</h3>
                  <p className="text-3xl font-bold text-accent-success">$1.8M</p>
                  <p className="text-neutral-600">avg (12 days on market)</p>
                </div>
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Tournament Hills</h3>
                  <p className="text-3xl font-bold text-accent-success">$1.6M</p>
                  <p className="text-neutral-600">avg (18 days on market)</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-neutral-500">
                  Source: MLS + Dr. Jan's exclusive network
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Luxury Portfolio - RealScout Integration */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
              Current Luxury Home Inventory
            </h2>
            
            <Suspense fallback={<LoadingSpinner size="large" />}>
              <div className="luxury-portfolio">
                <realscout-office-listings 
                  agent-encoded-id="QWdlbnQtMjI1MDUw" 
                  sort-order="PRICE_DESC" 
                  listing-status="For Sale" 
                  property-types="SFR,MF" 
                  price-min="1000000"
                  features="Pool,Golf,Gated"
                />
              </div>
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-8">
              No Risk, Maximum Reward
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">No-Obligation Analysis</h3>
                <p className="text-neutral-600">Get your luxury home's true market value</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">2-Hour Response</h3>
                <p className="text-neutral-600">Guaranteed response within 2 hours</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Free Consultation</h3>
                <p className="text-neutral-600">Luxury market consultation at no cost</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleCTAClick('free_analysis')}
              className="btn-accent-buyer text-xl px-12 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Your Free Luxury Home Analysis
            </button>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Luxury Real Estate Excellence?
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied luxury clients who chose Dr. Jan Duffy for their most important real estate decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_call')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Your VIP Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download Luxury Market Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
