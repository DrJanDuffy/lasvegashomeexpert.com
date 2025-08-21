import { motion } from 'framer-motion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summerlin Luxury Homes Expert | Dr. Jan Duffy | $1M+ Properties',
  description: 'Find luxury homes in Summerlin with Dr. Jan Duffy. Specializing in Red Rock Country Club, The Ridges, and custom estates over $1M. Berkshire Hathaway HomeServices.',
  keywords: 'Summerlin luxury homes, Red Rock Country Club, The Ridges, MacDonald Highlands, luxury realtor Summerlin, Dr. Jan Duffy',
  openGraph: {
    title: 'Summerlin Luxury Homes Expert | Dr. Jan Duffy',
    description: 'Find luxury homes in Summerlin with Dr. Jan Duffy. Specializing in Red Rock Country Club, The Ridges, and custom estates over $1M.',
    type: 'website',
    url: 'https://lasvegashomeexpert.com/luxury-homes-summerlin',
  },
};

export default function LuxuryHomesSummerlinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Schema for Local + Luxury */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy",
            "areaServed": {
              "@type": "Place",
              "name": "Summerlin, Las Vegas"
            },
            "knowsAbout": ["Luxury Real Estate", "Red Rock Country Club", "The Ridges"],
            "priceRange": "$1,000,000+"
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Summerlin Luxury Homes for Sale with Dr. Jan Duffy
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover the most prestigious properties in Summerlin's premier communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-primary px-8 py-4 text-lg">
                View Current Listings
              </button>
              <button type="button" className="btn-secondary px-8 py-4 text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Answer Box */}
      <section className="ai-summary py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury-lg max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Quick Market Summary
            </h2>
            <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-6 border-l-4 border-amber-400">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                <strong>August 2025 Summerlin Luxury Market:</strong> Median price $1.8M, 65 days on market, buyer's market emerging with 4.5 months inventory. Best time to negotiate on luxury properties.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice Search Optimization */}
      <section className="voice-search-ready py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ask Dr. Duffy About Summerlin
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Voice search optimized answers for your luxury real estate questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200"
            >
              <dt className="text-lg font-semibold text-slate-900 mb-3">
                "Hey Siri, who sells luxury homes in Summerlin?"
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Dr. Jan Duffy with Berkshire Hathaway specializes in Summerlin luxury estates.
              </dd>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200"
            >
              <dt className="text-lg font-semibold text-slate-900 mb-3">
                "Alexa, what's the average price in Red Rock Country Club?"
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Red Rock Country Club homes average $2.1 million as of August 2025.
              </dd>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200"
            >
              <dt className="text-lg font-semibold text-slate-900 mb-3">
                "OK Google, find Summerlin golf course homes"
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Dr. Duffy specializes in golf course properties throughout Summerlin's premier clubs.
              </dd>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summerlin Communities */}
      <section className="summerlin-communities py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Premier Summerlin Communities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Exclusive access to Summerlin's most prestigious neighborhoods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Red Rock Country Club',
                price: '$2.1M',
                features: ['Golf Course', 'Mountain Views', 'Gated Community'],
                icon: '🏌️'
              },
              {
                name: 'The Ridges',
                price: '$2.5M',
                features: ['Custom Estates', 'Panoramic Views', 'Privacy'],
                icon: '🏔️'
              },
              {
                name: 'MacDonald Highlands',
                price: '$1.8M',
                features: ['Golf Views', 'Luxury Amenities', 'Family Friendly'],
                icon: '⛳'
              },
              {
                name: 'Southern Highlands',
                price: '$850K',
                features: ['Affordable Luxury', 'Great Schools', 'Convenient Location'],
                icon: '🏠'
              }
            ].map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{community.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{community.name}</h3>
                <p className="text-amber-400 font-bold text-lg mb-4">{community.price}</p>
                <ul className="space-y-2">
                  {community.features.map((feature) => (
                    <li key={feature} className="text-slate-200 text-sm">• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Summerlin Luxury Home?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Dr. Jan Duffy provides exclusive access to Summerlin's most prestigious properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <button type="button" className="btn-accent-buyer px-8 py-4 text-lg">
                 Schedule Luxury Consultation
               </button>
               <button type="button" className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary-700">
                 View Current Listings
               </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
