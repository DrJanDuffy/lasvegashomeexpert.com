'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'luxury_hero_cta_click',
      category: 'luxury_conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'luxury_hero',
        cd3: '5',
        cd4: '1000',
      },
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-amber-400/5 to-blue-400/5 rounded-full blur-3xl" />
      </div>

      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:60px_60px]" />
      </div>

      {/* Content */}
      <div className="container-responsive relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
            Las Vegas Luxury Real Estate Authority
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Luxury Real Estate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-blue-400 to-amber-400">
              Reimagined
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Dr. Jan Duffy delivers the ultimate luxury real estate experience in Las Vegas's most
            prestigious enclaves. From Red Rock Country Club to The Ridges Summerlin, discover
            bespoke service for the discerning few.
          </motion.p>

          {/* Luxury Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm text-slate-400"
          >
            <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <span className="text-amber-400 mr-2">🏢</span>
              Berkshire Hathaway HomeServices
            </div>
            <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <span className="text-amber-400 mr-2">🏰</span>
              Luxury Home Specialist
            </div>
            <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <span className="text-amber-400 mr-2">💎</span>
              Top 1% Producer
            </div>
            <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <span className="text-amber-400 mr-2">🎖️</span>
              Veteran Service
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button
              type="button"
              onClick={() => handleCTAClick('luxury_consultation')}
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xl font-semibold rounded-lg shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Schedule Luxury Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              type="button"
              onClick={() => handleCTAClick('exclusive_properties')}
              className="px-10 py-5 border-2 border-slate-400 text-slate-300 text-xl font-semibold rounded-lg hover:border-amber-400 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm"
            >
              View Exclusive Properties
            </button>
          </motion.div>

          {/* Luxury Market Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">$1B+</div>
              <div className="text-slate-400 text-sm">Luxury Sales Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-slate-400 text-sm">Luxury Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-slate-400 animate-bounce-gentle">
          <span className="text-sm font-medium mb-2">Discover Luxury</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
