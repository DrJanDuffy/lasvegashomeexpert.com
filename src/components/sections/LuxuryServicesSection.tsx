'use client';

import { exclusivityLevels, luxuryServices, serviceCategories } from '@/data/luxury-services';
import { trackEvent } from '@/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LuxuryServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleServiceClick = (serviceId: string) => {
    trackEvent({
      event: 'luxury_service_click',
      category: 'luxury_services',
      action: 'service_view',
      label: serviceId,
      customDimensions: {
        cd1: 'luxury_prospect',
        cd2: 'services_section',
        cd3: '5',
        cd4: '500',
      },
    });
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    trackEvent({
      event: 'luxury_category_click',
      category: 'luxury_services',
      action: 'category_filter',
      label: categoryId,
      customDimensions: {
        cd1: 'luxury_prospect',
        cd2: 'services_section',
        cd3: '4',
        cd4: '300',
      },
    });
  };

  const filteredServices =
    selectedCategory === 'all'
      ? luxuryServices
      : luxuryServices.filter((service) => service.category === selectedCategory);

  const getExclusivityStyle = (exclusivity: string) => {
    const level = exclusivityLevels.find((l) => l.id === exclusivity);
    return level || exclusivityLevels[0];
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Luxury Services{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-blue-600">
              Redefined
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dr. Jan Duffy delivers bespoke luxury real estate services designed exclusively for
            discerning clients. From concierge acquisition to portfolio management, experience the
            pinnacle of luxury service.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            type="button"
            onClick={() => handleCategoryClick('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryClick(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const exclusivityStyle = getExclusivityStyle(service.exclusivity);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 overflow-hidden">
                  {/* Service Header */}
                  <div className="p-8 border-b border-slate-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${exclusivityStyle.bgColor} ${exclusivityStyle.color} ${exclusivityStyle.borderColor} border`}
                      >
                        {exclusivityStyle.name}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">{service.subtitle}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Price Range:</span>
                      <span className="font-semibold text-slate-900">{service.priceRange}</span>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="p-8">
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Target Market */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Target Market</h4>
                      <p className="text-sm text-slate-600">{service.targetMarket}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start text-sm text-slate-600">
                            <span className="text-amber-500 mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Neighborhoods */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Specialty Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.neighborhoods.slice(0, 3).map((neighborhood) => (
                          <span
                            key={neighborhood}
                            className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                          >
                            {neighborhood}
                          </span>
                        ))}
                        {service.neighborhoods.length > 3 && (
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                            +{service.neighborhoods.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            Ready to experience luxury real estate service unlike any other?
          </p>
          <button
            type="button"
            onClick={() => handleServiceClick('consultation')}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Schedule Your Luxury Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
