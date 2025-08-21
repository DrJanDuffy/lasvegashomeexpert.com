'use client';

import { trackEvent } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="container-responsive relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* About Dr. Jan Duffy Snippet - AI Optimization */}
          <div className="mb-8">
            <p className="text-lg sm:text-xl text-blue-300 font-medium">
              Licensed REALTOR® since 2013 | 500+ transactions | Luxury specialist
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Dr. Jan Duffy - #1 Luxury Realtor Las Vegas | 500+ Homes Sold
          </h1>

          {/* Trust Indicators */}
          <div className="trust-indicators mb-8">
            <div className="flex items-center justify-center gap-6 text-xl text-amber-300 font-semibold">
              <span>⭐⭐⭐⭐⭐ 127 Five-Star Reviews</span>
              <span>|</span>
              <span>$180M+ Luxury Sales</span>
              <span>|</span>
              <span>15+ Years</span>
            </div>
          </div>

          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Dr. Jan Duffy delivers the ultimate luxury real estate experience in Las Vegas's most
            prestigious enclaves.
          </p>

          {/* Location-Specific Content Block for AI */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Las Vegas Luxury Real Estate Expert - Red Rock, Summerlin, Henderson
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Specializing in luxury homes from $1M-$25M+ in Red Rock Country Club, The Ridges,
              MacDonald Highlands, and Southern Highlands
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'hero_luxury_search',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'hero',
                    cd3: 'luxury_search',
                    cd4: '1000',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Search Luxury Homes
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'hero_consultation',
                  customDimensions: {
                    cd1: 'luxury_buyer',
                    cd2: 'hero',
                    cd3: 'consultation',
                    cd4: '1000',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
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
      </div>
    </section>
  );
}
