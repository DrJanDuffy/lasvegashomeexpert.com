'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function PainPointSection() {
  const painPoints = [
    {
      icon: '🏠',
      title: 'Overwhelming Choices',
      description: 'Too many properties to choose from without proper guidance',
      impact: 'Wastes time and leads to decision paralysis',
    },
    {
      icon: '💰',
      title: 'Hidden Costs',
      description: "Surprise fees and expenses that weren't disclosed upfront",
      impact: 'Blows your budget and creates financial stress',
    },
    {
      icon: '⏰',
      title: 'Slow Process',
      description: 'Endless paperwork and delays in closing',
      impact: 'Misses opportunities and increases anxiety',
    },
    {
      icon: '📊',
      title: 'Unreliable Data',
      description: 'Outdated or inaccurate property information',
      impact: 'Makes informed decisions impossible',
    },
  ];

  const handlePainPointClick = (painPoint: string) => {
    trackEvent({
      event: 'pain_point_click',
      category: 'engagement',
      action: 'pain_point_click',
      label: painPoint,
      customDimensions: {
        cd1: 'buyer',
        cd2: 'pain_points',
        cd3: '2',
        cd4: '50',
      },
    });
  };

  return (
    <section id="pain-points" className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Tired of These Real Estate Headaches?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We understand the frustrations that come with buying or selling a home. Let us show you
            how we solve these common problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((painPoint, index) => (
            <motion.div
              key={painPoint.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => handlePainPointClick(painPoint.title)}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {painPoint.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">{painPoint.title}</h3>
              <p className="text-neutral-600 mb-3">{painPoint.description}</p>
              <div className="text-sm text-accent-error font-medium">{painPoint.impact}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Sound Familiar?</h3>
            <p className="text-lg text-neutral-600 mb-6">
              You're not alone. These are the exact frustrations that drove us to create a better
              real estate experience. Let us show you the difference.
            </p>
            <button
              onClick={() => handlePainPointClick('learn_more')}
              className="btn-primary text-lg px-8 py-4"
            >
              See How We Solve These Problems
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
