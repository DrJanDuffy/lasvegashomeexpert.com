'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function TheRidgesSummerlinPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'neighborhood_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'ridges_page',
        cd3: '8',
        cd4: '450',
      },
    });
  };

  const marketStats = {
    avgPrice: '$2.3M',
    avgDaysOnMarket: '12',
    totalSales: '38',
    pricePerSqFt: '$520',
    appreciation: '+15.2%',
    inventory: '18',
  };

  const amenities = [
    'Private Golf Course Access',
    'Mountain & Strip Views',
    'Gated Security',
    'Private Clubhouse',
    'Tennis & Pickleball',
    'Swimming Pool & Spa',
    'Fitness Center',
    'Walking Trails',
  ];

  const recentSales = [
    { address: '123 Ridge View Dr', price: '$2.8M', days: '4', features: 'Mountain Views, Pool' },
    { address: '456 Summit Way', price: '$2.1M', days: '6', features: 'Golf Course, Modern' },
    { address: '789 Peak Rd', price: '$3.2M', days: '3', features: 'Panoramic Views, Luxury' },
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
                <span className="text-2xl">🏔️</span>
                <span className="font-semibold">#1 Luxury Community in Summerlin</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">18 Active Listings</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Ridges Summerlin
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Luxury Homes for Sale Las Vegas
              </span>
            </h1>

            {/* Market Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-success">
                    {marketStats.avgPrice}
                  </div>
                  <p className="text-lg">Average Price</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-success">
                    {marketStats.avgDaysOnMarket}
                  </div>
                  <p className="text-lg">Days on Market</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-success">
                    {marketStats.appreciation}
                  </div>
                  <p className="text-lg">Year-over-Year</p>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('view_ridges_listings')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Ridges Listings
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_tour')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Schedule Private Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Summerlin's Most Prestigious Address
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                The Ridges represents the pinnacle of luxury living in Summerlin. This exclusive
                gated community features stunning mountain views, world-class amenities, and some of
                the most prestigious homes in all of Las Vegas.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Located in the heart of Summerlin, The Ridges offers the perfect blend of privacy,
                luxury, and recreational opportunities. Homes here feature premium finishes,
                spacious layouts, and breathtaking views of the Red Rock Canyon and Las Vegas Strip.
              </p>
              <button
                type="button"
                onClick={() => handleCTAClick('community_guide')}
                className="btn-accent-buyer px-6 py-3"
              >
                Download Community Guide
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Community Highlights</h3>
              <div className="space-y-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-accent-success text-xl">✓</span>
                    <span className="text-neutral-700">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">The Ridges Market Analysis</h2>
            <p className="text-xl text-neutral-600">
              Current market insights and trends for this exclusive community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Price Trends</h3>
              <div className="text-3xl font-bold text-accent-success mb-2">
                {marketStats.appreciation}
              </div>
              <p className="text-neutral-600">Year-over-year appreciation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Market Speed</h3>
              <div className="text-3xl font-bold text-accent-success mb-2">
                {marketStats.avgDaysOnMarket}
              </div>
              <p className="text-neutral-600">Average days on market</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Inventory</h3>
              <div className="text-3xl font-bold text-accent-success mb-2">
                {marketStats.inventory}
              </div>
              <p className="text-neutral-600">Active listings available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Sales */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Recent Sales in The Ridges</h2>
            <p className="text-xl text-neutral-600">
              See what homes are selling for in this exclusive community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentSales.map((sale, index) => (
              <motion.div
                key={sale.address}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6"
              >
                <h3 className="font-bold text-primary-900 mb-2">{sale.address}</h3>
                <div className="text-2xl font-bold text-accent-success mb-2">{sale.price}</div>
                <div className="text-sm text-neutral-600 mb-2">Sold in {sale.days} days</div>
                <p className="text-sm text-neutral-600">{sale.features}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ridges Listings - RealScout Integration */}
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
              Current Homes for Sale in The Ridges
            </h2>
            <p className="text-xl text-neutral-600">
              Browse our exclusive collection of Ridges properties
            </p>
          </motion.div>

          <div className="neighborhood-listings">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="1000000"
              price-max="4000000"
              location="The Ridges, Summerlin, Las Vegas, NV"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Call The Ridges Home?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you to the perfect luxury property in Summerlin's most
              prestigious community.
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
                Free Community Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive The Ridges Guide */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Complete Guide to The Ridges Summerlin Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                The Ridges: Ultra-Luxury Living in Summerlin
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The Ridges Summerlin represents the pinnacle of luxury living in Las Vegas, with homes commanding median prices of $2.3 million and featuring ultra-luxury estates positioned on elevated sites offering panoramic views of the Las Vegas Strip, surrounding mountains, and the valley below. This exclusive community offers the highest level of luxury living in Las Vegas.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The community's elevated location provides residents with unparalleled views and privacy, while its private golf course and club facilities offer exclusive access to world-class amenities. The Ridges' commitment to maintaining ultra-luxury standards ensures the community remains one of Las Vegas's most prestigious addresses.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Luxury Homes in The Ridges
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                The Ridges homes typically span 5,000 to 15,000 square feet, featuring contemporary architecture, smart home technology, and premium finishes throughout. Properties feature private pools, outdoor entertainment areas, and stunning views that create exceptional luxury living experiences. The community's ultra-luxury positioning appeals to buyers seeking the highest level of luxury in Las Vegas.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Mountain and Strip Views
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The Ridges' elevated location provides residents with spectacular views of the Las Vegas Strip, surrounding mountains, and the valley below. These views create unique living experiences that command premium prices and contribute to the community's desirability. Properties with the best views often sell quickly and for premium prices.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The combination of elevated location, privacy, and stunning views makes The Ridges one of Las Vegas's most desirable communities for luxury homebuyers. The community's commitment to maintaining these views through careful development ensures long-term value and desirability.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Working with Dr. Jan Duffy for The Ridges
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Jan Duffy specializes in The Ridges Summerlin real estate, with extensive knowledge of the community's ultra-luxury properties and market conditions. Her expertise in high-end real estate enables her to help buyers navigate the ultra-luxury market effectively, ensuring they find properties that match their lifestyle and investment goals.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Why The Ridges is Las Vegas's Premier Ultra-Luxury Community
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Elevated Location and Privacy</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  The Ridges' elevated location provides residents with privacy and exclusivity while maintaining easy access to Las Vegas amenities. The community's gated security and private setting create an exclusive environment that appeals to ultra-luxury buyers seeking privacy and prestige.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  This combination of elevated location, privacy, and exclusivity creates a unique living experience that commands premium prices. The community's commitment to maintaining these characteristics ensures long-term value and desirability for ultra-luxury homebuyers.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Private Golf Course and Club</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  The Ridges features a private golf course and club facilities that provide residents with exclusive access to world-class amenities. The private club environment creates opportunities for social connection and community engagement while maintaining the exclusivity that defines ultra-luxury living.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The community's commitment to maintaining golf course quality and club facilities ensures residents enjoy premium experiences that justify the community's ultra-luxury pricing. This commitment to excellence creates exceptional value for ultra-luxury homebuyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About The Ridges Summerlin"
        subtitle="Common questions about living and buying in The Ridges, answered by your Las Vegas home expert"
      />
    </main>
  );
}
