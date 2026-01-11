import type { Template } from "../types";

export const securityReviewTemplate: Template = {
	id: "review-security",
	name: "Security Review",
	category: "code-review",
	tags: ["security", "vulnerabilities", "review", "owasp"],
	difficulty: "advanced",

	template: `# Security Review

**Role**: Application security expert specializing in {{language}}
**Goal**: Identify security vulnerabilities and recommend mitigations

## Context
{{context}}

## Code to Review
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Security Analysis Request
Please analyze this code for:

1. **Injection Flaws**: SQL injection, command injection, XSS
2. **Authentication Issues**: Weak auth, session management problems
3. **Access Control**: Authorization bypasses, privilege escalation
4. **Data Exposure**: Sensitive data leaks, improper encryption
5. **Input Validation**: Missing or insufficient validation
6. **Dependencies**: Known vulnerabilities in used libraries
7. **Logging**: Sensitive data in logs, missing security events

## Request
For each vulnerability found:
- Severity: Critical/High/Medium/Low
- Description of the vulnerability
- Attack scenario (how it could be exploited)
- Recommended fix with code example
- Prevention best practices`,

	description: "Use for a focused security audit to find vulnerabilities",

	tips: [
		"Include context about data sources (user input, APIs, etc.)",
		"Mention if this is public-facing or internal code",
		"List any security requirements or compliance needs",
		"Include related configuration if relevant",
	],

	example: {
		filled: `# Security Review

**Role**: Application security expert specializing in Node.js
**Goal**: Identify security vulnerabilities and recommend mitigations

## Context
This is a public API endpoint that handles file uploads from users. Files are stored on S3 and paths are saved to a PostgreSQL database.

## Code to Review
\`\`\`javascript
app.post('/upload', (req, res) => {
  const filename = req.body.filename;
  const content = req.body.content;

  fs.writeFileSync('/uploads/' + filename, content);

  db.query(\`INSERT INTO files (name, path) VALUES ('\${filename}', '/uploads/\${filename}')\`);

  res.json({ success: true, path: '/uploads/' + filename });
});
\`\`\`

## Security Analysis Request
Please analyze this code for:

1. **Injection Flaws**: SQL injection, command injection, XSS
2. **Authentication Issues**: Weak auth, session management problems
3. **Access Control**: Authorization bypasses, privilege escalation
4. **Data Exposure**: Sensitive data leaks, improper encryption
5. **Input Validation**: Missing or insufficient validation
6. **Dependencies**: Known vulnerabilities in used libraries
7. **Logging**: Sensitive data in logs, missing security events

## Request
For each vulnerability found:
- Severity: Critical/High/Medium/Low
- Description of the vulnerability
- Attack scenario (how it could be exploited)
- Recommended fix with code example
- Prevention best practices`,
		context: "File upload endpoint with multiple critical vulnerabilities",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "Node.js, Python, Java, etc.",
			required: true,
		},
		{
			name: "context",
			label: "Context",
			type: "multiline",
			placeholder: "Describe where this code runs, what data it handles, who can access it...",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Review",
			type: "code",
			placeholder: "Paste the code you want security reviewed...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
