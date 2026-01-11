import type { Template } from "../types";

export const performanceReviewTemplate: Template = {
	id: "review-performance",
	name: "Performance Review",
	category: "code-review",
	tags: ["performance", "optimization", "review", "scalability"],
	difficulty: "advanced",

	template: `# Performance Review

**Role**: Performance engineering expert in {{language}}
**Goal**: Identify performance bottlenecks and scalability issues

## Scale Requirements
{{scale_requirements}}

## Code to Review
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Performance Analysis Request
Please analyze this code for:

1. **Time Complexity**: Algorithm efficiency and Big-O analysis
2. **Memory Usage**: Memory leaks, excessive allocations, data structure choices
3. **I/O Operations**: Database queries, file operations, network calls
4. **Concurrency**: Race conditions, deadlocks, thread safety
5. **Caching Opportunities**: Data that could be cached
6. **Lazy Loading**: Operations that could be deferred

## Request
Provide:
- Performance bottlenecks identified (ranked by impact)
- Estimated performance impact of each issue
- Optimized code alternatives with explanations
- Benchmarking suggestions to validate improvements
- Scalability recommendations for high load scenarios`,

	description: "Use to find performance bottlenecks and get optimization recommendations",

	tips: [
		"Describe your expected load (requests/sec, data volume, etc.)",
		"Include any performance issues you've observed",
		"Mention if this runs in a hot path or critical section",
		"Specify any constraints (memory limits, latency requirements)",
	],

	example: {
		filled: `# Performance Review

**Role**: Performance engineering expert in Python
**Goal**: Identify performance bottlenecks and scalability issues

## Scale Requirements
This function runs on every API request (10k requests/minute).
We've noticed it's slow with large datasets (>1000 items).
Current average response time is 500ms, target is <100ms.

## Code to Review
\`\`\`python
def get_user_recommendations(user_id):
    user = db.query(f"SELECT * FROM users WHERE id = {user_id}").first()
    all_products = db.query("SELECT * FROM products").all()

    recommendations = []
    for product in all_products:
        purchases = db.query(f"SELECT * FROM purchases WHERE product_id = {product.id}").all()
        if is_relevant(user, product, purchases):
            recommendations.append(product)

    return sorted(recommendations, key=lambda p: p.score, reverse=True)[:10]
\`\`\`

## Performance Analysis Request
Please analyze this code for:

1. **Time Complexity**: Algorithm efficiency and Big-O analysis
2. **Memory Usage**: Memory leaks, excessive allocations, data structure choices
3. **I/O Operations**: Database queries, file operations, network calls
4. **Concurrency**: Race conditions, deadlocks, thread safety
5. **Caching Opportunities**: Data that could be cached
6. **Lazy Loading**: Operations that could be deferred

## Request
Provide:
- Performance bottlenecks identified (ranked by impact)
- Estimated performance impact of each issue
- Optimized code alternatives with explanations
- Benchmarking suggestions to validate improvements
- Scalability recommendations for high load scenarios`,
		context: "N+1 query problem with O(n) database calls",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "Python, Java, etc.",
			required: true,
		},
		{
			name: "scale_requirements",
			label: "Scale Requirements",
			type: "multiline",
			placeholder: "Expected load, current performance, target performance...",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Review",
			type: "code",
			placeholder: "Paste the code you want performance reviewed...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
