import type { Template } from "../types";

export const fixErrorTemplate: Template = {
	id: "debug-fix-error",
	name: "Fix Error with Stack Trace",
	category: "debugging",
	tags: ["error", "fix", "stack-trace", "debugging"],
	difficulty: "beginner",

	template: `# Fix Error

**Role**: Expert {{language}} developer and debugger
**Goal**: Diagnose and fix the error in the provided code

## Error Message
\`\`\`
{{error_message}}
\`\`\`

## Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Request
Please:
1. Explain what this error means
2. Identify the root cause in the code
3. Provide a corrected version of the code
4. Explain why the fix works`,

	description: "Use when you have an error message and need help understanding and fixing it",

	tips: [
		"Include the complete error message and stack trace",
		"Provide the minimal code needed to reproduce the error",
		"Mention any recent changes that might have caused the error",
		"Include the language/framework version if relevant",
	],

	example: {
		filled: `# Fix Error

**Role**: Expert Python developer and debugger
**Goal**: Diagnose and fix the error in the provided code

## Error Message
\`\`\`
TypeError: can only concatenate str (not "int") to str
  File "main.py", line 5, in <module>
    print("Count: " + count)
\`\`\`

## Code
\`\`\`python
count = 42
print("Count: " + count)
\`\`\`

## Request
Please:
1. Explain what this error means
2. Identify the root cause in the code
3. Provide a corrected version of the code
4. Explain why the fix works`,
		context: "Common type coercion error in Python string concatenation",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "Python, JavaScript, etc.",
			required: true,
		},
		{
			name: "error_message",
			label: "Error Message",
			type: "code",
			placeholder: "Paste the full error message and stack trace...",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code",
			type: "code",
			placeholder: "Paste the relevant code...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
