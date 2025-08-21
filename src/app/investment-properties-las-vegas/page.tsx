'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function InvestmentPropertiesPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'investment_properties_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'real_estate_investor',
        cd2: 'investment_properties_page',
        cd3: '8',
        cd4: '500',
      },
    });
  };

  const marketMetrics = [
    {
      metric: 'Average Cap Rate',
      value: '6.8%',
      trend: '+0.5% vs. last year',
      icon: '📊',
      color: 'text-accent-success',
    },
    {
      metric: 'Cash on Cash Return',
      value: '8.2%',
      trend: '+0.8% vs. last year',
      icon: '💰',
      color: 'text-accent-success',
    },
    {
      metric: 'Price Appreciation',
      value: '+12.4%',
      trend: 'Year-over-year growth',
      icon: '📈',
      color: 'text-accent-success',
    },
    {
      metric: 'Rental Demand',
      value: 'High',
      trend: 'Growing population',
      icon: '🏠',
      color: 'text-accent-success',
    },
  ];

  const investmentTypes = [
    {
      type: 'Single Family Rentals',
      avgPrice: '$450k',
      avgRent: '$2,800',
      capRate: '7.2%',
      description: 'Stable long-term appreciation with monthly cash flow',
      icon: '🏡',
    },
    {
      type: 'Multi-Family Units',
      avgPrice: '$650k',
      avgRent: '$4,200',
      capRate: '7.8%',
      description: 'Higher cash flow with economies of scale',
      icon: '🏢',
    },
    {
      type: 'Short-Term Rentals',
      avgPrice: '$380k',
      avgRent: '$3,500',
      capRate: '8.5%',
      description: 'Premium rental rates in tourist areas',
      icon: '🏨',
    },
    {
      type: 'Luxury Rentals',
      avgPrice: '$1.2M',
      avgRent: '$8,500',
      capRate: '6.2%',
      description: 'Premium tenants with long-term leases',
      icon: '✨',
    },
  ];

  const investmentNeighborhoods = [
    {
      name: 'Henderson',
      avgCapRate: '7.1%',
      appreciation: '+13.2%',
      rentalDemand: 'Very High',
      features: 'Family-friendly, great schools, growing population',
    },
    {
      name: 'Green Valley',
      avgCapRate: '6.9%',
      appreciation: '+11.8%',
      rentalDemand: 'High',
      features: 'Established community, stable tenants, amenities',
    },
    {
      name: 'Summerlin',
      avgCapRate: '6.5%',
      appreciation: '+14.5%',
      rentalDemand: 'High',
      features: 'Master-planned, luxury amenities, professional tenants',
    },
    {
      name: 'Anthem',
      avgCapRate: '7.3%',
      appreciation: '+12.1%',
      rentalDemand: 'High',
      features: 'Mountain views, growing area, family focus',
    },
  ];

  const investmentProcess = [
    {
      step: '1',
      title: 'Market Analysis',
      description: 'Identify high-growth areas with strong fundamentals',
      duration: '1-2 weeks',
    },
    {
      step: '2',
      title: 'Property Search',
      description: 'Find properties meeting your investment criteria',
      duration: '2-4 weeks',
    },
    {
      step: '3',
      title: 'Financial Analysis',
      description: 'Calculate ROI, cash flow, and appreciation potential',
      duration: '3-5 days',
    },
    {
      step: '4',
      title: 'Due Diligence',
      description: 'Property inspection, title search, and market research',
      duration: '1-2 weeks',
    },
    {
      step: '5',
      title: 'Acquisition',
      description: 'Negotiate terms and close the transaction',
      duration: '30-45 days',
    },
    {
      step: '6',
      title: 'Management',
      description: 'Ongoing property management and optimization',
      duration: 'Ongoing',
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
                <span className="text-2xl">📈</span>
                <span className="font-semibold">Investment Property Specialist</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">$50M+ in Investment Sales</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Investment Properties
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Expert Guide
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Why Choose Dr. Jan Duffy for Investment Properties?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>$50M+ in Investment Sales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>6.8% Average Cap Rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Proven ROI Strategies</span>
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
                Schedule Investment Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download Investment Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Metrics */}
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
              Las Vegas Investment Market Metrics
            </h2>
            <p className="text-xl text-neutral-600">
              Key performance indicators for real estate investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{metric.metric}</h3>
                <div className={`text-2xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                <p className="text-sm text-neutral-600">{metric.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Investment Property Types</h2>
            <p className="text-xl text-neutral-600">
              Choose the investment strategy that fits your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{type.type}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Avg Price:</span>
                    <span className="font-bold text-accent-success">{type.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Rent:</span>
                    <span className="font-bold text-accent-success">{type.avgRent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cap Rate:</span>
                    <span className="font-bold text-accent-success">{type.capRate}</span>
                  </div>
                </div>
                <p className="text-neutral-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Neighborhoods */}
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
              Top Investment Neighborhoods
            </h2>
            <p className="text-xl text-neutral-600">Areas with the highest investment potential</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentNeighborhoods.map((neighborhood, index) => (
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
                    <span>Cap Rate:</span>
                    <span className="font-bold text-accent-success">{neighborhood.avgCapRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Appreciation:</span>
                    <span className="font-bold text-accent-success">
                      {neighborhood.appreciation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rental Demand:</span>
                    <span className="font-bold">{neighborhood.rentalDemand}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">{neighborhood.features}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Your Investment Journey</h2>
            <p className="text-xl text-neutral-600">
              A proven 6-step process for successful real estate investing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
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

      {/* Investment Property Listings - RealScout Integration */}
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
              Current Investment Opportunities
            </h2>
            <p className="text-xl text-neutral-600">
              Browse properties with strong investment potential
            </p>
          </motion.div>

          <div className="investment-properties">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_ASC"
              listing-status="For Sale"
              property-types="SFR,MF,CONDO"
              price-min="250000"
              price-max="800000"
              max-results="10"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Real Estate Portfolio?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy's investment expertise and market knowledge help you identify the
              best opportunities for maximum returns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Investment Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download Investment Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
