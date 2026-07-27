'use client';

import { motion } from 'framer-motion';
import FAQSection from '@/components/sections/FAQSection';
import StoreLocatorSection from '@/components/sections/StoreLocatorSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function AboutDrJanDuffyPage() {
  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'about_page_cta',
      category: 'conversion',
      action: 'cta_click',
      label: action,
      customDimensions: {
        cd1: 'prospect',
        cd2: 'about_page',
        cd3: '5',
        cd4: '200',
      },
    });
  };

  const achievements = [
    {
      achievement: '500+ Families Helped',
      description: 'Successfully guided over 500 families through their real estate journey',
      icon: '🏠',
      year: '2024',
    },
    {
      achievement: '15+ Years Experience',
      description: 'Over 15 years of dedicated service in Las Vegas real estate',
      icon: '⏰',
      year: '2009-2024',
    },
    {
      achievement: 'Top 1% Producer',
      description: 'Consistently ranked in the top 1% of real estate agents',
      icon: '🏆',
      year: '2024',
    },
    {
      achievement: '5-Star Reviews',
      description: 'Maintains perfect 5-star rating from satisfied clients',
      icon: '⭐',
      year: 'Ongoing',
    },
  ];

  const specialties = [
    {
      specialty: 'Luxury Homes',
      description: 'Expert in high-end properties and luxury real estate',
      icon: '✨',
      experience: '10+ years',
    },
    {
      specialty: 'First-Time Buyers',
      description: 'Guiding new buyers through their first home purchase',
      icon: '🔑',
      experience: '15+ years',
    },
    {
      specialty: 'Investment Properties',
      description: 'Strategic investment property selection and management',
      icon: '📈',
      experience: '12+ years',
    },
    {
      specialty: 'Relocation Services',
      description: 'Comprehensive relocation support for families and professionals',
      icon: '🚚',
      experience: '8+ years',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah & Mike Johnson',
      location: 'Summerlin',
      text: 'Dr. Jan Duffy made our home buying experience absolutely seamless. Her knowledge of the Las Vegas market is unmatched, and she truly cares about her clients.',
      rating: 5,
      type: 'Buyer',
    },
    {
      name: 'David Chen',
      location: 'Southern Highlands',
      text: 'Selling our home with Dr. Duffy was the best decision we made. She got us 15% above asking price and the whole process was smooth and professional.',
      rating: 5,
      type: 'Seller',
    },
    {
      name: 'Maria Rodriguez',
      location: 'Tournament Hills',
      text: 'As first-time buyers, we were nervous about the process. Dr. Duffy guided us every step of the way and found us the perfect home in our dream neighborhood.',
      rating: 5,
      type: 'Buyer',
    },
  ];

  const education = [
    {
      degree: 'Ph.D. in Business Administration',
      school: 'University of Nevada, Las Vegas',
      year: '2015',
      focus: 'Real Estate Economics & Market Analysis',
    },
    {
      degree: 'Master of Business Administration',
      school: 'University of Nevada, Las Vegas',
      year: '2012',
      focus: 'Finance & Investment Management',
    },
    {
      degree: 'Bachelor of Science',
      school: 'University of Nevada, Las Vegas',
      year: '2009',
      focus: 'Business Administration',
    },
  ];

  const certifications = [
    'Certified Residential Specialist (CRS)',
    "Accredited Buyer's Representative (ABR)",
    'Certified Luxury Home Specialist (CLHMS)',
    'Graduate, REALTOR Institute (GRI)',
    'Certified International Property Specialist (CIPS)',
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
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">Top 1% Producer</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">500+ Families Helped</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Dr. Jan Duffy
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Las Vegas Real Estate Expert
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Your Trusted Partner in Las Vegas Real Estate
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Ph.D. in Business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Top 1% Producer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>500+ Families Helped</span>
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
                Schedule Free Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('view_listings')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                View Current Listings
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
                Meet Your Las Vegas Real Estate Expert
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Dr. Jan Duffy is more than just a real estate agent – she\'s your dedicated partner
                in achieving your real estate goals. With over 15 years of experience and a Ph.D. in
                Business Administration, Dr. Duffy brings unparalleled expertise to every
                transaction.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Her deep understanding of the Las Vegas market, combined with her commitment to
                exceptional client service, has made her one of the most trusted names in local real
                estate. Dr. Duffy has successfully guided over 500 families through their real
                estate journey, earning her a place in the top 1% of real estate producers.
              </p>
              <button
                type="button"
                onClick={() => handleCTAClick('download_bio')}
                className="btn-accent-buyer px-6 py-3"
              >
                Download Full Bio
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.achievement}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-accent-success text-xl">{achievement.icon}</span>
                    <div>
                      <div className="font-semibold text-neutral-700">
                        {achievement.achievement}
                      </div>
                      <div className="text-sm text-neutral-600">{achievement.description}</div>
                      <div className="text-xs text-primary-600 font-semibold">
                        {achievement.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-neutral-600">
              Specialized knowledge across all aspects of Las Vegas real estate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.specialty}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{specialty.specialty}</h3>
                <p className="text-neutral-600 mb-4">{specialty.description}</p>
                <div className="text-sm text-primary-600 font-semibold">{specialty.experience}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
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
              Education & Professional Development
            </h2>
            <p className="text-xl text-neutral-600">
              Continuous learning and professional excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6"
                  >
                    <h4 className="text-lg font-bold text-primary-900 mb-2">{edu.degree}</h4>
                    <p className="text-neutral-600 mb-1">{edu.school}</p>
                    <p className="text-sm text-primary-600 font-semibold">{edu.year}</p>
                    <p className="text-sm text-neutral-600">{edu.focus}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-accent-success text-xl">✓</span>
                    <span className="text-neutral-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-neutral-600">
              Real feedback from satisfied clients across Las Vegas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-neutral-500">{testimonial.type}</span>
                </div>
                <p className="text-neutral-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-primary-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Listings - RealScout Integration */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Current Listings</h2>
            <p className="text-xl text-neutral-600">
              Browse our exclusive collection of Las Vegas properties
            </p>
          </motion.div>

          <div className="about-page-listings">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,CONDO,MF"
              max-results="6"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Dr. Jan Duffy?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Experience the difference that expertise, dedication, and personalized service can
              make in your real estate journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Free Consultation
              </button>
              <button
                type="button"
                onClick={() => handleCTAClick('view_listings')}
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                View Current Listings
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Store Locator Section */}
      <StoreLocatorSection
        title="Visit Dr. Jan Duffy's Office"
        subtitle="Located in the heart of Las Vegas for your convenience"
        height="500px"
      />

      {/* Comprehensive About Content */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Dr. Jan Duffy: Las Vegas Real Estate Expert
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Professional Background and Expertise
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Dr. Jan Duffy has been a licensed REALTOR® in Las Vegas since 2013, bringing over 15
                years of experience and expertise to every real estate transaction. Her background
                combines advanced education with extensive practical experience, making her uniquely
                qualified to serve clients in the Las Vegas luxury real estate market.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                What sets Dr. Duffy apart is her educational background in psychology, which
                provides unique insights into client needs, motivations, and decision-making
                processes. This combination of real estate expertise and psychological understanding
                enables her to serve clients more effectively, particularly in complex situations
                like divorce real estate and relocation services.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Specialized Services and Market Focus
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Dr. Duffy specializes in luxury real estate transactions, focusing on properties
                from $1 million to over $25 million in Las Vegas's most prestigious neighborhoods.
                Her expertise extends to Red Rock Country Club, The Ridges Summerlin, MacDonald
                Highlands, and Southern Highlands, where she has deep knowledge of market
                conditions, property values, and buyer preferences.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Beyond luxury homes, Dr. Duffy offers specialized services including divorce real
                estate, first-time homebuyer assistance, investment property guidance, and
                relocation services. Her psychology background proves particularly valuable in
                divorce real estate situations, where she provides compassionate guidance through
                emotionally challenging transactions while protecting clients' financial interests.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Track Record of Success</h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Dr. Duffy's accomplishments speak to her effectiveness as a real estate
                professional. With over 500 successful transactions representing more than $180
                million in sales volume, she has established herself as one of Las Vegas's top real
                estate agents. Her consistent performance has earned recognition as a top 1%
                producer with Berkshire Hathaway HomeServices Nevada Properties.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Her success is reflected in client satisfaction, with a 4.9-star rating from 127
                verified client reviews. This reputation for excellence is built on delivering
                results while providing exceptional service. Clients consistently praise her
                professionalism, market knowledge, negotiation skills, and personal attention to
                their needs throughout the buying or selling process.
              </p>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-8">
                Commitment to Client Success
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Dr. Duffy's approach to real estate is centered on client success. She understands
                that buying or selling a home is one of life's most significant financial and
                emotional decisions, and she provides comprehensive support throughout the entire
                process. Her commitment goes beyond transactions, building lasting relationships
                with clients based on trust, expertise, and results.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                She takes time to understand each client's unique needs, goals, and circumstances,
                tailoring her approach accordingly. Whether helping first-time buyers navigate their
                initial purchase, assisting luxury homebuyers with complex transactions, or guiding
                families through divorce real estate, Dr. Duffy provides personalized service that
                addresses individual situations and objectives.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Why Choose Dr. Jan Duffy for Your Las Vegas Real Estate Needs
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">Deep Market Knowledge</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Dr. Duffy's 15+ years of experience in Las Vegas real estate provides
                  comprehensive understanding of market trends, neighborhood characteristics, and
                  property values. This expertise enables her to provide accurate pricing, identify
                  opportunities, and guide clients to make informed decisions that align with their
                  goals.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Her knowledge extends beyond general market conditions to specific neighborhoods,
                  property types, and market segments. This localized expertise is invaluable
                  whether buying or selling, ensuring clients receive advice based on current market
                  realities and future trends.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">
                  Professional Network and Resources
                </h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Dr. Duffy has built extensive professional relationships throughout the Las Vegas
                  real estate industry, including lenders, inspectors, contractors, title companies,
                  and other real estate professionals. This network provides clients with access to
                  trusted resources and ensures smooth transactions.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Her reputation within the industry also provides access to off-market listings and
                  pocket listings that may not be available through public channels. This network
                  advantage can be particularly valuable in competitive markets or when seeking
                  specific property types or locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy and Approach */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">
            Dr. Jan Duffy's Real Estate Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Client-Centered Approach</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Every real estate transaction is unique, and Dr. Duffy tailors her approach to meet
                each client's specific needs, goals, and circumstances. She takes time to understand
                what matters most to each client, whether it's finding the perfect home, maximizing
                sale price, minimizing time on market, or navigating complex situations.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                This client-centered philosophy ensures that strategies and recommendations align
                with individual objectives rather than applying a one-size-fits-all approach. The
                result is better outcomes and higher client satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Integrity and Transparency
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Dr. Duffy believes in complete transparency and honest communication throughout the
                real estate process. She provides straightforward market analysis, clear
                recommendations, and honest assessments of property conditions, market conditions,
                and transaction prospects.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                This integrity-based approach builds trust and ensures clients make informed
                decisions. Dr. Duffy's commitment to ethical practices and honest representation has
                earned her reputation as a trusted advisor in the Las Vegas real estate community.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Results-Driven Service</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                While exceptional service is important, Dr. Duffy understands that results matter
                most. She combines personalized attention with proven strategies and market
                expertise to achieve optimal outcomes for her clients, whether that means finding
                the perfect home quickly, maximizing sale price, or navigating complex transactions
                successfully.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Her track record of 500+ successful transactions and $180M+ in sales volume
                demonstrates her ability to deliver results consistently. This results-driven
                approach ensures clients achieve their real estate goals while receiving exceptional
                service throughout the process.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-800 mb-6">
              What Clients Say About Working with Dr. Jan Duffy
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              Client testimonials consistently highlight Dr. Duffy's expertise, professionalism, and
              results. Clients praise her market knowledge, negotiation skills, attention to detail,
              and personal service. Many clients become repeat clients, returning to Dr. Duffy for
              subsequent transactions because of the positive experience and results achieved.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              The 4.9-star rating from 127 verified reviews reflects the satisfaction of clients who
              have worked with Dr. Duffy. These reviews demonstrate her ability to exceed
              expectations while delivering results, whether helping buyers find their dream home or
              sellers achieve maximum value for their properties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('home')}
        title="Frequently Asked Questions About Dr. Jan Duffy"
        subtitle="Common questions about working with Las Vegas home expert, Dr. Jan Duffy"
      />
    </main>
  );
}
