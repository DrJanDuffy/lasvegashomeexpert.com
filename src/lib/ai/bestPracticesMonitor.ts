/**
 * Best Practices Monitor
 *
 * Uses Parallel Search MCP to monitor and discover current best practices
 * for SEO, Next.js, AI integration, and real estate marketing
 *
 * This module is designed to be used by the Self-Improvement Loop
 * for automated discovery of new techniques and standards
 */

import type { Finding } from './selfImprovementLoop';

/**
 * Search query configuration for different categories
 */
export interface SearchQuery {
	category: Finding['category'];
	query: string;
	priority: number; // 1-10, higher = more important
	frequency: 'Daily' | 'Weekly' | 'Monthly';
	sources?: string[]; // Optional domain restrictions
}

/**
 * Comprehensive search queries for best practices discovery
 */
export const SEARCH_QUERIES: SearchQuery[] = [
	// SEO Best Practices
	{
		category: 'SEO',
		query: 'Next.js 15 SEO best practices 2026',
		priority: 10,
		frequency: 'Monthly',
		sources: ['nextjs.org', 'vercel.com', 'developers.google.com'],
	},
	{
		category: 'SEO',
		query: 'Core Web Vitals optimization 2026 INP LCP',
		priority: 9,
		frequency: 'Monthly',
		sources: ['web.dev', 'developers.google.com'],
	},
	{
		category: 'SEO',
		query: 'Google structured data real estate updates',
		priority: 8,
		frequency: 'Monthly',
		sources: ['schema.org', 'developers.google.com'],
	},
	{
		category: 'SEO',
		query: 'Open Graph protocol 2026 social media',
		priority: 7,
		frequency: 'Monthly',
		sources: ['ogp.me', 'developers.facebook.com'],
	},
	{
		category: 'SEO',
		query: 'local SEO real estate 2026',
		priority: 8,
		frequency: 'Monthly',
		sources: ['moz.com', 'searchengineland.com'],
	},

	// Performance
	{
		category: 'Performance',
		query: 'Next.js 15 performance optimization',
		priority: 9,
		frequency: 'Monthly',
		sources: ['nextjs.org', 'vercel.com'],
	},
	{
		category: 'Performance',
		query: 'React Server Components best practices',
		priority: 8,
		frequency: 'Monthly',
		sources: ['react.dev', 'nextjs.org'],
	},
	{
		category: 'Performance',
		query: 'image optimization Next.js modern formats',
		priority: 7,
		frequency: 'Monthly',
		sources: ['nextjs.org', 'web.dev'],
	},
	{
		category: 'Performance',
		query: 'Vercel Edge Functions real estate applications',
		priority: 6,
		frequency: 'Monthly',
		sources: ['vercel.com'],
	},

	// AI Integration
	{
		category: 'AI',
		query: 'AI content generation best practices real estate',
		priority: 10,
		frequency: 'Monthly',
	},
	{
		category: 'AI',
		query: 'Claude API real estate property descriptions',
		priority: 9,
		frequency: 'Monthly',
		sources: ['anthropic.com', 'github.com'],
	},
	{
		category: 'AI',
		query: 'context engineering Nate Jones best practices',
		priority: 10,
		frequency: 'Monthly',
		sources: ['github.com/kani3894/nate-jones-transcripts'],
	},
	{
		category: 'AI',
		query: 'AI governance frameworks content validation',
		priority: 8,
		frequency: 'Monthly',
	},
	{
		category: 'AI',
		query: 'generative engine optimization GEO 2026',
		priority: 7,
		frequency: 'Monthly',
	},

	// Content Strategy
	{
		category: 'Content',
		query: 'real estate content marketing 2026 trends',
		priority: 7,
		frequency: 'Monthly',
	},
	{
		category: 'Content',
		query: 'E-E-A-T real estate websites Google',
		priority: 9,
		frequency: 'Monthly',
		sources: ['developers.google.com'],
	},
	{
		category: 'Content',
		query: 'video marketing real estate luxury homes',
		priority: 6,
		frequency: 'Monthly',
	},

	// UX & Design
	{
		category: 'UX',
		query: 'real estate website design trends 2026',
		priority: 6,
		frequency: 'Monthly',
	},
	{
		category: 'UX',
		query: 'mobile-first design real estate',
		priority: 7,
		frequency: 'Monthly',
	},
	{
		category: 'UX',
		query: 'luxury real estate website UX best practices',
		priority: 7,
		frequency: 'Monthly',
	},

	// Security
	{
		category: 'Security',
		query: 'Next.js security best practices 2026',
		priority: 8,
		frequency: 'Monthly',
		sources: ['nextjs.org', 'owasp.org'],
	},
	{
		category: 'Security',
		query: 'real estate website GDPR compliance',
		priority: 7,
		frequency: 'Monthly',
	},

	// Real Estate Specific
	{
		category: 'Real Estate',
		query: 'Las Vegas luxury real estate marketing 2026',
		priority: 8,
		frequency: 'Monthly',
	},
	{
		category: 'Real Estate',
		query: 'IDX MLS integration modern approaches',
		priority: 7,
		frequency: 'Monthly',
	},
	{
		category: 'Real Estate',
		query: 'real estate lead generation strategies 2026',
		priority: 8,
		frequency: 'Monthly',
	},
	{
		category: 'Real Estate',
		query: 'luxury property virtual tours best practices',
		priority: 6,
		frequency: 'Monthly',
	},
];

