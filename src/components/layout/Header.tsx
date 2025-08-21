'use client';

import { trackEvent } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBuyingDropdownOpen, setIsBuyingDropdownOpen] = useState(false);
  const [isSellingDropdownOpen, setIsSellingDropdownOpen] = useState(false);
  const [isNeighborhoodsDropdownOpen, setIsNeighborhoodsDropdownOpen] = useState(false);

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
            {/* Buying Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center space-x-1"
                onClick={() => setIsBuyingDropdownOpen(!isBuyingDropdownOpen)}
              >
                <span>Buying</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Toggle buying menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/luxury-homes-for-sale-las-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('luxury_homes')}
                  >
                    Luxury Homes for Sale
                  </Link>
                  <Link
                    href="/modern-homes-las-vegas-expert"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('modern_homes')}
                  >
                    Modern Homes Expert
                  </Link>
                  <Link
                    href="/services/luxury-home-buyer-agent"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('buyer_agent')}
                  >
                    Buyer Agent Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Selling Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center space-x-1"
                onClick={() => setIsSellingDropdownOpen(!isSellingDropdownOpen)}
              >
                <span>Selling</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Toggle selling menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/services/luxury-home-selling-agent"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('selling_agent')}
                  >
                    Selling Agent Services
                  </Link>
                  <Link
                    href="/services/home-staging-services-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('staging')}
                  >
                    Home Staging Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Neighborhoods Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center space-x-1"
                onClick={() => setIsNeighborhoodsDropdownOpen(!isNeighborhoodsDropdownOpen)}
              >
                <span>Neighborhoods</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Toggle neighborhoods menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/neighborhoods/red-rock-country-club"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('red_rock')}
                  >
                    Red Rock Country Club
                  </Link>
                  <Link
                    href="/neighborhoods/the-ridges-summerlin"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('ridges')}
                  >
                    The Ridges Summerlin
                  </Link>
                  <Link
                    href="/neighborhoods/summerlin"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('summerlin')}
                  >
                    Summerlin
                  </Link>
                  <Link
                    href="/neighborhoods/henderson"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('henderson')}
                  >
                    Henderson
                  </Link>
                </div>
              </div>
            </div>

            {/* About/Reviews */}
            <Link
              href="/best-realtor-las-vegas-reviews"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              onClick={() => handleNavClick('reviews')}
            >
              Reviews
            </Link>

            {/* Contact */}
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
                {/* Buying Section */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary-900 text-lg">Buying</h3>
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/luxury-homes-for-sale-las-vegas"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('luxury_homes');
                        setIsMenuOpen(false);
                      }}
                    >
                      Luxury Homes for Sale
                    </Link>
                    <Link
                      href="/modern-homes-las-vegas-expert"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('modern_homes');
                        setIsMenuOpen(false);
                      }}
                    >
                      Modern Homes Expert
                    </Link>
                    <Link
                      href="/services/luxury-home-buyer-agent"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('buyer_agent');
                        setIsMenuOpen(false);
                      }}
                    >
                      Buyer Agent Services
                    </Link>
                  </div>
                </div>

                {/* Selling Section */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary-900 text-lg">Selling</h3>
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/services/luxury-home-selling-agent"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('selling_agent');
                        setIsMenuOpen(false);
                      }}
                    >
                      Selling Agent Services
                    </Link>
                    <Link
                      href="/services/home-staging-services-vegas"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('staging');
                        setIsMenuOpen(false);
                      }}
                    >
                      Home Staging Services
                    </Link>
                  </div>
                </div>

                {/* Neighborhoods Section */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary-900 text-lg">Neighborhoods</h3>
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/neighborhoods/red-rock-country-club"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('red_rock');
                        setIsMenuOpen(false);
                      }}
                    >
                      Red Rock Country Club
                    </Link>
                    <Link
                      href="/neighborhoods/the-ridges-summerlin"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('ridges');
                        setIsMenuOpen(false);
                      }}
                    >
                      The Ridges Summerlin
                    </Link>
                    <Link
                      href="/neighborhoods/summerlin"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('summerlin');
                        setIsMenuOpen(false);
                      }}
                    >
                      Summerlin
                    </Link>
                    <Link
                      href="/neighborhoods/henderson"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => {
                        handleNavClick('henderson');
                        setIsMenuOpen(false);
                      }}
                    >
                      Henderson
                    </Link>
                  </div>
                </div>

                {/* Reviews */}
                <Link
                  href="/best-realtor-las-vegas-reviews"
                  className="block text-lg text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => {
                    handleNavClick('reviews');
                    setIsMenuOpen(false);
                  }}
                >
                  Reviews
                </Link>

                {/* Contact */}
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
