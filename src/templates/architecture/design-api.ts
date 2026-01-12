import type { Template } from "../types";

export const designApiTemplate: Template = {
	id: "arch-design-api",
	name: "Design API Endpoint",
	category: "architecture",
	tags: ["architecture", "api", "rest", "graphql", "design"],
	difficulty: "intermediate",

	template: `# Design API Endpoint

**Role**: API architect specializing in {{api_type}} design
**Goal**: Design a well-structured API for {{resource}}

## API Type
{{api_type}}

## Resource
{{resource}}

## Required Operations
{{operations}}

## Database
{{database}}

## Design Request
Please design an API that includes:

1. **Endpoint Structure**
   - URL patterns and naming conventions
   - HTTP methods (for REST)
   - Query/Mutation structure (for GraphQL)

2. **Request/Response Design**
   - Request body schemas
   - Response formats
   - Status codes and error responses

3. **Data Validation**
   - Input validation rules
   - Type constraints
   - Business rule validations

4. **Authentication & Authorization**
   - Auth requirements per endpoint
   - Role-based access recommendations

5. **Best Practices**
   - Pagination approach
   - Filtering and sorting
   - Versioning strategy
   - Rate limiting considerations

## Output Format
Provide:
- API specification (OpenAPI/GraphQL schema)
- Example requests and responses
- Implementation notes`,

	description: "Use to design a new API endpoint or set of endpoints",

	tips: [
		"Specify the type of API (REST, GraphQL, gRPC)",
		"List all operations needed (CRUD, search, etc.)",
		"Mention any existing API conventions to follow",
		"Include relationships to other resources",
	],

	example: {
		filled: `# Design API Endpoint

**Role**: API architect specializing in REST design
**Goal**: Design a well-structured API for Order Management

## API Type
REST API (JSON)

## Resource
Order - represents a customer purchase with line items, shipping, and payment info.

Related resources:
- Customer (orders belong to a customer)
- Product (line items reference products)
- Address (shipping and billing)

## Required Operations
- Create order (from cart)
- Get order by ID
- List orders (with filters: status, date range, customer)
- Update order status
- Cancel order
- Get order history/timeline
- Calculate order totals

## Database
PostgreSQL with the following tables:
- orders (id, customer_id, status, total, created_at, updated_at)
- order_items (id, order_id, product_id, quantity, price)
- order_status_history (id, order_id, status, changed_at, changed_by)

## Design Request
Please design an API that includes:

1. **Endpoint Structure**
   - URL patterns and naming conventions
   - HTTP methods (for REST)
   - Query/Mutation structure (for GraphQL)

2. **Request/Response Design**
   - Request body schemas
   - Response formats
   - Status codes and error responses

3. **Data Validation**
   - Input validation rules
   - Type constraints
   - Business rule validations

4. **Authentication & Authorization**
   - Auth requirements per endpoint
   - Role-based access recommendations

5. **Best Practices**
   - Pagination approach
   - Filtering and sorting
   - Versioning strategy
   - Rate limiting considerations

## Output Format
Provide:
- API specification (OpenAPI/GraphQL schema)
- Example requests and responses
- Implementation notes`,
		context: "E-commerce order management API design",
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
			name: "resource",
			label: "Resource",
			type: "multiline",
			placeholder: "Describe the resource and its relationships...",
			required: true,
		},
		{
			name: "operations",
			label: "Required Operations",
			type: "multiline",
			placeholder: "List operations needed:\n- Create\n- Read\n- Update\n- Delete\n- Custom operations...",
			required: true,
		},
		{
			name: "database",
			label: "Database",
			type: "multiline",
			placeholder: "Describe the database schema or data model...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
