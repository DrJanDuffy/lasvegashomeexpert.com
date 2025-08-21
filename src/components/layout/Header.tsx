'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    trackEvent({
      event: 'menu_toggle',
      category: 'navigation',
      action: 'menu_toggle',
      label: isMenuOpen ? 'close' : 'open',
      customDimensions: {
        cd1: 'user',
        cd2: 'header',
        cd3: '1',
        cd4: '0',
      },
    });
  };

  const handleNavClick = (section: string) => {
    trackEvent({
      event: 'navigation_click',
      category: 'navigation',
      action: 'nav_click',
      label: section,
      customDimensions: {
        cd1: 'user',
        cd2: 'header',
        cd3: '1',
        cd4: '0',
      },
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-primary-800"
            onClick={() => handleNavClick('logo')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">LV</span>
            </div>
            <span className="hidden sm:block">Las Vegas Home Expert</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#buying"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              onClick={() => handleNavClick('buying')}
            >
              Buying
            </Link>
            <Link
              href="#selling"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              onClick={() => handleNavClick('selling')}
            >
              Selling
            </Link>
            <Link
              href="#valuation"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              onClick={() => handleNavClick('valuation')}
            >
              Valuation
            </Link>
            <Link
              href="#neighborhoods"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              onClick={() => handleNavClick('neighborhoods')}
            >
              Neighborhoods
            </Link>
            <Link href="#contact" className="btn-primary" onClick={() => handleNavClick('contact')}>
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 mt-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 mt-1 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200 bg-white"
            >
              <nav className="px-4 py-6 space-y-4">
                <Link
                  href="#buying"
                  className="block text-lg text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => {
                    handleNavClick('buying');
                    setIsMenuOpen(false);
                  }}
                >
                  Buying
                </Link>
                <Link
                  href="#selling"
                  className="block text-lg text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => {
                    handleNavClick('selling');
                    setIsMenuOpen(false);
                  }}
                >
                  Selling
                </Link>
                <Link
                  href="#valuation"
                  className="block text-lg text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => {
                    handleNavClick('valuation');
                    setIsMenuOpen(false);
                  }}
                >
                  Valuation
                </Link>
                <Link
                  href="#neighborhoods"
                  className="block text-lg text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => {
                    handleNavClick('neighborhoods');
                    setIsMenuOpen(false);
                  }}
                >
                  Neighborhoods
                </Link>
                <Link
                  href="#contact"
                  className="btn-primary inline-block"
                  onClick={() => {
                    handleNavClick('contact');
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
