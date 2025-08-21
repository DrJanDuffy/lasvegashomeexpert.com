'use client';

import Link from 'next/link';
import { trackEvent } from '@/utils';

export default function Footer() {
  const handleFooterClick = (section: string) => {
    trackEvent({
      event: 'footer_click',
      category: 'navigation',
      action: 'footer_click',
      label: section,
      customDimensions: {
        cd1: 'user',
        cd2: 'footer',
        cd3: '1',
        cd4: '0',
      },
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">LV</span>
              </div>
              <span>Las Vegas Home Expert</span>
            </div>
            <p className="text-primary-200 mb-4 max-w-md">
              Your trusted partner in Las Vegas real estate. We combine cutting-edge technology with
              expert guidance to make your real estate journey seamless.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                onClick={() => handleFooterClick('facebook')}
                className="text-primary-200 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                onClick={() => handleFooterClick('twitter')}
                className="text-primary-200 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                onClick={() => handleFooterClick('instagram')}
                className="text-primary-200 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                onClick={() => handleFooterClick('linkedin')}
                className="text-primary-200 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#buying"
                  onClick={() => handleFooterClick('buying')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  Buying
                </Link>
              </li>
              <li>
                <Link
                  href="#selling"
                  onClick={() => handleFooterClick('selling')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  Selling
                </Link>
              </li>
              <li>
                <Link
                  href="#valuation"
                  onClick={() => handleFooterClick('valuation')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  Valuation
                </Link>
              </li>
              <li>
                <Link
                  href="#neighborhoods"
                  onClick={() => handleFooterClick('neighborhoods')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  Neighborhoods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-200">
              <li>📍 Las Vegas, NV</li>
              <li>📞 (702) 555-0123</li>
              <li>✉️ hello@lasvegashomeexpert.com</li>
              <li>🕒 24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-200 text-sm">
              © {currentYear} Las Vegas Home Expert. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                onClick={() => handleFooterClick('privacy')}
                className="text-primary-200 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                onClick={() => handleFooterClick('terms')}
                className="text-primary-200 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                onClick={() => handleFooterClick('sitemap')}
                className="text-primary-200 hover:text-white text-sm transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
