#!/usr/bin/env tsx

/**
 * Entity Coherence Scanner
 *
 * Scans all pages for entity coherence issues
 * Target: 95%+ coherence for primary entities
 *
 * Usage:
 *   npm run entity:scan
 *   npm run entity:check [file]
 *   npm run entity:fix [file]
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import {
  calculateEntityCoherence,
  analyzeMultipleEntities,
  generateCoherenceReport,
  fixEntityCoherence,
} from '../src/utils/entity-coherence';

const APP_DIR = path.join(process.cwd(), 'src/app');

// Common entity variations to check
const COMMON_ENTITIES = [
  {
    canonical: 'Grokipedia',
    variations: ['grokipedia', 'Grokipedia.com', 'the platform', 'this site', 'our site'],
  },
  {
    canonical: 'Grok AI',
    variations: ['Grok', 'Grok Search', 'Grok AI Search', 'the Grok platform', "xAI's Grok"],
  },
  {
    canonical: 'ChatGPT',
    variations: ['Chat GPT', 'GPT', 'OpenAI ChatGPT', 'ChatGPT AI'],
  },
  {
    canonical: 'Claude',
    variations: ['Claude AI', 'Anthropic Claude', "Anthropic's Claude"],
  },
];

/**
 * Scan a single file for entity coherence
 */
async function scanFile(filePath: string): Promise<{
  file: string;
  overallScore: number;
  issues: number;
}> {
  const content = await fs.readFile(filePath, 'utf-8');

  // Extract text content (remove JSX/TSX syntax for analysis)
  const textContent = content
    .replace(/<[^>]+>/g, ' ') // Remove JSX tags
    .replace(/import\s+.+from.+;/g, '') // Remove imports
    .replace(/export\s+(default\s+)?/g, '') // Remove exports
    .replace(/const\s+\w+\s*=\s*{[\s\S]*?};/g, '') // Remove object declarations
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*/g, ''); // Remove line comments

  const analysis = analyzeMultipleEntities(textContent, COMMON_ENTITIES);

  const issues = analysis.entities.filter(e => e.score < 95).length;

  return {
    file: path.relative(process.cwd(), filePath),
    overallScore: analysis.overallScore,
    issues,
  };
}

/**
 * Find all page files
 */
async function findPages(): Promise<string[]> {
  const pages: string[] = [];

  async function traverse(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (!entry.name.startsWith('_') && !entry.name.startsWith('.')) {
          await traverse(fullPath);
        }
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        pages.push(fullPath);
      }
    }
  }

  await traverse(APP_DIR);
  return pages;
}

/**
 * Scan all pages for entity coherence
 */
async function scanAllPages() {
  console.log('🔍 Scanning all pages for entity coherence...\n');

  const pages = await findPages();
  const results: Array<{
    file: string;
    overallScore: number;
    issues: number;
  }> = [];

  for (const page of pages) {
    try {
      const result = await scanFile(page);
      results.push(result);
    } catch (error) {
      console.error(`Error scanning ${page}:`, error);
    }
  }

  // Generate report
  console.log(`📊 Scanned ${results.length} pages\n`);

  const avgScore = results.reduce((sum, r) => sum + r.overallScore, 0) / results.length;
  console.log(`Average Entity Coherence: ${Math.round(avgScore)}%`);
  console.log(`Target: 95%+\n`);

  // Pages needing attention
  const needsAttention = results.filter(r => r.overallScore < 95).sort((a, b) => a.overallScore - b.overallScore);

  if (needsAttention.length > 0) {
    console.log(`⚠️  ${needsAttention.length} pages need entity coherence improvement:\n`);

    needsAttention.forEach(result => {
      const status = result.overallScore >= 85 ? '⚠️ ' : '❌';
      console.log(`  ${status} ${result.file}`);
      console.log(`     Score: ${result.overallScore}% (${result.issues} entities below 95%)`);
    });
  } else {
    console.log('✅ All pages have excellent entity coherence (95%+)!');
  }

  // Pages with excellent coherence
  const excellent = results.filter(r => r.overallScore >= 95);
  if (excellent.length > 0) {
    console.log(`\n✅ ${excellent.length} pages with excellent coherence (95%+)`);
  }

  console.log('\n💡 To fix a specific page:');
  console.log('   npm run entity:check src/app/your-page/page.tsx');
  console.log('   npm run entity:fix src/app/your-page/page.tsx');
}

/**
 * Check specific file with detailed report
 */
async function checkFile(filePath: string) {
  const content = await fs.readFile(filePath, 'utf-8');

  // Extract text content
  const textContent = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/import\s+.+from.+;/g, '')
    .replace(/export\s+(default\s+)?/g, '')
    .replace(/const\s+\w+\s*=\s*{[\s\S]*?};/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '');

  const report = generateCoherenceReport(textContent, COMMON_ENTITIES);

  console.log(report);
}

/**
 * Auto-fix entity coherence in file
 */
async function fixFile(filePath: string) {
  const content = await fs.readFile(filePath, 'utf-8');

  console.log(`🔧 Fixing entity coherence in: ${filePath}\n`);

  let fixedContent = content;
  let totalChanges = 0;

  for (const entity of COMMON_ENTITIES) {
    const result = fixEntityCoherence(fixedContent, entity.canonical, entity.variations);
    fixedContent = result.fixedContent;

    if (result.changesMade > 0) {
      console.log(`  ✓ Replaced ${result.changesMade} variations of "${entity.canonical}"`);
      totalChanges += result.changesMade;
    }
  }

  if (totalChanges > 0) {
    await fs.writeFile(filePath, fixedContent);
    console.log(`\n✅ Fixed ${totalChanges} entity references`);
    console.log(`   Run "npm run entity:check ${filePath}" to verify`);
  } else {
    console.log('✅ No changes needed - entity coherence is already optimal!');
  }
}

// Main CLI handler
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === '--help') {
    console.log(`
Entity Coherence Scanner - 2026 Best Practices

Usage:
  npm run entity:scan               Scan all pages
  npm run entity:check [file]       Check specific file
  npm run entity:fix [file]         Auto-fix entity issues

Examples:
  npm run entity:scan
  npm run entity:check src/app/page.tsx
  npm run entity:fix src/app/page.tsx

Target: 95%+ entity coherence for AI understanding
    `);
    return;
  }

  if (command === 'scan') {
    await scanAllPages();
  } else if (command === 'check' && args[1]) {
    const filePath = path.resolve(process.cwd(), args[1]);
    await checkFile(filePath);
  } else if (command === 'fix' && args[1]) {
    const filePath = path.resolve(process.cwd(), args[1]);
    await fixFile(filePath);
  } else {
    console.error('Invalid command or missing file path');
    console.log('Run "npm run entity:scan --help" for usage');
  }
}

main().catch(console.error);
