import type { Template } from "../types";

export const integrationTestsTemplate: Template = {
	id: "test-integration",
	name: "Write Integration Tests",
	category: "testing",
	tags: ["testing", "integration", "e2e", "system-tests"],
	difficulty: "advanced",

	template: `# Write Integration Tests

**Role**: QA engineer specializing in integration and E2E testing
**Goal**: Create integration tests for {{feature_name}}

## Testing Framework
{{framework}}

## Feature to Test
**{{feature_name}}**

## Components Involved
{{components}}

## Test Requirements
Please create integration tests that verify:

1. **Component Integration**
   - Components communicate correctly
   - Data flows properly between components
   - Interfaces are respected

2. **External Dependencies**
   - Database operations work correctly
   - API calls succeed and handle errors
   - Third-party services integrate properly

3. **User Workflows**
   - End-to-end user scenarios
   - Multi-step processes complete correctly
   - State persists across operations

4. **Error Scenarios**
   - Graceful handling of failures
   - Retry logic works correctly
   - Error messages are appropriate

## Output Format
- Use {{framework}} syntax
- Include setup and teardown
- Mock external dependencies appropriately
- Add assertions for each integration point`,

	description: "Use to create integration or E2E tests that verify components work together",

	tips: [
		"List all components that interact in this feature",
		"Mention any external services or databases involved",
		"Describe the key user workflows to test",
		"Specify what should be mocked vs tested live",
	],

	example: {
		filled: `# Write Integration Tests

**Role**: QA engineer specializing in integration and E2E testing
**Goal**: Create integration tests for User Registration Flow

## Testing Framework
Jest with Supertest for API testing

## Feature to Test
**User Registration Flow**

## Components Involved
- POST /api/auth/register endpoint
- UserService (creates user in database)
- EmailService (sends verification email)
- PostgreSQL database
- Redis cache for rate limiting

## Test Requirements
Please create integration tests that verify:

1. **Component Integration**
   - Components communicate correctly
   - Data flows properly between components
   - Interfaces are respected

2. **External Dependencies**
   - Database operations work correctly
   - API calls succeed and handle errors
   - Third-party services integrate properly

3. **User Workflows**
   - End-to-end user scenarios
   - Multi-step processes complete correctly
   - State persists across operations

4. **Error Scenarios**
   - Graceful handling of failures
   - Retry logic works correctly
   - Error messages are appropriate

## Output Format
- Use Jest with Supertest syntax
- Include setup and teardown
- Mock external dependencies appropriately
- Add assertions for each integration point`,
		context: "Testing user registration with multiple service interactions",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "TypeScript, Python, etc.",
			required: true,
			defaultValue: "TypeScript",
		},
		{
			name: "framework",
			label: "Testing Framework",
			type: "text",
			placeholder: "Jest with Supertest, Playwright, Cypress, pytest, etc.",
			required: true,
		},
		{
			name: "feature_name",
			label: "Feature Name",
			type: "text",
			placeholder: "User Registration, Checkout Flow, etc.",
			required: true,
		},
		{
			name: "components",
			label: "Components Involved",
			type: "multiline",
			placeholder: "List the components, services, and dependencies involved...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
