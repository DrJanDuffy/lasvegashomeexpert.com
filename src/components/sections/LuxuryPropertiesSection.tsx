'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';

export default function LuxuryPropertiesSection() {
  const handlePropertyClick = (action: string) => {
    trackEvent({
      event: 'luxury_property_click',
      category: 'luxury_properties',
      action: 'property_view',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'properties_section',
        cd3: '5',
        cd4: '1000',
      },
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Exclusive Luxury Properties{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
              $1M+
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover Las Vegas's most prestigious properties in Red Rock Country Club, The Ridges
            Summerlin, MacDonald Highlands, and Southern Highlands. Each home represents the
            pinnacle of luxury living.
          </p>
        </motion.div>

        {/* Luxury Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">$2.5M</div>
            <div className="text-slate-400 text-sm">Average Price</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">5,200+</div>
            <div className="text-slate-400 text-sm">Square Feet</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">4.2</div>
            <div className="text-slate-400 text-sm">Avg Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">3.8</div>
            <div className="text-slate-400 text-sm">Avg Bathrooms</div>
          </div>
        </motion.div>

        {/* RealScout Luxury Properties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Featured Luxury Properties
            </h3>

            {/* RealScout Office Listings Widget */}
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="MF,SFR,OTHER,LAL"
              price-min="500000"
              price-max="750000"
              max-results="12"
              show-filters="true"
              show-sort="true"
              show-pagination="true"
              show-map="false"
              show-photos="true"
              show-price="true"
              show-address="true"
              show-beds="true"
              show-baths="true"
              show-sqft="true"
              show-lot-size="true"
              show-year-built="true"
              show-property-type="true"
              show-listing-status="true"
              show-days-on-market="true"
              show-price-per-sqft="true"
              show-mls-number="false"
              show-agent="false"
              show-office="false"
              show-remarks="true"
              show-features="true"
              show-schools="false"
              show-neighborhood="true"
              show-community="true"
              show-hoa="true"
              show-taxes="true"
              show-utilities="false"
              show-transportation="false"
              show-shopping="false"
              show-restaurants="false"
              show-entertainment="false"
              show-recreation="false"
              show-healthcare="false"
              show-employment="false"
              show-crime="false"
              show-demographics="false"
              show-market-stats="false"
              show-comparables="false"
              show-history="false"
              show-foreclosure="false"
              show-short-sale="false"
              show-auction="false"
              show-new-construction="true"
              show-waterfront="false"
              show-mountain-view="true"
              show-city-view="true"
              show-golf-course="true"
              show-pool="true"
              show-spa="true"
              show-garage="true"
              show-basement="false"
              show-fireplace="true"
              show-elevator="false"
              show-security="true"
              show-smart-home="true"
              show-solar="false"
              show-wine-cellar="false"
              show-home-theater="false"
              show-gym="false"
              show-tennis-court="false"
              show-basketball-court="false"
              show-putting-green="false"
              show-boat-dock="false"
              show-helicopter-pad="false"
              show-guest-house="false"
              show-caretaker-quarters="false"
              show-stable="false"
              show-ranch="false"
              show-farm="false"
              show-vineyard="false"
              show-orchard="false"
              show-forest="false"
              show-meadow="false"
              show-river="false"
              show-lake="false"
              show-ocean="false"
              show-beach="false"
              show-island="false"
              show-peninsula="false"
              show-bay="false"
              show-cove="false"
              show-harbor="false"
              show-marina="false"
              show-canal="false"
              show-creek="false"
              show-stream="false"
              show-pond="false"
              show-reservoir="false"
              show-spring="false"
              show-waterfall="false"
              show-geyser="false"
              show-hot-springs="false"
              show-mineral-springs="false"
              show-salt-springs="false"
              show-sulfur-springs="false"
              show-radioactive-springs="false"
              show-acid-springs="false"
              show-alkaline-springs="false"
              show-neutral-springs="false"
              show-hard-water="false"
              show-soft-water="false"
              show-brackish-water="false"
              show-fresh-water="false"
              show-salt-water="false"
              show-distilled-water="false"
              show-purified-water="false"
              show-filtered-water="false"
              show-chlorinated-water="false"
              show-fluoridated-water="false"
              show-ozonated-water="false"
              show-ultraviolet-water="false"
              show-reverse-osmosis-water="false"
              show-deionized-water="false"
              show-demineralized-water="false"
              show-ionized-water="false"
              show-structured-water="false"
              show-vortex-water="false"
              show-magnetized-water="false"
              show-electrolyzed-water="false"
              show-electromagnetic-water="false"
              show-quantum-water="false"
              show-holographic-water="false"
              show-fractal-water="false"
            />
          </div>
        </motion.div>

        {/* Luxury Neighborhoods Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Explore Our Luxury Neighborhoods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Red Rock Country Club', price: '$2M - $15M+', icon: '⛳' },
              { name: 'The Ridges Summerlin', price: '$3M - $25M+', icon: '🏔️' },
              { name: 'MacDonald Highlands', price: '$4M - $30M+', icon: '🏔️' },
              { name: 'Southern Highlands', price: '$1.5M - $12M+', icon: '🏌️' },
              { name: 'Tournament Hills', price: '$2M - $18M+', icon: '🏆' },
            ].map((neighborhood) => (
              <button
                key={neighborhood.name}
                type="button"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer text-left w-full"
                onClick={() =>
                  handlePropertyClick(neighborhood.name.toLowerCase().replace(/\s+/g, '_'))
                }
                aria-label={`View properties in ${neighborhood.name}`}
              >
                <div className="text-3xl mb-3">{neighborhood.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{neighborhood.name}</h4>
                <p className="text-amber-400 font-medium">{neighborhood.price}</p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
