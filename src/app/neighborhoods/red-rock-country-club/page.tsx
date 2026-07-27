'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function RedRockCountryClubPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'neighborhood_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'red_rock_page',
        cd3: '7',
        cd4: '350',
      },
    });
  };

  const marketStats = {
    avgPrice: '$2.1M',
    avgDaysOnMarket: '14',
    totalSales: '47',
    pricePerSqFt: '$485',
    appreciation: '+12.3%',
    inventory: '23',
  };

  const amenities = [
    '18-Hole Championship Golf Course',
    'Private Clubhouse & Dining',
    'Tennis & Pickleball Courts',
    'Swimming Pool & Spa',
    'Fitness Center',
    'Walking Trails',
    'Gated Security',
    'Mountain Views',
  ];

  const recentSales = [
    { address: '123 Red Rock Dr', price: '$2.4M', days: '3', features: 'Pool, Golf Views' },
    { address: '456 Canyon Way', price: '$1.9M', days: '7', features: 'Mountain Views' },
    { address: '789 Ridge Rd', price: '$2.7M', days: '5', features: 'Pool, Spa, Golf' },
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
                <span className="text-2xl">🏌️</span>
                <span className="font-semibold">#1 Golf Community in Las Vegas</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">23 Active Listings</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Red Rock Country Club
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
                onClick={() => handleCTAClick('view_red_rock_listings')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Red Rock Listings
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
                Las Vegas' Premier Golf Community
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Red Rock Country Club represents the pinnacle of luxury living in Las Vegas. This
                exclusive gated community features an 18-hole championship golf course designed by
                Arnold Palmer, stunning mountain views, and world-class amenities that cater to the
                most discerning buyers.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Located in the prestigious Summerlin area, Red Rock Country Club offers the perfect
                blend of privacy, luxury, and recreational opportunities. Homes here feature premium
                finishes, spacious layouts, and breathtaking views of the Red Rock Canyon and Las
                Vegas Strip.
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
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Red Rock Country Club Market Analysis
            </h2>
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
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Recent Sales in Red Rock Country Club
            </h2>
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

      {/* Red Rock Listings - RealScout Integration */}
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
              Current Homes for Sale in Red Rock Country Club
            </h2>
            <p className="text-xl text-neutral-600">
              Browse our exclusive collection of Red Rock properties
            </p>
          </motion.div>

          <div className="neighborhood-listings">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="800000"
              price-max="3000000"
              location="Red Rock Country Club, Las Vegas, NV"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Call Red Rock Country Club Home?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you to the perfect luxury property in Las Vegas' most
              prestigious golf community.
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

      {/* Comprehensive Red Rock Country Club Guide */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Complete Guide to Red Rock Country Club Las Vegas
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Red Rock Country Club: Las Vegas's Premier Golf Community
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Red Rock Country Club stands as Las Vegas's most prestigious golf course community,
                offering luxury homes with unparalleled access to championship golf, private club
                facilities, and stunning mountain views. This exclusive master-planned community
                features two 18-hole championship golf courses designed by renowned golf course
                architects, creating a golfer's paradise in the heart of Summerlin.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The community's location in Summerlin provides residents with access to world-class
                amenities including shopping centers, restaurants, parks, and excellent schools. Red
                Rock Country Club's gated security and private club facilities create an exclusive
                environment that appeals to luxury homebuyers seeking both lifestyle and investment
                value.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Luxury Homes in Red Rock Country Club
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Red Rock Country Club homes range from $1.5 million to over $10 million, featuring
                custom architecture, premium finishes, and resort-style amenities. Properties
                typically include 4,000 to 10,000 square feet of living space, private pools,
                outdoor kitchens, and stunning views of the golf course and surrounding mountains.
                The community's luxury homes appeal to buyers seeking both lifestyle and investment
                value.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Golf Course Living at Its Finest
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Red Rock Country Club's golf courses provide residents with exclusive access to
                championship-level golf in a private, members-only environment. The community's
                private clubhouse features fine dining, social events, and recreational facilities
                that create a true country club lifestyle. This combination of golf access and club
                amenities makes Red Rock Country Club one of Las Vegas's most desirable communities.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The golf course homes command premium prices, with properties offering golf course
                views or direct access selling for significant premiums. The community's commitment
                to maintaining golf course quality and club facilities ensures long-term value and
                desirability, making Red Rock Country Club an excellent investment for luxury
                homebuyers.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Working with Dr. Jan Duffy for Red Rock Country Club
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Jan Duffy specializes in Red Rock Country Club real estate, with extensive
                knowledge of the community's properties, market conditions, and buyer preferences.
                Her expertise in luxury golf course communities enables her to help buyers find
                properties that match their lifestyle and investment goals. Dr. Duffy's network
                includes access to off-market listings and properties that may not be publicly
                available.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              What Makes Red Rock Country Club Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">
                  Championship Golf Courses
                </h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Red Rock Country Club features two 18-hole championship golf courses that provide
                  residents with world-class golf experiences. The courses are meticulously
                  maintained and offer challenging play for golfers of all skill levels. The
                  private, members-only environment ensures uncrowded play and exclusive access to
                  premium golf facilities.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Golf course homes in Red Rock Country Club offer direct access to the courses,
                  with many properties featuring golf course views and private access. This
                  proximity to championship golf creates a unique lifestyle that appeals to golf
                  enthusiasts and luxury homebuyers seeking resort-style living.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Private Club Facilities</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  The community's private clubhouse provides residents with exclusive access to fine
                  dining, social events, fitness facilities, and recreational amenities. This
                  private club environment creates opportunities for social connection and community
                  engagement, contributing to the sense of exclusivity and luxury that defines Red
                  Rock Country Club living.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Club membership provides access to amenities and services that enhance the luxury
                  lifestyle, including dining options, event spaces, and recreational facilities.
                  The club's commitment to maintaining high standards ensures residents enjoy
                  premium experiences that justify the community's premium pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Red Rock Country Club"
        subtitle="Common questions about living and buying in Red Rock Country Club, answered by your Las Vegas home expert"
      />
    </main>
  );
}
