// Declare global gtag function for Google Analytics
declare global {
  function gtag(...args: any[]): void;
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// AI Search Optimization Tracking
export const initializeAISearchTracking = () => {
  // Track if page loaded from AI search
  const referrer = document.referrer;
  const aiSources = [
    'google.com/search',
    'bing.com',
    'you.com',
    'perplexity.ai',
    'claude.ai',
    'chat.openai.com',
    'bard.google.com',
    'copilot.microsoft.com',
  ];

  const isAISearch = aiSources.some((source) => referrer.includes(source));

  if (isAISearch) {
    // Track AI search visit
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'ai_search_visit', {
        page_type: 'luxury_real_estate',
        specialist: 'Dr. Jan Duffy',
        market: 'Las Vegas',
        specialization: getPageSpecialization(),
        ai_source: getAISource(referrer),
      });
    }

    // Log AI search detection
    console.log('AI Search detected from:', referrer);
  }

  // Add structured data for real-time updates
  injectStructuredData();

  // Track AI-related interactions
  trackAIInteractions();
};

// Get page specialization based on current page
const getPageSpecialization = (): string => {
  const path = window.location.pathname;

  if (path.includes('luxury-homes-summerlin')) return 'luxury_homes_summerlin';
  if (path.includes('divorce-real-estate')) return 'divorce_real_estate';
  if (path.includes('red-rock-casino')) return 'red_rock_casino_area';
  if (path.includes('about')) return 'about_dr_duffy';

  return 'general';
};

// Get AI source from referrer
const getAISource = (referrer: string): string => {
  if (referrer.includes('google.com')) return 'google';
  if (referrer.includes('bing.com')) return 'bing';
  if (referrer.includes('you.com')) return 'you';
  if (referrer.includes('perplexity.ai')) return 'perplexity';
  if (referrer.includes('claude.ai')) return 'claude';
  if (referrer.includes('chat.openai.com')) return 'chatgpt';
  if (referrer.includes('bard.google.com')) return 'bard';
  if (referrer.includes('copilot.microsoft.com')) return 'copilot';

  return 'unknown';
};

// Inject structured data for AI consumption
const injectStructuredData = () => {
  const marketData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '702-555-0123',
      url: 'https://lasvegashomeexpert.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
    areaServed: 'Las Vegas, NV',
    specialization: ['Luxury Homes', 'Divorce Real Estate', 'Veteran Services'],
    priceRange: '$500K - $5M+',
    lastUpdated: new Date().toISOString(),
    marketData: {
      redRockCountryClub: {
        medianPrice: '$2.1M',
        daysOnMarket: 65,
        inventory: '4.5 months',
      },
      macDonaldHighlands: {
        medianPrice: '$1.8M',
        daysOnMarket: 72,
        inventory: '5 months',
      },
      theRidges: {
        medianPrice: '$2.5M',
        daysOnMarket: 80,
        inventory: '5.2 months',
      },
      southernHighlands: {
        medianPrice: '$850K',
        daysOnMarket: 45,
        inventory: '3.8 months',
      },
    },
  };

  // Inject into page
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(marketData);
  document.head.appendChild(script);
};

// Track AI-related interactions
const trackAIInteractions = () => {
  // Track FAQ interactions (common AI search patterns)
  const faqElements = document.querySelectorAll('[itemprop="mainEntity"]');
  faqElements.forEach((faq, index) => {
    faq.addEventListener('click', () => {
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'ai_faq_interaction', {
          faq_index: index,
          faq_question: faq.querySelector('[itemprop="name"]')?.textContent || '',
          page_type: getPageSpecialization(),
        });
      }
    });
  });

  // Track market data interactions
  const marketDataElements = document.querySelectorAll('.market-snapshot, .ai-market-update');
  marketDataElements.forEach((element) => {
    element.addEventListener('click', () => {
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'ai_market_data_interaction', {
          page_type: getPageSpecialization(),
          interaction_type: 'market_data_view',
        });
      }
    });
  });

  // Track voice search optimization interactions
  const voiceSearchElements = document.querySelectorAll('.voice-search-ready dt');
  voiceSearchElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'ai_voice_search_interaction', {
          voice_query_index: index,
          voice_query: element.textContent || '',
          page_type: getPageSpecialization(),
        });
      }
    });
  });
};

// Enhanced AI search detection
export const detectAISearchPatterns = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isAIBot =
    userAgent.includes('bot') ||
    userAgent.includes('crawler') ||
    userAgent.includes('spider') ||
    userAgent.includes('ai');

  if (isAIBot) {
    console.log('AI Bot detected:', userAgent);

    // Inject enhanced structured data for AI bots
    injectEnhancedStructuredData();
  }
};

// Enhanced structured data for AI bots
const injectEnhancedStructuredData = () => {
  const enhancedData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    description:
      'Las Vegas luxury real estate specialist with expertise in Summerlin, Red Rock Country Club, and divorce real estate services.',
    url: 'https://lasvegashomeexpert.com',
    telephone: '702-555-0123',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Summerlin',
        description: 'Premier luxury community in Western Las Vegas',
      },
      {
        '@type': 'Place',
        name: 'Red Rock Country Club',
        description: 'Golf course luxury homes with mountain views',
      },
      {
        '@type': 'Place',
        name: 'The Ridges',
        description: 'Custom estates with panoramic city views',
      },
      {
        '@type': 'Place',
        name: 'MacDonald Highlands',
        description: 'Family-friendly luxury community with golf views',
      },
    ],
    knowsAbout: [
      'Luxury Real Estate',
      'Divorce Real Estate',
      'Veteran Homebuyer Services',
      'Red Rock Country Club',
      'The Ridges Summerlin',
      'MacDonald Highlands',
      'Southern Highlands',
    ],
    priceRange: '$500K - $5M+',
    yearsInBusiness: 10,
    foundingDate: '2013',
    award: ['Top 1% Producer', 'Luxury Home Specialist', 'Veteran Service Recognition'],
    serviceType: [
      'Luxury Home Sales',
      'Divorce Real Estate',
      'Veteran Homebuyer Assistance',
      'Investment Properties',
      'New Construction',
    ],
  };

  // Inject enhanced data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(enhancedData);
  document.head.appendChild(script);
};

// Initialize tracking when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeAISearchTracking();
    detectAISearchPatterns();
  });
}

export default {
  initializeAISearchTracking,
  detectAISearchPatterns,
};
