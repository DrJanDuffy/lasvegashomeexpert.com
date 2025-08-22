'use client';

import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  const lastUpdated = 'December 15, 2024';

  const serviceScope = [
    {
      service: 'Real Estate Consultation',
      description: 'Professional advice on buying, selling, and investing in real estate',
      includes: [
        'Market analysis',
        'Property valuation',
        'Investment guidance',
        'Transaction support',
      ],
    },
    {
      service: 'Property Search & Showings',
      description: 'Assistance in finding and viewing properties that match your criteria',
      includes: [
        'Property research',
        'Scheduling showings',
        'Neighborhood analysis',
        'Market insights',
      ],
    },
    {
      service: 'Transaction Management',
      description: 'Support throughout the entire real estate transaction process',
      includes: [
        'Offer preparation',
        'Negotiation support',
        'Contract review',
        'Closing coordination',
      ],
    },
    {
      service: 'Educational Resources',
      description: 'Access to market information, guides, and educational content',
      includes: [
        'Market reports',
        'Buying/selling guides',
        'Neighborhood insights',
        'Financing information',
      ],
    },
  ];

  const userObligations = [
    {
      obligation: 'Accurate Information',
      description: 'Provide truthful and complete information about your needs and circumstances',
      importance: 'Essential for providing appropriate services and legal compliance',
    },
    {
      obligation: 'Timely Communication',
      description: 'Respond to requests for information and decisions within reasonable timeframes',
      importance: 'Ensures smooth transaction process and prevents delays',
    },
    {
      obligation: 'Financial Preparedness',
      description: 'Have necessary financial documents and pre-approval when applicable',
      importance: 'Required for serious property consideration and offers',
    },
    {
      obligation: 'Professional Conduct',
      description: 'Maintain professional behavior during showings and negotiations',
      importance: 'Creates positive relationships and successful transactions',
    },
  ];

  const limitations = [
    {
      limitation: 'Market Conditions',
      description: 'We cannot guarantee specific market outcomes or property values',
      impact: 'Property values may fluctuate based on market conditions',
    },
    {
      limitation: 'Third-Party Services',
      description:
        'We are not responsible for services provided by lenders, inspectors, or other professionals',
      impact: 'Quality and terms of third-party services are beyond our control',
    },
    {
      limitation: 'Legal Advice',
      description: 'We provide real estate services, not legal, tax, or financial advice',
      impact: 'Consult appropriate professionals for legal, tax, or financial matters',
    },
    {
      limitation: 'Property Condition',
      description:
        'We cannot guarantee the condition of properties or accuracy of all property information',
      impact: 'Professional inspections are recommended for all properties',
    },
  ];

  const fees = [
    {
      type: 'Commission',
      description: 'Standard real estate commission based on successful transactions',
      when: 'Upon successful closing of a real estate transaction',
    },
    {
      type: 'Consultation Fees',
      description: 'Fees for specialized consultation services outside standard transactions',
      when: 'As agreed upon before service provision',
    },
    {
      type: 'Additional Services',
      description: 'Fees for additional services such as staging, photography, or marketing',
      when: 'As outlined in service agreements',
    },
  ];

  const termination = [
    {
      reason: 'Mutual Agreement',
      description: 'Both parties agree to end the relationship',
      process: 'Written agreement signed by both parties',
    },
    {
      reason: 'Service Completion',
      description: 'Services have been completed as agreed',
      process: 'Automatic upon successful transaction completion',
    },
    {
      reason: 'Breach of Terms',
      description: 'Either party violates the terms of service',
      process: 'Written notice with opportunity to cure, then termination',
    },
    {
      reason: 'Inactivity',
      description: 'No activity or communication for extended period',
      process: 'Written notice after 90 days of inactivity',
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
                <span className="text-2xl">📋</span>
                <span className="font-semibold">Clear Terms & Conditions</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">Professional Standards</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">Legal Compliance</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Terms of Service
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                Our Service Agreement
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                Clear understanding of our services, your rights, and our mutual obligations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Transparent Terms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Professional Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Legal Protection</span>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center">
              <p className="text-lg text-primary-200">
                Last Updated: <span className="font-semibold">{lastUpdated}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6 text-center">
              Terms of Service Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 mb-6">
                These Terms of Service ("Terms") govern your use of the services provided by Las
                Vegas Home Expert ("we," "our," or "us"). By using our services, you agree to be
                bound by these Terms. If you do not agree to these Terms, please do not use our
                services.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                We provide professional real estate services including consultation, property
                search, transaction management, and educational resources. These Terms outline the
                scope of our services, your obligations, and our mutual rights and responsibilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Scope of Services</h2>
            <p className="text-xl text-neutral-600">
              We provide comprehensive real estate services to meet your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceScope.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{service.service}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Includes:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="text-accent-success">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Your Obligations</h2>
            <p className="text-xl text-neutral-600">
              To ensure the best possible service, we ask that you meet these requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{obligation.obligation}</h3>
                <p className="text-neutral-600 mb-4">{obligation.description}</p>
                <div>
                  <h4 className="font-semibold text-accent-success mb-2">Why This Matters:</h4>
                  <p className="text-sm text-neutral-600">{obligation.importance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Service Limitations</h2>
            <p className="text-xl text-neutral-600">
              Important limitations to understand about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <motion.div
                key={limitation.limitation}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{limitation.limitation}</h3>
                <p className="text-neutral-600 mb-4">{limitation.description}</p>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Impact:</h4>
                  <p className="text-sm text-neutral-600">{limitation.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees and Payment */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Fees and Payment</h2>
            <p className="text-xl text-neutral-600">
              Clear understanding of our fee structure and payment terms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fees.map((fee, index) => (
              <motion.div
                key={fee.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{fee.type}</h3>
                <p className="text-neutral-600 mb-4">{fee.description}</p>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">When Due:</h4>
                  <p className="text-sm text-neutral-600">{fee.when}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Termination of Services</h2>
            <p className="text-xl text-neutral-600">
              How and when our service relationship may end
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termination.map((term, index) => (
              <motion.div
                key={term.reason}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{term.reason}</h3>
                <p className="text-neutral-600 mb-4">{term.description}</p>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Process:</h4>
                  <p className="text-sm text-neutral-600">{term.process}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Dispute Resolution</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 mb-6">
                We are committed to resolving any disputes amicably and professionally. If you have
                concerns about our services, we encourage you to contact us directly to discuss the
                issue.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                In the event that we cannot resolve a dispute through direct communication, both
                parties agree to attempt mediation before pursuing any legal action. Any legal
                proceedings shall be governed by the laws of the State of Nevada.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              If you have questions about these Terms of Service, please contact us:
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">Email</h3>
                  <p className="text-neutral-600">legal@lasvegashomeexpert.com</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">Phone</h3>
                  <p className="text-neutral-600">(702) 555-0123</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">Mailing Address</h3>
                <p className="text-neutral-600">
                  Las Vegas Home Expert
                  <br />
                  1700 S Pavilion Center Drive, Suite 140
                  <br />
                  Las Vegas, NV 89135
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Terms Updates</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 mb-6">
                We may update these Terms of Service from time to time to reflect changes in our
                services, business practices, or legal requirements. We will notify you of any
                material changes by posting the updated Terms on our website and updating the "Last
                Updated" date.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Your continued use of our services after any changes to these Terms constitutes
                acceptance of those changes. We encourage you to review these Terms periodically to
                stay informed about our current terms and conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
