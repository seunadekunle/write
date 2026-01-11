import type { Template } from "../templates/types";

type StateListener = (state: AppState) => void;

export interface AppStateData {
	currentTemplateId: string | null;
	editorContent: string;
	variableValues: Record<string, string>;
	sidebarCollapsed: boolean;
}

const STORAGE_KEY = "cayenne_state";
const DEBOUNCE_MS = 300;

export class AppState {
	private currentTemplate: Template | null = null;
	private editorContent = "";
	private variableValues: Record<string, string> = {};
	private sidebarCollapsed = false;
	private listeners: Set<StateListener> = new Set();
	private saveTimer: number | null = null;

	getCurrentTemplate(): Template | null {
		return this.currentTemplate;
	}

	getEditorContent(): string {
		return this.editorContent;
	}

	getVariableValues(): Record<string, string> {
		return { ...this.variableValues };
	}

	isSidebarCollapsed(): boolean {
		return this.sidebarCollapsed;
	}

	loadTemplate(template: Template) {
		this.currentTemplate = template;
		this.editorContent = template.template;
		this.variableValues = {};
		this.notify();
		this.debouncedSave();
	}

	updateEditorContent(content: string) {
		this.editorContent = content;
		this.notify();
		this.debouncedSave();
	}

	updateVariableValue(name: string, value: string) {
		this.variableValues[name] = value;
		this.notify();
		this.debouncedSave();
	}

	toggleSidebar() {
		this.sidebarCollapsed = !this.sidebarCollapsed;
		this.notify();
		this.save();
	}

	clearTemplate() {
		this.currentTemplate = null;
		this.editorContent = "";
		this.variableValues = {};
		this.notify();
		this.save();
	}

	subscribe(listener: StateListener): () => void {
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	}

	private notify() {
		for (const listener of this.listeners) {
			listener(this);
		}
	}

	private debouncedSave() {
		if (this.saveTimer !== null) {
			clearTimeout(this.saveTimer);
		}
		this.saveTimer = window.setTimeout(() => {
			this.save();
			this.saveTimer = null;
		}, DEBOUNCE_MS);
	}

	private save() {
		const data: AppStateData = {
			currentTemplateId: this.currentTemplate?.id ?? null,
			editorContent: this.editorContent,
			variableValues: this.variableValues,
			sidebarCollapsed: this.sidebarCollapsed,
		};
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	}

	restore(templates: Template[]) {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (!saved) return;

		try {
			const data: AppStateData = JSON.parse(saved);
			this.editorContent = data.editorContent || "";
			this.variableValues = data.variableValues || {};
			this.sidebarCollapsed = data.sidebarCollapsed || false;

			if (data.currentTemplateId) {
				const template = templates.find((t) => t.id === data.currentTemplateId);
				if (template) {
					this.currentTemplate = template;
				}
			}

			this.notify();
		} catch (error) {
			console.error("Failed to restore state:", error);
		}
	}
}

export const appState = new AppState();
