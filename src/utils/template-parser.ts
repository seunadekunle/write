import type { TemplateVariable } from "../templates/types";

export interface TemplatePlaceholder {
	start: number;
	end: number;
	name: string;
}

export interface ParsedTemplate {
	content: string;
	placeholders: TemplatePlaceholder[];
	variables: TemplateVariable[];
}

const VARIABLE_REGEX = /\{\{([^}]+)\}\}/g;

export function parseTemplate(template: string): ParsedTemplate {
	const placeholders: TemplatePlaceholder[] = [];

	const regex = new RegExp(VARIABLE_REGEX);
	let match = regex.exec(template);
	while (match !== null) {
		placeholders.push({
			start: match.index,
			end: match.index + match[0].length,
			name: match[1].trim(),
		});
		match = regex.exec(template);
	}

	return {
		content: template,
		placeholders,
		variables: extractVariables(placeholders),
	};
}

export function fillTemplate(template: string, values: Record<string, string>): string {
	return template.replace(VARIABLE_REGEX, (match, variable: string) => {
		const key = variable.trim();
		return values[key] !== undefined ? values[key] : match;
	});
}

function extractVariables(placeholders: TemplatePlaceholder[]): TemplateVariable[] {
	const uniqueVars = new Map<string, TemplateVariable>();

	for (const p of placeholders) {
		if (!uniqueVars.has(p.name)) {
			uniqueVars.set(p.name, {
				name: p.name,
				label: toLabel(p.name),
				type: inferType(p.name),
				placeholder: "",
				required: true,
			});
		}
	}

	return Array.from(uniqueVars.values());
}

function toLabel(varName: string): string {
	return varName
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

function inferType(varName: string): "text" | "code" | "multiline" {
	const lower = varName.toLowerCase();
	if (lower.includes("code") || lower.includes("snippet")) {
		return "code";
	}
	if (
		lower.includes("description") ||
		lower.includes("steps") ||
		lower.includes("requirements") ||
		lower.includes("criteria")
	) {
		return "multiline";
	}
	return "text";
}
