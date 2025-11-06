'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function FiftyFivePlusCommunitiesPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: '55_plus_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'active_adult_buyer',
        cd2: '55_plus_page',
        cd3: '7',
        cd4: '350',
      },
    });
  };

  const communities = [
    {
      name: 'Sun City Summerlin',
      avgPrice: '$450k',
      ageRestriction: '55+',
      amenities: 'Golf, Pool, Fitness, Clubhouse',
      location: 'Summerlin',
      description: 'Premier active adult community with world-class amenities',
    },
    {
      name: 'Del Webb at Lake Las Vegas',
      avgPrice: '$520k',
      ageRestriction: '55+',
      amenities: 'Lake Views, Golf, Marina, Dining',
      location: 'Henderson',
      description: 'Waterfront living with luxury amenities',
    },
    {
      name: 'Anthem Country Club',
      avgPrice: '$480k',
      ageRestriction: '55+',
      amenities: 'Golf, Tennis, Pool, Mountain Views',
      location: 'Anthem',
      description: 'Mountain views with country club lifestyle',
    },
    {
      name: 'Siena',
      avgPrice: '$420k',
      ageRestriction: '55+',
      amenities: 'Golf, Pool, Fitness, Social Activities',
      location: 'Summerlin',
      description: 'Active lifestyle with social engagement focus',
    },
  ];

  const activeAdultBenefits = [
    'Maintenance-Free Living',
    'Social Activities & Clubs',
    'Fitness & Wellness Programs',
    'Golf & Recreational Amenities',
    'Security & Peace of Mind',
    'Built-in Social Network',
  ];

  const buyingConsiderations = [
    {
      factor: 'Age Restrictions',
      description: 'Most communities require at least one resident to be 55+',
      icon: '👥',
    },
    {
      factor: 'HOA Fees',
      description: 'Monthly fees cover amenities and maintenance',
      icon: '💰',
    },
    {
      factor: 'Resale Value',
      description: 'Active adult communities maintain strong resale values',
      icon: '📈',
    },
    {
      factor: 'Lifestyle Fit',
      description: 'Ensure the community matches your desired lifestyle',
      icon: '🎯',
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
                <span className="text-2xl">🏌️</span>
                <span className="font-semibold">55+ Community Specialist</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">200+ Active Adult Buyers Helped</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              55+ Active Adult Communities
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Expert Guide
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Why Choose Dr. Jan Duffy for 55+ Communities?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>200+ Active Adult Buyers Helped</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>All Major 55+ Communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Lifestyle & Investment Expertise</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_tour')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Community Tour
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download 55+ Communities Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Adult Benefits */}
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
              Benefits of 55+ Communities
            </h2>
            <p className="text-xl text-neutral-600">
              Discover why active adult communities are the perfect choice for your next chapter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeAdultBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-semibold text-primary-900">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Premier 55+ Communities</h2>
            <p className="text-xl text-neutral-600">
              Explore the best active adult communities in Las Vegas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communities.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{community.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Avg Price:</span>
                    <span className="font-bold text-accent-success">{community.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age Restriction:</span>
                    <span className="font-bold">{community.ageRestriction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-bold">{community.location}</span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{community.description}</p>
                <div className="text-sm text-neutral-600">
                  <strong>Amenities:</strong> {community.amenities}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Considerations */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Important Considerations</h2>
            <p className="text-xl text-neutral-600">
              Key factors to consider when buying in 55+ communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyingConsiderations.map((consideration, index) => (
              <motion.div
                key={consideration.factor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{consideration.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{consideration.factor}</h3>
                <p className="text-sm text-neutral-600">{consideration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 55+ Community Listings - RealScout Integration */}
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
              Available 55+ Community Homes
            </h2>
            <p className="text-xl text-neutral-600">
              Browse current listings in active adult communities
            </p>
          </motion.div>

          <div className="active-adult-homes">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,CONDO"
              price-min="300000"
              price-max="700000"
              features="55Plus,Golf"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect 55+ Community?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you to the perfect active adult community that matches your
              lifestyle and investment goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_tour')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Community Tour
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download 55+ Communities Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive 55+ Communities Guide */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Complete Guide to 55+ Active Adult Communities in Las Vegas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Why Choose 55+ Communities in Las Vegas
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Las Vegas offers exceptional 55+ active adult communities that combine resort-style living with active lifestyles. These communities provide age-restricted environments designed for adults 55 and older, featuring amenities like golf courses, fitness centers, swimming pools, clubhouses, and organized social activities. The combination of low-maintenance living and active lifestyle options makes these communities ideal for active adults seeking vibrant retirement experiences.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Las Vegas's climate, with over 300 days of sunshine annually, creates perfect conditions for year-round outdoor activities. The city's master-planned communities like Summerlin and Henderson host some of the nation's premier 55+ communities, offering residents access to world-class amenities, excellent healthcare facilities, and diverse entertainment options. This combination makes Las Vegas an attractive destination for active adults.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Premier 55+ Communities in Las Vegas
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Sun City Summerlin stands as Las Vegas's premier active adult community, featuring multiple golf courses, fitness centers, and extensive amenities. Del Webb at Lake Las Vegas offers waterfront living with luxury amenities, while Anthem Country Club provides mountain views and country club lifestyle. Each community offers unique characteristics and amenities, allowing active adults to find communities that match their preferences and lifestyle goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Benefits of 55+ Active Adult Living
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                55+ communities offer numerous benefits including maintenance-free living, age-appropriate amenities, social opportunities, and security. These communities are designed specifically for active adults, providing environments that support active lifestyles while minimizing maintenance responsibilities. The age restriction creates communities with like-minded residents who share similar life stages and interests.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Many 55+ communities feature single-story designs, low-maintenance landscaping, and community services that handle exterior maintenance, allowing residents to focus on enjoying their active lifestyles. The organized activities, clubs, and social events create opportunities for building friendships and staying engaged, contributing to overall well-being and quality of life.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Working with Dr. Jan Duffy for 55+ Communities
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Duffy's expertise in 55+ communities helps active adults find communities and properties that match their lifestyle needs and budget. She understands the unique characteristics of each community, including amenities, fees, restrictions, and resale considerations. Her knowledge ensures clients make informed decisions about communities that will support their active adult lifestyles for years to come.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              What to Consider When Choosing a 55+ Community
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Community Amenities and Activities</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Different 55+ communities offer different amenities and activity programs. Consider what amenities matter most to you, whether that's golf courses, fitness centers, pools, walking trails, or organized activities. Dr. Duffy helps active adults evaluate communities based on their interests and lifestyle preferences, ensuring they find communities that offer the amenities and activities they value most.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The quality and variety of amenities can significantly impact your enjoyment of community living. Communities with comprehensive amenities and active programs provide more opportunities for engagement and social connection, contributing to a fulfilling active adult lifestyle.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Location and Access to Services</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Location is important for access to healthcare, shopping, dining, and entertainment. Consider proximity to medical facilities, shopping centers, and Las Vegas attractions when selecting a 55+ community. Dr. Duffy's knowledge of Las Vegas neighborhoods helps active adults understand location advantages and access to services.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Master-planned communities like Summerlin and Henderson offer excellent access to services while maintaining resort-style living environments. These locations provide convenience without sacrificing the active adult lifestyle benefits that make 55+ communities attractive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('general')}
        title="Frequently Asked Questions About 55+ Communities in Las Vegas"
        subtitle="Common questions about active adult communities, answered by your Las Vegas home expert"
      />
    </main>
  );
}
