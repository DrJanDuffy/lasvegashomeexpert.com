'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function ModernHomesExpertPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'modern_homes_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'modern_buyer',
        cd2: 'modern_homes_page',
        cd3: '8',
        cd4: '400',
      },
    });
  };

  const modernFeatures = [
    'Open Floor Plans',
    'Floor-to-Ceiling Windows',
    'Minimalist Design',
    'Smart Home Technology',
    'Sustainable Materials',
    'Indoor-Outdoor Living',
    'Clean Lines & Geometry',
    'Natural Light Maximization'
  ];

  const architecturalStyles = [
    {
      name: 'Contemporary',
      description: 'Clean lines, open spaces, and minimalist aesthetics',
      icon: '🏗️',
      priceRange: '$800k - $2.5M'
    },
    {
      name: 'Modern',
      description: 'Sleek design with emphasis on function and form',
      icon: '✨',
      priceRange: '$750k - $2.2M'
    },
    {
      name: 'Mid-Century Modern',
      description: 'Timeless classics with modern functionality',
      icon: '🕰️',
      priceRange: '$900k - $2.8M'
    },
    {
      name: 'Industrial',
      description: 'Exposed materials, high ceilings, urban sophistication',
      icon: '🏭',
      priceRange: '$700k - $2.0M'
    }
  ];

  const neighborhoods = [
    {
      name: 'Summerlin',
      modernHomes: '47',
      avgPrice: '$1.2M',
      features: 'New Construction, Modern Design'
    },
    {
      name: 'Henderson',
      modernHomes: '34',
      avgPrice: '$950k',
      features: 'Contemporary, Smart Homes'
    },
    {
      name: 'Green Valley',
      modernHomes: '28',
      avgPrice: '$880k',
      features: 'Modern, Energy Efficient'
    },
    {
      name: 'Anthem',
      modernHomes: '22',
      avgPrice: '$1.1M',
      features: 'Contemporary, Mountain Views'
    }
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
                <span className="text-2xl">🏗️</span>
                <span className="font-semibold">Modern Home Specialist</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">131 Modern Homes Sold</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Modern Homes Las Vegas
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Expert Guide & Listings
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-2">
                Why Choose Dr. Jan Duffy for Modern Homes?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>131 Modern Homes Sold</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Exclusive New Construction Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Architectural Design Expertise</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('view_modern_listings')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Modern Home Listings
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Schedule Modern Home Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Features Showcase */}
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
              Modern Home Features That Define Excellence
            </h2>
            <p className="text-xl text-neutral-600">
              Discover the architectural elements that set modern homes apart
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {modernFeatures.map((feature, index) => (
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

      {/* Architectural Styles */}
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
              Modern Architectural Styles
            </h2>
            <p className="text-xl text-neutral-600">
              Explore the different modern design approaches available in Las Vegas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalStyles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-4">{style.icon}</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{style.name}</h3>
                  <p className="text-neutral-600 mb-3">{style.description}</p>
                  <div className="text-lg font-bold text-accent-success">{style.priceRange}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Analysis */}
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
              Modern Home Neighborhoods
            </h2>
            <p className="text-xl text-neutral-600">
              Where to find the best modern homes in Las Vegas
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
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{neighborhood.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Modern Homes:</span>
                    <span className="font-bold text-accent-success">{neighborhood.modernHomes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Price:</span>
                    <span className="font-bold">{neighborhood.avgPrice}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">{neighborhood.features}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Home Listings - RealScout Integration */}
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
              Current Modern Home Inventory
            </h2>
            <p className="text-xl text-neutral-600">
              Browse our exclusive collection of modern and contemporary properties
            </p>
          </motion.div>

          <div className="modern-listings">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="750000"
              price-max="2000000"
              architectural-style="Modern,Contemporary"
            />
          </div>
        </div>
      </section>

      {/* Market Trends */}
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
              Las Vegas Modern Home Market Trends
            </h2>
            <p className="text-xl text-neutral-600">
              Current insights for modern home buyers and sellers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Price Appreciation</h3>
              <p className="text-3xl font-bold text-accent-success mb-2">+9.8%</p>
              <p className="text-neutral-600">Year-over-year growth</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Market Speed</h3>
              <p className="text-3xl font-bold text-accent-success mb-2">22 Days</p>
              <p className="text-neutral-600">Average time to sell</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Inventory</h3>
              <p className="text-3xl font-bold text-accent-success mb-2">89</p>
              <p className="text-neutral-600">Active modern listings</p>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your Dream Modern Home?
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you to the perfect modern property with architectural excellence and contemporary design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_tour')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Modern Home Tour
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download Modern Home Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
