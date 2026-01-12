import type { Template } from "../types";

export const addLoggingTemplate: Template = {
	id: "debug-add-logging",
	name: "Add Logging & Instrumentation",
	category: "debugging",
	tags: ["logging", "debugging", "instrumentation", "tracing"],
	difficulty: "intermediate",

	template: `# Add Logging & Instrumentation

**Role**: Expert {{language}} developer
**Goal**: Add comprehensive logging to help debug and trace execution

## Code to Instrument
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Focus Areas
{{focus_areas}}

## Request
Please add logging that:
1. Traces entry/exit of key functions with parameters and return values
2. Logs important state changes and decision points
3. Includes timing information for performance-sensitive sections
4. Uses appropriate log levels (debug, info, warn, error)
5. Formats logs for easy parsing and analysis

Provide the instrumented code with clear comments explaining each logging statement.`,

	description: "Use when you need to add debugging logs to trace execution flow",

	tips: [
		"Specify which parts of the code are most important to trace",
		"Mention any logging framework or conventions you use",
		"Consider production vs development logging needs",
		"Remember to log errors with full context",
	],

	example: {
		filled: `# Add Logging & Instrumentation

**Role**: Expert TypeScript developer
**Goal**: Add comprehensive logging to help debug and trace execution

## Code to Instrument
\`\`\`typescript
async function processOrder(order: Order): Promise<OrderResult> {
  const inventory = await checkInventory(order.items);
  if (!inventory.available) {
    throw new Error("Items not available");
  }
  const payment = await processPayment(order.payment);
  const shipment = await createShipment(order.address, order.items);
  return { orderId: order.id, status: "completed", shipment };
}
\`\`\`

## Focus Areas
- Track the order processing flow
- Log timing for each async operation
- Capture error context for debugging

## Request
Please add logging that:
1. Traces entry/exit of key functions with parameters and return values
2. Logs important state changes and decision points
3. Includes timing information for performance-sensitive sections
4. Uses appropriate log levels (debug, info, warn, error)
5. Formats logs for easy parsing and analysis

Provide the instrumented code with clear comments explaining each logging statement.`,
		context: "Adding observability to an order processing pipeline",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "TypeScript, Python, etc.",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Instrument",
			type: "code",
			placeholder: "Paste the code you want to add logging to...",
			required: true,
		},
		{
			name: "focus_areas",
			label: "Focus Areas",
			type: "multiline",
			placeholder: "What aspects do you want to trace? (e.g., performance, data flow, errors)",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
