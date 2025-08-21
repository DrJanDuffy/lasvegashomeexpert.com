'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SitemapPage() {
  const mainPages = [
    {
      title: 'Home',
      path: '/',
      description: 'Main landing page with overview of services and RealScout listings',
    },
    {
      title: 'About Dr. Jan Duffy',
      path: '/about-dr-jan-duffy',
      description: 'Learn about our expert real estate agent and her qualifications',
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch with us through multiple contact methods',
    },
  ];

  const servicePages = [
    {
      title: 'Home Staging Services',
      path: '/services/home-staging-services-vegas',
      description: 'Professional home staging services in Las Vegas',
    },
    {
      title: 'Home Staging Services Vegas',
      path: '/services/home-staging-services-vegas',
      description: 'Local home staging expertise for the Las Vegas market',
    },
  ];

  const neighborhoodPages = [
    {
      title: 'Tournament Hills',
      path: '/neighborhoods/tournament-hills',
      description: 'Luxury golf community with exclusive properties',
    },
    {
      title: 'Southern Highlands',
      path: '/neighborhoods/southern-highlands',
      description: 'Elevated luxury living with stunning views',
    },
  ];

  const educationalPages = [
    {
      title: 'Buying Guide',
      path: '/buying-guide',
      description: 'Complete guide to buying a home in Las Vegas',
    },
    {
      title: 'Selling Guide',
      path: '/selling-guide-las-vegas',
      description: 'Expert tips for selling your home for maximum value',
    },
  ];

  const legalPages = [
    {
      title: 'Privacy Policy',
      path: '/privacy-policy',
      description: 'How we protect and handle your personal information',
    },
    {
      title: 'Terms of Service',
      path: '/terms-of-service',
      description: 'Our service agreement and terms of use',
    },
  ];

  const quickLinks = [
    {
      title: 'Current Listings',
      path: '/#listings',
      description: 'Browse available properties',
    },
    {
      title: 'Market Analysis',
      path: '/#market-analysis',
      description: 'Current Las Vegas market insights',
    },
    {
      title: 'Schedule Consultation',
      path: '/contact',
      description: 'Book a free consultation',
    },
    {
      title: 'Get Property Value',
      path: '/contact',
      description: 'Find out what your home is worth',
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
                <span className="text-2xl">🗺️</span>
                <span className="font-semibold">Complete Site Navigation</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">Easy Access</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">SEO Optimized</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sitemap
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Complete Site Navigation
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Find everything you need on our website with this comprehensive navigation guide
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>All Pages Listed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Easy Navigation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Quick Access</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Quick Access</h2>
            <p className="text-xl text-neutral-600">Most popular pages and actions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{link.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{link.description}</p>
                <Link
                  href={link.path}
                  className="btn-accent-buyer w-full px-4 py-2 inline-block text-center"
                >
                  Visit Page
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Main Pages</h2>
            <p className="text-xl text-neutral-600">Core pages of our website</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-3">{page.title}</h3>
                <p className="text-neutral-600 mb-4">{page.description}</p>
                <Link
                  href={page.path}
                  className="btn-accent-buyer w-full px-4 py-2 inline-block text-center"
                >
                  Visit Page
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pages */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Service Pages</h2>
            <p className="text-xl text-neutral-600">Detailed information about our services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{page.title}</h3>
                <p className="text-neutral-600 mb-6">{page.description}</p>
                <Link href={page.path} className="btn-accent-success px-6 py-3 inline-block">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Pages */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Neighborhood Pages</h2>
            <p className="text-xl text-neutral-600">Explore specific Las Vegas neighborhoods</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoodPages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{page.title}</h3>
                <p className="text-neutral-600 mb-6">{page.description}</p>
                <Link href={page.path} className="btn-accent-buyer px-6 py-3 inline-block">
                  Explore Neighborhood
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Pages */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Educational Resources</h2>
            <p className="text-xl text-neutral-600">
              Learn about real estate processes and market insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalPages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{page.title}</h3>
                <p className="text-neutral-600 mb-6">{page.description}</p>
                <Link href={page.path} className="btn-accent-buyer px-6 py-3 inline-block">
                  Read Guide
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Legal & Compliance</h2>
            <p className="text-xl text-neutral-600">Important legal information and policies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalPages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{page.title}</h3>
                <p className="text-neutral-600 mb-6">{page.description}</p>
                <Link href={page.path} className="btn-secondary px-6 py-3 inline-block">
                  View Policy
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Features */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Site Features</h2>
            <p className="text-xl text-neutral-600">What makes our website special</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">RealScout Integration</h3>
              <p className="text-sm text-neutral-600">
                Live property listings with real-time updates
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">Mobile Optimized</h3>
              <p className="text-sm text-neutral-600">Perfect experience on all devices</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">Fast Loading</h3>
              <p className="text-sm text-neutral-600">Optimized for speed and performance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">SEO Optimized</h3>
              <p className="text-sm text-neutral-600">Built for search engine visibility</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">Analytics</h3>
              <p className="text-sm text-neutral-600">Track user engagement and conversions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">Modern Design</h3>
              <p className="text-sm text-neutral-600">Beautiful, professional appearance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Help Finding Something?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us directly and we'll help you navigate to
              the right information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent-buyer text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="btn-secondary text-xl px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm inline-block"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
