import type { Template } from "../types";

export const runtimeErrorTemplate: Template = {
	id: "debug-runtime-error",
	name: "Debug Runtime Error",
	category: "debugging",
	tags: ["error", "stack-trace", "debugging"],
	difficulty: "beginner",

	template: `# Debug Runtime Error

**Role**: Expert {{language}} debugger
**Goal**: Fix the runtime error in {{component_name}}
**Constraints**: Maintain existing API, add error handling

## Error Details
\`\`\`
{{error_message}}
\`\`\`

## Steps to Reproduce
{{steps_to_reproduce}}

## Expected Behavior
{{expected_behavior}}

## Current Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Request
Please analyze the error, identify root cause, and provide a fix that:
1. Resolves the immediate error
2. Adds appropriate error handling
3. Includes logging for future debugging
4. Explains why the error occurred`,

	description: "Use when you encounter a runtime error and need debugging help",

	tips: [
		"Always include the full error stack trace",
		"Provide minimal reproducible code, not entire file",
		"Specify language/framework version - errors vary between versions",
		"Include what you've already tried - helps AI avoid those",
	],

	example: {
		filled: `# Debug Runtime Error

**Role**: Expert TypeScript debugger
**Goal**: Fix the runtime error in UserProfile component
**Constraints**: Maintain existing API, add error handling

## Error Details
\`\`\`
TypeError: Cannot read property 'name' of undefined
  at UserProfile.render (UserProfile.tsx:45)
\`\`\`

## Steps to Reproduce
1. Navigate to /profile
2. Click logout
3. Click browser back button
4. Error appears

## Expected Behavior
Should redirect to login or show loading state

## Current Code
\`\`\`typescript
function UserProfile() {
  const user = useUser();
  return <h1>Welcome {user.name}</h1>;
}
\`\`\`

## Request
Please analyze the error, identify root cause, and provide a fix that:
1. Resolves the immediate error
2. Adds appropriate error handling
3. Includes logging for future debugging
4. Explains why the error occurred`,
		context: "Common scenario: accessing properties on undefined after logout",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "JavaScript, Python, etc.",
			required: true,
		},
		{
			name: "component_name",
			label: "Component/Module Name",
			type: "text",
			placeholder: "UserProfile",
			required: true,
		},
		{
			name: "error_message",
			label: "Error Message & Stack Trace",
			type: "code",
			placeholder: "Paste full error here...",
			required: true,
		},
		{
			name: "steps_to_reproduce",
			label: "Steps to Reproduce",
			type: "multiline",
			placeholder: "1. Do this\n2. Then this\n3. Error occurs",
			required: true,
		},
		{
			name: "expected_behavior",
			label: "Expected Behavior",
			type: "multiline",
			placeholder: "What should happen instead?",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Relevant Code",
			type: "code",
			placeholder: "Paste code where error occurs...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
