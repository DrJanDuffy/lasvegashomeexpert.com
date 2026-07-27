'use client';

import type { FC } from 'react';

interface StoreLocatorSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  height?: string;
}

const StoreLocatorSection: FC<StoreLocatorSectionProps> = ({
  title = 'Find Our Office Location',
  subtitle = 'Visit us at our Las Vegas office location',
  className = '',
  height = '600px',
}) => {
  return (
    <section className={`store-locator-section bg-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src="https://storage.googleapis.com/maps-solutions-c814y2wfed/locator-plus/1h6g/locator-plus.html"
            width="100%"
            height={height}
            style={{ border: 0 }}
            loading="lazy"
            title="Las Vegas Home Expert Office Location"
            aria-label="Interactive map showing Las Vegas Home Expert office location"
          />
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Office Address</h3>
            <p className="text-lg text-slate-700 mb-2">
              <strong>Las Vegas Home Expert</strong>
            </p>
            <p className="text-slate-600">
              1700 S Pavilion Center Drive, Suite 140
              <br />
              Las Vegas, NV 89135
            </p>
            <p className="text-slate-600 mt-2">
              Phone:{' '}
              <a href="tel:7022221964" className="text-primary-600 hover:underline">
                (702) 222-1964
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocatorSection;
