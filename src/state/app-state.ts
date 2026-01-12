import type { Template } from "../templates/types";

type StateListener = (state: AppState) => void;

export interface AppStateData {
	currentTemplateId: string | null;
	editorContent: string;
	variableValues: Record<string, string>;
	sidebarCollapsed: boolean;
	paneSizes?: PaneSizes;
}

export interface PaneSizes {
	sidebarWidth: number;
	editorWidth: number;
}

const STORAGE_KEY = "cayenne_state";
const PANE_SIZES_KEY = "cayenne_pane_sizes";
const DEBOUNCE_MS = 300;

const DEFAULT_SIDEBAR_WIDTH = 250;
const DEFAULT_EDITOR_WIDTH = 50; // percentage of remaining space
const MIN_SIDEBAR_WIDTH = 200;
const MIN_PANE_WIDTH = 300;

export class AppState {
	private currentTemplate: Template | null = null;
	private editorContent = "";
	private variableValues: Record<string, string> = {};
	private sidebarCollapsed = false;
	private paneSizes: PaneSizes = {
		sidebarWidth: DEFAULT_SIDEBAR_WIDTH,
		editorWidth: DEFAULT_EDITOR_WIDTH,
	};
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

	getPaneSizes(): PaneSizes {
		return { ...this.paneSizes };
	}

	updatePaneSizes(sizes: Partial<PaneSizes>) {
		// Enforce minimum sizes
		if (sizes.sidebarWidth !== undefined) {
			this.paneSizes.sidebarWidth = Math.max(
				MIN_SIDEBAR_WIDTH,
				sizes.sidebarWidth,
			);
		}
		if (sizes.editorWidth !== undefined) {
			// Editor width is a percentage (0-100) of remaining space after sidebar
			this.paneSizes.editorWidth = Math.max(20, Math.min(80, sizes.editorWidth));
		}
		this.notify();
		this.savePaneSizes();
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
			paneSizes: this.paneSizes,
		};
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	}

	private savePaneSizes() {
		localStorage.setItem(PANE_SIZES_KEY, JSON.stringify(this.paneSizes));
	}

	restore(templates: Template[]) {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (!saved) {
			this.restorePaneSizes();
			return;
		}

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

			// Restore pane sizes from saved data or separate key
			if (data.paneSizes) {
				this.paneSizes = data.paneSizes;
			} else {
				this.restorePaneSizes();
			}

			this.notify();
		} catch (error) {
			console.error("Failed to restore state:", error);
			this.restorePaneSizes();
		}
	}

	private restorePaneSizes() {
		const saved = localStorage.getItem(PANE_SIZES_KEY);
		if (saved) {
			try {
				const sizes = JSON.parse(saved) as PaneSizes;
				this.paneSizes = {
					sidebarWidth: Math.max(MIN_SIDEBAR_WIDTH, sizes.sidebarWidth || DEFAULT_SIDEBAR_WIDTH),
					editorWidth: Math.max(20, Math.min(80, sizes.editorWidth || DEFAULT_EDITOR_WIDTH)),
				};
			} catch (error) {
				console.error("Failed to restore pane sizes:", error);
			}
		}
	}
}

export const appState = new AppState();
