/**
 * Property Description Generator
 *
 * AI-powered property description generation following Nate's Newsletter best practices
 * Uses context engineering for high-quality, SEO-optimized real estate content
 */

interface PropertyData {
	address: string;
	type: 'single-family' | 'condo' | 'townhouse' | 'luxury' | 'estate';
	bedrooms: number;
	bathrooms: number;
	sqft: number;
	price: number;
	features: string[];
	neighborhood: string;
	yearBuilt: number;
	lotSize?: number;
	pool?: boolean;
	garage?: number;
	hoa?: boolean;
	golfCourse?: boolean;
	gatedCommunity?: boolean;
}

interface DescriptionOptions {
	tone?: 'professional' | 'luxury' | 'casual' | 'aspirational';
	length?: 'short' | 'medium' | 'long';
	focusAreas?: string[];
	includeCallToAction?: boolean;
}

/**
 * Context-engineered prompt template
 * Following Nate's best practice: Build comprehensive context, not just prompts
 */
const PROPERTY_DESCRIPTION_PROMPT = `You are a luxury real estate copywriter specializing in Las Vegas properties, writing for Dr. Jan Duffy's real estate website.

AGENT CONTEXT:
- Name: Dr. Jan Duffy
- Experience: Luxury real estate specialist since 2013
- Market: Las Vegas, Summerlin, Henderson
- Expertise: High-net-worth clients, luxury homes $1M-$5M+
- Success: 200+ successful luxury transactions

TARGET AUDIENCE:
- High-net-worth individuals
- Luxury home buyers (typically $1M+)
- Relocating executives
- Investors seeking premium properties
- Golf and resort lifestyle enthusiasts

MARKET CONTEXT:
- Location: Las Vegas, Nevada
- Key neighborhoods: Summerlin, Red Rock, The Ridges, Southern Highlands
- Lifestyle: Golf courses, fine dining, entertainment, mountain views
- Climate: 300+ days of sunshine, desert luxury living

PROPERTY DETAILS:
{PROPERTY_JSON}

WRITING REQUIREMENTS:

1. LENGTH: {LENGTH_REQUIREMENT}
   - Short: 100-125 words
   - Medium: 150-200 words
   - Long: 225-275 words

2. TONE: {TONE}
   - Professional: Authoritative, informative, trustworthy
   - Luxury: Sophisticated, exclusive, aspirational
   - Casual: Warm, conversational, approachable
   - Aspirational: Dream-focused, lifestyle-oriented

3. STRUCTURE:
   a) Opening Hook (1-2 sentences)
      - Capture attention immediately
      - Lead with unique selling proposition or lifestyle benefit

   b) Key Features & Highlights (3-5 sentences)
      - Focus on standout features from the list
      - Use specific, compelling details (not generic adjectives)
      - Quantify when possible (sq ft, bedrooms, lot size)

   c) Neighborhood & Lifestyle (2-3 sentences)
      - Emphasize location benefits
      - Mention nearby amenities (golf, dining, Red Rock Casino, etc.)
      - Reference Las Vegas lifestyle advantages

   d) Call-to-Action (1 sentence) - {CTA_REQUIREMENT}
      - Natural, non-pushy invitation
      - Reference scheduling a tour or consultation

4. SEO OPTIMIZATION:
   - Primary keyword: "{NEIGHBORHOOD} homes" or "luxury real estate Las Vegas"
   - Naturally integrate location keywords
   - Include specific neighborhood name 2-3 times
   - Mention "Las Vegas" at least once
   - Use semantic variations (property, home, residence, estate)

5. STYLE GUIDELINES:
   ✅ DO:
   - Use active voice
   - Include specific, compelling details
   - Reference actual Las Vegas landmarks/amenities
   - Highlight unique architectural or design elements
   - Emphasize lifestyle benefits over features
   - Use evocative but accurate language

   ❌ AVOID:
   - Generic phrases: "stunning", "beautiful home", "amazing", "perfect"
   - Clichés: "dream home", "opportunity of a lifetime"
   - Exaggeration or unverifiable claims
   - Bullet points or section headers (use flowing paragraphs)
   - Real estate jargon without context
   - Passive voice constructions

6. LOCAL KNOWLEDGE TO INTEGRATE:
   - Red Rock Casino Resort & Spa (if in Summerlin area)
   - TPC Las Vegas, Red Rock Country Club (golf courses)
   - Downtown Summerlin (shopping, dining)
   - Red Rock Canyon (outdoor recreation)
   - The Strip (entertainment access) - mention if relevant
   - Mountains/views (if applicable)
   - Commute times (15 min to Strip, etc.)

7. FOCUS AREAS: {FOCUS_AREAS}
   - Emphasize these specific aspects in the description

OUTPUT FORMAT:
- Plain text, paragraph form
- No headers, bullet points, or sections
- Natural flow from opening to call-to-action
- Professional formatting (proper punctuation, spacing)

Generate the property description now:`;

