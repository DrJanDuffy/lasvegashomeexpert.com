'use client';

export default function LuxuryPropertiesSection() {
  return (
    <section className="luxury-properties bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Location-Specific Content Block for AI */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Las Vegas Luxury Real Estate Expert - Red Rock, Summerlin, Henderson
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Discover luxury homes from $500K-$5M+ in Red Rock Country Club, The Ridges, MacDonald
            Highlands, and Southern Highlands
          </p>
        </div>

        {/* Luxury Market Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.1M</div>
            <div className="text-slate-600">Red Rock Country Club</div>
            <div className="text-sm text-slate-500">Median Price</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">$1.8M</div>
            <div className="text-slate-600">MacDonald Highlands</div>
            <div className="text-sm text-slate-500">Median Price</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.5M</div>
            <div className="text-slate-600">The Ridges</div>
            <div className="text-sm text-slate-500">Median Price</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">65</div>
            <div className="text-slate-600">Days on Market</div>
            <div className="text-sm text-slate-500">Average</div>
          </div>
        </div>

        {/* Featured Luxury Properties */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Featured Luxury Properties
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="MF,SFR,OTHER,LAL"
              price-min="500000"
              price-max="750000"
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

        {/* Recent Sales with RealScout Your-Listings Widget */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Recent Luxury Sales
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <realscout-your-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale,Sold"
              property-types=""
              price-min="500000"
            />
          </div>
        </div>

        {/* Neighborhood Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Red Rock Country Club</h4>
            <p className="text-slate-600 mb-4">Golf course luxury estates with mountain views</p>
            <div className="text-2xl font-bold text-green-600">$2.1M</div>
            <div className="text-sm text-slate-500">Median Price</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h4 className="text-xl font-semibold text-slate-800 mb-3">The Ridges</h4>
            <p className="text-slate-600 mb-4">Ultra-luxury homes with panoramic city views</p>
            <div className="text-2xl font-bold text-green-600">$2.5M</div>
            <div className="text-sm text-slate-500">Median Price</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h4 className="text-xl font-semibold text-slate-800 mb-3">MacDonald Highlands</h4>
            <p className="text-slate-600 mb-4">Henderson's premier luxury community</p>
            <div className="text-2xl font-bold text-green-600">$1.8M</div>
            <div className="text-sm text-slate-500">Median Price</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Southern Highlands</h4>
            <p className="text-slate-600 mb-4">Affordable luxury with great amenities</p>
            <div className="text-2xl font-bold text-green-600">$850K</div>
            <div className="text-sm text-slate-500">Median Price</div>
          </div>
        </div>

        {/* AI Answer Block for Common Questions */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            How much do luxury homes cost in Las Vegas?
          </h3>
          <div className="ai-answer-block max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Answer:</strong> Luxury homes in Las Vegas range from $1M-$25M+, with Red Rock
              Country Club averaging $2.1M and The Ridges averaging $2.5M as of August 2025. The
              current market shows 4.5-5.2 months of inventory, creating excellent negotiation
              opportunities for luxury properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