/**
 * Monitored sources for direct content checking
 */
export interface MonitoredSource {
	name: string;
	url: string;
	category: Finding['category'];
	checkFrequency: 'Daily' | 'Weekly' | 'Monthly';
	selector?: string; // CSS selector for latest content
	priority: number;
}

export const MONITORED_SOURCES: MonitoredSource[] = [
	{
		name: "Nate's Newsletter (GitHub Transcripts)",
		url: 'https://github.com/kani3894/nate-jones-transcripts/blob/main/index/ai-tools.md',
		category: 'AI',
		checkFrequency: 'Weekly',
		priority: 10,
	},
	{
		name: "Nate's Newsletter - AI Strategy",
		url: 'https://github.com/kani3894/nate-jones-transcripts/blob/main/index/ai-strategy.md',
		category: 'AI',
		checkFrequency: 'Weekly',
		priority: 10,
	},
	{
		name: 'Next.js Documentation',
		url: 'https://nextjs.org/docs',
		category: 'Performance',
		checkFrequency: 'Monthly',
		priority: 9,
	},
	{
		name: 'Google Search Central Blog',
		url: 'https://developers.google.com/search/blog',
		category: 'SEO',
		checkFrequency: 'Weekly',
		priority: 9,
	},
	{
		name: 'Vercel Blog',
		url: 'https://vercel.com/blog',
		category: 'Performance',
		checkFrequency: 'Monthly',
		priority: 8,
	},
	{
		name: 'Schema.org',
		url: 'https://schema.org/',
		category: 'SEO',
		checkFrequency: 'Monthly',
		priority: 7,
	},
	{
		name: 'Web.dev',
		url: 'https://web.dev/',
		category: 'Performance',
		checkFrequency: 'Monthly',
		priority: 8,
	},
	{
		name: 'Anthropic Documentation',
		url: 'https://docs.anthropic.com/',
		category: 'AI',
		checkFrequency: 'Monthly',
		priority: 9,
	},
];

/**
 * Extract findings from search results
 *
 * Note: This is a template. In production, integrate with Parallel Search MCP
 * Example MCP call:
 *
 * const searchResult = await mcpClient.callTool('mcp__Parallel_Search__web_search', {
 *   search_queries: [query.query],
 *   objective: `Find latest ${query.category} best practices for ${query.query}`
 * });
 */
export async function searchBestPractices(queries: SearchQuery[]): Promise<Finding[]> {
	const findings: Finding[] = [];

	// TODO: Implement with Parallel Search MCP
	// This is a placeholder that shows the structure

	console.log(`[Best Practices Monitor] Would search ${queries.length} queries`);
	console.log('[Best Practices Monitor] Top queries:');
	queries
		.sort((a, b) => b.priority - a.priority)
		.slice(0, 5)
		.forEach((q) => {
			console.log(`  - [${q.category}] ${q.query} (priority: ${q.priority})`);
		});

	// Example of what the MCP integration would look like:
	/*
  for (const query of queries) {
    try {
      const searchResult = await mcpClient.callTool('mcp__Parallel_Search__web_search', {
        search_queries: [query.query],
        objective: `Find latest ${query.category} best practices`,
        num_results: 5
      });

      const parsed = parseSearchResults(searchResult, query);
      findings.push(...parsed);

    } catch (error) {
      console.error(`[Search Error] ${query.query}:`, error);
    }
  }
  */

	return findings;
}

