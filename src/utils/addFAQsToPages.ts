/**
 * Helper utility to add FAQ sections to all pages
 * 
 * To add FAQs to a page:
 * 
 * 1. Import the FAQSection and getFAQsForPage:
 *    import FAQSection from '@/components/sections/FAQSection';
 *    import { getFAQsForPage } from '@/data/page-specific-faqs';
 * 
 * 2. Add the FAQ section before the closing tag (</main> or </>):
 * 
 *    <FAQSection
 *      faqs={getFAQsForPage('pageType')}
 *      title="Page-Specific FAQ Title"
 *      subtitle="Optional subtitle"
 *    />
 * 
 * Page types:
 * - 'home' - Homepage and about pages
 * - 'buying' or 'buying-guide' - Buying-related pages
 * - 'selling' or 'selling-guide' - Selling-related pages
 * - 'neighborhood' or 'neighborhoods' - Neighborhood pages
 * - 'service' or 'services' - Service pages
 * - default - Falls back to home + general FAQs
 * 
 * Example for a neighborhood page:
 *    <FAQSection
 *      faqs={getFAQsForPage('neighborhood')}
 *      title="Frequently Asked Questions About [Neighborhood Name]"
 *      subtitle="Get answers about this premier Las Vegas neighborhood"
 *    />
 */

export {};

