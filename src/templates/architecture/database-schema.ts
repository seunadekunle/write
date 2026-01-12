import type { Template } from "../types";

export const databaseSchemaTemplate: Template = {
	id: "arch-database-schema",
	name: "Design Database Schema",
	category: "architecture",
	tags: ["architecture", "database", "schema", "design"],
	difficulty: "advanced",

	template: `# Design Database Schema

**Role**: Database architect specializing in {{database_type}}
**Goal**: Design a robust database schema for {{domain}}

## Database Type
{{database_type}}

## Domain
{{domain}}

## Entities
{{entities}}

## Relationships
{{relationships}}

## Design Request
Please design a database schema that includes:

1. **Table/Collection Design**
   - Table definitions with columns
   - Data types and constraints
   - Primary and foreign keys

2. **Indexing Strategy**
   - Primary indexes
   - Secondary indexes for queries
   - Composite indexes where needed

3. **Normalization**
   - Appropriate normalization level
   - Denormalization decisions with rationale

4. **Data Integrity**
   - Constraints (unique, check, not null)
   - Referential integrity
   - Default values

5. **Performance Considerations**
   - Partitioning strategy (if applicable)
   - Archive/retention approach
   - Query optimization notes

6. **Additional Features**
   - Audit fields (created_at, updated_at, etc.)
   - Soft delete implementation
   - Multi-tenancy considerations (if applicable)

## Output Format
Provide:
- Complete schema definition (SQL DDL or equivalent)
- ER diagram description
- Key design decisions and trade-offs`,

	description: "Use to design a database schema for a new domain or feature",

	tips: [
		"List all entities with their key attributes",
		"Describe relationships clearly (one-to-many, many-to-many)",
		"Mention expected data volumes and access patterns",
		"Include any specific query requirements",
	],

	example: {
		filled: `# Design Database Schema

**Role**: Database architect specializing in PostgreSQL
**Goal**: Design a robust database schema for E-learning Platform

## Database Type
PostgreSQL 15

## Domain
E-learning platform with courses, lessons, users, and progress tracking. Users can be students or instructors. Need to track quiz attempts, certificates, and course reviews.

## Entities
- User: id, email, name, role (student/instructor/admin), profile
- Course: id, title, description, instructor_id, price, status, category
- Lesson: id, course_id, title, content, video_url, order, duration
- Enrollment: id, user_id, course_id, enrolled_at, completed_at
- Progress: id, enrollment_id, lesson_id, status, completed_at
- Quiz: id, lesson_id, questions (JSONB)
- QuizAttempt: id, user_id, quiz_id, score, answers, attempted_at
- Review: id, course_id, user_id, rating, comment, created_at
- Certificate: id, enrollment_id, issued_at, certificate_url

## Relationships
- User (instructor) → has many → Courses
- User (student) → has many → Enrollments → belongs to → Course
- Course → has many → Lessons (ordered)
- Lesson → has one → Quiz
- Enrollment → has many → Progress (per lesson)
- User → has many → QuizAttempts
- Course → has many → Reviews
- Enrollment → has one → Certificate (when complete)

## Design Request
Please design a database schema that includes:

1. **Table/Collection Design**
   - Table definitions with columns
   - Data types and constraints
   - Primary and foreign keys

2. **Indexing Strategy**
   - Primary indexes
   - Secondary indexes for queries
   - Composite indexes where needed

3. **Normalization**
   - Appropriate normalization level
   - Denormalization decisions with rationale

4. **Data Integrity**
   - Constraints (unique, check, not null)
   - Referential integrity
   - Default values

5. **Performance Considerations**
   - Partitioning strategy (if applicable)
   - Archive/retention approach
   - Query optimization notes

6. **Additional Features**
   - Audit fields (created_at, updated_at, etc.)
   - Soft delete implementation
   - Multi-tenancy considerations (if applicable)

## Output Format
Provide:
- Complete schema definition (SQL DDL or equivalent)
- ER diagram description
- Key design decisions and trade-offs`,
		context: "E-learning platform database design",
	},

	variables: [
		{
			name: "database_type",
			label: "Database Type",
			type: "text",
			placeholder: "PostgreSQL, MySQL, MongoDB, etc.",
			required: true,
		},
		{
			name: "domain",
			label: "Domain",
			type: "multiline",
			placeholder: "Describe the business domain and what the database needs to support...",
			required: true,
		},
		{
			name: "entities",
			label: "Entities",
			type: "multiline",
			placeholder: "List entities with their key attributes:\n- User: id, email, name\n- Order: id, user_id, total, status",
			required: true,
		},
		{
			name: "relationships",
			label: "Relationships",
			type: "multiline",
			placeholder: "Describe relationships:\n- User has many Orders\n- Order has many OrderItems\n- Product belongs to Category",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
