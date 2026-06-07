/**
 * Entity Coherence Score (ECS) Checker - 2026 Best Practices
 *
 * Measures consistency of entity references throughout content.
 * Target: 95%+ for primary entities
 *
 * Formula: Correct canonical references / Total references
 *
 * Research Finding:
 * "The Entity Coherence Score (ECS) measures sentence-level entity discipline
 * (correct canonical references / total references), with an aim for 95%+ on primary entities."
 *
 * @see https://niumatrix.com/semantic-seo-guide/
 */

export interface EntityReference {
  text: string;
  isCanonical: boolean;
  context: string;
  position: number;
}

export interface EntityCoherenceResult {
  score: number; // 0-100 percentage
  canonical: string;
  totalReferences: number;
  canonicalReferences: number;
  inconsistentReferences: EntityReference[];
  recommendations: string[];
}

/**
 * Analyze content for entity coherence
 * Returns score and recommendations for improvement
 */
export function calculateEntityCoherence(
  content: string,
  canonicalEntity: string,
  variations: string[] = []
): EntityCoherenceResult {
  const allVariations = [canonicalEntity, ...variations];

  // Create regex pattern for all variations (case-insensitive)
  const pattern = new RegExp(
    `\\b(${allVariations.map(v => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
    'gi'
  );

  const references: EntityReference[] = [];
  let match;

  // Find all references in content
  while ((match = pattern.exec(content)) !== null) {
    const text = match[0];
    const position = match.index;

    // Get surrounding context (50 chars before and after)
    const contextStart = Math.max(0, position - 50);
    const contextEnd = Math.min(content.length, position + text.length + 50);
    const context = content.substring(contextStart, contextEnd);

    const isCanonical = text.toLowerCase() === canonicalEntity.toLowerCase();

    references.push({
      text,
      isCanonical,
      context,
      position,
    });
  }

  const totalReferences = references.length;
  const canonicalReferences = references.filter(ref => ref.isCanonical).length;
  const score = totalReferences > 0
    ? Math.round((canonicalReferences / totalReferences) * 100)
    : 0;

  // Find inconsistent references
  const inconsistentReferences = references.filter(ref => !ref.isCanonical);

  // Generate recommendations
  const recommendations: string[] = [];

  if (score < 95) {
    recommendations.push(
      `Entity coherence score is ${score}% (target: 95%+). Replace variations with canonical "${canonicalEntity}".`
    );
  }

  if (score < 80) {
    recommendations.push(
      `CRITICAL: Low entity coherence (${score}%). AI systems may struggle to understand primary entity.`
    );
  }

  // Specific variation recommendations
  const variationCounts: Record<string, number> = {};
  inconsistentReferences.forEach(ref => {
    const normalized = ref.text.toLowerCase();
    variationCounts[normalized] = (variationCounts[normalized] || 0) + 1;
  });

  Object.entries(variationCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([variation, count]) => {
      recommendations.push(
        `Replace ${count} instance(s) of "${variation}" with canonical "${canonicalEntity}"`
      );
    });

  if (score >= 95) {
    recommendations.push('✓ Excellent entity coherence! Maintain this consistency.');
  }

  return {
    score,
    canonical: canonicalEntity,
    totalReferences,
    canonicalReferences,
    inconsistentReferences,
    recommendations,
  };
}

/**
 * Auto-fix entity coherence issues
 * Replaces variations with canonical entity
 */
export function fixEntityCoherence(
  content: string,
  canonicalEntity: string,
  variations: string[]
): {
  fixedContent: string;
  changesMade: number;
} {
  let fixedContent = content;
  let changesMade = 0;

  // Replace each variation with canonical
  variations.forEach(variation => {
    // Case-sensitive replacement to preserve formatting context
    const regex = new RegExp(`\\b${variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const matches = (content.match(regex) || []).length;

    if (matches > 0) {
      fixedContent = fixedContent.replace(regex, canonicalEntity);
      changesMade += matches;
    }
  });

  return {
    fixedContent,
    changesMade,
  };
}

/**
 * Suggest canonical entity name based on frequency
 * Analyzes which variation appears most often
 */
