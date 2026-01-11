import type { Template } from "../types";

export const writeReadmeTemplate: Template = {
	id: "docs-readme",
	name: "Write README",
	category: "documentation",
	tags: ["documentation", "readme", "project", "getting-started"],
	difficulty: "beginner",

	template: `# Write README

**Role**: Technical writer creating developer documentation
**Goal**: Create a comprehensive README for {{project_name}}

## Project Information

**Project Name**: {{project_name}}

**Description**: {{description}}

**Tech Stack**: {{tech_stack}}

## README Sections to Include

Please create a README.md with:

1. **Header**
   - Project name and logo/badges (if applicable)
   - One-line description
   - Key features (3-5 bullet points)

2. **Getting Started**
   - Prerequisites
   - Installation steps
   - Configuration/environment setup

3. **Usage**
   - Basic usage examples
   - Common use cases
   - Code snippets

4. **API Reference** (if applicable)
   - Key endpoints or methods
   - Parameters and return values

5. **Development**
   - How to run locally
   - How to run tests
   - Contribution guidelines

6. **Additional Sections**
   - Troubleshooting/FAQ
   - License
   - Contact/support info

## Output Format
Use Markdown with proper formatting, code blocks, and headers`,

	description: "Use to generate a professional README for your project",

	tips: [
		"Include all major technologies and frameworks used",
		"Describe what makes your project unique or useful",
		"Think about what a new developer would need to get started",
		"Add badges for build status, coverage, version if applicable",
	],

	example: {
		filled: `# Write README

**Role**: Technical writer creating developer documentation
**Goal**: Create a comprehensive README for TaskFlow

## Project Information

**Project Name**: TaskFlow

**Description**: A modern task management API built with Node.js. Features include real-time updates, team collaboration, integrations with Slack and GitHub, and comprehensive analytics.

**Tech Stack**: Node.js, Express, TypeScript, PostgreSQL, Redis, Socket.io, Docker

## README Sections to Include

Please create a README.md with:

1. **Header**
   - Project name and logo/badges (if applicable)
   - One-line description
   - Key features (3-5 bullet points)

2. **Getting Started**
   - Prerequisites
   - Installation steps
   - Configuration/environment setup

3. **Usage**
   - Basic usage examples
   - Common use cases
   - Code snippets

4. **API Reference** (if applicable)
   - Key endpoints or methods
   - Parameters and return values

5. **Development**
   - How to run locally
   - How to run tests
   - Contribution guidelines

6. **Additional Sections**
   - Troubleshooting/FAQ
   - License
   - Contact/support info

## Output Format
Use Markdown with proper formatting, code blocks, and headers`,
		context: "Creating README for a task management API",
	},

	variables: [
		{
			name: "project_name",
			label: "Project Name",
			type: "text",
			placeholder: "TaskFlow, MyAPI, etc.",
			required: true,
		},
		{
			name: "description",
			label: "Project Description",
			type: "multiline",
			placeholder: "Describe what your project does, its main features, and what problem it solves...",
			required: true,
		},
		{
			name: "tech_stack",
			label: "Tech Stack",
			type: "text",
			placeholder: "Node.js, React, PostgreSQL, Docker, etc.",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
