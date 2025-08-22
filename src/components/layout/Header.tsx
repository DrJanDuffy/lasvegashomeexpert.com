'use client';

import { trackEvent } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBuyingDropdownOpen, setIsBuyingDropdownOpen] = useState(false);
  const [isSellingDropdownOpen, setIsSellingDropdownOpen] = useState(false);
  const [isNeighborhoodsDropdownOpen, setIsNeighborhoodsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

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
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-primary-900"
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
                className="text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-semibold flex items-center space-x-1"
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
                  <Link
                    href="/buying-guide-las-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('buying_guide')}
                  >
                    Buying Guide
                  </Link>
                  <Link
                    href="/first-time-home-buyer-las-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('first_time_buyer')}
                  >
                    First-Time Home Buyer
                  </Link>
                </div>
              </div>
            </div>

            {/* Selling Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-semibold flex items-center space-x-1"
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
                  <Link
                    href="/selling-guide-las-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('selling_guide')}
                  >
                    Selling Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Neighborhoods Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-semibold flex items-center space-x-1"
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
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/neighborhoods/red-rock-country-club"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('red_rock_country_club')}
                  >
                    Red Rock Country Club
                  </Link>
                  <Link
                    href="/neighborhoods/the-ridges-summerlin"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('the_ridges_summerlin')}
                  >
                    The Ridges Summerlin
                  </Link>
                  <Link
                    href="/neighborhoods/tournament-hills"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('tournament_hills')}
                  >
                    Tournament Hills
                  </Link>
                  <Link
                    href="/neighborhoods/southern-highlands"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('southern_highlands')}
                  >
                    Southern Highlands
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
                  <Link
                    href="/neighborhoods/green-valley"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('green_valley')}
                  >
                    Green Valley
                  </Link>
                  <Link
                    href="/neighborhoods/anthem"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('anthem')}
                  >
                    Anthem
                  </Link>
                  <Link
                    href="/neighborhoods/sun-city-communities"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('sun_city_communities')}
                  >
                    Sun City Communities
                  </Link>
                  <Link
                    href="/neighborhoods/del-webb-communities"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('del_webb_communities')}
                  >
                    Del Webb Communities
                  </Link>
                  <Link
                    href="/neighborhoods/downtown-las-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('downtown_las_vegas')}
                  >
                    Downtown Las Vegas
                  </Link>
                  <Link
                    href="/neighborhoods/mountains-edge"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('mountains_edge')}
                  >
                    Mountains Edge
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-semibold flex items-center space-x-1"
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
              >
                <span>Resources</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Toggle resources menu</title>
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
                    href="/las-vegas-luxury-home-market-report"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('market_report')}
                  >
                    Market Report
                  </Link>
                  <Link
                    href="/investment-properties-las-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('investment_properties')}
                  >
                    Investment Properties
                  </Link>
                  <Link
                    href="/relocation-specialist-las-vegas"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('relocation')}
                  >
                    Relocation Services
                  </Link>
                  <Link
                    href="/sitemap"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => handleNavClick('sitemap')}
                  >
                    Site Map
                  </Link>
                </div>
              </div>
            </div>

            {/* About */}
            <Link
              href="/about-dr-jan-duffy"
              className="text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-semibold"
              onClick={() => handleNavClick('about')}
            >
              About
            </Link>

            {/* Reviews */}
            <Link
              href="/best-realtor-las-vegas-reviews"
              className="text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-semibold"
              onClick={() => handleNavClick('reviews')}
            >
              Reviews
            </Link>

            {/* Contact */}
            <Link href="/contact" className="btn-primary" onClick={() => handleNavClick('contact')}>
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
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
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <nav className="px-4 py-6 space-y-4">
              {/* Buying Section */}
              <div className="space-y-2">
                <h3 className="font-semibold text-primary-900 text-lg">Buying</h3>
                <div className="ml-4 space-y-2">
                  <Link
                    href="/luxury-homes-for-sale-las-vegas"
                    className="block text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-medium"
                    onClick={() => {
                      handleNavClick('luxury_homes');
                      setIsMenuOpen(false);
                    }}
                  >
                    Luxury Homes for Sale
                  </Link>
                  <Link
                    href="/modern-homes-las-vegas-expert"
                    className="block text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-medium"
                    onClick={() => {
                      handleNavClick('modern_homes');
                      setIsMenuOpen(false);
                    }}
                  >
                    Modern Homes Expert
                  </Link>
                  <Link
                    href="/services/luxury-home-buyer-agent"
                    className="block text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-medium"
                    onClick={() => {
                      handleNavClick('buyer_agent');
                      setIsMenuOpen(false);
                    }}
                  >
                    Buyer Agent Services
                  </Link>
                  <Link
                    href="/buying-guide-las-vegas"
                    className="block text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-medium"
                    onClick={() => {
                      handleNavClick('buying_guide');
                      setIsMenuOpen(false);
                    }}
                  >
                    Buying Guide
                  </Link>
                  <Link
                    href="/first-time-home-buyer-las-vegas"
                    className="block text-neutral-800 hover:text-primary-600 transition-colors duration-200 font-medium"
                    onClick={() => {
                      handleNavClick('first_time_buyer');
                      setIsMenuOpen(false);
                    }}
                  >
                    First-Time Home Buyer
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
                  <Link
                    href="/selling-guide-las-vegas"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('selling_guide');
                      setIsMenuOpen(false);
                    }}
                  >
                    Selling Guide
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
                      handleNavClick('red_rock_country_club');
                      setIsMenuOpen(false);
                    }}
                  >
                    Red Rock Country Club
                  </Link>
                  <Link
                    href="/neighborhoods/the-ridges-summerlin"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('the_ridges_summerlin');
                      setIsMenuOpen(false);
                    }}
                  >
                    The Ridges Summerlin
                  </Link>
                  <Link
                    href="/neighborhoods/tournament-hills"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('tournament_hills');
                      setIsMenuOpen(false);
                    }}
                  >
                    Tournament Hills
                  </Link>
                  <Link
                    href="/neighborhoods/southern-highlands"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('southern_highlands');
                      setIsMenuOpen(false);
                    }}
                  >
                    Southern Highlands
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
                  <Link
                    href="/neighborhoods/green-valley"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('green_valley');
                      setIsMenuOpen(false);
                    }}
                  >
                    Green Valley
                  </Link>
                  <Link
                    href="/neighborhoods/anthem"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('anthem');
                      setIsMenuOpen(false);
                    }}
                  >
                    Anthem
                  </Link>
                  <Link
                    href="/neighborhoods/sun-city-communities"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('sun_city_communities');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sun City Communities
                  </Link>
                  <Link
                    href="/neighborhoods/del-webb-communities"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('del_webb_communities');
                      setIsMenuOpen(false);
                    }}
                  >
                    Del Webb Communities
                  </Link>
                  <Link
                    href="/neighborhoods/downtown-las-vegas"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('downtown_las_vegas');
                      setIsMenuOpen(false);
                    }}
                  >
                    Downtown Las Vegas
                  </Link>
                  <Link
                    href="/neighborhoods/mountains-edge"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('mountains_edge');
                      setIsMenuOpen(false);
                    }}
                  >
                    Mountains Edge
                  </Link>
                </div>
              </div>

              {/* Resources Section */}
              <div className="space-y-2">
                <h3 className="font-semibold text-primary-900 text-lg">Resources</h3>
                <div className="ml-4 space-y-2">
                  <Link
                    href="/las-vegas-luxury-home-market-report"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('market_report');
                      setIsMenuOpen(false);
                    }}
                  >
                    Market Report
                  </Link>
                  <Link
                    href="/investment-properties-las-vegas"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('investment_properties');
                      setIsMenuOpen(false);
                    }}
                  >
                    Investment Properties
                  </Link>
                  <Link
                    href="/relocation-specialist-las-vegas"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('relocation');
                      setIsMenuOpen(false);
                    }}
                  >
                    Relocation Services
                  </Link>
                  <Link
                    href="/sitemap"
                    className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => {
                      handleNavClick('sitemap');
                      setIsMenuOpen(false);
                    }}
                  >
                    Site Map
                  </Link>
                </div>
              </div>

              {/* About */}
              <Link
                href="/about-dr-jan-duffy"
                className="block text-lg text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => {
                  handleNavClick('about');
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>

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
                href="/contact"
                className="btn-primary inline-block"
                onClick={() => {
                  handleNavClick('contact');
                  setIsMenuOpen(false);
                }}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
