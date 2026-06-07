// Core Schema Components
export { default as ProductSchema } from './ProductSchema';
export { default as RealEstateServiceSchema } from './RealEstateServiceSchema';
export { default as BreadcrumbSchema } from './BreadcrumbSchema';
export { default as RealEstateBreadcrumbSchema } from './RealEstateBreadcrumbSchema';
export { default as OrganizationSchema } from './OrganizationSchema';
export { default as WebPageSchema } from './WebPageSchema';
export { default as ArticleSchema } from './ArticleSchema';
export { default as KnowledgeGraphSchema } from './KnowledgeGraphSchema';

// Enhanced 2026 Best Practices Components
export { default as FAQSchema, createFAQs, optimizeFAQAnswer } from './FAQSchema';
export type { FAQItem } from './FAQSchema';

// Breadcrumb Helpers
export { generateBreadcrumbsFromPath, createBreadcrumbs } from './BreadcrumbSchema';
export type { BreadcrumbItem } from './BreadcrumbSchema';
