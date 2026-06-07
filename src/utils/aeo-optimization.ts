/**
 * Answer Engine Optimization (AEO) - 2026 Best Practices
 *
 * AEO is the practice of structuring content so AI-powered platforms
 * can find it, understand it, and deliver it as a direct answer.
 *
 * Key Findings (2026):
 * - Answer snippets of 40-50 words are most likely to be extracted
 * - Answers in first 100-200 words are favored
 * - Front-loading answer in under 30 words gives "quotable block"
 * - AI engines read structure before substance
 *
 * @see https://llmrefs.com/answer-engine-optimization
 * @see https://www.wsiworld.com/blog/how-to-structure-content-for-ai-answer-engines-a-geo-and-aeo-guide
 */

export interface AnswerSnippet {
  question: string;
  answer: string;
  wordCount?: number;
}

/**
 * Optimize content for Answer Engine extraction
 * Returns structured answer snippet with validation
 */
export function createAnswerSnippet(
  question: string,
  answer: string,
  options?: {
    targetWords?: number;
    frontLoadWords?: number;
  }
): AnswerSnippet {
  const targetWords = options?.targetWords || 45; // Optimal: 40-50 words
  const frontLoadWords = options?.frontLoadWords || 25; // Front-load in ~25 words

  const words = answer.trim().split(/\s+/);
  const wordCount = words.length;

  // Validate word count
  if (wordCount < 30) {
    console.warn(`[AEO] Answer too short (${wordCount} words). Optimal: 40-50 words for "${question}"`);
  } else if (wordCount > 60) {
    console.warn(`[AEO] Answer too long (${wordCount} words). May not be fully extracted for "${question}"`);
  }

  // Check if answer is front-loaded (key info in first ~25 words)
  const frontPortion = words.slice(0, frontLoadWords).join(' ');
  const hasDirectAnswer = /^[A-Z]/.test(answer) && !answer.startsWith('Learn') && !answer.startsWith('Discover');

  if (!hasDirectAnswer) {
    console.warn(`[AEO] Answer should start with direct statement, not "Learn" or "Discover": "${question}"`);
  }

  return {
    question,
    answer,
    wordCount,
  };
}

/**
 * Generate answer-optimized content structure
 * Following 2026 AEO best practices
 */
export interface AEOContentStructure {
  question: string;
  directAnswer: string; // 30 words or less - the "quotable block"
  expandedAnswer: string; // 40-50 words total
  context?: string; // Additional context if needed
}

export function structureForAEO(
  question: string,
  content: string
): AEOContentStructure {
  const words = content.trim().split(/\s+/);

  // Extract direct answer (first sentence or ~30 words)
  const firstSentenceEnd = content.indexOf('. ');
  const firstSentence = firstSentenceEnd > 0
    ? content.substring(0, firstSentenceEnd + 1)
    : words.slice(0, 30).join(' ') + '...';

  const directWords = firstSentence.split(/\s+/);

  // Expanded answer (40-50 words total)
  const expandedWords = Math.min(50, words.length);
  const expandedAnswer = words.slice(0, expandedWords).join(' ');

  // Remaining context
  const context = words.length > expandedWords
    ? words.slice(expandedWords).join(' ')
    : undefined;

  return {
    question,
    directAnswer: firstSentence,
    expandedAnswer: expandedAnswer.length > firstSentence.length
      ? expandedAnswer
      : firstSentence,
    context,
  };
}

/**
 * Validate content structure for AEO
 * Returns optimization suggestions
 */
export function validateAEOStructure(content: string): {
  score: number;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;

  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);
  const firstParagraph = paragraphs[0] || '';
  const firstParagraphWords = firstParagraph.split(/\s+/).length;

  // Check if answer is in first 100-200 words
  if (firstParagraphWords > 200) {
    issues.push('First paragraph too long - answer should be in first 100-200 words');
    score -= 20;
  }

  // Check for direct answer pattern
  const directPatterns = [
    /^[A-Z][^.]+\s(is|are|provides|helps|enables|refers to|means)/,
    /^The\s[A-Z][^.]+\s(is|are)/,
  ];

  const hasDirectAnswer = directPatterns.some(pattern => pattern.test(firstParagraph));

  if (!hasDirectAnswer) {
    issues.push('Content should start with direct answer (e.g., "X is..." or "The X is...")');
    score -= 15;
  }

  // Check paragraph length (short paragraphs aid extraction)
  const longParagraphs = paragraphs.filter(p => p.split(/\s+/).length > 100);

  if (longParagraphs.length > 0) {
    suggestions.push(`Break up ${longParagraphs.length} long paragraph(s) - AI prefers 2-3 sentence chunks`);
    score -= 10;
  }

  // Check for clear structure (headings, lists)
  const hasHeadings = /^##?\s/.test(content);
  const hasLists = /^[-*]\s/m.test(content);

  if (!hasHeadings) {
    suggestions.push('Add clear headings (H2, H3) to help AI understand content hierarchy');
    score -= 10;
  }

  if (!hasLists && content.length > 500) {
    suggestions.push('Consider using bullet lists for key points - improves AI extraction');
    score -= 5;
  }

  // Check for white space (readability for AI)
  const averageParagraphLength = paragraphs.reduce((sum, p) => sum + p.length, 0) / paragraphs.length;

  if (averageParagraphLength > 500) {
    suggestions.push('Add more white space - shorter paragraphs improve AI parsing');
    score -= 10;
  }

  return {
    score: Math.max(0, score),
    issues,
    suggestions,
  };
}

/**
 * Convert long-form content to AEO-optimized format
 * Restructures for optimal AI extraction
 */
export function optimizeForAEO(
  question: string,
  longContent: string,
  options?: {
    maxWords?: number;
    includeContext?: boolean;
  }
): string {
  const maxWords = options?.maxWords || 50;
  const includeContext = options?.includeContext !== false;

  const structure = structureForAEO(question, longContent);

  let optimized = `**${question}**\n\n`;

  // Direct answer first
  optimized += `${structure.expandedAnswer}\n\n`;

  // Add context if requested and available
  if (includeContext && structure.context) {
    optimized += `${structure.context}\n`;
  }

  return optimized;
}

/**
 * Generate answer-optimized FAQ for maximum AI extraction
 * Combines FAQ schema best practices with AEO principles
 */
export function createAEOOptimizedFAQ(items: Array<{
  question: string;
  longAnswer: string;
}>): Array<{
  question: string;
  answer: string;
  wordCount: number;
  aeoScore: number;
}> {
  return items.map(item => {
    const structured = structureForAEO(item.question, item.longAnswer);
    const validation = validateAEOStructure(structured.expandedAnswer);

    return {
      question: item.question,
      answer: structured.expandedAnswer,
      wordCount: structured.expandedAnswer.split(/\s+/).length,
      aeoScore: validation.score,
    };
  });
}
