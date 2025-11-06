'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function RelocationSpecialistPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'relocation_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'relocating_buyer',
        cd2: 'relocation_page',
        cd3: '7',
        cd4: '400',
      },
    });
  };

  const relocationServices = [
    {
      service: 'Area Research & Analysis',
      description: 'Comprehensive neighborhood research and school district analysis',
      icon: '🔍',
      value: 'Find your perfect area',
    },
    {
      service: 'Virtual Tours & Showings',
      description: 'Remote property viewing before you move',
      icon: '📱',
      value: 'See homes from anywhere',
    },
    {
      service: 'Relocation Timeline Planning',
      description: 'Strategic planning for smooth transition',
      icon: '📅',
      value: 'Organized move process',
    },
    {
      service: 'Local Market Education',
      description: 'Learn about Las Vegas neighborhoods and market trends',
      icon: '📚',
      value: 'Make informed decisions',
    },
    {
      service: 'Closing Coordination',
      description: 'Remote closing and key handoff coordination',
      icon: '🔑',
      value: 'Seamless transaction',
    },
    {
      service: 'Post-Move Support',
      description: 'Ongoing assistance after you settle in',
      icon: '🏠',
      value: 'Continued guidance',
    },
  ];

  const popularAreas = [
    {
      name: 'Summerlin',
      avgPrice: '$650k',
      commute: '25 min to Strip',
      features: 'Master-planned, golf courses, shopping, schools',
      description: 'Family-friendly master-planned community with luxury amenities',
    },
    {
      name: 'Henderson',
      avgPrice: '$480k',
      commute: '20 min to Strip',
      features: 'Great schools, parks, family atmosphere, growing',
      description: 'Affordable family community with excellent schools and amenities',
    },
    {
      name: 'Green Valley',
      avgPrice: '$420k',
      commute: '25 min to Strip',
      features: 'Established, safe, shopping, dining, parks',
      description: 'Established community with mature landscaping and amenities',
    },
    {
      name: 'Anthem',
      avgPrice: '$520k',
      commute: '30 min to Strip',
      features: 'Mountain views, hiking, quiet, family-focused',
      description: 'Scenic mountain community with outdoor recreation opportunities',
    },
  ];

  const relocationBenefits = [
    'No State Income Tax',
    'Affordable Cost of Living',
    'Year-Round Sunshine',
    'Entertainment Capital',
    'Growing Job Market',
    'Outdoor Recreation',
    'Family-Friendly Communities',
    'International Airport Access',
  ];

  const relocationTimeline = [
    {
      phase: 'Research Phase',
      duration: '2-4 weeks',
      activities: 'Area research, market analysis, budget planning',
      icon: '📋',
    },
    {
      phase: 'Property Search',
      duration: '4-8 weeks',
      activities: 'Virtual tours, property selection, offer preparation',
      icon: '🏠',
    },
    {
      phase: 'Transaction Phase',
      duration: '30-45 days',
      activities: 'Negotiation, inspection, financing, closing',
      icon: '✍️',
    },
    {
      phase: 'Move Phase',
      duration: '1-2 weeks',
      activities: 'Moving coordination, key handoff, settling in',
      icon: '🚚',
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
                <span className="text-2xl">🚚</span>
                <span className="font-semibold">Relocation Specialist</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">300+ Families Relocated</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Moving to Las Vegas?
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Relocation Expert Guide
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Why Choose Dr. Jan Duffy for Your Relocation?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>300+ Families Relocated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Virtual Tour Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Complete Relocation Support</span>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Relocation Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download Relocation Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Relocation Benefits */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Why Move to Las Vegas?</h2>
            <p className="text-xl text-neutral-600">
              Discover the advantages of living in the Entertainment Capital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relocationBenefits.map((benefit, index) => (
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

      {/* Relocation Services */}
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
              Complete Relocation Services
            </h2>
            <p className="text-xl text-neutral-600">
              From research to settling in - we handle every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relocationServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{service.service}</h3>
                <p className="text-sm text-neutral-600 mb-3">{service.description}</p>
                <div className="text-sm font-semibold text-accent-success">{service.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Popular Relocation Areas</h2>
            <p className="text-xl text-neutral-600">
              Top neighborhoods for families moving to Las Vegas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{area.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Avg Price:</span>
                    <span className="font-bold text-accent-success">{area.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commute:</span>
                    <span className="font-bold">{area.commute}</span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{area.description}</p>
                <div className="text-sm text-neutral-600">
                  <strong>Features:</strong> {area.features}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relocation Timeline */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Your Relocation Timeline</h2>
            <p className="text-xl text-neutral-600">
              A structured approach to your smooth transition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relocationTimeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{phase.phase}</h3>
                <p className="text-sm text-neutral-600 mb-3">{phase.activities}</p>
                <div className="text-xs text-primary-600 font-semibold">{phase.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relocation Listings - RealScout Integration */}
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
              Perfect Homes for Relocating Families
            </h2>
            <p className="text-xl text-neutral-600">
              Browse properties ideal for families moving to Las Vegas
            </p>
          </motion.div>

          <div className="relocation-homes">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,CONDO"
              price-min="300000"
              price-max="800000"
              max-results="8"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Make Las Vegas Your Home?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy guide you through every step of your relocation with expert
              knowledge and personalized support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Relocation Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('download_guide')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Download Relocation Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Relocation Guide */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Complete Guide to Relocating to Las Vegas
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Why Relocate to Las Vegas
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Las Vegas offers exceptional quality of life for relocating families and
                professionals, with affordable housing, no state income tax, strong job market, and
                world-class amenities. The city's master-planned communities provide excellent
                schools, parks, shopping, and recreation facilities, creating attractive
                environments for families and professionals seeking a high quality of life.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                The Las Vegas economy continues to diversify beyond tourism, with growing
                technology, healthcare, finance, and professional services sectors creating stable
                employment opportunities. This economic growth supports housing demand and property
                values, making Las Vegas an attractive destination for relocating professionals and
                families.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Las Vegas Neighborhoods for Relocating Families
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Las Vegas offers diverse neighborhoods that appeal to different lifestyles and
                budgets. Summerlin provides master-planned communities with excellent schools and
                amenities. Henderson offers family-friendly neighborhoods with strong community
                infrastructure. Green Valley features established neighborhoods with mature trees
                and well-maintained properties. Dr. Jan Duffy helps relocating families identify
                neighborhoods that match their needs and preferences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Relocation Services for Las Vegas
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Relocating to a new city involves numerous challenges including finding the right
                neighborhood, understanding market conditions, and coordinating purchases from a
                distance. Dr. Duffy provides comprehensive relocation services including
                neighborhood research, virtual tours, market education, and coordinated home buying
                that helps families and professionals relocate successfully.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Her relocation services are designed to help clients make informed decisions about
                Las Vegas neighborhoods and properties, even when they're not yet in Las Vegas.
                Virtual tours, detailed neighborhood information, and market education help clients
                understand their options and make confident decisions about relocating to Las Vegas.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Working with Dr. Jan Duffy for Relocation
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Dr. Duffy's relocation expertise helps families and professionals navigate the
                complexities of moving to Las Vegas. She provides comprehensive support from initial
                research through closing and beyond, ensuring clients feel confident about their
                relocation decisions. Her knowledge of Las Vegas neighborhoods, schools, and market
                conditions enables her to provide guidance that helps clients find communities that
                match their lifestyle needs.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Key Considerations When Relocating to Las Vegas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Neighborhood Selection</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Choosing the right neighborhood is crucial when relocating to Las Vegas. Consider
                  factors like schools, commute times, amenities, and lifestyle preferences. Dr.
                  Duffy helps relocating clients understand neighborhood characteristics, school
                  districts, and market conditions, enabling them to make informed decisions about
                  where to live.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Her knowledge of Las Vegas neighborhoods from Summerlin to Henderson ensures
                  clients receive accurate information about areas that match their needs. This
                  localized expertise is invaluable for relocating families who may not be familiar
                  with Las Vegas neighborhoods and communities.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Timing and Coordination</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Relocation requires careful timing and coordination between selling your current
                  home, finding a new home, and managing the move. Dr. Duffy helps clients
                  coordinate these elements, providing guidance on timing purchases, managing
                  transitions, and ensuring smooth relocations.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Her experience with relocating clients enables her to anticipate challenges and
                  provide solutions that ensure smooth transitions. This coordination helps clients
                  avoid common relocation pitfalls while achieving their goals efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('general')}
        title="Frequently Asked Questions About Relocation to Las Vegas"
        subtitle="Common questions about relocating to Las Vegas, answered by your Las Vegas home expert"
      />
    </main>
  );
}
