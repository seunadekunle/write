import type { Template } from "../types";

export const optimizePerformanceTemplate: Template = {
	id: "optimize-performance",
	name: "Optimize Performance",
	category: "optimization",
	tags: ["optimization", "performance", "speed", "efficiency"],
	difficulty: "advanced",

	template: `# Optimize Performance

**Role**: Performance optimization expert in {{language}}
**Goal**: Optimize code for {{performance_goal}}

## Performance Goal
{{performance_goal}}

## Current Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Optimization Request
Please optimize this code focusing on:

1. **Algorithm Optimization**
   - Time complexity improvements
   - Space complexity trade-offs
   - More efficient data structures

2. **Code-Level Optimizations**
   - Reduce unnecessary operations
   - Optimize loops and iterations
   - Minimize memory allocations

3. **Language-Specific Optimizations**
   - Use performant language features
   - Leverage built-in optimizations
   - Avoid known performance pitfalls

4. **Measurement**
   - Before/after complexity analysis
   - Suggestions for benchmarking
   - Key metrics to monitor

## Output Format
Provide optimized code with:
- Explanation of each optimization
- Estimated performance improvement
- Any trade-offs introduced`,

	description: "Use to optimize code for better performance",

	tips: [
		"Describe current performance issues (slow, memory hungry, etc.)",
		"Specify performance requirements if known",
		"Include context about data sizes and usage patterns",
		"Mention if there are constraints (can't use certain libraries, etc.)",
	],

	example: {
		filled: `# Optimize Performance

**Role**: Performance optimization expert in Python
**Goal**: Optimize code for Reduce execution time from 5+ seconds to under 500ms for processing 100k records

## Performance Goal
Reduce execution time from 5+ seconds to under 500ms for processing 100k records

## Current Code
\`\`\`python
def find_duplicates(items):
    duplicates = []
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            if items[i]['email'] == items[j]['email']:
                if items[i] not in duplicates:
                    duplicates.append(items[i])
                if items[j] not in duplicates:
                    duplicates.append(items[j])
    return duplicates

def process_users(users):
    results = []
    for user in users:
        user_copy = dict(user)
        user_copy['full_name'] = user['first_name'] + ' ' + user['last_name']
        user_copy['email_domain'] = user['email'].split('@')[1]
        results.append(user_copy)
    return results
\`\`\`

## Optimization Request
Please optimize this code focusing on:

1. **Algorithm Optimization**
   - Time complexity improvements
   - Space complexity trade-offs
   - More efficient data structures

2. **Code-Level Optimizations**
   - Reduce unnecessary operations
   - Optimize loops and iterations
   - Minimize memory allocations

3. **Language-Specific Optimizations**
   - Use performant language features
   - Leverage built-in optimizations
   - Avoid known performance pitfalls

4. **Measurement**
   - Before/after complexity analysis
   - Suggestions for benchmarking
   - Key metrics to monitor

## Output Format
Provide optimized code with:
- Explanation of each optimization
- Estimated performance improvement
- Any trade-offs introduced`,
		context: "O(n²) algorithm needing optimization for large datasets",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "Python, JavaScript, Java, etc.",
			required: true,
		},
		{
			name: "performance_goal",
			label: "Performance Goal",
			type: "multiline",
			placeholder: "What performance improvement are you targeting? (e.g., 'reduce response time from 2s to 200ms', 'handle 10x more concurrent users')",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Optimize",
			type: "code",
			placeholder: "Paste the code you want to optimize...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