/**
 * Validation result for quality assurance
 */
interface ValidationResult {
	valid: boolean;
	errors: string[];
	warnings: string[];
	score: number; // 0-100
}

/**
 * Generate a property description using AI
 *
 * Note: This is a template implementation. To use in production:
 * 1. Install @anthropic-ai/sdk: npm install @anthropic-ai/sdk
 * 2. Set ANTHROPIC_API_KEY environment variable
 * 3. Uncomment the actual API call below
 */
export async function generatePropertyDescription(
	property: PropertyData,
	options: DescriptionOptions = {},
): Promise<string> {
	const {
		tone = 'luxury',
		length = 'medium',
		focusAreas = [],
		includeCallToAction = true,
	} = options;

	// Build the context-engineered prompt
	const prompt = buildPrompt(property, tone, length, focusAreas, includeCallToAction);

	// TODO: Implement actual Claude API call
	// Uncomment when ready to use in production:
	/*
  import Anthropic from '@anthropic-ai/sdk';

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    temperature: 0.7,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  return message.content[0].text;
  */

	// For now, return a placeholder template
	return generatePlaceholderDescription(property);
}

/**
 * Build the context-engineered prompt
 */
function buildPrompt(
	property: PropertyData,
	tone: string,
	length: string,
	focusAreas: string[],
	includeCTA: boolean,
): string {
	const lengthReqs = {
		short: '100-125 words (concise overview)',
		medium: '150-200 words (balanced detail)',
		long: '225-275 words (comprehensive description)',
	};

	return PROPERTY_DESCRIPTION_PROMPT.replace('{PROPERTY_JSON}', JSON.stringify(property, null, 2))
		.replace('{TONE}', tone)
		.replace('{LENGTH_REQUIREMENT}', lengthReqs[length])
		.replace('{NEIGHBORHOOD}', property.neighborhood)
		.replace('{CTA_REQUIREMENT}', includeCTA ? 'Include' : 'Omit')
		.replace(
			'{FOCUS_AREAS}',
			focusAreas.length > 0 ? focusAreas.join(', ') : 'Overall property appeal',
		);
}

/**
 * Generate placeholder description (for testing without API)
 */
function generatePlaceholderDescription(property: PropertyData): string {
	const { address, type, bedrooms, bathrooms, sqft, neighborhood, features } = property;

	return `Discover luxury living in ${neighborhood} with this exceptional ${bedrooms}-bedroom, ${bathrooms}-bathroom ${type} spanning ${sqft.toLocaleString()} square feet. ${features.slice(0, 3).join(', ')} are just a few of the premium features that define this remarkable property. Located in one of Las Vegas's most prestigious neighborhoods, this home offers the perfect blend of sophisticated design and resort-style amenities. Schedule your private tour with Dr. Jan Duffy today to experience this extraordinary property firsthand.`;
}

/**
 * Validate generated property description
 * Following Nate's best practice: Real-world evaluation over benchmarks
 */
