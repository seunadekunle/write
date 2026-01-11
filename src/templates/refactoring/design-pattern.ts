import type { Template } from "../types";

export const designPatternTemplate: Template = {
	id: "refactor-design-pattern",
	name: "Convert to Design Pattern",
	category: "refactoring",
	tags: ["refactoring", "design-patterns", "architecture"],
	difficulty: "advanced",

	template: `# Convert to Design Pattern

**Role**: Software architect with expertise in {{language}} design patterns
**Goal**: Refactor code to implement the {{pattern_name}} pattern

## Target Pattern
**{{pattern_name}}**

## Current Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Refactoring Request
Please refactor this code to implement the {{pattern_name}} pattern:

1. **Pattern Overview**: Briefly explain when and why to use this pattern
2. **Current Issues**: Identify problems in the current code that this pattern solves
3. **Implementation**:
   - Define required interfaces/abstract classes
   - Implement concrete classes
   - Show how to use the pattern
4. **Benefits**: Explain improvements gained from this refactoring
5. **Trade-offs**: Note any added complexity or downsides

## Requirements
- Provide complete, runnable code
- Follow {{language}} idioms and conventions
- Keep the implementation practical, not academic`,

	description: "Use to refactor code using a specific design pattern",

	tips: [
		"Choose the right pattern for the problem (Factory, Strategy, Observer, etc.)",
		"Include enough context to understand the problem being solved",
		"Mention if you want the classic GoF version or a modern adaptation",
		"Consider simpler solutions before adding pattern complexity",
	],

	example: {
		filled: `# Convert to Design Pattern

**Role**: Software architect with expertise in TypeScript design patterns
**Goal**: Refactor code to implement the Strategy pattern

## Target Pattern
**Strategy Pattern**

## Current Code
\`\`\`typescript
class PaymentProcessor {
  processPayment(amount: number, method: string) {
    if (method === 'credit') {
      console.log('Processing credit card...');
      // Credit card logic
      return { success: true, fee: amount * 0.029 };
    } else if (method === 'paypal') {
      console.log('Processing PayPal...');
      // PayPal logic
      return { success: true, fee: amount * 0.034 };
    } else if (method === 'crypto') {
      console.log('Processing crypto...');
      // Crypto logic
      return { success: true, fee: amount * 0.01 };
    } else {
      throw new Error('Unknown payment method');
    }
  }
}
\`\`\`

## Refactoring Request
Please refactor this code to implement the Strategy pattern:

1. **Pattern Overview**: Briefly explain when and why to use this pattern
2. **Current Issues**: Identify problems in the current code that this pattern solves
3. **Implementation**:
   - Define required interfaces/abstract classes
   - Implement concrete classes
   - Show how to use the pattern
4. **Benefits**: Explain improvements gained from this refactoring
5. **Trade-offs**: Note any added complexity or downsides

## Requirements
- Provide complete, runnable code
- Follow TypeScript idioms and conventions
- Keep the implementation practical, not academic`,
		context: "Switch statement that can be replaced with Strategy pattern",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "TypeScript, Java, Python, etc.",
			required: true,
		},
		{
			name: "pattern_name",
			label: "Design Pattern",
			type: "text",
			placeholder: "Strategy, Factory, Observer, Decorator, etc.",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Current Code",
			type: "code",
			placeholder: "Paste the code you want to refactor...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
