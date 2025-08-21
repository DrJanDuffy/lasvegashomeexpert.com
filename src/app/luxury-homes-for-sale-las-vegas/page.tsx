'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function LuxuryHomesForSalePage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'luxury_homes_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'luxury_homes_page',
        cd3: '9',
        cd4: '400',
      },
    });
  };

  const luxuryFeatures = [
    'Private Pool & Spa',
    'Golf Course Views',
    'Gated Community',
    'Smart Home Technology',
    'Wine Cellar',
    'Home Theater',
    'Chef\'s Kitchen',
    'Master Suite with Spa Bath'
  ];

  const neighborhoods = [
    {
      name: 'Red Rock Country Club',
      avgPrice: '$2.1M',
      daysOnMarket: '14',
      features: 'Golf, Pool, Gated'
    },
    {
      name: 'The Ridges Summerlin',
      avgPrice: '$2.3M',
      daysOnMarket: '12',
      features: 'Mountain Views, Pool'
    },
    {
      name: 'Tournament Hills',
      avgPrice: '$1.8M',
      daysOnMarket: '18',
      features: 'Golf Course, Family'
    },
    {
      name: 'Southern Highlands',
      avgPrice: '$1.9M',
      daysOnMarket: '16',
      features: 'Golf, Pool, Views'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section - High-Intent Buyers */}
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
                <span className="font-semibold">47 Luxury Homes Sold This Week</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">↑23% vs Last Month</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Luxury Homes for Sale
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Elite Properties
              </span>
            </h1>

            {/* Market Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-success">$1.2M - $5M+</div>
                  <p className="text-lg">Price Range</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-success">156</div>
                  <p className="text-lg">Active Listings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-success">18</div>
                  <p className="text-lg">Avg Days on Market</p>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('view_luxury_listings')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Luxury Listings
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

      {/* Luxury Features Showcase */}
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
              Luxury Features That Define Excellence
            </h2>
            <p className="text-xl text-neutral-600">
              Discover the amenities that set our luxury properties apart
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {luxuryFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-semibold text-primary-900">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Market Analysis */}
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
              Luxury Neighborhood Market Analysis
            </h2>
            <p className="text-xl text-neutral-600">
              Current market insights for Las Vegas' most prestigious communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{neighborhood.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Avg Price:</span>
                    <span className="font-bold text-accent-success">{neighborhood.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Days on Market:</span>
                    <span className="font-bold">{neighborhood.daysOnMarket}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">{neighborhood.features}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Listings - RealScout Integration */}
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

          <div className="luxury-listings">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
              listing-status="For Sale" 
              property-types="SFR,MF" 
              price-min="1200000"
              price-max="5000000"
            />
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
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
              Las Vegas Luxury Market Trends
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Price Appreciation</h3>
                <p className="text-3xl font-bold text-accent-success mb-2">+8.2%</p>
                <p className="text-neutral-600">Year-over-year growth</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Market Speed</h3>
                <p className="text-3xl font-bold text-accent-success mb-2">18 Days</p>
                <p className="text-neutral-600">Average time to sell</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Inventory Level</h3>
                <p className="text-3xl font-bold text-accent-success mb-2">156</p>
                <p className="text-neutral-600">Active luxury listings</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleCTAClick('market_report')}
              className="btn-accent-buyer text-xl px-12 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Download Full Market Report
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
              Ready to Find Your Dream Luxury Home?
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you to the perfect luxury property in Las Vegas' most prestigious communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_tour')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Private Tour
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('consultation')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Free Luxury Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
