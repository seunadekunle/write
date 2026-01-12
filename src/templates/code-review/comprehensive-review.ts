import type { Template } from "../types";

export const comprehensiveReviewTemplate: Template = {
	id: "review-comprehensive",
	name: "Comprehensive Code Review",
	category: "code-review",
	tags: ["review", "quality", "best-practices", "bugs"],
	difficulty: "intermediate",

	template: `# Comprehensive Code Review

**Role**: Senior {{language}} developer with 20+ years of experience
**Goal**: Perform a thorough code review covering all aspects of code quality

## Code Purpose
{{goal}}

## Code to Review
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Review Criteria
Please evaluate the code for:

1. **Correctness**: Are there any bugs or logic errors?
2. **Security**: Are there vulnerabilities (SQL injection, XSS, etc.)?
3. **Performance**: Are there any bottlenecks or inefficiencies?
4. **Readability**: Is the code clear and well-organized?
5. **Maintainability**: Will this code be easy to modify in the future?
6. **Best Practices**: Does it follow language/framework conventions?

## Request
Provide:
- A summary of overall code quality (Good/Needs Work/Critical Issues)
- Specific issues found with line references
- Concrete suggestions for improvement
- Any positive aspects worth highlighting`,

	description: "Use for a thorough review covering bugs, security, performance, and best practices",

	tips: [
		"Explain what the code is supposed to do for better context",
		"Include the full function/class, not just a snippet",
		"Mention any specific concerns you have",
		"Specify your team's coding standards if relevant",
	],

	example: {
		filled: `# Comprehensive Code Review

**Role**: Senior Python developer with 20+ years of experience
**Goal**: Perform a thorough code review covering all aspects of code quality

## Code Purpose
This function handles user authentication by checking credentials against the database

## Code to Review
\`\`\`python
def login(username, password):
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    result = db.execute(query)
    if result:
        session['user'] = username
        return True
    return False
\`\`\`

## Review Criteria
Please evaluate the code for:

1. **Correctness**: Are there any bugs or logic errors?
2. **Security**: Are there vulnerabilities (SQL injection, XSS, etc.)?
3. **Performance**: Are there any bottlenecks or inefficiencies?
4. **Readability**: Is the code clear and well-organized?
5. **Maintainability**: Will this code be easy to modify in the future?
6. **Best Practices**: Does it follow language/framework conventions?

## Request
Provide:
- A summary of overall code quality (Good/Needs Work/Critical Issues)
- Specific issues found with line references
- Concrete suggestions for improvement
- Any positive aspects worth highlighting`,
		context: "Authentication code with serious security vulnerabilities",
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
			name: "goal",
			label: "Code Purpose",
			type: "multiline",
			placeholder: "Describe what this code is supposed to do...",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Review",
			type: "code",
			placeholder: "Paste the code you want reviewed...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
