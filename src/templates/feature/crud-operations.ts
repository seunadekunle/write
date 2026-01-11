import type { Template } from "../types";

export const crudOperationsTemplate: Template = {
	id: "feature-crud",
	name: "Generate CRUD Operations",
	category: "feature",
	tags: ["feature", "CRUD", "api", "database"],
	difficulty: "intermediate",

	template: `# Generate CRUD Operations

**Role**: Backend developer specializing in {{language}} with {{framework}}
**Goal**: Create complete CRUD operations for {{entity_name}}

## Entity Details

**Entity Name**: {{entity_name}}

**Fields**:
{{fields}}

## Implementation Request
Please generate complete CRUD operations including:

1. **Database Layer**
   - Schema/model definition
   - Migration (if applicable)
   - Repository/data access layer

2. **API Endpoints**
   - CREATE: POST /{{entity_name}}s
   - READ: GET /{{entity_name}}s, GET /{{entity_name}}s/:id
   - UPDATE: PUT /{{entity_name}}s/:id
   - DELETE: DELETE /{{entity_name}}s/:id

3. **Validation**
   - Input validation for create/update
   - Type checking
   - Required field enforcement

4. **Error Handling**
   - Not found errors
   - Validation errors
   - Database errors

5. **Additional Features**
   - Pagination for list endpoint
   - Filtering/search
   - Soft delete (if appropriate)

## Output Format
Provide organized, production-ready code with proper types and error handling`,

	description: "Use to generate complete CRUD functionality for an entity",

	tips: [
		"List all fields with their types and constraints",
		"Specify relationships to other entities if any",
		"Mention any business rules for the entity",
		"Include any special requirements (soft delete, audit fields, etc.)",
	],

	example: {
		filled: `# Generate CRUD Operations

**Role**: Backend developer specializing in TypeScript with Express.js
**Goal**: Create complete CRUD operations for Product

## Entity Details

**Entity Name**: Product

**Fields**:
- id: UUID (auto-generated)
- name: string (required, max 200 chars)
- description: string (optional, max 2000 chars)
- price: decimal (required, min 0)
- category: string (required, enum: electronics, clothing, food, other)
- stock: integer (required, min 0)
- isActive: boolean (default true)
- createdAt: timestamp (auto-generated)
- updatedAt: timestamp (auto-updated)

Relationships:
- belongsTo Category (categoryId)
- hasMany ProductImage

## Implementation Request
Please generate complete CRUD operations including:

1. **Database Layer**
   - Schema/model definition
   - Migration (if applicable)
   - Repository/data access layer

2. **API Endpoints**
   - CREATE: POST /products
   - READ: GET /products, GET /products/:id
   - UPDATE: PUT /products/:id
   - DELETE: DELETE /products/:id

3. **Validation**
   - Input validation for create/update
   - Type checking
   - Required field enforcement

4. **Error Handling**
   - Not found errors
   - Validation errors
   - Database errors

5. **Additional Features**
   - Pagination for list endpoint
   - Filtering/search
   - Soft delete (if appropriate)

## Output Format
Provide organized, production-ready code with proper types and error handling`,
		context: "E-commerce product entity with full CRUD",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "TypeScript, Python, Go, etc.",
			required: true,
		},
		{
			name: "framework",
			label: "Framework",
			type: "text",
			placeholder: "Express.js, FastAPI, Gin, etc.",
			required: true,
		},
		{
			name: "entity_name",
			label: "Entity Name",
			type: "text",
			placeholder: "Product, User, Order, etc.",
			required: true,
		},
		{
			name: "fields",
			label: "Entity Fields",
			type: "multiline",
			placeholder: "List fields with types and constraints:\n- name: string (required)\n- email: string (unique)\n- age: number (optional)",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