export function validatePropertyDescription(
	description: string,
	property: PropertyData,
): ValidationResult {
	const errors: string[] = [];
	const warnings: string[] = [];
	let score = 100;

	// Length validation
	const wordCount = description.split(/\s+/).length;
	if (wordCount < 100) {
		errors.push(`Description too short: ${wordCount} words (minimum 100)`);
		score -= 30;
	}
	if (wordCount > 300) {
		warnings.push(`Description quite long: ${wordCount} words (recommended max 275)`);
		score -= 10;
	}

	// Keyword presence
	const lowerDesc = description.toLowerCase();
	const neighborhood = property.neighborhood.toLowerCase();

	if (!lowerDesc.includes(neighborhood)) {
		errors.push('Neighborhood name not mentioned');
		score -= 25;
	}

	if (!lowerDesc.includes('las vegas')) {
		warnings.push('Las Vegas not mentioned');
		score -= 10;
	}

	// Avoid generic phrases
	const genericPhrases = ['stunning', 'beautiful home', 'amazing', 'perfect', 'dream home'];
	const foundGeneric = genericPhrases.filter((phrase) => lowerDesc.includes(phrase));

	if (foundGeneric.length > 0) {
		warnings.push(`Generic phrases detected: ${foundGeneric.join(', ')}`);
		score -= 5 * foundGeneric.length;
	}

	// Check for specific features mentioned
	const mentionedFeatures = property.features.filter((feature) => {
		const firstTwoWords = feature.toLowerCase().split(' ').slice(0, 2).join(' ');
		return lowerDesc.includes(firstTwoWords);
	});

	if (mentionedFeatures.length < 2) {
		warnings.push('Few specific property features mentioned');
		score -= 15;
	}

	// Check for call-to-action
	const ctaPhrases = ['contact', 'schedule', 'call', 'email', 'tour', 'visit', 'showing'];
	const hasCTA = ctaPhrases.some((phrase) => lowerDesc.includes(phrase));

	if (!hasCTA) {
		warnings.push('No clear call-to-action');
		score -= 15;
	}

	// Check for numbers/specifics
	const hasNumbers = /\d/.test(description);
	if (!hasNumbers) {
		warnings.push('No specific numbers mentioned (sq ft, bedrooms, etc.)');
		score -= 10;
	}

	return {
		valid: errors.length === 0,
		errors,
		warnings,
		score: Math.max(0, score),
	};
}

/**
 * Batch process multiple properties
 * Following Nate's best practice: Task queues over chat interfaces
 */
export async function generateDescriptionsBatch(
	properties: PropertyData[],
	options: DescriptionOptions = {},
	batchSize = 5,
	delayMs = 2000,
): Promise<Array<{ property: PropertyData; description: string; validation: ValidationResult }>> {
	const results: Array<{
		property: PropertyData;
		description: string;
		validation: ValidationResult;
	}> = [];

	for (let i = 0; i < properties.length; i += batchSize) {
		const batch = properties.slice(i, i + batchSize);

		// Process batch in parallel
		const batchResults = await Promise.all(
			batch.map(async (property) => {
				const description = await generatePropertyDescription(property, options);
				const validation = validatePropertyDescription(description, property);

				return { property, description, validation };
			}),
		);

		results.push(...batchResults);

		// Delay between batches (rate limiting)
		if (i + batchSize < properties.length) {
			await new Promise((resolve) => setTimeout(resolve, delayMs));
		}

		console.log(`Processed ${Math.min(i + batchSize, properties.length)}/${properties.length} properties`);
	}

	return results;
}

/**
 * Example usage
 */
export const exampleUsage = async () => {
	const property: PropertyData = {
		address: '123 Red Rock Drive, Las Vegas, NV 89135',
		type: 'luxury',
		bedrooms: 5,
		bathrooms: 4.5,
		sqft: 4200,
		price: 2450000,
		features: [
			'Gourmet kitchen with Wolf and Sub-Zero appliances',
			'Resort-style pool and spa with waterfalls',
			'Dedicated home theater with tiered seating',
			'3-car garage with epoxy flooring',
			'Panoramic Red Rock mountain views',
			'Custom wine cellar with tasting room',
			'Smart home automation throughout',
		],
		neighborhood: 'Red Rock Country Club',
		yearBuilt: 2018,
		lotSize: 0.5,
		pool: true,
		garage: 3,
		golfCourse: true,
		gatedCommunity: true,
	};

	// Generate description
	const description = await generatePropertyDescription(property, {
		tone: 'luxury',
		length: 'medium',
		focusAreas: ['golf course living', 'mountain views', 'gourmet kitchen'],
		includeCallToAction: true,
	});

	// Validate
	const validation = validatePropertyDescription(description, property);

	console.log('Description:', description);
	console.log('Validation:', validation);

	return { description, validation };
};
