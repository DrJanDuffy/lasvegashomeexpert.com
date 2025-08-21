'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function SolutionSection() {
  const solutions = [
    {
      icon: '🎯',
      title: 'Smart Property Matching',
      description: 'AI-powered algorithms that learn your preferences and find perfect matches',
      benefit: 'Save hours of searching with personalized recommendations',
    },
    {
      icon: '💡',
      title: 'Transparent Pricing',
      description: 'Complete cost breakdown with no hidden fees or surprises',
      benefit: "Know exactly what you'll pay from day one",
    },
    {
      icon: '⚡',
      title: 'Streamlined Process',
      description: 'Digital-first approach that reduces paperwork and speeds up closing',
      benefit: 'Close faster with less stress and fewer delays',
    },
    {
      icon: '📊',
      title: 'Real-Time Data',
      description: 'Live market information and property updates as they happen',
      benefit: 'Make informed decisions with current, accurate data',
    },
  ];

  const handleSolutionClick = (solution: string) => {
    trackEvent({
      event: 'solution_click',
      category: 'engagement',
      action: 'solution_click',
      label: solution,
      customDimensions: {
        cd1: 'buyer',
        cd2: 'solutions',
        cd3: '3',
        cd4: '75',
      },
    });
  };

  return (
    <section id="solutions" className="section-padding bg-primary-50">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Here's How We Solve Those Problems
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We've built a comprehensive solution that addresses every pain point in the traditional
            real estate process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white"
              onClick={() => handleSolutionClick(solution.title)}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">{solution.title}</h3>
              <p className="text-neutral-600 mb-3">{solution.description}</p>
              <div className="text-sm text-accent-success font-medium">{solution.benefit}</div>
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
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              Join hundreds of satisfied clients who've transformed their real estate experience
              with our innovative approach.
            </p>
            <button
              onClick={() => handleSolutionClick('get_started')}
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Start Your Journey Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
