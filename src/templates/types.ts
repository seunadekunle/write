export type TemplateCategory =
	| "debugging"
	| "feature"
	| "refactoring"
	| "code-review"
	| "testing"
	| "optimization"
	| "documentation"
	| "architecture";

export type TemplateDifficulty = "beginner" | "intermediate" | "advanced";

export type TemplateVariableType = "text" | "code" | "multiline";

export interface TemplateVariable {
	name: string;
	label: string;
	type: TemplateVariableType;
	placeholder: string;
	required: boolean;
	defaultValue?: string;
}

export interface TemplateExample {
	filled: string;
	context: string;
}

export interface Template {
	id: string;
	name: string;
	category: TemplateCategory;
	tags: string[];
	difficulty: TemplateDifficulty;

	template: string;

	description: string;
	tips: string[];
	example: TemplateExample;

	variables: TemplateVariable[];

	version: string;
	author: "system" | "user";
	createdAt: string;
	updatedAt: string;
}
