import type { FC } from 'react';

/**
 * FAQPage Schema Component - 2026 Best Practices
 *
 * Research shows FAQPage schema improves AI citation rates by 30-67%
 * Optimized for Grok, ChatGPT, Claude, Perplexity, and Google AI Overviews
 *
 * Best Practices:
 * - Keep answers between 40-80 words (max 120)
 * - Use clear, conversational questions
 * - Provide direct, substantive answers
 * - Structure for "snippet extraction" by AI
 *
 * @see https://www.stackmatix.com/blog/structured-data-ai-search
 * @see https://www.frase.io/blog/faq-schema-ai-search-geo-aeo
 */

export interface FAQItem {
  question: string;
  answer: string;
  /** Optional: Answer should be 40-80 words. This field auto-validates. */
  _wordCount?: number;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
  /** Optional: Page URL for better context */
  pageUrl?: string;
}

/**
 * Validates and warns about FAQ answer length
 * Optimal: 40-80 words
 * Maximum: 120 words (longer answers are truncated by AI)
 */
function validateAnswerLength(answer: string, question: string): number {
  const wordCount = answer.trim().split(/\s+/).length;

  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    if (wordCount < 40) {
      console.warn(
        `[FAQPageSchema] Answer too short (${wordCount} words) for: "${question}". Optimal: 40-80 words.`
      );
    } else if (wordCount > 120) {
      console.warn(
        `[FAQPageSchema] Answer too long (${wordCount} words) for: "${question}". AI may truncate. Max: 120 words.`
      );
    } else if (wordCount > 80) {
      console.info(
        `[FAQPageSchema] Answer length OK (${wordCount} words) but could be more concise. Optimal: 40-80 words.`
      );
    }
  }

  return wordCount;
}

const FAQPageSchema: FC<FAQPageSchemaProps> = ({ faqs, pageUrl }) => {
  // Validate all answers in development
  if (process.env.NODE_ENV === 'development') {
    faqs.forEach(faq => validateAnswerLength(faq.answer, faq.question));
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl && {
      '@id': `${pageUrl}#faqpage`,
      mainEntity: faqs.map((faq, index) => ({
        '@type': 'Question',
        '@id': `${pageUrl}#question-${index + 1}`,
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          '@id': `${pageUrl}#answer-${index + 1}`,
          text: faq.answer,
        },
      })),
    }),
    ...(!pageUrl && {
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default FAQPageSchema;

/**
 * Helper function to create FAQ items with automatic word count validation
 * Use this in your page data files for better DX
 *
 * @example
 * const faqs = createFAQs([
 *   {
 *     question: "What is Grokipedia?",
 *     answer: "Grokipedia is an AI-optimized knowledge platform..."
 *   }
 * ]);
 */
export function createFAQs(items: Array<{ question: string; answer: string }>): FAQItem[] {
  return items.map(item => ({
    ...item,
    _wordCount: item.answer.trim().split(/\s+/).length,
  }));
}

/**
 * Helper to automatically optimize answer length
 * Truncates to ~75 words if too long, warns if too short
 */
export function optimizeFAQAnswer(answer: string, targetWords = 75): string {
  const words = answer.trim().split(/\s+/);

  if (words.length <= targetWords) {
    return answer;
  }

  // Truncate to target words and add ellipsis
  const truncated = words.slice(0, targetWords).join(' ');

  // Try to end at a sentence boundary
  const lastPeriod = truncated.lastIndexOf('.');
  if (lastPeriod > targetWords * 0.7) {
    return truncated.substring(0, lastPeriod + 1);
  }

  return truncated + '...';
}
