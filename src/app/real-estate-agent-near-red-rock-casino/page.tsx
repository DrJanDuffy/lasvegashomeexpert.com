import { motion } from 'framer-motion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Agent Near Red Rock Casino | Dr. Jan Duffy',
  description: 'Your local real estate expert near Red Rock Casino. Dr. Jan Duffy serves communities within 5 miles including Red Rock Country Club, The Ridges, and Summerlin West.',
  keywords: 'real estate agent near Red Rock Casino, Red Rock Country Club, The Ridges, Summerlin West, Dr. Jan Duffy',
  openGraph: {
    title: 'Real Estate Agent Near Red Rock Casino | Dr. Jan Duffy',
    description: 'Local real estate expert serving communities near Red Rock Casino in Summerlin.',
    type: 'website',
    url: 'https://lasvegashomeexpert.com/real-estate-agent-near-red-rock-casino',
  },
};

export default function RealEstateAgentNearRedRockCasinoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Schema for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.1699,
              "longitude": -115.1398
            },
            "areaServed": {
              "@type": "Place",
              "name": "Red Rock Casino Area"
            },
            "knowsAbout": ["Luxury Real Estate", "Red Rock Country Club", "The Ridges"]
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Local Real Estate Expert Near Red Rock Casino
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Dr. Jan Duffy serves the prestigious communities surrounding Red Rock Casino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-primary px-8 py-4 text-lg">
                Schedule Local Consultation
              </button>
              <button type="button" className="btn-secondary px-8 py-4 text-lg">
                View Area Properties
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geo-Optimized Content */}
      <section className="location-specific py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury-lg max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Location & Service Area
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-400">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-4">
                <strong>Location:</strong> Serving communities within 5 miles of Red Rock Casino including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-slate-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  Red Rock Country Club (0.5 miles)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  The Ridges (2 miles)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  Summerlin West (1 mile)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">📍</span>
                  Downtown Summerlin (3 miles)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Near Me Optimization */}
      <section className="near-me-content py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Dr. Duffy Near Red Rock?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Local expertise and convenient access to Red Rock Casino area
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Convenient Location</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Office 5 minutes from Red Rock Casino
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Specializes in Red Rock Country Club listings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Lives in the Summerlin area
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Available for showings 7 days a week
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Market Knowledge</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Deep understanding of Red Rock area values
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Relationships with local HOA boards
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Knowledge of upcoming developments
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Access to off-market properties
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Area Highlights */}
      <section className="area-highlights py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Red Rock Casino Area Highlights
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover why this area is one of Las Vegas's most prestigious locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Red Rock Casino',
                description: 'World-class entertainment and dining just minutes away',
                icon: '🎰',
                features: ['Fine Dining', 'Entertainment', 'Shopping', 'Casino Gaming']
              },
              {
                title: 'Red Rock Country Club',
                description: 'Premier golf course community with luxury homes',
                icon: '⛳',
                features: ['18-Hole Golf Course', 'Country Club Amenities', 'Gated Community', 'Mountain Views']
              },
              {
                title: 'The Ridges',
                description: 'Exclusive custom estates with panoramic views',
                icon: '🏔️',
                features: ['Custom Homes', 'Panoramic Views', 'Privacy', 'Luxury Amenities']
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-slate-300 mb-4">{highlight.description}</p>
                <ul className="space-y-2">
                  {highlight.features.map((feature) => (
                    <li key={feature} className="text-slate-200 text-sm">• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Market Stats */}
      <section className="local-market-stats py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Red Rock Casino Area Market Statistics
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Current market conditions for properties near Red Rock Casino
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { stat: '0.5 miles', label: 'Distance to Red Rock Casino' },
              { stat: '$2.1M', label: 'Red Rock Country Club Median' },
              { stat: '65 days', label: 'Average Days on Market' },
              { stat: '4.5 months', label: 'Current Inventory' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{item.stat}</div>
                <div className="text-slate-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Home Near Red Rock Casino?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Dr. Jan Duffy provides local expertise and convenient access to Red Rock Casino area properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-accent-buyer px-8 py-4 text-lg">
                Schedule Local Consultation
              </button>
              <button type="button" className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-green-700">
                View Area Properties
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
