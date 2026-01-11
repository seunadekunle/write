import type { Template } from "../types";

export const writeUnitTestsTemplate: Template = {
	id: "test-unit-tests",
	name: "Write Unit Tests",
	category: "testing",
	tags: ["testing", "unit-tests", "TDD", "coverage"],
	difficulty: "intermediate",

	template: `# Write Unit Tests

**Role**: QA engineer specializing in {{language}} testing with {{framework}}
**Goal**: Create comprehensive unit tests for the given code

## Testing Framework
{{framework}}

## Function to Test
**{{function_name}}**

## Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Test Requirements
Please create unit tests that cover:

1. **Happy Path**: Normal expected inputs and outputs
2. **Edge Cases**: Boundary values, empty inputs, null/undefined
3. **Error Cases**: Invalid inputs, exceptions, error handling
4. **Type Variations**: Different types if applicable

## Output Format
- Use {{framework}} syntax and conventions
- Include clear test descriptions
- Add comments explaining what each test validates
- Organize tests logically (describe/it blocks or equivalent)`,

	description: "Use to generate comprehensive unit tests for a function or class",

	tips: [
		"Include the full function signature and implementation",
		"Mention any dependencies that need mocking",
		"Specify the testing framework (Jest, pytest, JUnit, etc.)",
		"Note any specific edge cases you want covered",
	],

	example: {
		filled: `# Write Unit Tests

**Role**: QA engineer specializing in TypeScript testing with Jest
**Goal**: Create comprehensive unit tests for the given code

## Testing Framework
Jest with TypeScript

## Function to Test
**calculateDiscount**

## Code
\`\`\`typescript
interface CartItem {
  price: number;
  quantity: number;
}

function calculateDiscount(items: CartItem[], couponCode?: string): number {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (couponCode === 'SAVE10') {
    return subtotal * 0.1;
  } else if (couponCode === 'SAVE20' && subtotal >= 100) {
    return subtotal * 0.2;
  }

  return 0;
}
\`\`\`

## Test Requirements
Please create unit tests that cover:

1. **Happy Path**: Normal expected inputs and outputs
2. **Edge Cases**: Boundary values, empty inputs, null/undefined
3. **Error Cases**: Invalid inputs, exceptions, error handling
4. **Type Variations**: Different types if applicable

## Output Format
- Use Jest syntax and conventions
- Include clear test descriptions
- Add comments explaining what each test validates
- Organize tests logically (describe/it blocks or equivalent)`,
		context: "Shopping cart discount calculator needing test coverage",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "TypeScript, Python, Java, etc.",
			required: true,
		},
		{
			name: "framework",
			label: "Testing Framework",
			type: "text",
			placeholder: "Jest, pytest, JUnit, Mocha, etc.",
			required: true,
		},
		{
			name: "function_name",
			label: "Function/Method Name",
			type: "text",
			placeholder: "calculateTotal, validateEmail, etc.",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Test",
			type: "code",
			placeholder: "Paste the function or class you want to test...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
