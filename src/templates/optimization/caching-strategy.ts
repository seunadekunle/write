import type { Template } from "../types";

export const cachingStrategyTemplate: Template = {
	id: "optimize-caching",
	name: "Add Caching Strategy",
	category: "optimization",
	tags: ["optimization", "caching", "performance", "redis"],
	difficulty: "advanced",

	template: `# Add Caching Strategy

**Role**: Backend performance engineer specializing in {{language}}
**Goal**: Implement effective caching for {{feature_name}}

## Feature to Cache
{{feature_name}}

## Cache Requirements
{{cache_requirements}}

## Implementation Request
Please design and implement a caching strategy that includes:

1. **Cache Design**
   - What to cache (data, computed results, etc.)
   - Cache key strategy
   - TTL (time-to-live) recommendations
   - Cache invalidation strategy

2. **Implementation**
   - Cache layer code
   - Integration with existing code
   - Fallback handling when cache misses

3. **Cache Patterns**
   - Cache-aside vs write-through vs write-behind
   - Lazy loading vs eager loading
   - Stale-while-revalidate if applicable

4. **Edge Cases**
   - Cache stampede prevention
   - Handling cache failures gracefully
   - Memory/storage considerations

5. **Monitoring**
   - Cache hit/miss metrics
   - Key health indicators
   - Alerting recommendations

## Output Format
Provide complete implementation with explanation of design decisions`,

	description: "Use to design and implement a caching layer for better performance",

	tips: [
		"Describe what data needs caching and its access patterns",
		"Specify available caching infrastructure (Redis, Memcached, in-memory)",
		"Include current performance issues",
		"Mention data consistency requirements",
	],

	example: {
		filled: `# Add Caching Strategy

**Role**: Backend performance engineer specializing in Node.js
**Goal**: Implement effective caching for Product catalog API

## Feature to Cache
Product catalog API - returns product listings with filters, categories, and search. Currently hitting database on every request.

## Cache Requirements
- Use Redis (already deployed, 4GB available)
- Products change infrequently (updates via admin panel)
- Read-heavy workload (1000:1 read to write ratio)
- Need to support filters: category, price range, in-stock
- Must invalidate when products are updated
- Target: reduce p95 latency from 800ms to under 100ms

## Implementation Request
Please design and implement a caching strategy that includes:

1. **Cache Design**
   - What to cache (data, computed results, etc.)
   - Cache key strategy
   - TTL (time-to-live) recommendations
   - Cache invalidation strategy

2. **Implementation**
   - Cache layer code
   - Integration with existing code
   - Fallback handling when cache misses

3. **Cache Patterns**
   - Cache-aside vs write-through vs write-behind
   - Lazy loading vs eager loading
   - Stale-while-revalidate if applicable

4. **Edge Cases**
   - Cache stampede prevention
   - Handling cache failures gracefully
   - Memory/storage considerations

5. **Monitoring**
   - Cache hit/miss metrics
   - Key health indicators
   - Alerting recommendations

## Output Format
Provide complete implementation with explanation of design decisions`,
		context: "Product catalog API needing Redis caching",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "Node.js, Python, Go, etc.",
			required: true,
		},
		{
			name: "feature_name",
			label: "Feature to Cache",
			type: "text",
			placeholder: "Product catalog API, User sessions, etc.",
			required: true,
		},
		{
			name: "cache_requirements",
			label: "Cache Requirements",
			type: "multiline",
			placeholder: "Describe: available infrastructure (Redis, in-memory), data access patterns, consistency needs, performance targets...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
