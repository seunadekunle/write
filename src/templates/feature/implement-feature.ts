import type { Template } from "../types";

export const implementFeatureTemplate: Template = {
	id: "feature-implement",
	name: "Implement Feature",
	category: "feature",
	tags: ["feature", "implementation", "code-generation"],
	difficulty: "intermediate",

	template: `# Implement Feature

**Role**: Senior {{language}} developer using {{framework}}
**Goal**: Implement {{feature_description}}

## Feature Description
{{feature_description}}

## Technical Constraints
{{constraints}}

## Implementation Request
Please provide a complete implementation that includes:

1. **Code Structure**
   - Main feature code
   - Supporting utilities/helpers
   - Types/interfaces (if applicable)

2. **Best Practices**
   - Error handling
   - Input validation
   - Logging where appropriate

3. **Integration Points**
   - How to integrate with existing code
   - Required imports/dependencies
   - Configuration needed

4. **Documentation**
   - Brief usage instructions
   - Key function descriptions

## Output Format
Provide complete, production-ready code with comments explaining key decisions`,

	description: "Use to generate code for a new feature",

	tips: [
		"Be specific about what the feature should do",
		"Mention any constraints (performance, compatibility, etc.)",
		"Specify the framework/library context",
		"Include any existing patterns to follow",
	],

	example: {
		filled: `# Implement Feature

**Role**: Senior TypeScript developer using Express.js
**Goal**: Implement User password reset functionality via email

## Feature Description
User password reset functionality via email. When a user requests a password reset, they should receive an email with a secure, time-limited reset link. Clicking the link should allow them to set a new password.

## Technical Constraints
- Use existing Express app structure
- PostgreSQL database with Prisma ORM
- SendGrid for email delivery
- Reset tokens should expire after 1 hour
- Tokens should be single-use
- Must rate-limit reset requests (max 3 per hour per email)

## Implementation Request
Please provide a complete implementation that includes:

1. **Code Structure**
   - Main feature code
   - Supporting utilities/helpers
   - Types/interfaces (if applicable)

2. **Best Practices**
   - Error handling
   - Input validation
   - Logging where appropriate

3. **Integration Points**
   - How to integrate with existing code
   - Required imports/dependencies
   - Configuration needed

4. **Documentation**
   - Brief usage instructions
   - Key function descriptions

## Output Format
Provide complete, production-ready code with comments explaining key decisions`,
		context: "Password reset feature with security requirements",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "TypeScript, Python, Go, etc.",
			required: true,
		},
		{
			name: "framework",
			label: "Framework",
			type: "text",
			placeholder: "Express.js, Django, React, etc.",
			required: true,
		},
		{
			name: "feature_description",
			label: "Feature Description",
			type: "multiline",
			placeholder: "Describe the feature in detail. What should it do? What's the user story?",
			required: true,
		},
		{
			name: "constraints",
			label: "Technical Constraints",
			type: "multiline",
			placeholder: "Any constraints: existing architecture, performance requirements, dependencies...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
