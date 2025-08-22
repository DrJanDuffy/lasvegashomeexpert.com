export interface FAQItem {
  question: string;
  answer: string;
  category: 'buying' | 'selling' | 'neighborhoods' | 'general';
}

export const faqData: FAQItem[] = [
  // Buying FAQs
  {
    question: 'What should I look for when buying a luxury home in Las Vegas?',
    answer:
      'When buying a luxury home in Las Vegas, focus on location (premium neighborhoods like Red Rock Country Club or The Ridges), quality of construction, amenities, privacy, and potential for appreciation. Consider factors like HOA fees, property taxes, and maintenance costs.',
    category: 'buying',
  },
  {
    question: 'How much should I budget for a luxury home in Las Vegas?',
    answer:
      'Luxury homes in Las Vegas typically range from $1 million to $10+ million. Budget for the purchase price plus 2-5% in closing costs, ongoing maintenance (1-2% of home value annually), property taxes, and insurance. Consider working with a luxury real estate specialist.',
    category: 'buying',
  },
  {
    question: "What's the typical timeline for buying a luxury home?",
    answer:
      'The luxury home buying process typically takes 3-6 months from start to closing. This includes property search (1-2 months), offer and negotiation (2-4 weeks), inspection and due diligence (2-3 weeks), and closing (2-4 weeks). Cash buyers may close faster.',
    category: 'buying',
  },
  {
    question: 'Do I need a luxury real estate agent?',
    answer:
      'Yes, working with a luxury real estate specialist is highly recommended. They have access to off-market properties, understand the unique needs of luxury buyers, can negotiate effectively, and provide valuable market insights and connections.',
    category: 'buying',
  },

  // Selling FAQs
  {
    question: 'How do I prepare my luxury home for sale?',
    answer:
      'Prepare your luxury home by decluttering, deep cleaning, making necessary repairs, staging with high-end furniture, professional photography, and ensuring all systems are in excellent condition. Consider hiring a luxury home stager for maximum impact.',
    category: 'selling',
  },
  {
    question: "What's the best time to sell a luxury home in Las Vegas?",
    answer:
      'The best time to sell a luxury home in Las Vegas is typically spring (March-May) and fall (September-November) when the weather is pleasant and buyers are active. Avoid the extreme summer heat and holiday seasons when buyer activity slows.',
    category: 'selling',
  },
  {
    question: 'How long do luxury homes typically stay on the market?',
    answer:
      'Luxury homes in Las Vegas typically stay on the market for 60-180 days, depending on price, location, and market conditions. Well-priced homes in desirable neighborhoods may sell faster, while overpriced properties can take much longer.',
    category: 'selling',
  },
  {
    question: 'Should I price my luxury home competitively?',
    answer:
      'Yes, pricing competitively is crucial for luxury homes. Overpricing can lead to extended market time and lower final sale prices. Work with your agent to analyze comparable sales and set a strategic price that attracts serious buyers while maximizing value.',
    category: 'selling',
  },

  // Neighborhood FAQs
  {
    question: 'What makes Red Rock Country Club special?',
    answer:
      'Red Rock Country Club is known for its stunning mountain views, world-class golf course, luxury amenities, privacy, and exclusive community feel. It offers large lots, custom homes, and proximity to Red Rock Canyon while maintaining easy access to the Strip.',
    category: 'neighborhoods',
  },
  {
    question: 'Why choose Summerlin for luxury living?',
    answer:
      "Summerlin offers master-planned community design, excellent schools, shopping and dining options, parks and trails, safety, and a family-friendly atmosphere. It's consistently ranked as one of the best places to live in Nevada with strong property values.",
    category: 'neighborhoods',
  },
  {
    question: 'What are the benefits of living in The Ridges?',
    answer:
      "The Ridges provides the highest elevation in Las Vegas, offering cooler temperatures, spectacular views, privacy, luxury amenities, and an exclusive atmosphere. It's home to some of the most prestigious properties in the region with strong appreciation potential.",
    category: 'neighborhoods',
  },
  {
    question: 'Is Henderson a good area for luxury homes?',
    answer:
      'Yes, Henderson offers excellent luxury home options with newer construction, master-planned communities, good schools, lower crime rates, and proximity to the airport. Areas like MacDonald Highlands and Anthem provide luxury living with great value.',
    category: 'neighborhoods',
  },

  // General FAQs
  {
    question: 'What are the property taxes like in Las Vegas?',
    answer:
      'Nevada has some of the lowest property tax rates in the country, typically around 0.6-0.8% of assessed value. For a $1 million home, you might pay $6,000-8,000 annually. Property taxes are capped at 3% annual increase for primary residences.',
    category: 'general',
  },
  {
    question: 'How do I find off-market luxury properties?',
    answer:
      'Off-market luxury properties are typically found through networking with luxury real estate agents, attending exclusive events, joining private clubs, and building relationships in the luxury real estate community. These properties often offer the best opportunities.',
    category: 'general',
  },
  {
    question: 'What financing options are available for luxury homes?',
    answer:
      'Luxury home financing options include jumbo loans, portfolio loans from private banks, cash purchases, and seller financing. Requirements are often stricter with higher down payments (20-30%) and excellent credit scores (720+). Consider working with a luxury mortgage specialist.',
    category: 'general',
  },
  {
    question: "How do I verify a luxury real estate agent's credentials?",
    answer:
      'Verify credentials by checking their license status with the Nevada Real Estate Division, reviewing their track record with luxury properties, checking client testimonials, verifying professional designations (CLHMS, CRS), and ensuring they have experience in your target price range and neighborhoods.',
    category: 'general',
  },
];

export const getFAQsByCategory = (category: FAQItem['category']): FAQItem[] => {
  return faqData.filter((faq) => faq.category === category);
};

export const getRandomFAQs = (count: number): FAQItem[] => {
  const shuffled = [...faqData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
