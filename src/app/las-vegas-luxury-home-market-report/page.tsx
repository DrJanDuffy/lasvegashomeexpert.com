'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function LuxuryHomeMarketReportPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'market_report_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'market_researcher',
        cd2: 'market_report_page',
        cd3: '9',
        cd4: '500',
      },
    });
  };

  const marketData = {
    totalLuxuryHomes: '247',
    avgPrice: '$1.8M',
    avgDaysOnMarket: '18',
    priceAppreciation: '+14.2%',
    inventoryChange: '+12%',
    monthsOfInventory: '2.1',
    luxuryMarketShare: '23%',
    newConstruction: '34',
    pendingSales: '89',
  };

  const neighborhoodStats = [
    {
      name: 'The Ridges',
      avgPrice: '$2.3M',
      daysOnMarket: '12',
      appreciation: '+15.2%',
      inventory: '18',
    },
    {
      name: 'Red Rock Country Club',
      avgPrice: '$2.1M',
      daysOnMarket: '14',
      appreciation: '+12.3%',
      inventory: '23',
    },
    {
      name: 'Tournament Hills',
      avgPrice: '$1.6M',
      daysOnMarket: '16',
      appreciation: '+11.8%',
      inventory: '15',
    },
    {
      name: 'Southern Highlands',
      avgPrice: '$1.9M',
      daysOnMarket: '19',
      appreciation: '+13.1%',
      inventory: '28',
    },
  ];

  const marketTrends = [
    {
      trend: 'Price Appreciation',
      value: '+14.2%',
      description: 'Year-over-year luxury home price growth',
      icon: '📈',
      color: 'text-accent-success',
    },
    {
      trend: 'Market Speed',
      value: '18 Days',
      description: 'Average time luxury homes stay on market',
      icon: '⚡',
      color: 'text-accent-success',
    },
    {
      trend: 'Inventory Levels',
      value: '2.1 Months',
      description: 'Current months of luxury inventory available',
      icon: '🏠',
      color: 'text-accent-warning',
    },
    {
      trend: 'New Construction',
      value: '34 Homes',
      description: 'Luxury new construction available',
      icon: '🏗️',
      color: 'text-accent-success',
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
                <span className="text-2xl">📊</span>
                <span className="font-semibold">Official Market Report</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">Updated Monthly</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">MLS Data Verified</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Las Vegas Luxury Home
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Market Report 2024
              </span>
            </h1>

            {/* Market Summary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">Current Luxury Market Status</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-success">
                    {marketData.totalLuxuryHomes}
                  </div>
                  <p className="text-sm">Luxury Homes</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-success">
                    {marketData.avgPrice}
                  </div>
                  <p className="text-sm">Avg Price</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-success">
                    {marketData.avgDaysOnMarket}
                  </div>
                  <p className="text-sm">Days on Market</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-success">
                    {marketData.priceAppreciation}
                  </div>
                  <p className="text-sm">Appreciation</p>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('download_report')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Full Market Report
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Schedule Market Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
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
              Las Vegas Luxury Market Overview
            </h2>
            <p className="text-xl text-neutral-600">
              Comprehensive analysis of the current luxury real estate landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketTrends.map((trend, index) => (
              <motion.div
                key={trend.trend}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{trend.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{trend.trend}</h3>
                <div className={`text-2xl font-bold mb-2 ${trend.color}`}>{trend.value}</div>
                <p className="text-sm text-neutral-600">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Analysis */}
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
              Neighborhood Market Analysis
            </h2>
            <p className="text-xl text-neutral-600">Detailed breakdown by luxury neighborhood</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoodStats.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{neighborhood.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Avg Price:</span>
                    <span className="font-bold text-accent-success">{neighborhood.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Days on Market:</span>
                    <span className="font-bold">{neighborhood.daysOnMarket}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Appreciation:</span>
                    <span className="font-bold text-accent-success">
                      {neighborhood.appreciation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inventory:</span>
                    <span className="font-bold">{neighborhood.inventory}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Luxury Inventory - RealScout Integration */}
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
              Current Luxury Market Inventory
            </h2>
            <p className="text-xl text-neutral-600">
              Browse the latest luxury properties available in Las Vegas
            </p>
          </motion.div>

          <div className="market-inventory">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_DESC"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="1000000"
              max-results="12"
            />
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Expert Market Insights</h2>
            <p className="text-xl text-neutral-600">
              Dr. Jan Duffy's analysis of current market conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">For Luxury Buyers</h3>
              <div className="space-y-4 text-neutral-700">
                <p>
                  The current luxury market offers exceptional opportunities for discerning buyers.
                  With inventory levels at 2.1 months and strong appreciation trends, now is an
                  optimal time to invest in Las Vegas luxury real estate.
                </p>
                <p>
                  The Ridges and Red Rock Country Club continue to lead in price appreciation, while
                  new construction options provide modern amenities and customization opportunities.
                </p>
                <p>
                  <strong>Recommendation:</strong> Act quickly on desirable properties as the luxury
                  market continues to show strong demand and limited supply.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">For Luxury Sellers</h3>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Luxury sellers are experiencing favorable market conditions with strong buyer
                  demand and competitive pricing. The average 18 days on market indicates high
                  market velocity for properly priced luxury properties.
                </p>
                <p>
                  Strategic pricing and professional staging can maximize returns in this
                  competitive environment. The luxury market continues to favor sellers with premium
                  properties in desirable locations.
                </p>
                <p>
                  <strong>Recommendation:</strong> Price competitively and invest in professional
                  presentation to capitalize on current market conditions.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Get Your Complete Market Report</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Download the full 2024 Las Vegas Luxury Market Report with detailed analysis,
              neighborhood breakdowns, and expert insights from Dr. Jan Duffy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('download_full_report')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Complete Report
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_analysis')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Schedule Market Analysis
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Market Report Content */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Complete Las Vegas Luxury Home Market Report 2025
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Las Vegas Luxury Market Overview 2025
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The Las Vegas luxury home market continues to show strong fundamentals with 14.2% year-over-year price appreciation, 18 days average on market, and 2.1 months of inventory. These metrics indicate a healthy market with strong demand and appreciation potential, making Las Vegas an attractive destination for luxury homebuyers and investors.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The luxury market represents 23% of total Las Vegas real estate sales, demonstrating strong demand for high-end properties. With 247 active luxury listings and 89 pending sales, the market shows robust activity and healthy turnover. New construction continues to add 34 luxury homes to the market, providing additional options for buyers.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Luxury Neighborhood Market Performance
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Premium neighborhoods like The Ridges, Red Rock Country Club, Tournament Hills, and Southern Highlands show strong performance with appreciation rates ranging from 11.8% to 15.2%. These communities continue to attract luxury buyers seeking golf course access, mountain views, and exclusive amenities that create exceptional lifestyle experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Key Market Trends and Insights
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The Las Vegas luxury market shows several key trends including strong price appreciation, fast market speed, and limited inventory. The 18-day average time on market demonstrates strong buyer demand, while 2.1 months of inventory indicates a seller's market with competitive conditions for buyers.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Market conditions favor sellers with multiple offers common on well-priced luxury properties. However, buyers benefit from increased inventory compared to previous years, providing more options and opportunities for negotiation. The combination of strong appreciation and healthy market activity creates opportunities for both buyers and sellers.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Using Market Data for Real Estate Decisions
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Understanding market trends and data is essential for making informed real estate decisions. Dr. Jan Duffy provides comprehensive market analysis including neighborhood comparisons, price trends, and inventory levels that help buyers and sellers make strategic decisions. Her expertise in Las Vegas luxury markets enables her to provide insights that support optimal real estate outcomes.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              What the Market Data Means for Buyers and Sellers
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">For Luxury Home Buyers</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  The current market data indicates strong appreciation potential and competitive conditions. Buyers should be prepared for multiple offer situations and fast-moving properties. Working with an experienced luxury realtor like Dr. Jan Duffy provides advantages in navigating competitive markets and securing desirable properties.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The 18-day average time on market requires buyers to act quickly when desirable properties become available. Pre-approval, clear priorities, and experienced representation are essential for success in the current luxury market. Dr. Duffy's expertise helps buyers position themselves effectively in competitive situations.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">For Luxury Home Sellers</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  The current market data indicates favorable conditions for sellers with strong appreciation, fast sales, and limited inventory. However, proper pricing and presentation remain critical for maximizing value and minimizing time on market. Strategic pricing based on current market data ensures optimal outcomes.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The 2.1 months of inventory creates opportunities for sellers to achieve premium prices, especially for well-positioned properties. Working with an experienced luxury realtor ensures proper market positioning, effective marketing, and optimal pricing strategies that maximize sale price while ensuring competitive market positioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('general')}
        title="Frequently Asked Questions About Las Vegas Luxury Home Market"
        subtitle="Common questions about the luxury real estate market, answered by your Las Vegas home expert"
      />
    </main>
  );
}
