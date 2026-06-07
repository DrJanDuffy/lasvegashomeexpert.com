/**
 * E-E-A-T Signals Optimization - 2026 Best Practices
 *
 * E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness
 *
 * Key Findings (2026):
 * - E-E-A-T is now the primary filter for AI search visibility
 * - Pages without named authors are 40% less likely to be cited
 * - Unlinked brand mentions contribute to AI trust signals
 * - Entity identity must be verifiable across platforms
 *
 * @see https://revved.digital/eeat-ai-search-ranking-signals-2026/
 * @see https://almcorp.com/blog/ai-search-trust-signals/
 */

export interface AuthorProfile {
  name: string;
  bio?: string;
  credentials?: string[];
  url?: string;
  sameAs?: string[]; // Social profiles, LinkedIn, etc.
  affiliation?: {
    name: string;
    url: string;
  };
}

export interface EEATConfig {
  // Experience signals
  experience?: {
    firstHandAccount?: boolean;
    realWorldTesting?: boolean;
    dateRange?: string; // e.g., "2020-2026"
  };

  // Expertise signals
  expertise?: {
    author?: AuthorProfile;
    reviewedBy?: AuthorProfile;
    contributors?: AuthorProfile[];
    qualifications?: string[];
  };

  // Authoritativeness signals
  authoritativeness?: {
    citations?: Array<{
      source: string;
      url: string;
      title?: string;
    }>;
    awards?: string[];
    industryRecognition?: string[];
  };

  // Trustworthiness signals
  trustworthiness?: {
    factChecked?: boolean;
    lastVerified?: string;
    sources?: number;
    corrections?: Array<{
      date: string;
      description: string;
    }>;
  };
}

/**
 * Generate E-E-A-T optimized author attribution
 * Critical: Pages with named authors are 40% more likely to be cited
 */
export function generateAuthorAttribution(author: AuthorProfile): string {
  let attribution = `Written by ${author.name}`;

  if (author.credentials && author.credentials.length > 0) {
    attribution += `, ${author.credentials.join(', ')}`;
  }

  if (author.affiliation) {
    attribution += ` at ${author.affiliation.name}`;
  }

  return attribution;
}

/**
 * Calculate E-E-A-T score (0-100)
 * Based on 2026 AI search trust signals
 */
export function calculateEEATScore(config: EEATConfig): {
  score: number;
  breakdown: {
    experience: number;
    expertise: number;
    authoritativeness: number;
    trustworthiness: number;
  };
  recommendations: string[];
} {
  const scores = {
    experience: 0,
    expertise: 0,
    authoritativeness: 0,
    trustworthiness: 0,
  };

  const recommendations: string[] = [];

  // Experience (25 points)
  if (config.experience?.firstHandAccount) {
    scores.experience += 10;
  } else {
    recommendations.push('Add first-hand account or real-world experience details');
  }

  if (config.experience?.realWorldTesting) {
    scores.experience += 10;
  } else {
    recommendations.push('Include evidence of real-world testing or application');
  }

  if (config.experience?.dateRange) {
    scores.experience += 5;
  }

  // Expertise (30 points) - CRITICAL: 40% citation impact
  if (config.expertise?.author) {
    scores.expertise += 15; // Named author is crucial
    if (config.expertise.author.credentials && config.expertise.author.credentials.length > 0) {
      scores.expertise += 5; // Credentials add trust
    }
    if (config.expertise.author.sameAs && config.expertise.author.sameAs.length > 0) {
      scores.expertise += 5; // Verifiable identity across platforms
    }
  } else {
    recommendations.push('Add named author - 40% more likely to be cited by AI');
  }

  if (config.expertise?.reviewedBy) {
    scores.expertise += 5; // Expert review
  } else {
    recommendations.push('Consider adding expert review or fact-checking attribution');
  }

  if (config.expertise?.qualifications && config.expertise.qualifications.length > 0) {
    scores.expertise += 0; // Already counted in author
  }

  // Authoritativeness (25 points)
  if (config.authoritativeness?.citations && config.authoritativeness.citations.length >= 3) {
    scores.authoritativeness += 15;
  } else if (config.authoritativeness?.citations && config.authoritativeness.citations.length > 0) {
    scores.authoritativeness += 8;
    recommendations.push('Add more citations from credible sources (aim for 3+)');
  } else {
    recommendations.push('Add citations from authoritative sources');
  }

  if (config.authoritativeness?.awards && config.authoritativeness.awards.length > 0) {
    scores.authoritativeness += 5;
  }

  if (config.authoritativeness?.industryRecognition && config.authoritativeness.industryRecognition.length > 0) {
    scores.authoritativeness += 5;
  } else {
    recommendations.push('Mention industry recognition or credentials');
  }

  // Trustworthiness (20 points)
  if (config.trustworthiness?.factChecked) {
    scores.trustworthiness += 10;
  } else {
    recommendations.push('Add fact-checking or verification process');
  }

  if (config.trustworthiness?.lastVerified) {
    const lastVerified = new Date(config.trustworthiness.lastVerified);
    const daysSince = (Date.now() - lastVerified.getTime()) / (1000 * 60 * 60 * 24);

    if (daysSince < 90) {
      scores.trustworthiness += 10; // Recently verified
    } else if (daysSince < 180) {
      scores.trustworthiness += 5;
      recommendations.push('Content verification is older than 90 days - consider refresh');
    } else {
      recommendations.push('Update content verification date (older than 180 days)');
    }
  } else {
    recommendations.push('Add content verification/last reviewed date');
  }

  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

  return {
    score: totalScore,
    breakdown: scores,
    recommendations,
  };
}

