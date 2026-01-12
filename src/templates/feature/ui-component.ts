import type { Template } from "../types";

export const uiComponentTemplate: Template = {
	id: "feature-ui-component",
	name: "Create UI Component",
	category: "feature",
	tags: ["feature", "component", "frontend", "UI"],
	difficulty: "intermediate",

	template: `# Create UI Component

**Role**: Frontend developer specializing in {{framework}}
**Goal**: Create a reusable {{component_name}} component

## Component Details

**Component Name**: {{component_name}}

**Props/Inputs**:
{{props}}

**Styling Approach**:
{{styling}}

## Implementation Request
Please create a component that includes:

1. **Component Structure**
   - Main component file
   - TypeScript types/interfaces
   - Default props

2. **Functionality**
   - Event handlers
   - State management (if needed)
   - Lifecycle handling

3. **Styling**
   - Responsive design
   - Theme support (if applicable)
   - Accessibility (ARIA attributes)

4. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - Focus management

5. **Documentation**
   - Props documentation
   - Usage examples
   - Storybook story (if applicable)

## Output Format
Provide complete component code following {{framework}} best practices`,

	description: "Use to generate a reusable frontend component",

	tips: [
		"List all props with their types and defaults",
		"Specify the styling approach (CSS Modules, styled-components, Tailwind, etc.)",
		"Mention any design system or UI library being used",
		"Include accessibility requirements",
	],

	example: {
		filled: `# Create UI Component

**Role**: Frontend developer specializing in React with TypeScript
**Goal**: Create a reusable Modal component

## Component Details

**Component Name**: Modal

**Props/Inputs**:
- isOpen: boolean (required) - Controls modal visibility
- onClose: () => void (required) - Called when modal should close
- title: string (optional) - Modal header title
- size: 'sm' | 'md' | 'lg' (optional, default 'md') - Modal width
- closeOnOverlayClick: boolean (optional, default true)
- closeOnEscape: boolean (optional, default true)
- children: ReactNode (required) - Modal content

**Styling Approach**:
Tailwind CSS with support for dark mode. Should integrate with existing design system that uses:
- Primary color: blue-600
- Border radius: rounded-lg
- Shadows: shadow-xl for modal

## Implementation Request
Please create a component that includes:

1. **Component Structure**
   - Main component file
   - TypeScript types/interfaces
   - Default props

2. **Functionality**
   - Event handlers
   - State management (if needed)
   - Lifecycle handling

3. **Styling**
   - Responsive design
   - Theme support (if applicable)
   - Accessibility (ARIA attributes)

4. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - Focus management

5. **Documentation**
   - Props documentation
   - Usage examples
   - Storybook story (if applicable)

## Output Format
Provide complete component code following React with TypeScript best practices`,
		context: "Reusable modal component with accessibility",
	},

	variables: [
		{
			name: "framework",
			label: "Framework",
			type: "text",
			placeholder: "React, Vue, Svelte, Angular, etc.",
			required: true,
		},
		{
			name: "component_name",
			label: "Component Name",
			type: "text",
			placeholder: "Modal, Dropdown, DataTable, etc.",
			required: true,
		},
		{
			name: "props",
			label: "Props/Inputs",
			type: "multiline",
			placeholder: "List the props:\n- isOpen: boolean (required)\n- onClose: function\n- title: string (optional)",
			required: true,
		},
		{
			name: "styling",
			label: "Styling Approach",
			type: "multiline",
			placeholder: "Describe styling: CSS Modules, Tailwind, styled-components, design system details...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
