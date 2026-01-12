import type { Template } from "../types";

export const edgeCaseTestsTemplate: Template = {
	id: "test-edge-cases",
	name: "Generate Edge Case Tests",
	category: "testing",
	tags: ["testing", "edge-cases", "boundary", "robustness"],
	difficulty: "intermediate",

	template: `# Generate Edge Case Tests

**Role**: QA engineer focused on edge case and boundary testing
**Goal**: Identify and test edge cases for {{function_name}}

## Function to Test
**{{function_name}}**

## Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Edge Case Analysis Request
Please identify and create tests for:

1. **Boundary Values**
   - Minimum/maximum values
   - Off-by-one scenarios
   - Zero, negative, very large numbers

2. **Empty/Null/Undefined**
   - Empty strings, arrays, objects
   - Null and undefined inputs
   - Missing optional parameters

3. **Type Edge Cases**
   - Unexpected types
   - Type coercion issues
   - Special numeric values (NaN, Infinity)

4. **State Edge Cases**
   - Race conditions (if async)
   - State mutation issues
   - Concurrent access

5. **Format Edge Cases**
   - Unicode, special characters
   - Whitespace variations
   - Malformed input

## Output Format
For each edge case:
- Describe the scenario
- Explain why it might cause issues
- Provide the test code
- Note the expected behavior`,

	description: "Use to discover and test edge cases that might break your code",

	tips: [
		"Think about what could go wrong with each input",
		"Consider inputs from untrusted sources",
		"Look for implicit assumptions in the code",
		"Test boundaries of any numeric ranges",
	],

	example: {
		filled: `# Generate Edge Case Tests

**Role**: QA engineer focused on edge case and boundary testing
**Goal**: Identify and test edge cases for parseUserAge

## Function to Test
**parseUserAge**

## Code
\`\`\`javascript
function parseUserAge(input) {
  const age = parseInt(input, 10);
  if (age < 0 || age > 150) {
    throw new Error('Invalid age');
  }
  return age;
}
\`\`\`

## Edge Case Analysis Request
Please identify and create tests for:

1. **Boundary Values**
   - Minimum/maximum values
   - Off-by-one scenarios
   - Zero, negative, very large numbers

2. **Empty/Null/Undefined**
   - Empty strings, arrays, objects
   - Null and undefined inputs
   - Missing optional parameters

3. **Type Edge Cases**
   - Unexpected types
   - Type coercion issues
   - Special numeric values (NaN, Infinity)

4. **State Edge Cases**
   - Race conditions (if async)
   - State mutation issues
   - Concurrent access

5. **Format Edge Cases**
   - Unicode, special characters
   - Whitespace variations
   - Malformed input

## Output Format
For each edge case:
- Describe the scenario
- Explain why it might cause issues
- Provide the test code
- Note the expected behavior`,
		context: "Age parsing function with many potential edge cases",
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
			name: "function_name",
			label: "Function Name",
			type: "text",
			placeholder: "parseUserAge, validateInput, etc.",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Test",
			type: "code",
			placeholder: "Paste the function you want edge case tests for...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
