'use client';

import FAQSection from '@/components/sections/FAQSection';
import { getFAQsForPage } from '@/data/page-specific-faqs';
import { trackEvent } from '@/utils';

export default function ModernHomesExpertPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Modern Homes Las Vegas Expert
          </h1>

          {/* Modern Home Stats */}
          <div className="modern-home-stats bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$1.8M</div>
                <div className="text-white text-lg">Avg Modern Home</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">45</div>
                <div className="text-white text-lg">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">3.2</div>
                <div className="text-white text-lg">Months Inventory</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">22%</div>
                <div className="text-white text-lg">Price Appreciation</div>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge modern homes in Las Vegas with Dr. Jan Duffy. From smart homes to
            contemporary architecture, find your perfect modern luxury residence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'modern_homes_consultation',
                  customDimensions: {
                    cd1: 'modern_buyer',
                    cd2: 'modern_homes_page',
                    cd3: 'consultation',
                    cd4: '2500',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4 inline-block"
            >
              Schedule Modern Home Tour
            </a>
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'modern_homes_search',
                  customDimensions: {
                    cd1: 'modern_buyer',
                    cd2: 'modern_homes_page',
                    cd3: 'search',
                    cd4: '2500',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              View Modern Properties
            </a>
          </div>
        </div>
      </section>

      {/* Featured Modern Properties */}
      <section className="featured-modern-properties bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Modern Luxury Homes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Contemporary architecture meets luxury living in Las Vegas's most innovative
              communities
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 shadow-lg">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="800000"
              max-results="12"
              show-filters="true"
              show-sort="true"
              show-pagination="true"
              show-map="false"
              show-photos="true"
              show-price="true"
            />
          </div>
        </div>
      </section>

      {/* Modern Home Features Section */}
      <section className="modern-features bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Modern Home Features & Technology
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Contemporary Architecture</h3>
              <ul className="text-slate-600 space-y-2 text-left">
                <li>• Clean lines & open floor plans</li>
                <li>• Floor-to-ceiling windows</li>
                <li>• Minimalist design aesthetic</li>
                <li>• Sustainable materials</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Smart Home Technology</h3>
              <ul className="text-slate-600 space-y-2 text-left">
                <li>• Home automation systems</li>
                <li>• Voice-controlled features</li>
                <li>• Security & surveillance</li>
                <li>• Energy management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Sustainable Living</h3>
              <ul className="text-slate-600 space-y-2 text-left">
                <li>• Solar power systems</li>
                <li>• Energy-efficient appliances</li>
                <li>• Smart thermostats</li>
                <li>• Water conservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Luxury Amenities</h3>
              <ul className="text-slate-600 space-y-2 text-left">
                <li>• Chef's kitchens</li>
                <li>• Spa-like bathrooms</li>
                <li>• Home theaters</li>
                <li>• Wine cellars</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Neighborhoods Section */}
      <section className="modern-neighborhoods bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Modern Home Neighborhoods
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Summerlin West */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌅</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Summerlin West</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.9M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Contemporary luxury estates</li>
                <li>• Mountain & city views</li>
                <li>• Smart home communities</li>
                <li>• 20% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'neighborhood_click',
                    category: 'exploration',
                    action: 'neighborhood_view',
                    label: 'summerlin_west',
                    customDimensions: {
                      cd1: 'modern_buyer',
                      cd2: 'modern_homes_page',
                      cd3: 'summerlin_west',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Summerlin West Properties
              </button>
            </div>

            {/* The Ridges */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">The Ridges Summerlin</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.8M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Ultra-modern mountain homes</li>
                <li>• Panoramic vistas</li>
                <li>• Architectural masterpieces</li>
                <li>• 25% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'neighborhood_click',
                    category: 'exploration',
                    action: 'neighborhood_view',
                    label: 'the_ridges',
                    customDimensions: {
                      cd1: 'modern_buyer',
                      cd2: 'modern_homes_page',
                      cd3: 'the_ridges',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View The Ridges Properties
              </button>
            </div>

            {/* MacDonald Highlands */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">MacDonald Highlands</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.1M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Modern luxury estates</li>
                <li>• Smart home integration</li>
                <li>• Resort-style amenities</li>
                <li>• 18% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'neighborhood_click',
                    category: 'exploration',
                    action: 'neighborhood_view',
                    label: 'macdonald_highlands',
                    customDimensions: {
                      cd1: 'modern_buyer',
                      cd2: 'modern_homes_page',
                      cd3: 'macdonald_highlands',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View MacDonald Properties
              </button>
            </div>

            {/* Southern Highlands */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏌️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Southern Highlands</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$950K</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Contemporary family homes</li>
                <li>• Golf course access</li>
                <li>• Modern amenities</li>
                <li>• 12% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'neighborhood_click',
                    category: 'exploration',
                    action: 'neighborhood_view',
                    label: 'southern_highlands',
                    customDimensions: {
                      cd1: 'modern_buyer',
                      cd2: 'modern_homes_page',
                      cd3: 'southern_highlands',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Southern Highlands Properties
              </button>
            </div>

            {/* Tournament Hills */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Tournament Hills</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.4M</div>
                <div className="text-sm text-slate-600">Median Price</div>
              </div>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Modern townhomes</li>
                <li>• Championship golf</li>
                <li>• Resort-style living</li>
                <li>• 15% price appreciation YoY</li>
              </ul>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'neighborhood_click',
                    category: 'exploration',
                    action: 'neighborhood_view',
                    label: 'tournament_hills',
                    customDimensions: {
                      cd1: 'modern_buyer',
                      cd2: 'modern_homes_page',
                      cd3: 'tournament_hills',
                      cd4: '1000',
                    },
                  })
                }
                className="w-full btn-accent-buyer py-3"
              >
                View Tournament Hills Properties
              </button>
            </div>

            {/* Custom Modern Search */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Custom Modern Search</h3>
                <div className="text-lg text-slate-600 mb-4">Find Your Perfect Modern Home</div>
              </div>
              <p className="text-slate-700 mb-6">
                Looking for specific modern features? Let Dr. Jan Duffy create a custom search for
                contemporary homes with your exact requirements.
              </p>
              <button
                type="button"
                onClick={() =>
                  trackEvent({
                    event: 'cta_click',
                    category: 'conversion',
                    action: 'cta_click',
                    label: 'custom_modern_search',
                    customDimensions: {
                      cd1: 'modern_buyer',
                      cd2: 'modern_homes_page',
                      cd3: 'custom_search',
                      cd4: '1500',
                    },
                  })
                }
                className="w-full btn-secondary py-3"
              >
                Request Custom Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Home Benefits Section */}
      <section className="modern-benefits bg-gradient-to-r from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Why Choose Modern Homes?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Lifestyle Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Open Living Spaces</h4>
                  <p className="text-slate-600">
                    Perfect for entertaining and modern family dynamics
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Natural Light</h4>
                  <p className="text-slate-600">
                    Floor-to-ceiling windows create bright, airy interiors
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Low Maintenance</h4>
                  <p className="text-slate-600">
                    Modern materials and systems reduce upkeep requirements
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Investment Benefits</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Higher Appreciation</h4>
                  <p className="text-slate-600">
                    Modern homes appreciate faster than traditional styles
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Energy Efficiency</h4>
                  <p className="text-slate-600">Lower utility costs and environmental impact</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-2">Tech Appeal</h4>
                  <p className="text-slate-600">Smart features attract tech-savvy buyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Jan's Modern Home Expertise */}
      <section className="expertise bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Dr. Jan Duffy: Modern Home Specialist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Market Knowledge</h3>
              <p className="text-slate-600">
                Deep understanding of modern home trends and buyer preferences in Las Vegas
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Builder Relationships</h3>
              <p className="text-slate-600">
                Strong connections with top modern home builders and developers
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Design Insight</h3>
              <p className="text-slate-600">
                Expert guidance on modern design elements and architectural features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Modern Dream Home?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Dr. Jan Duffy is here to guide you to the perfect modern luxury residence in Las Vegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'modern_homes_contact_phone',
                  customDimensions: {
                    cd1: 'modern_buyer',
                    cd2: 'modern_homes_page',
                    cd3: 'phone',
                    cd4: '2500',
                  },
                })
              }
              className="btn-accent-buyer text-lg px-8 py-4"
            >
              Call (702) 222-1964
            </button>
            <button
              type="button"
              onClick={() =>
                trackEvent({
                  event: 'cta_click',
                  category: 'conversion',
                  action: 'cta_click',
                  label: 'modern_homes_contact_email',
                  customDimensions: {
                    cd1: 'modern_buyer',
                    cd2: 'modern_homes_page',
                    cd3: 'email',
                    cd4: '2500',
                  },
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={getFAQsForPage('buying')}
        title="Frequently Asked Questions About Modern Homes in Las Vegas"
        subtitle="Common questions about buying modern homes, answered by your Las Vegas home expert"
      />
    </>
  );
}