export function suggestCanonicalEntity(
  content: string,
  entityVariations: string[]
): {
  suggested: string;
  reasoning: string;
  frequencies: Record<string, number>;
} {
  const frequencies: Record<string, number> = {};

  entityVariations.forEach(variation => {
    const regex = new RegExp(`\\b${variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = content.match(regex);
    frequencies[variation] = matches ? matches.length : 0;
  });

  // Find most frequent
  const sorted = Object.entries(frequencies).sort((a, b) => b[1] - a[1]);
  const suggested = sorted[0]?.[0] || entityVariations[0];
  const suggestedCount = sorted[0]?.[1] || 0;

  const reasoning = suggestedCount > 0
    ? `"${suggested}" appears ${suggestedCount} times (most frequent)`
    : `"${suggested}" is first in provided list`;

  return {
    suggested,
    reasoning,
    frequencies,
  };
}

/**
 * Validate multiple entities in content
 * Returns overall coherence health
 */
export interface MultiEntityAnalysis {
  overallScore: number;
  entities: Array<{
    canonical: string;
    score: number;
    status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
  }>;
  recommendations: string[];
}

export function analyzeMultipleEntities(
  content: string,
  entities: Array<{
    canonical: string;
    variations: string[];
  }>
): MultiEntityAnalysis {
  const results = entities.map(entity => {
    const coherence = calculateEntityCoherence(
      content,
      entity.canonical,
      entity.variations
    );

    let status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
    if (coherence.score >= 95) status = 'excellent';
    else if (coherence.score >= 85) status = 'good';
    else if (coherence.score >= 70) status = 'needs-improvement';
    else status = 'critical';

    return {
      canonical: entity.canonical,
      score: coherence.score,
      status,
    };
  });

  const overallScore = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
    : 0;

  const recommendations: string[] = [];

  if (overallScore >= 95) {
    recommendations.push('✓ Excellent overall entity coherence!');
  } else if (overallScore >= 85) {
    recommendations.push('Good entity coherence. Minor improvements recommended.');
  } else if (overallScore >= 70) {
    recommendations.push('⚠️  Entity coherence needs improvement for better AI understanding.');
  } else {
    recommendations.push('❌ CRITICAL: Low entity coherence hurts AI discoverability.');
  }

  // Entity-specific recommendations
  results.forEach(result => {
    if (result.status === 'critical') {
      recommendations.push(`CRITICAL: "${result.canonical}" coherence is ${result.score}% (target: 95%+)`);
    } else if (result.status === 'needs-improvement') {
      recommendations.push(`Improve "${result.canonical}" coherence from ${result.score}% to 95%+`);
    }
  });

  return {
    overallScore,
    entities: results,
    recommendations,
  };
}

/**
 * Generate entity coherence report
 * For CLI or debugging
 */
export function generateCoherenceReport(
  content: string,
  entities: Array<{ canonical: string; variations: string[] }>
): string {
  let report = '# Entity Coherence Report\n\n';

  const analysis = analyzeMultipleEntities(content, entities);

  report += `## Overall Score: ${analysis.overallScore}%\n\n`;

  if (analysis.overallScore >= 95) {
    report += '✅ **Status:** Excellent\n\n';
  } else if (analysis.overallScore >= 85) {
    report += '✓ **Status:** Good\n\n';
  } else if (analysis.overallScore >= 70) {
    report += '⚠️  **Status:** Needs Improvement\n\n';
  } else {
    report += '❌ **Status:** Critical\n\n';
  }

  report += '## Entity Breakdown\n\n';

  entities.forEach(entity => {
    const coherence = calculateEntityCoherence(
      content,
      entity.canonical,
      entity.variations
    );

    report += `### ${entity.canonical}\n\n`;
    report += `- **Score:** ${coherence.score}%\n`;
    report += `- **Total References:** ${coherence.totalReferences}\n`;
    report += `- **Canonical References:** ${coherence.canonicalReferences}\n`;
    report += `- **Inconsistent References:** ${coherence.inconsistentReferences.length}\n\n`;

    if (coherence.inconsistentReferences.length > 0) {
      report += '**Variations Found:**\n\n';

      const variationCounts: Record<string, number> = {};
      coherence.inconsistentReferences.forEach(ref => {
        variationCounts[ref.text] = (variationCounts[ref.text] || 0) + 1;
      });

      Object.entries(variationCounts).forEach(([variation, count]) => {
        report += `- "${variation}": ${count} occurrence(s)\n`;
      });
      report += '\n';
    }
  });

  report += '## Recommendations\n\n';
  analysis.recommendations.forEach(rec => {
    report += `- ${rec}\n`;
  });

  return report;
}
