'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function TournamentHillsPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'neighborhood_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'luxury_buyer',
        cd2: 'tournament_hills_page',
        cd3: '8',
        cd4: '450',
      },
    });
  };

  const marketStats = {
    avgPrice: '$1.6M',
    avgDaysOnMarket: '16',
    totalSales: '42',
    pricePerSqFt: '$480',
    appreciation: '+11.8%',
    inventory: '15',
  };

  const amenities = [
    'Golf Course Views',
    'Mountain & Strip Views',
    'Gated Security',
    'Private Clubhouse',
    'Tennis Courts',
    'Swimming Pool & Spa',
    'Fitness Center',
    'Walking Trails',
    "Children's Playground",
    'BBQ & Picnic Areas',
  ];

  const recentSales = [
    {
      address: '123 Tournament Dr',
      price: '$1.8M',
      days: '5',
      features: 'Golf Views, Pool, Modern',
    },
    { address: '456 Hills Way', price: '$1.4M', days: '8', features: 'Mountain Views, Updated' },
    { address: '789 Championship Rd', price: '$2.1M', days: '3', features: 'Golf Course, Luxury' },
  ];

  const communityHighlights = [
    {
      feature: 'Golf Course Access',
      description: 'Direct access to world-class golf courses with stunning views',
      icon: '⛳',
    },
    {
      feature: 'Mountain Views',
      description: 'Breathtaking views of the Red Rock Canyon and surrounding mountains',
      icon: '🏔️',
    },
    {
      feature: 'Family-Friendly',
      description: 'Safe, quiet community perfect for families with children',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      feature: 'Luxury Amenities',
      description: 'High-end finishes and premium community facilities',
      icon: '✨',
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
                <span className="text-2xl">⛳</span>
                <span className="font-semibold">#1 Golf Community in Summerlin</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15 Active Listings</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tournament Hills
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
                onClick={() => handleCTAClick('view_tournament_listings')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Tournament Hills Listings
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
                Summerlin's Premier Golf Community
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Tournament Hills represents the pinnacle of golf course living in Summerlin. This
                exclusive gated community features stunning golf course views, mountain vistas, and
                some of the most prestigious homes in all of Las Vegas.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Located in the heart of Summerlin, Tournament Hills offers the perfect blend of
                luxury, recreation, and family living. Homes here feature premium finishes, spacious
                layouts, and breathtaking views of the golf course and surrounding mountains.
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
                {communityHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-accent-success text-xl">{highlight.icon}</span>
                    <div>
                      <div className="font-semibold text-neutral-700">{highlight.feature}</div>
                      <div className="text-sm text-neutral-600">{highlight.description}</div>
                    </div>
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
              Tournament Hills Market Analysis
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
              <div className="text-3xl font-bold text-accent-success">
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
              <div className="text-3xl font-bold text-accent-success">
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
              <div className="text-3xl font-bold text-accent-success">{marketStats.inventory}</div>
              <p className="text-neutral-600">Active listings available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Community Amenities</h2>
            <p className="text-xl text-neutral-600">
              World-class facilities and recreational opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-semibold text-primary-900">{amenity}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sales */}
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
              Recent Sales in Tournament Hills
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
                className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
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

      {/* Tournament Hills Listings - RealScout Integration */}
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
              Current Homes for Sale in Tournament Hills
            </h2>
            <p className="text-xl text-neutral-600">
              Browse our exclusive collection of Tournament Hills properties
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
              location="Tournament Hills, Summerlin, Las Vegas, NV"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Call Tournament Hills Home?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you to the perfect luxury property in Summerlin's premier golf
              community.
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

      {/* Comprehensive Tournament Hills Guide */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Complete Guide to Tournament Hills Las Vegas
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Tournament Hills: Luxury Golf Community Living
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Tournament Hills offers luxury living in Summerlin with access to championship golf,
                mountain views, and exclusive amenities. This premier community features luxury
                homes designed for golf enthusiasts and luxury lifestyle seekers who value exclusive
                access, premium amenities, and family-friendly environment.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The community's location in Summerlin provides residents with access to world-class
                amenities including shopping centers, restaurants, parks, and excellent schools.
                Tournament Hills' gated security and private club facilities create an exclusive
                environment that appeals to luxury homebuyers seeking both lifestyle and investment
                value.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Luxury Homes in Tournament Hills
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Tournament Hills homes range from $1.2 million to over $3 million, featuring quality
                construction, modern designs, and access to golf course and community amenities.
                Properties typically include 3,000 to 6,000 square feet of living space, private
                yards, and modern finishes. The community's luxury homes appeal to families and
                professionals seeking luxury living with family-oriented amenities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Why Choose Tournament Hills
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Tournament Hills offers luxury homebuyers exceptional value through golf course
                access, family-friendly amenities, strong appreciation, and exclusive community
                environment. The community's median price of $1.6 million represents excellent value
                for luxury golf course living, while providing access to comprehensive amenities and
                lifestyle options.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The community's real estate market shows strong fundamentals with 11.8%
                year-over-year appreciation, 16 days average on market, and limited inventory. These
                metrics indicate a healthy market with strong demand and appreciation potential,
                making Tournament Hills an attractive investment opportunity.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Working with Dr. Jan Duffy for Tournament Hills
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Jan Duffy specializes in Tournament Hills real estate, with extensive knowledge
                of the community's properties, market conditions, and buyer preferences. Her
                expertise in luxury golf communities enables her to help buyers find properties that
                match their lifestyle and investment goals in this premier golf community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              What Makes Tournament Hills Special
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">
                  Championship Golf Course Access
                </h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Tournament Hills provides residents with access to championship golf courses and
                  golf course views, creating unique living experiences for golf enthusiasts. The
                  community's proximity to golf courses and golf course views commands premium
                  prices and contributes to the community's desirability.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Golf course homes in Tournament Hills offer direct access to golf experiences,
                  with many properties featuring golf course views and proximity to golf facilities.
                  This access to championship golf creates a unique lifestyle that appeals to golf
                  enthusiasts and luxury homebuyers seeking resort-style living.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">
                  Family-Friendly Luxury Amenities
                </h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Tournament Hills features family-friendly amenities including parks, playgrounds,
                  recreational facilities, and community events that support family life. The
                  community's commitment to providing family-oriented amenities while maintaining
                  luxury standards creates an environment that appeals to luxury homebuyers with
                  children.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  This combination of luxury and family-friendliness makes Tournament Hills
                  attractive to luxury homebuyers seeking both lifestyle and family support. The
                  community's commitment to maintaining high standards and providing comprehensive
                  amenities ensures long-term value and desirability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('neighborhood')}
        title="Frequently Asked Questions About Tournament Hills"
        subtitle="Common questions about living and buying in Tournament Hills, answered by your Las Vegas home expert"
      />
    </main>
  );
}
