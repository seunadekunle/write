import { runtimeErrorTemplate } from "./debugging/runtime-error";
import { fixErrorTemplate } from "./debugging/fix-error";
import { unexpectedBehaviorTemplate } from "./debugging/unexpected-behavior";
import { addLoggingTemplate } from "./debugging/add-logging";

import { comprehensiveReviewTemplate } from "./code-review/comprehensive-review";
import { securityReviewTemplate } from "./code-review/security-review";
import { performanceReviewTemplate } from "./code-review/performance-review";

import { improveReadabilityTemplate } from "./refactoring/improve-readability";
import { modernizeCodeTemplate } from "./refactoring/modernize-code";
import { applySolidTemplate } from "./refactoring/apply-solid";
import { designPatternTemplate } from "./refactoring/design-pattern";

import { writeUnitTestsTemplate } from "./testing/write-unit-tests";
import { edgeCaseTestsTemplate } from "./testing/edge-case-tests";
import { integrationTestsTemplate } from "./testing/integration-tests";

import { generateDocsTemplate } from "./documentation/generate-docs";
import { writeReadmeTemplate } from "./documentation/write-readme";
import { apiDocumentationTemplate } from "./documentation/api-documentation";

import { implementFeatureTemplate } from "./feature/implement-feature";
import { crudOperationsTemplate } from "./feature/crud-operations";
import { uiComponentTemplate } from "./feature/ui-component";

import { optimizePerformanceTemplate } from "./optimization/optimize-performance";
import { cachingStrategyTemplate } from "./optimization/caching-strategy";
import { reduceBundleTemplate } from "./optimization/reduce-bundle";

import { designApiTemplate } from "./architecture/design-api";
import { databaseSchemaTemplate } from "./architecture/database-schema";

import type { Template } from "./types";

export const allTemplates: Template[] = [
	// Debugging
	runtimeErrorTemplate,
	fixErrorTemplate,
	unexpectedBehaviorTemplate,
	addLoggingTemplate,

	// Code Review
	comprehensiveReviewTemplate,
	securityReviewTemplate,
	performanceReviewTemplate,

	// Refactoring
	improveReadabilityTemplate,
	modernizeCodeTemplate,
	applySolidTemplate,
	designPatternTemplate,

	// Testing
	writeUnitTestsTemplate,
	edgeCaseTestsTemplate,
	integrationTestsTemplate,

	// Documentation
	generateDocsTemplate,
	writeReadmeTemplate,
	apiDocumentationTemplate,

	// Feature
	implementFeatureTemplate,
	crudOperationsTemplate,
	uiComponentTemplate,

	// Optimization
	optimizePerformanceTemplate,
	cachingStrategyTemplate,
	reduceBundleTemplate,

	// Architecture
	designApiTemplate,
	databaseSchemaTemplate,
];

export function getTemplateById(id: string): Template | undefined {
	return allTemplates.find((t) => t.id === id);
}

export function getTemplatesByCategory(category: string): Template[] {
	return allTemplates.filter((t) => t.category === category);
}
