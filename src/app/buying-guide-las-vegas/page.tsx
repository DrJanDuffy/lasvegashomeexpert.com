'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function BuyingGuidePage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'buying_guide_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'home_buyer',
        cd2: 'buying_guide_page',
        cd3: '6',
        cd4: '300',
      },
    });
  };

  const buyingSteps = [
    {
      step: '1',
      title: 'Get Pre-Approved',
      description: 'Understand your budget and financing options before starting your search',
      icon: '📋',
      tips: ['Check your credit score', 'Gather financial documents', 'Compare lender rates'],
      duration: '1-2 weeks',
    },
    {
      step: '2',
      title: 'Define Your Needs',
      description: 'Create a clear list of must-haves, nice-to-haves, and deal-breakers',
      icon: '🎯',
      tips: ['Location preferences', 'Size requirements', 'Budget constraints', 'Timeline'],
      duration: '1 week',
    },
    {
      step: '3',
      title: 'Start Your Search',
      description: 'Work with your agent to find properties that match your criteria',
      icon: '🔍',
      tips: ['Set up MLS alerts', 'Attend open houses', 'Schedule private showings'],
      duration: '2-8 weeks',
    },
    {
      step: '4',
      title: 'Make an Offer',
      description: 'Submit a competitive offer with guidance from your agent',
      icon: '✍️',
      tips: ['Market analysis', 'Negotiation strategy', 'Contingencies'],
      duration: '1-3 days',
    },
    {
      step: '5',
      title: 'Due Diligence',
      description: 'Complete inspections, appraisals, and finalize financing',
      icon: '🔍',
      tips: ['Home inspection', 'Appraisal', 'Title search', 'Final loan approval'],
      duration: '2-3 weeks',
    },
    {
      step: '6',
      title: 'Closing',
      description: 'Sign final paperwork and receive your keys',
      icon: '🔑',
      tips: ['Final walkthrough', 'Closing costs', 'Insurance setup', 'Utility transfers'],
      duration: '1 day',
    },
  ];

  const commonMistakes = [
    {
      mistake: 'Skipping Pre-Approval',
      consequence: "Wasting time on homes you can't afford",
      solution: 'Get pre-approved before starting your search',
    },
    {
      mistake: 'Not Researching Neighborhoods',
      consequence: "Buying in an area that doesn't fit your lifestyle",
      solution: 'Visit neighborhoods at different times of day',
    },
    {
      mistake: 'Waiving Inspections',
      consequence: 'Missing costly hidden problems',
      solution: 'Always get a professional home inspection',
    },
    {
      mistake: 'Emotional Decision Making',
      consequence: 'Overpaying or buying the wrong home',
      solution: 'Stick to your criteria and budget',
    },
    {
      mistake: 'Ignoring Hidden Costs',
      consequence: 'Financial strain after purchase',
      solution: 'Budget for closing costs, taxes, and maintenance',
    },
  ];

  const financingOptions = [
    {
      type: 'Conventional Loans',
      downPayment: '5-20%',
      creditScore: '620+',
      pros: 'Lower rates, no PMI with 20% down',
      cons: 'Higher credit requirements',
    },
    {
      type: 'FHA Loans',
      downPayment: '3.5%',
      creditScore: '580+',
      pros: 'Lower credit requirements, smaller down payment',
      cons: 'Higher rates, mortgage insurance required',
    },
    {
      type: 'VA Loans',
      downPayment: '0%',
      creditScore: '580+',
      pros: 'No down payment, lower rates, no PMI',
      cons: 'Veterans only, funding fee required',
    },
    {
      type: 'USDA Loans',
      downPayment: '0%',
      creditScore: '640+',
      pros: 'No down payment, lower rates',
      cons: 'Rural areas only, income limits',
    },
  ];

  const marketInsights = [
    {
      insight: 'Current Market Trend',
      value: "Seller's Market",
      description: 'Limited inventory with strong buyer demand',
      impact: 'Be prepared to act quickly on desirable properties',
    },
    {
      insight: 'Average Days on Market',
      value: '22 Days',
      description: 'Homes are selling faster than average',
      impact: 'Have financing ready and be prepared to make quick decisions',
    },
    {
      insight: 'Price Appreciation',
      value: '+12.4%',
      description: 'Year-over-year price growth',
      impact: 'Consider long-term investment potential',
    },
    {
      insight: 'Inventory Levels',
      value: '2.1 Months',
      description: 'Below normal inventory levels',
      impact: 'Limited selection may require flexibility on criteria',
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
                <span className="text-2xl">📚</span>
                <span className="font-semibold">Complete Home Buying Guide</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">500+ Buyers Helped</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Las Vegas Home Buying Guide
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Expert Tips & Complete Process
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Everything You Need to Know About Buying a Home in Las Vegas
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>6-Step Buying Process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Financing Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Market Insights</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
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
              Stay informed about current market conditions
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
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
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
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Your 6-Step Home Buying Journey
            </h2>
            <p className="text-xl text-neutral-600">A proven process for successful home buying</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyingSteps.map((step, index) => (
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
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{step.description}</p>
                <div className="mb-3">
                  <h4 className="font-semibold text-primary-700 mb-2">Key Tips:</h4>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
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

      {/* Financing Options */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Financing Options</h2>
            <p className="text-xl text-neutral-600">Understanding your mortgage options</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financingOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{option.type}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Down Payment:</span>
                    <span className="font-bold text-accent-success">{option.downPayment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Credit Score:</span>
                    <span className="font-bold">{option.creditScore}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Pros:</h4>
                  <p className="text-sm text-neutral-600">{option.pros}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Cons:</h4>
                  <p className="text-sm text-neutral-600">{option.cons}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
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
              Common Home Buying Mistakes
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <section className="py-16 bg-white">
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
              Start your search with these available properties
            </p>
          </motion.div>

          <div className="buying-guide-listings">
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
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Home Buying Journey?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you through every step of the home buying process with expert
              knowledge and personalized support.
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
                Download Complete Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
