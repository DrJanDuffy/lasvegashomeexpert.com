import type { FAQItem } from '@/components/sections/FAQSection';

// Page-specific FAQs for "Las Vegas Home Expert" and related keywords
export const homePageFAQs: FAQItem[] = [
  {
    question: 'Who is the Las Vegas home expert?',
    answer:
      'Dr. Jan Duffy is the Las Vegas home expert, a REALTOR® specializing in luxury real estate since 2013. With over 500 successful transactions in premium neighborhoods like Red Rock Country Club, Summerlin, and MacDonald Highlands, Dr. Duffy is recognized as one of the top luxury real estate agents in Las Vegas.',
  },
  {
    question: 'What makes you a Las Vegas home expert?',
    answer:
      'As a Las Vegas home expert, I bring 10+ years of specialized experience in luxury real estate, a psychology background that helps with complex transactions, and extensive knowledge of the Las Vegas Valley market. I specialize in divorce real estate, veteran services, and high-end properties, making me uniquely qualified to handle any real estate need in Las Vegas.',
  },
  {
    question: 'Do you serve all areas of Las Vegas?',
    answer:
      'Yes, as a Las Vegas home expert, I serve the entire Las Vegas Valley including Summerlin, Henderson, Red Rock Country Club, The Ridges, Tournament Hills, Southern Highlands, MacDonald Highlands, Anthem, and more. Whether you\'re buying, selling, or investing, I have expertise in all major Las Vegas neighborhoods.',
  },
  {
    question: 'How do I contact the Las Vegas home expert?',
    answer:
      'You can contact Dr. Jan Duffy, Las Vegas home expert, by calling (702) 222-1964, emailing DrJanSells@LasVegasHomeExpert.com, or visiting our office at 1700 S Pavilion Center Drive, Suite 140, Las Vegas, NV 89135. I\'m available for consultations, property tours, and real estate advice.',
  },
  {
    question: 'What services does the Las Vegas home expert provide?',
    answer:
      'As your Las Vegas home expert, I provide comprehensive real estate services including luxury home buying and selling, property valuation, market analysis, home staging services, divorce real estate assistance, veteran real estate services, investment property guidance, and relocation services throughout the Las Vegas area.',
  },
];

export const buyingPageFAQs: FAQItem[] = [
  {
    question: 'Why should I work with a Las Vegas home expert when buying?',
    answer:
      'Working with a Las Vegas home expert like Dr. Jan Duffy ensures you have access to off-market properties, insider market knowledge, expert negotiation skills, and guidance through the entire buying process. As a buyer, you benefit from my extensive network, market expertise, and proven track record of successful transactions in Las Vegas luxury homes.',
  },
  {
    question: 'What areas do you recommend for buying luxury homes in Las Vegas?',
    answer:
      'Top areas for luxury home buying in Las Vegas include Red Rock Country Club (mountain views, golf), The Ridges Summerlin (highest elevation, exclusive), Tournament Hills (golf community), Southern Highlands (elevated living), MacDonald Highlands (newer construction), and Summerlin (master-planned). As a Las Vegas home expert, I can guide you to the perfect neighborhood based on your lifestyle and investment goals.',
  },
  {
    question: 'How long does it take to buy a luxury home in Las Vegas?',
    answer:
      'The typical luxury home buying process in Las Vegas takes 3-6 months: property search (1-2 months), offer and negotiation (2-4 weeks), inspection and due diligence (2-3 weeks), and closing (2-4 weeks). As your Las Vegas home expert, I work efficiently to streamline this process while ensuring you find the perfect property.',
  },
];

