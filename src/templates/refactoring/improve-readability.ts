import type { Template } from "../types";

export const improveReadabilityTemplate: Template = {
	id: "refactor-readability",
	name: "Refactor for Readability",
	category: "refactoring",
	tags: ["refactoring", "readability", "clean-code", "maintainability"],
	difficulty: "beginner",

	template: `# Refactor for Readability

**Role**: Clean code advocate and {{language}} expert
**Goal**: Improve code readability and maintainability

## Code to Refactor
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Refactoring Request
Please refactor this code to:

1. **Extract Methods**: Break down long functions into smaller, focused methods
2. **Improve Names**: Use clear, descriptive variable and function names
3. **Reduce Complexity**: Simplify conditionals and reduce nesting
4. **Add Structure**: Organize code logically with clear sections
5. **Remove Duplication**: Eliminate repeated code patterns

## Requirements
- Maintain the exact same functionality
- Make the code self-documenting where possible
- Follow {{language}} naming conventions
- Explain each refactoring decision`,

	description: "Use when code works but is hard to read or understand",

	tips: [
		"Include the full function/class, not just fragments",
		"Mention any parts that are particularly confusing",
		"Specify any coding style guides you follow",
		"Note if there are constraints (performance, compatibility)",
	],

	example: {
		filled: `# Refactor for Readability

**Role**: Clean code advocate and JavaScript expert
**Goal**: Improve code readability and maintainability

## Code to Refactor
\`\`\`javascript
function p(d) {
  let r = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].a && d[i].s === 'active' && new Date(d[i].e) > new Date()) {
      if (d[i].t === 'premium' || d[i].t === 'enterprise') {
        r.push({ n: d[i].n, e: d[i].e, t: d[i].t });
      }
    }
  }
  return r.sort((a, b) => new Date(a.e) - new Date(b.e));
}
\`\`\`

## Refactoring Request
Please refactor this code to:

1. **Extract Methods**: Break down long functions into smaller, focused methods
2. **Improve Names**: Use clear, descriptive variable and function names
3. **Reduce Complexity**: Simplify conditionals and reduce nesting
4. **Add Structure**: Organize code logically with clear sections
5. **Remove Duplication**: Eliminate repeated code patterns

## Requirements
- Maintain the exact same functionality
- Make the code self-documenting where possible
- Follow JavaScript naming conventions
- Explain each refactoring decision`,
		context: "Cryptic single-letter variables making code hard to understand",
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
			name: "code_snippet",
			label: "Code to Refactor",
			type: "code",
			placeholder: "Paste the code you want to make more readable...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
