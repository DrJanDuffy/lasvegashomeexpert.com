'use client';

import type { FC } from 'react';
import FAQSchema from '@/components/schema/FAQSchema';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const FAQSection: FC<FAQSectionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  className = '',
}) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <>
      {/* Structured Data for FAQPage */}
      <FAQSchema items={faqs} />

      <section
        className={`faq-section bg-white py-16 px-4 ${className}`}
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
            {subtitle && <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 itemProp="name" className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {faq.question}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;

