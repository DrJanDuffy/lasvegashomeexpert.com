'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function SellingGuidePage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'selling_guide_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'home_seller',
        cd2: 'selling_guide_page',
        cd3: '7',
        cd4: '350',
      },
    });
  };

  const sellingSteps = [
    {
      step: '1',
      title: 'Market Analysis',
      description: "Get a professional market analysis to understand your home's value",
      icon: '📊',
      tips: ['Recent comparable sales', 'Current market conditions', 'Price trends analysis'],
      duration: '1-2 days',
    },
    {
      step: '2',
      title: 'Home Preparation',
      description: 'Prepare your home for maximum appeal to potential buyers',
      icon: '🏠',
      tips: ['Declutter and depersonalize', 'Minor repairs and updates', 'Professional staging'],
      duration: '2-4 weeks',
    },
    {
      step: '3',
      title: 'Professional Photography',
      description: "High-quality photos that showcase your home's best features",
      icon: '📸',
      tips: ['Professional photographer', 'Optimal lighting and angles', 'Virtual tour creation'],
      duration: '1 day',
    },
    {
      step: '4',
      title: 'Strategic Pricing',
      description: 'Price competitively to attract buyers while maximizing value',
      icon: '💰',
      tips: ['Market-based pricing', 'Competitive analysis', 'Pricing strategy'],
      duration: '1-2 days',
    },
    {
      step: '5',
      title: 'Marketing & Showings',
      description: 'Comprehensive marketing campaign and professional showings',
      icon: '📢',
      tips: ['MLS listing', 'Online marketing', 'Open houses and private showings'],
      duration: 'Ongoing',
    },
    {
      step: '6',
      title: 'Offer Negotiation',
      description: 'Expert negotiation to get the best possible terms',
      icon: '🤝',
      tips: ['Offer evaluation', 'Counter-offer strategy', 'Terms negotiation'],
      duration: '1-3 days',
    },
    {
      step: '7',
      title: 'Closing Process',
      description: 'Smooth closing process with professional guidance',
      icon: '🔑',
      tips: ['Contract management', 'Timeline coordination', 'Closing support'],
      duration: '30-45 days',
    },
  ];

  const commonMistakes = [
    {
      mistake: 'Overpricing',
      consequence: 'Home sits on market too long, becomes stale',
      solution: 'Price competitively based on market analysis',
    },
    {
      mistake: 'Poor Photos',
      consequence: 'Reduced buyer interest and lower offers',
      solution: 'Invest in professional photography',
    },
    {
      mistake: 'Neglecting Repairs',
      consequence: 'Buyers focus on problems, offer less',
      solution: 'Fix obvious issues before listing',
    },
    {
      mistake: 'Emotional Pricing',
      consequence: 'Unrealistic expectations, missed opportunities',
      solution: 'Base pricing on market data, not emotions',
    },
    {
      mistake: 'Inadequate Marketing',
      consequence: 'Limited buyer exposure, longer time on market',
      solution: 'Comprehensive marketing strategy',
    },
  ];

  const pricingStrategies = [
    {
      strategy: 'Competitive Pricing',
      description: 'Price slightly below market to attract multiple offers',
      pros: 'Faster sale, multiple offers, potential bidding war',
      cons: 'May sell for less than maximum value',
      bestFor: 'Quick sale needed, competitive market',
    },
    {
      strategy: 'Market Value Pricing',
      description: 'Price at current market value',
      pros: 'Fair market value, reasonable timeline',
      cons: 'May take longer to sell',
      bestFor: 'Balanced approach, no rush',
    },
    {
      strategy: 'Premium Pricing',
      description: 'Price above market for exceptional properties',
      pros: 'Maximum potential value, premium positioning',
      cons: 'Longer time on market, may need price reduction',
      bestFor: 'Unique properties, luxury market',
    },
  ];

  const marketInsights = [
    {
      insight: 'Current Market Trend',
      value: "Seller's Market",
      description: 'Limited inventory with strong buyer demand',
      impact: 'Favorable conditions for sellers',
    },
    {
      insight: 'Average Days on Market',
      value: '22 Days',
      description: 'Homes are selling faster than average',
      impact: 'Quick sales with proper pricing',
    },
    {
      insight: 'Price Appreciation',
      value: '+12.4%',
      description: 'Year-over-year price growth',
      impact: 'Strong value appreciation',
    },
    {
      insight: 'Inventory Levels',
      value: '2.1 Months',
      description: 'Below normal inventory levels',
      impact: 'High buyer demand, low competition',
    },
  ];

  const stagingBenefits = [
    {
      benefit: 'Faster Sale',
      value: '3x faster',
      description: 'Staged homes sell significantly faster',
      icon: '⚡',
    },
    {
      benefit: 'Higher Sale Price',
      value: '+17%',
      description: 'Staged homes sell for more on average',
      icon: '💰',
    },
    {
      benefit: 'More Showings',
      value: '+40%',
      description: 'Staged homes receive more showings',
      icon: '👥',
    },
    {
      benefit: 'Better Offers',
      value: '+25%',
      description: 'Staged homes receive more competitive offers',
      icon: '📈',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent-success via-accent-success/90 to-accent-success/80 text-white">
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
                <span className="text-2xl">📚</span>
                <span className="font-semibold">Complete Home Selling Guide</span>
                <span className="text-accent-success-200">|</span>
                <span className="font-semibold">300+ Sellers Helped</span>
                <span className="text-accent-success-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Las Vegas Home Selling Guide
              <span className="block text-4xl md:text-5xl text-accent-success-200 mt-2">
                Expert Tips & Complete Process
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Everything You Need to Know About Selling Your Home in Las Vegas
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-white">✓</span>
                  <span>7-Step Selling Process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white">✓</span>
                  <span>Pricing Strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white">✓</span>
                  <span>Market Insights</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-accent-seller text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Complete Guide
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Schedule Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Insights */}
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
              Current Las Vegas Market Insights
            </h2>
            <p className="text-xl text-neutral-600">
              Stay informed about current market conditions for sellers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.insight}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-2">{insight.insight}</h3>
                <div className="text-2xl font-bold text-accent-success mb-2">{insight.value}</div>
                <p className="text-sm text-neutral-600 mb-2">{insight.description}</p>
                <p className="text-xs text-primary-700 font-semibold">{insight.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Your 7-Step Home Selling Journey
            </h2>
            <p className="text-xl text-neutral-600">A proven process for successful home selling</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-success text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{step.description}</p>
                <div className="mb-3">
                  <h4 className="font-semibold text-primary-700 mb-2">Key Tips:</h4>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={`${step.step}-${tipIndex}`} className="flex items-start space-x-2">
                        <span className="text-accent-success">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs text-primary-600 font-semibold">{step.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Strategies */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Pricing Strategies</h2>
            <p className="text-xl text-neutral-600">
              Choose the right pricing strategy for your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.strategy}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{strategy.strategy}</h3>
                <p className="text-neutral-600 mb-4">{strategy.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-accent-success mb-2">Pros:</h4>
                  <p className="text-sm text-neutral-600">{strategy.pros}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                  <p className="text-sm text-neutral-600">{strategy.cons}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Best For:</h4>
                  <p className="text-sm text-neutral-600">{strategy.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staging Benefits */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Why Professional Staging Works
            </h2>
            <p className="text-xl text-neutral-600">
              The proven benefits of professional home staging
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
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
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

      {/* Common Mistakes */}
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
              Common Home Selling Mistakes
            </h2>
            <p className="text-xl text-neutral-600">
              Learn from others\' experiences to avoid costly errors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((mistake, index) => (
              <motion.div
                key={mistake.mistake}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-2">{mistake.mistake}</h3>
                <div className="mb-3">
                  <h4 className="font-semibold text-red-600 mb-1">Consequence:</h4>
                  <p className="text-sm text-neutral-600">{mistake.consequence}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-success mb-1">Solution:</h4>
                  <p className="text-sm text-neutral-600">{mistake.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Listings - RealScout Integration */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Current Homes for Sale</h2>
            <p className="text-xl text-neutral-600">
              See what similar homes are selling for in your area
            </p>
          </motion.div>

          <div className="selling-guide-listings">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,CONDO"
              price-min="300000"
              price-max="1500000"
              max-results="8"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-accent-success text-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Sell Your Home for Maximum Value?</h2>
            <p className="text-xl text-accent-success-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you through every step of the home selling process with expert
              knowledge and proven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-seller text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Free Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download Complete Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
