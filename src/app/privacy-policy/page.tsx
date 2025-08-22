'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'December 15, 2024';

  const dataCollection = [
    {
      category: 'Personal Information',
      examples: [
        'Name, email address, phone number',
        'Mailing address and contact details',
        'Real estate preferences and requirements',
      ],
      purpose: 'To provide personalized real estate services and communicate with you',
    },
    {
      category: 'Property Information',
      examples: [
        'Property addresses and details',
        'Photos and property descriptions',
        'Market analysis and pricing data',
      ],
      purpose: 'To assist with buying, selling, and property valuation services',
    },
    {
      category: 'Financial Information',
      examples: [
        'Budget ranges and financing preferences',
        'Income and credit information (if provided)',
        'Investment goals and criteria',
      ],
      purpose: 'To provide appropriate property recommendations and financing guidance',
    },
    {
      category: 'Website Usage',
      examples: [
        'Pages visited and time spent',
        'Search queries and preferences',
        'Device and browser information',
      ],
      purpose: 'To improve website functionality and user experience',
    },
  ];

  const dataUses = [
    'Providing real estate services and consultations',
    'Communicating about properties and market updates',
    'Sending newsletters and educational content',
    'Improving our services and website',
    'Complying with legal obligations',
    'Marketing and promotional activities (with consent)',
  ];

  const dataSharing = [
    {
      party: 'Real Estate Partners',
      purpose: 'To facilitate property transactions and showings',
      data: 'Contact information and property preferences',
    },
    {
      party: 'Service Providers',
      purpose: 'To support website functionality and business operations',
      data: 'Technical data and analytics information',
    },
    {
      party: 'Legal Authorities',
      purpose: 'To comply with legal requirements and regulations',
      data: 'Information required by law or court order',
    },
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data',
      icon: '📋',
    },
    {
      right: 'Correction',
      description: 'Update or correct inaccurate information',
      icon: '✏️',
    },
    {
      right: 'Deletion',
      description: 'Request deletion of your personal data',
      icon: '🗑️',
    },
    {
      right: 'Portability',
      description: 'Receive your data in a portable format',
      icon: '📤',
    },
    {
      right: 'Objection',
      description: 'Object to certain data processing activities',
      icon: '🚫',
    },
    {
      right: 'Withdrawal',
      description: 'Withdraw consent for marketing communications',
      icon: '↩️',
    },
  ];

  const securityMeasures = [
    'Encryption of sensitive data in transit and at rest',
    'Regular security audits and vulnerability assessments',
    'Access controls and authentication requirements',
    'Employee training on data protection practices',
    'Incident response and breach notification procedures',
    'Compliance with industry security standards',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
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
                <span className="text-2xl">🔒</span>
                <span className="font-semibold">Your Privacy Matters</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">Transparent Practices</span>
                <span className="text-primary-200">|</span>
                <span className="font-semibold">Legal Compliance</span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Privacy Policy
              <span className="block text-4xl md:text-5xl text-primary-200 mt-2">
                How We Protect Your Information
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold mb-4">
                We are committed to protecting your privacy and being transparent about how we
                handle your data
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Secure Data Handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Transparent Practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-success">✓</span>
                  <span>Legal Compliance</span>
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
              Privacy Policy Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 mb-6">
                This Privacy Policy describes how Las Vegas Home Expert ("we," "our," or "us")
                collects, uses, and protects your personal information when you use our website and
                services. We are committed to protecting your privacy and ensuring the security of
                your personal information.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                By using our services, you agree to the collection and use of information in
                accordance with this policy. If you have any questions about this Privacy Policy,
                please contact us using the information provided at the end of this document.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Information We Collect</h2>
            <p className="text-xl text-neutral-600">
              We collect various types of information to provide you with the best possible service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataCollection.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{category.category}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Examples:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-start space-x-2">
                        <span className="text-accent-success">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Purpose:</h4>
                  <p className="text-sm text-neutral-600">{category.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Uses */}
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
              How We Use Your Information
            </h2>
            <p className="text-xl text-neutral-600">
              Your information helps us provide better services and improve your experience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataUses.map((use, index) => (
                <motion.div
                  key={use}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl p-4"
                >
                  <span className="text-accent-success text-xl">✓</span>
                  <span className="text-neutral-700">{use}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Information Sharing</h2>
            <p className="text-xl text-neutral-600">
              We may share your information with trusted partners for specific purposes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataSharing.map((party, index) => (
              <motion.div
                key={party.party}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{party.party}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Purpose:</h4>
                  <p className="text-sm text-neutral-600">{party.purpose}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Data Shared:</h4>
                  <p className="text-sm text-neutral-600">{party.data}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Your Rights and Choices</h2>
            <p className="text-xl text-neutral-600">
              You have control over your personal information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{right.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{right.right}</h3>
                <p className="text-sm text-neutral-600">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Data Security</h2>
            <p className="text-xl text-neutral-600">
              We implement comprehensive security measures to protect your information
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-lg"
                >
                  <span className="text-accent-success text-xl">🔒</span>
                  <span className="text-neutral-700">{measure}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Contact Us</h2>
            <p className="text-xl text-neutral-600 mb-8">
              If you have questions about this Privacy Policy or our data practices, please contact
              us:
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">Email</h3>
                  <p className="text-neutral-600">privacy@lasvegashomeexpert.com</p>
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
      <section className="py-16 bg-gradient-to-br from-accent-success/10 to-accent-success/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Policy Updates</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or for other operational, legal, or regulatory reasons. We will notify you
                of any material changes by posting the new Privacy Policy on this page and updating
                the "Last Updated" date.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                We encourage you to review this Privacy Policy periodically to stay informed about
                how we protect your information. Your continued use of our services after any
                changes to this Privacy Policy constitutes acceptance of those changes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