/**
 * Generate author schema for E-E-A-T signals
 * Used in Article schema for maximum AI trust
 */
export function generateAuthorSchema(author: AuthorProfile) {
  const schema: any = {
    '@type': 'Person',
    name: author.name,
  };

  if (author.bio) {
    schema.description = author.bio;
  }

  if (author.url) {
    schema.url = author.url;
  }

  if (author.sameAs && author.sameAs.length > 0) {
    schema.sameAs = author.sameAs;
  }

  if (author.affiliation) {
    schema.affiliation = {
      '@type': 'Organization',
      name: author.affiliation.name,
      url: author.affiliation.url,
    };
  }

  if (author.credentials && author.credentials.length > 0) {
    schema.knowsAbout = author.credentials;
  }

  return schema;
}

/**
 * Validate E-E-A-T implementation
 * Returns critical issues that hurt AI citation
 */
export function validateEEAT(config: EEATConfig): {
  critical: string[];
  warnings: string[];
  suggestions: string[];
} {
  const critical: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  // CRITICAL: Named author (40% citation impact)
  if (!config.expertise?.author) {
    critical.push('Missing named author - pages without authors are 40% less likely to be cited by AI');
  } else {
    if (!config.expertise.author.credentials || config.expertise.author.credentials.length === 0) {
      warnings.push('Author has no credentials listed - reduces trust signals');
    }

    if (!config.expertise.author.sameAs || config.expertise.author.sameAs.length === 0) {
      warnings.push('Author identity not verifiable across platforms - add LinkedIn, X, etc.');
    }
  }

  // Experience signals
  if (!config.experience?.firstHandAccount && !config.experience?.realWorldTesting) {
    warnings.push('No clear experience signals - AI prefers content from demonstrated experience');
  }

  // Citations for authoritativeness
  if (!config.authoritativeness?.citations || config.authoritativeness.citations.length === 0) {
    warnings.push('No authoritative citations - reduces credibility');
  } else if (config.authoritativeness.citations.length < 3) {
    suggestions.push('Add more citations (current: ' + config.authoritativeness.citations.length + ', recommended: 3+)');
  }

  // Freshness/verification
  if (!config.trustworthiness?.lastVerified) {
    suggestions.push('Add content verification date for freshness signals');
  }

  if (!config.trustworthiness?.factChecked) {
    suggestions.push('Consider adding fact-checking process for trust signals');
  }

  return {
    critical,
    warnings,
    suggestions,
  };
}

/**
 * Generate E-E-A-T badge/seal for display
 * Shows trust signals to users and AI
 */
export function generateEEATBadge(config: EEATConfig): string {
  const badges: string[] = [];

  if (config.expertise?.author) {
    badges.push(`✓ Written by ${config.expertise.author.name}`);
    if (config.expertise.author.credentials && config.expertise.author.credentials.length > 0) {
      badges.push(`✓ ${config.expertise.author.credentials.join(', ')}`);
    }
  }

  if (config.expertise?.reviewedBy) {
    badges.push(`✓ Reviewed by ${config.expertise.reviewedBy.name}`);
  }

  if (config.trustworthiness?.factChecked) {
    badges.push('✓ Fact-checked');
  }

  if (config.trustworthiness?.lastVerified) {
    const verifiedDate = new Date(config.trustworthiness.lastVerified).toLocaleDateString();
    badges.push(`✓ Last verified: ${verifiedDate}`);
  }

  if (config.experience?.firstHandAccount) {
    badges.push('✓ First-hand experience');
  }

  if (config.authoritativeness?.citations && config.authoritativeness.citations.length > 0) {
    badges.push(`✓ ${config.authoritativeness.citations.length} authoritative sources`);
  }

  return badges.join(' | ');
}