/**
 * Parse search results into Finding objects
 */
export function parseSearchResults(searchResults: unknown, query: SearchQuery): Finding[] {
	// TODO: Implement actual parsing logic based on Parallel Search MCP response format
	// This is a placeholder showing the expected structure

	const findings: Finding[] = [];

	// Example structure (adjust based on actual MCP response):
	/*
  if (Array.isArray(searchResults)) {
    for (const result of searchResults) {
      findings.push({
        id: `finding_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        title: result.title || 'Untitled',
        description: result.description || '',
        source: result.source || 'Unknown',
        sourceUrl: result.url || '',
        publishDate: result.publishDate ? new Date(result.publishDate) : null,
        category: query.category,
        relevance: assessRelevance(result.content, query),
        impactType: assessImpact(result.content),
        excerpt: truncateExcerpt(result.content, 200),
        keywords: extractKeywords(result.content)
      });
    }
  }
  */

	return findings;
}

/**
 * Assess relevance of a finding to current implementation
 */
export function assessRelevance(content: string, query: SearchQuery): Finding['relevance'] {
	// TODO: Implement actual relevance scoring
	// Could use keyword matching, semantic similarity, etc.

	const lowerContent = content.toLowerCase();

	// High relevance indicators
	const highIndicators = [
		'next.js 15',
		'next.js 14',
		'real estate',
		'las vegas',
		'claude',
		'anthropic',
		'2026',
		'core web vitals',
		'inp',
		'metadata api',
		'app router',
	];

	const highMatches = highIndicators.filter((indicator) => lowerContent.includes(indicator)).length;

	if (highMatches >= 3) return 'High';
	if (highMatches >= 1) return 'Medium';
	return 'Low';
}

/**
 * Assess impact type of a finding
 */
export function assessImpact(content: string): Finding['impactType'] {
	const lowerContent = content.toLowerCase();

	if (
		lowerContent.includes('breaking change') ||
		lowerContent.includes('deprecated') ||
		lowerContent.includes('removed')
	) {
		return 'Breaking Change';
	}

	if (
		lowerContent.includes('new feature') ||
		lowerContent.includes('improved') ||
		lowerContent.includes('performance')
	) {
		return 'Improvement';
	}

	if (lowerContent.includes('best practice') || lowerContent.includes('recommendation')) {
		return 'Best Practice';
	}

	return 'Minor Update';
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, maxKeywords = 10): string[] {
	// TODO: Implement actual keyword extraction
	// Could use TF-IDF, named entity recognition, etc.

	// Placeholder: extract capitalized phrases and common tech terms
	const techTerms = [
		'Next.js',
		'SEO',
		'Core Web Vitals',
		'Claude',
		'AI',
		'Metadata API',
		'Server Components',
		'ISR',
		'SSG',
		'Open Graph',
		'Structured Data',
		'Real Estate',
		'Las Vegas',
	];

	return techTerms.filter((term) => content.includes(term)).slice(0, maxKeywords);
}

/**
 * Truncate excerpt to specified length
 */
