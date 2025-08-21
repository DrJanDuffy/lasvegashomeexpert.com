'use client';

import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';
import type React from 'react';

// TypeScript declarations for RealScout web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id': string;
        },
        HTMLElement
      >;
      'realscout-your-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id': string;
          'sort-order'?: string;
          'listing-status'?: string;
          'property-types'?: string;
          'price-min'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export default function InteractiveToolSection() {
  const tools = [
    {
      name: 'Property Search',
      description: 'Advanced search with RealScout technology',
      icon: '🔍',
      status: 'active',
    },
    {
      name: 'Home Valuation',
      description: 'Get instant property value estimates',
      icon: '💰',
      status: 'active',
    },
    {
      name: 'Market Analysis',
      description: 'Comprehensive neighborhood insights',
      icon: '📊',
      status: 'coming-soon',
    },
    {
      name: 'Mortgage Calculator',
      description: 'Calculate payments and affordability',
      icon: '🏦',
      status: 'active',
    },
  ];

  const handleToolClick = (tool: string) => {
    trackEvent({
      event: 'tool_click',
      category: 'engagement',
      action: 'tool_click',
      label: tool,
      customDimensions: {
        cd1: 'buyer',
        cd2: 'interactive_tools',
        cd3: '4',
        cd4: '100',
      },
    });
  };

  return (
    <section id="interactive-tools" className="section-padding bg-primary-50">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Powerful Tools at Your Fingertips
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Experience the future of real estate with our cutting-edge interactive tools powered by
            the latest technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white"
              onClick={() => handleToolClick(tool.name)}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">{tool.name}</h3>
              <p className="text-neutral-600 mb-3">{tool.description}</p>
              <div
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  tool.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {tool.status === 'active' ? '✓ Active' : '🕒 Coming Soon'}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RealScout Advanced Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Try Our Property Search Tool
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              Experience the power of our RealScout-powered search engine. Find properties that
              match your exact criteria.
            </p>

            {/* RealScout Advanced Search Widget */}
            <div className="widget-container p-6 mb-6">
              <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
            </div>

            <button
              type="button"
              onClick={() => handleToolClick('demo_search')}
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Launch Full Search Tool
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
