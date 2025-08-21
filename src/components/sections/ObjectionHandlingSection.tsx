'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function ObjectionHandlingSection() {
  const objections = [
    {
      concern: 'Is this really better than traditional agents?',
      answer:
        'Yes! Our technology-driven approach reduces time-to-close by 40% and increases accuracy by 95%.',
      icon: '🤔',
    },
    {
      concern: 'What if I need help outside business hours?',
      answer:
        'Our AI-powered system provides 24/7 support, and human experts are available for complex questions.',
      icon: '⏰',
    },
    {
      concern: 'How do I know the data is accurate?',
      answer:
        'We use real-time MLS feeds and multiple data sources with AI validation for 99.9% accuracy.',
      icon: '📊',
    },
    {
      concern: 'What about the personal touch?',
      answer:
        'Technology enhances, not replaces, human expertise. You get both cutting-edge tools and personal guidance.',
      icon: '🤝',
    },
  ];

  const handleObjectionClick = (objection: string) => {
    trackEvent({
      event: 'objection_click',
      category: 'engagement',
      action: 'objection_click',
      label: objection,
      customDimensions: {
        cd1: 'buyer',
        cd2: 'objection_handling',
        cd3: '5',
        cd4: '125',
      },
    });
  };

  return (
    <section id="objection-handling" className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Common Questions & Concerns
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We understand you might have questions. Here are the most common concerns and our honest
            answers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {objections.map((objection, index) => (
            <motion.div
              key={objection.concern}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => handleObjectionClick(objection.concern)}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {objection.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-800 mb-2">{objection.concern}</h3>
                  <p className="text-neutral-600">{objection.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Still Have Questions?</h3>
            <p className="text-lg text-neutral-600 mb-6">
              We're here to help! Our team of real estate experts is ready to answer any questions
              you might have about our process or services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleObjectionClick('schedule_call')}
                className="btn-accent-buyer text-lg px-8 py-4"
              >
                Schedule a Free Call
              </button>
              <button
                onClick={() => handleObjectionClick('live_chat')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Start Live Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