export function truncateExcerpt(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;

	const truncated = text.substring(0, maxLength);
	const lastSpace = truncated.lastIndexOf(' ');

	return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

/**
 * Monitor specific sources for updates
 */
export async function monitorSources(sources: MonitoredSource[]): Promise<Finding[]> {
	const findings: Finding[] = [];

	console.log(`[Source Monitor] Would check ${sources.length} sources`);
	console.log('[Source Monitor] Top sources:');
	sources
		.sort((a, b) => b.priority - a.priority)
		.slice(0, 5)
		.forEach((s) => {
			console.log(`  - [${s.category}] ${s.name} (${s.checkFrequency})`);
		});

	// TODO: Implement with Web Fetch MCP
	// Example:
	/*
  for (const source of sources) {
    try {
      const content = await mcpClient.callTool('mcp__Parallel_Search__web_fetch', {
        url: source.url,
        objective: `Extract latest ${source.category} updates and best practices`
      });

      const parsed = parseSourceContent(content, source);
      findings.push(...parsed);

    } catch (error) {
      console.error(`[Monitor Error] ${source.name}:`, error);
    }
  }
  */

	return findings;
}

/**
 * Parse content from a monitored source
 */
export function parseSourceContent(content: string, source: MonitoredSource): Finding[] {
	// TODO: Implement source-specific parsing
	// Different sources may have different structures

	const findings: Finding[] = [];

	// Example for GitHub markdown files:
	if (source.url.includes('github.com')) {
		// Parse markdown headers and content
		// Extract dated entries
		// Convert to Finding objects
	}

	// Example for blog sites:
	if (source.url.includes('/blog')) {
		// Parse article titles and dates
		// Extract summaries
		// Convert to Finding objects
	}

	return findings;
}

/**
 * Filter findings by relevance threshold
 */
export function filterByRelevance(
	findings: Finding[],
	minRelevance: Finding['relevance'] = 'Medium',
): Finding[] {
	const relevanceOrder = { High: 3, Medium: 2, Low: 1 };
	const threshold = relevanceOrder[minRelevance];

	return findings.filter((f) => relevanceOrder[f.relevance] >= threshold);
}

/**
 * Deduplicate findings by similarity
 */
export function deduplicateFindings(findings: Finding[]): Finding[] {
	const unique: Finding[] = [];
	const seen = new Set<string>();

	for (const finding of findings) {
		// Simple deduplication by title + source
		const key = `${finding.title.toLowerCase()}|${finding.source}`;

		if (!seen.has(key)) {
			seen.add(key);
			unique.push(finding);
		}
	}

	return unique;
}

/**
 * Run complete best practices monitoring workflow
 */
export async function runBestPracticesMonitor(): Promise<Finding[]> {
	console.log('[Best Practices Monitor] Starting monitoring workflow...');

	// Step 1: Search for best practices
	const highPriorityQueries = SEARCH_QUERIES.filter((q) => q.priority >= 7);
	const searchFindings = await searchBestPractices(highPriorityQueries);

	console.log(`[Monitor] Found ${searchFindings.length} findings from search`);

	// Step 2: Monitor specific sources
	const highPrioritySources = MONITORED_SOURCES.filter((s) => s.priority >= 8);
	const sourceFindings = await monitorSources(highPrioritySources);

	console.log(`[Monitor] Found ${sourceFindings.length} findings from sources`);

	// Step 3: Combine and deduplicate
	const allFindings = [...searchFindings, ...sourceFindings];
	const uniqueFindings = deduplicateFindings(allFindings);

	console.log(`[Monitor] ${uniqueFindings.length} unique findings after deduplication`);

	// Step 4: Filter by relevance
	const relevantFindings = filterByRelevance(uniqueFindings, 'Medium');

	console.log(`[Monitor] ${relevantFindings.length} relevant findings (Medium+)`);

	// Step 5: Sort by relevance and priority
	const sorted = relevantFindings.sort((a, b) => {
		const relevanceOrder = { High: 3, Medium: 2, Low: 1 };
		return relevanceOrder[b.relevance] - relevanceOrder[a.relevance];
	});

	console.log('[Best Practices Monitor] Monitoring complete');

	return sorted;
}

/**
 * Example usage
 */
export const exampleUsage = async () => {
	console.log('Running Best Practices Monitor...\n');

	const findings = await runBestPracticesMonitor();

	console.log('\n--- HIGH RELEVANCE FINDINGS ---\n');
	findings
		.filter((f) => f.relevance === 'High')
		.slice(0, 5)
		.forEach((f) => {
			console.log(`[${f.category}] ${f.title}`);
			console.log(`Source: ${f.source}`);
			console.log(`Impact: ${f.impactType}`);
			console.log(`Keywords: ${f.keywords.join(', ')}`);
			console.log('---');
		});

	return findings;
};
