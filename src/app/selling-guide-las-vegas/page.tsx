'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
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

      {/* Comprehensive Selling Guide Content */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Complete Guide to Selling Your Home in Las Vegas
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Understanding the Las Vegas Home Selling Market
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The Las Vegas real estate market offers excellent opportunities for home sellers,
                with average days on market of 22 days and strong buyer demand across all price
                ranges. As of 2025, the market shows favorable conditions for sellers, with limited
                inventory creating competitive situations that can result in multiple offers and
                above-asking-price sales.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Home prices in Las Vegas have appreciated 12.4% year-over-year, reflecting strong
                market fundamentals and growing demand. Properties in desirable neighborhoods like
                Summerlin, Henderson, and Green Valley tend to sell faster and command premium
                prices. Understanding current market conditions and buyer preferences is essential
                for maximizing your home's sale price and minimizing time on market.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Preparing Your Home for Sale in Las Vegas
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Proper preparation is crucial for achieving maximum value when selling your Las
                Vegas home. This includes addressing necessary repairs, improving curb appeal,
                staging the interior, and ensuring all systems are in working order. Homes that are
                well-prepared tend to sell faster and for higher prices, often recouping the
                investment in improvements many times over.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Jan Duffy provides comprehensive home preparation guidance, from minor repairs
                and cosmetic updates to professional staging recommendations. Her experience with
                hundreds of successful sales helps identify the improvements that will have the
                greatest impact on your home's marketability and sale price. This strategic approach
                ensures you invest in improvements that buyers value most.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Pricing Your Las Vegas Home for Maximum Value
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Accurate pricing is the most critical factor in selling your home successfully.
                Overpricing can result in extended time on market, while underpricing leaves money
                on the table. Dr. Duffy conducts comprehensive market analysis including comparable
                sales, current market conditions, and property-specific factors to determine the
                optimal listing price that maximizes value while ensuring competitive positioning.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The pricing strategy considers factors like your home's condition, location,
                features, and current market dynamics. Dr. Duffy's expertise in Las Vegas real
                estate ensures your home is priced competitively to attract qualified buyers quickly
                while maximizing sale price. This balance between speed and value is essential for
                achieving optimal selling outcomes.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Marketing Your Home to Las Vegas Buyers
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Effective marketing is essential for reaching potential buyers and generating
                interest in your property. Dr. Duffy employs comprehensive marketing strategies
                including professional photography, virtual tours, online listings, social media
                promotion, and targeted advertising to ensure your home receives maximum exposure to
                qualified buyers.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Her marketing approach leverages multiple channels including MLS, real estate
                websites, social media, and her extensive network of buyers and agents. This
                multi-channel strategy ensures your home is visible to all potential buyers,
                increasing the likelihood of receiving competitive offers and achieving the best
                possible sale price.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Negotiating Offers and Closing the Sale
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">
                  Evaluating and Negotiating Offers
                </h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  When offers come in, Dr. Duffy helps you evaluate each one carefully, considering
                  not just price but also terms, financing, contingencies, and buyer qualifications.
                  Her negotiation expertise ensures you achieve the best possible terms while
                  protecting your interests throughout the process.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Multiple offers can create competitive situations that benefit sellers. Dr.
                  Duffy's experience with offer negotiations helps you navigate these situations
                  effectively, ensuring you select the offer that best meets your needs while
                  maximizing sale price and minimizing risk.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">
                  Managing the Closing Process
                </h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Once you accept an offer, the closing process begins. This typically takes 30-45
                  days and involves inspections, appraisals, title work, and buyer financing. Dr.
                  Duffy coordinates all aspects of the closing process, keeping you informed and
                  addressing any issues that arise.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Her attention to detail and experience with Las Vegas real estate transactions
                  ensures smooth closings. She works with all parties involved including buyers,
                  lenders, title companies, and inspectors to keep the transaction on track and
                  resolve any challenges that may arise during the closing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Dr. Jan Duffy */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Why Choose Dr. Jan Duffy to Sell Your Las Vegas Home
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Proven Track Record of Success
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Dr. Jan Duffy has successfully closed over 500 real estate transactions in Las
                Vegas, representing more than $180 million in sales volume. Her consistent
                performance has earned recognition as a top 1% producer with Berkshire Hathaway
                HomeServices Nevada Properties, demonstrating her ability to achieve exceptional
                results for sellers.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Her experience spans all types of properties from starter homes to luxury estates,
                giving her deep understanding of what buyers want and how to position properties
                effectively. This expertise translates into faster sales and higher prices for her
                clients.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Comprehensive Market Knowledge
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                With 15+ years of experience in Las Vegas real estate, Dr. Duffy possesses intimate
                knowledge of market trends, neighborhood characteristics, and buyer preferences.
                This expertise enables her to provide accurate pricing, effective marketing
                strategies, and strategic advice that maximizes your home's sale potential.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Her understanding of Las Vegas neighborhoods from Summerlin to Henderson ensures
                your home is positioned correctly in the market. She knows what buyers value in each
                area and how to highlight your home's best features to attract the right buyers
                quickly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Personal Service and Attention to Detail
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Dr. Duffy provides personalized service throughout the entire selling process, from
                initial consultation to closing. Her background in psychology gives her unique
                insights into both buyer and seller motivations, enabling her to navigate complex
                situations and negotiations effectively.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                She understands that selling a home is often an emotional process, and she provides
                compassionate guidance while maintaining focus on achieving your goals. Her
                attention to detail ensures nothing is overlooked, from home preparation to closing
                coordination, resulting in smooth transactions and satisfied clients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-800 mb-6">
              The Home Selling Process with Dr. Jan Duffy
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Initial Consultation and Home Evaluation
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  Dr. Duffy begins with a comprehensive consultation to understand your goals,
                  timeline, and property characteristics. She conducts a thorough evaluation of your
                  home, identifying strengths and areas for improvement, and provides a detailed
                  market analysis with pricing recommendations based on current market conditions
                  and comparable sales.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Home Preparation and Staging
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  Based on her evaluation, Dr. Duffy provides specific recommendations for preparing
                  your home for sale. This may include repairs, updates, decluttering, and staging
                  to maximize appeal to buyers. She coordinates with trusted professionals to ensure
                  all work is completed to high standards, enhancing your home's marketability.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Strategic Marketing and Showings
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  Once your home is prepared, Dr. Duffy launches a comprehensive marketing campaign
                  to reach potential buyers. She manages showings, open houses, and property tours,
                  ensuring your home is presented in the best possible light while minimizing
                  disruption to your daily life.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Offer Negotiation and Closing
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  When offers are received, Dr. Duffy helps you evaluate and negotiate to achieve
                  the best possible terms. She manages all aspects of the closing process,
                  coordinating with buyers, lenders, inspectors, and title companies to ensure a
                  smooth transaction from contract to closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('selling-guide')}
        title="Frequently Asked Questions About Selling a Home in Las Vegas"
        subtitle="Common questions answered by your Las Vegas home expert"
      />
    </main>
  );
}