export const sellingPageFAQs: FAQItem[] = [
  {
    question: 'How does a Las Vegas home expert help me sell my property?',
    answer:
      'As your Las Vegas home expert, I provide professional staging services, high-quality marketing, pricing strategy based on current market data, access to qualified buyers, expert negotiation, and guidance through every step of the selling process. My goal is to maximize your sale price while minimizing time on the market.',
  },
  {
    question: 'What is the best time to sell a luxury home in Las Vegas?',
    answer:
      'The best times to sell a luxury home in Las Vegas are spring (March-May) and fall (September-November) when weather is pleasant and buyer activity is high. As a Las Vegas home expert, I analyze current market conditions to recommend the optimal listing time for your specific property and neighborhood.',
  },
  {
    question: 'How do you price luxury homes in Las Vegas?',
    answer:
      'Pricing luxury homes requires analyzing comparable sales, current market trends, property condition, location factors, and unique features. As a Las Vegas home expert, I conduct thorough market analysis to set a competitive price that attracts serious buyers while maximizing your return on investment.',
  },
];

export const neighborhoodFAQs: FAQItem[] = [
  {
    question: 'What makes you the Las Vegas home expert for neighborhoods?',
    answer:
      'With deep knowledge of Las Vegas neighborhoods including Summerlin, Red Rock Country Club, The Ridges, Tournament Hills, Southern Highlands, Henderson, and more, I understand market trends, property values, community amenities, and lifestyle factors unique to each area. This expertise helps clients make informed decisions about where to buy or sell.',
  },
  {
    question: 'Which Las Vegas neighborhoods have the best luxury homes?',
    answer:
      'Top luxury neighborhoods in Las Vegas include Red Rock Country Club (golf, mountain views), The Ridges Summerlin (highest elevation, exclusive estates), Tournament Hills (premier golf community), Southern Highlands (elevated luxury), MacDonald Highlands (newer luxury construction), and custom estates throughout Summerlin. As a Las Vegas home expert, I can show you properties in all these premier locations.',
  },
];

export const serviceFAQs: FAQItem[] = [
  {
    question: 'What makes you different from other Las Vegas real estate agents?',
    answer:
      'As a Las Vegas home expert, I combine luxury real estate expertise with a psychology background, specializing in complex transactions like divorce real estate and veteran services. With 500+ successful transactions, I provide personalized service, extensive market knowledge, and a proven track record that sets me apart from other agents.',
  },
  {
    question: 'Do you work with luxury home buyers and sellers?',
    answer:
      'Yes, as a Las Vegas home expert, I specialize in luxury real estate transactions for both buyers and sellers. I work with properties ranging from $1 million to $10+ million in Las Vegas\' most prestigious neighborhoods, providing the expertise and service level that luxury clients expect.',
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: 'What areas does the Las Vegas home expert serve?',
    answer:
      'I serve the entire Las Vegas Valley including Summerlin, Henderson, Red Rock Country Club, The Ridges, Tournament Hills, Southern Highlands, MacDonald Highlands, Anthem, Green Valley, Mountains Edge, and all surrounding areas. As your Las Vegas home expert, I have knowledge of every major neighborhood and can assist with buying, selling, or investing throughout the region.',
  },
  {
    question: 'How experienced is the Las Vegas home expert?',
    answer:
      'Dr. Jan Duffy has been a Las Vegas home expert since 2013, with over 10 years of experience and 500+ successful luxury real estate transactions. I specialize in luxury properties, divorce real estate, and veteran services, making me one of the most experienced and qualified real estate professionals in Las Vegas.',
  },
  {
    question: 'Is the Las Vegas home expert licensed and certified?',
    answer:
      'Yes, Dr. Jan Duffy is a licensed REALTOR® in Nevada with professional certifications and a proven track record. As your Las Vegas home expert, I maintain the highest standards of professionalism, ethics, and expertise in all real estate transactions.',
  },
];

// Helper function to get FAQs by page type
export const getFAQsForPage = (pageType: string): FAQItem[] => {
  switch (pageType) {
    case 'home':
      return homePageFAQs;
    case 'buying':
    case 'buying-guide':
      return [...buyingPageFAQs, ...generalFAQs];
    case 'selling':
    case 'selling-guide':
      return [...sellingPageFAQs, ...generalFAQs];
    case 'neighborhood':
    case 'neighborhoods':
      return [...neighborhoodFAQs, ...generalFAQs];
    case 'service':
    case 'services':
      return [...serviceFAQs, ...generalFAQs];
    default:
      return [...homePageFAQs, ...generalFAQs];
  }
};

