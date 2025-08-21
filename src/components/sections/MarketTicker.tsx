'use client';

import { useEffect, useState } from 'react';

// Mock market data - replace with real API call
const fetchMarketFeed = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    title: 'Luxury Market Shows 15% Price Appreciation in Q3 2025',
    insight: 'Red Rock Country Club leads with $2.1M median, up from $1.8M last quarter',
    timestamp: new Date().toISOString(),
    neighborhoods: [
      { name: 'Red Rock Country Club', change: '+15%', median: '$2.1M' },
      { name: 'The Ridges', change: '+12%', median: '$2.5M' },
      { name: 'MacDonald Highlands', change: '+18%', median: '$1.8M' },
    ],
  };
};

export default function MarketTicker() {
  const [marketData, setMarketData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMarketFeed().then((data) => {
      setMarketData(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="market-ticker bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">📈 Loading Latest Market Insights...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="market-ticker bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📈</span>
            <div>
              <div className="font-semibold text-lg">Latest Market Insight:</div>
              <div className="text-blue-100">{marketData?.title}</div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-blue-200">Dr. Jan's Analysis</span>
            <div className="text-sm text-blue-100">
              {new Date(marketData?.timestamp).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Quick Neighborhood Stats */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {marketData?.neighborhoods.map((neighborhood: any) => (
            <div key={neighborhood.name} className="bg-blue-500/20 rounded-lg p-3">
              <div className="font-semibold text-blue-100">{neighborhood.name}</div>
              <div className="text-green-300 font-bold">{neighborhood.change}</div>
              <div className="text-sm text-blue-100">{neighborhood.median}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
