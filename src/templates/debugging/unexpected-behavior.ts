import type { Template } from "../types";

export const unexpectedBehaviorTemplate: Template = {
	id: "debug-unexpected-behavior",
	name: "Debug Unexpected Behavior",
	category: "debugging",
	tags: ["debugging", "behavior", "logic-error"],
	difficulty: "intermediate",

	template: `# Debug Unexpected Behavior

**Role**: Expert {{language}} developer
**Goal**: Find and fix the logic error causing unexpected behavior

## Expected Behavior
{{expected_behavior}}

## Actual Behavior
{{actual_behavior}}

## Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Request
Please:
1. Trace through the code logic step by step
2. Identify where the behavior diverges from expectations
3. Explain why the current code produces the actual behavior
4. Provide a corrected version that produces the expected behavior
5. Suggest how to prevent similar issues in the future`,

	description: "Use when code runs without errors but produces incorrect results",

	tips: [
		"Clearly describe what you expected vs what actually happens",
		"Include sample input/output if applicable",
		"Mention any edge cases where the behavior is particularly wrong",
		"Consider adding test cases to verify the fix",
	],

	example: {
		filled: `# Debug Unexpected Behavior

**Role**: Expert JavaScript developer
**Goal**: Find and fix the logic error causing unexpected behavior

## Expected Behavior
The function should return an array of even numbers from the input array.
Input: [1, 2, 3, 4, 5, 6] should return [2, 4, 6]

## Actual Behavior
The function returns [1, 3, 5] (odd numbers instead of even)

## Code
\`\`\`javascript
function getEvenNumbers(arr) {
  return arr.filter(n => n % 2);
}
\`\`\`

## Request
Please:
1. Trace through the code logic step by step
2. Identify where the behavior diverges from expectations
3. Explain why the current code produces the actual behavior
4. Provide a corrected version that produces the expected behavior
5. Suggest how to prevent similar issues in the future`,
		context: "Common off-by-one logic error with modulo operator",
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
			name: "expected_behavior",
			label: "Expected Behavior",
			type: "multiline",
			placeholder: "Describe what should happen, including example inputs/outputs...",
			required: true,
		},
		{
			name: "actual_behavior",
			label: "Actual Behavior",
			type: "multiline",
			placeholder: "Describe what actually happens...",
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
