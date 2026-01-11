import type { Template } from "../types";

export const reduceBundleTemplate: Template = {
	id: "optimize-bundle",
	name: "Reduce Bundle Size",
	category: "optimization",
	tags: ["optimization", "bundle", "frontend", "performance"],
	difficulty: "intermediate",

	template: `# Reduce Bundle Size

**Role**: Frontend performance expert specializing in {{framework}}
**Goal**: Reduce JavaScript bundle size for better load times

## Framework
{{framework}}

## Current Issues
{{current_issues}}

## Code/Config
\`\`\`
{{code_snippet}}
\`\`\`

## Optimization Request
Please analyze and suggest optimizations for:

1. **Code Splitting**
   - Route-based splitting
   - Component lazy loading
   - Dynamic imports for heavy libraries

2. **Dependency Optimization**
   - Identify large dependencies
   - Suggest lighter alternatives
   - Tree-shaking improvements

3. **Build Configuration**
   - Minification settings
   - Compression (gzip/brotli)
   - Source map configuration for production

4. **Asset Optimization**
   - Image optimization
   - Font loading strategies
   - CSS optimization

5. **Monitoring**
   - Bundle analysis tools
   - Performance budgets
   - CI/CD integration for size checks

## Output Format
Provide specific recommendations with:
- Estimated size reduction for each change
- Implementation code/config
- Trade-offs to consider`,

	description: "Use to analyze and reduce frontend bundle size",

	tips: [
		"Include current bundle size if known",
		"Mention the build tool being used (webpack, Vite, etc.)",
		"List major dependencies that might be causing bloat",
		"Specify target bundle size if you have one",
	],

	example: {
		filled: `# Reduce Bundle Size

**Role**: Frontend performance expert specializing in React
**Goal**: Reduce JavaScript bundle size for better load times

## Framework
React 18 with Vite, TypeScript, and React Router

## Current Issues
- Main bundle is 1.2MB (gzipped 380KB)
- Initial load takes 4+ seconds on 3G
- Lighthouse performance score: 45
- Using moment.js throughout the app
- Large charting library (recharts) loaded on every page
- Full lodash import in multiple files

## Code/Config
\`\`\`javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  }
});

// Some imports used in the app:
import moment from 'moment';
import _ from 'lodash';
import { BarChart, LineChart, PieChart } from 'recharts';
\`\`\`

## Optimization Request
Please analyze and suggest optimizations for:

1. **Code Splitting**
   - Route-based splitting
   - Component lazy loading
   - Dynamic imports for heavy libraries

2. **Dependency Optimization**
   - Identify large dependencies
   - Suggest lighter alternatives
   - Tree-shaking improvements

3. **Build Configuration**
   - Minification settings
   - Compression (gzip/brotli)
   - Source map configuration for production

4. **Asset Optimization**
   - Image optimization
   - Font loading strategies
   - CSS optimization

5. **Monitoring**
   - Bundle analysis tools
   - Performance budgets
   - CI/CD integration for size checks

## Output Format
Provide specific recommendations with:
- Estimated size reduction for each change
- Implementation code/config
- Trade-offs to consider`,
		context: "React app with bloated bundle needing optimization",
	},

	variables: [
		{
			name: "framework",
			label: "Framework",
			type: "text",
			placeholder: "React, Vue, Next.js, etc.",
			required: true,
		},
		{
			name: "current_issues",
			label: "Current Issues",
			type: "multiline",
			placeholder: "Describe: current bundle size, load times, problematic dependencies, performance scores...",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Build Config / Relevant Code",
			type: "code",
			placeholder: "Paste your build config (webpack, vite, etc.) and any relevant imports...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
