import type { Template } from "../types";

export const apiDocumentationTemplate: Template = {
	id: "docs-api",
	name: "Create API Documentation",
	category: "documentation",
	tags: ["documentation", "api", "rest", "openapi", "swagger"],
	difficulty: "intermediate",

	template: `# Create API Documentation

**Role**: API documentation specialist
**Goal**: Create comprehensive documentation for {{api_type}} API endpoints

## API Type
{{api_type}}

## Endpoints to Document
{{endpoints}}

## Code/Schema
\`\`\`
{{code_snippet}}
\`\`\`

## Documentation Request
Please create API documentation that includes:

1. **Endpoint Overview**
   - HTTP method and path
   - Brief description
   - Authentication requirements

2. **Request Details**
   - Headers (required and optional)
   - Path parameters
   - Query parameters
   - Request body schema with examples

3. **Response Details**
   - Success response (status code, body schema)
   - Error responses (status codes, error formats)
   - Response examples

4. **Usage Examples**
   - cURL commands
   - JavaScript fetch examples
   - Common use cases

5. **Notes**
   - Rate limiting
   - Pagination (if applicable)
   - Deprecation notices

## Output Format
Choose the most appropriate format: OpenAPI/Swagger YAML, Markdown, or structured documentation`,

	description: "Use to create comprehensive API endpoint documentation",

	tips: [
		"Include all request and response schemas",
		"Specify authentication methods used",
		"Document all possible error responses",
		"Include real-world usage examples",
	],

	example: {
		filled: `# Create API Documentation

**Role**: API documentation specialist
**Goal**: Create comprehensive documentation for REST API endpoints

## API Type
REST API

## Endpoints to Document
- POST /api/users - Create a new user
- GET /api/users/:id - Get user by ID
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

## Code/Schema
\`\`\`typescript
interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: string;
  updatedAt: string;
}

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
  role?: 'admin' | 'user' | 'guest';
}
\`\`\`

## Documentation Request
Please create API documentation that includes:

1. **Endpoint Overview**
   - HTTP method and path
   - Brief description
   - Authentication requirements

2. **Request Details**
   - Headers (required and optional)
   - Path parameters
   - Query parameters
   - Request body schema with examples

3. **Response Details**
   - Success response (status code, body schema)
   - Error responses (status codes, error formats)
   - Response examples

4. **Usage Examples**
   - cURL commands
   - JavaScript fetch examples
   - Common use cases

5. **Notes**
   - Rate limiting
   - Pagination (if applicable)
   - Deprecation notices

## Output Format
Choose the most appropriate format: OpenAPI/Swagger YAML, Markdown, or structured documentation`,
		context: "Documenting CRUD endpoints for user management",
	},

	variables: [
		{
			name: "api_type",
			label: "API Type",
			type: "text",
			placeholder: "REST, GraphQL, gRPC, etc.",
			required: true,
		},
		{
			name: "endpoints",
			label: "Endpoints to Document",
			type: "multiline",
			placeholder: "List the endpoints (e.g., POST /users, GET /users/:id)...",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code/Schema",
			type: "code",
			placeholder: "Paste relevant types, schemas, or endpoint code...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
