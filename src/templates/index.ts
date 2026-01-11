import { runtimeErrorTemplate } from "./debugging/runtime-error";
import type { Template } from "./types";

export const allTemplates: Template[] = [
	// Debugging
	runtimeErrorTemplate,
	// More templates will be added here
];

export function getTemplateById(id: string): Template | undefined {
	return allTemplates.find((t) => t.id === id);
}

export function getTemplatesByCategory(category: string): Template[] {
	return allTemplates.filter((t) => t.category === category);
}
