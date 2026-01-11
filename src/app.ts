import DOMPurify from "dompurify";
import { marked } from "marked";
import { appState } from "./state/app-state";
import { allTemplates } from "./templates";

marked.setOptions({
	gfm: true,
	breaks: true,
});

export class App {
	private container: HTMLElement | null = null;
	private editorElement: HTMLTextAreaElement | null = null;
	private previewElement: HTMLElement | null = null;
	private lastEditorContent: string = "";
	private lastTemplateId: string | null = null;
	private lastSidebarCollapsed: boolean = false;

	mount(element: HTMLElement) {
		this.container = element;
		this.render();

		// Initialize tracking variables after initial render
		const currentTemplate = appState.getCurrentTemplate();
		this.lastTemplateId = currentTemplate?.id ?? null;
		this.lastSidebarCollapsed = appState.isSidebarCollapsed();
		this.lastEditorContent = appState.getEditorContent();

		// Restore previous state (this may trigger a state change)
		appState.restore(allTemplates);

		// Update tracking variables after restore
		const restoredTemplate = appState.getCurrentTemplate();
		this.lastTemplateId = restoredTemplate?.id ?? null;
		this.lastSidebarCollapsed = appState.isSidebarCollapsed();
		this.lastEditorContent = appState.getEditorContent();

		// Apply restored pane sizes
		this.applyPaneSizes();

		// Subscribe to state changes
		appState.subscribe(() => this.handleStateChange());
	}

	private handleStateChange() {
		const currentTemplate = appState.getCurrentTemplate();
		const currentTemplateId = currentTemplate?.id ?? null;
		const currentSidebarCollapsed = appState.isSidebarCollapsed();
		const currentEditorContent = appState.getEditorContent();

		// Check if template or sidebar state changed (requires full re-render)
		const templateChanged = currentTemplateId !== this.lastTemplateId;
		const sidebarChanged = currentSidebarCollapsed !== this.lastSidebarCollapsed;

		if (templateChanged || sidebarChanged) {
			// Full re-render needed
			this.render();
			this.lastTemplateId = currentTemplateId;
			this.lastSidebarCollapsed = currentSidebarCollapsed;
			this.lastEditorContent = currentEditorContent;
		} else if (currentEditorContent !== this.lastEditorContent) {
			// Only editor content changed - update preview only
			this.updatePreview(currentEditorContent);
			this.lastEditorContent = currentEditorContent;
		}
	}

	private updatePreview(content: string) {
		if (!this.previewElement) return;

		const html = marked.parse(content) as string;
		const sanitized = DOMPurify.sanitize(html);

		this.previewElement.innerHTML = sanitized || '<p style="color: var(--text-muted);">Preview will appear here...</p>';
	}

	private render() {
		if (!this.container) return;

		const editorBefore = this.editorElement;
		const hadFocus = editorBefore === document.activeElement;
		const selectionStart = editorBefore?.selectionStart ?? -1;
		const selectionEnd = editorBefore?.selectionEnd ?? -1;

		const editorContent = appState.getEditorContent();

		this.container.innerHTML = `
      <div class="container">
        ${this.renderSidebar()}
        <div class="resize-handle resize-handle-sidebar" data-resize="sidebar"></div>
        ${this.renderEditor()}
        <div class="resize-handle resize-handle-editor" data-resize="editor"></div>
        ${this.renderPreview(editorContent)}
      </div>
    `;

		// Apply pane sizes via CSS custom properties
		this.applyPaneSizes();

		// Store references to editor and preview elements
		this.editorElement = document.getElementById("editor") as HTMLTextAreaElement | null;
		this.previewElement = document.querySelector(".preview-pane") as HTMLElement | null;

		// Restore editor value and focus if it had focus before
		if (this.editorElement && hadFocus) {
			this.editorElement.value = editorContent;
			// Restore selection if we had one
			if (selectionStart >= 0 && selectionEnd >= 0) {
				this.editorElement.selectionStart = selectionStart;
				this.editorElement.selectionEnd = selectionEnd;
			}
			// Restore focus after a brief delay to ensure DOM is ready
			setTimeout(() => {
				if (this.editorElement) {
					this.editorElement.focus();
				}
			}, 0);
		}

		this.attachEventListeners();

		// Update state tracking
		const currentTemplate = appState.getCurrentTemplate();
		this.lastTemplateId = currentTemplate?.id ?? null;
		this.lastSidebarCollapsed = appState.isSidebarCollapsed();
		this.lastEditorContent = editorContent;
	}

	private renderSidebar(): string {
		const currentTemplate = appState.getCurrentTemplate();
		const collapsed = appState.isSidebarCollapsed();

		if (collapsed) {
			return '<div class="sidebar collapsed"></div>';
		}

		const categories = this.groupTemplatesByCategory();

		return `
      <aside class="sidebar">
        <div class="sidebar-header">
          <h1>Cayenne</h1>
          <input
            type="text"
            class="search-bar"
            placeholder="Search templates..."
            id="search-input"
            disabled
            title="Search functionality coming soon"
          />
        </div>
        <div class="template-categories">
          ${Object.entries(categories)
						.map(
							([category, templates]) => `
            <div class="category-section">
              <div class="category-title">${category}</div>
              ${templates
								.map(
									(template) => `
                <div
                  class="template-card ${template.id === currentTemplate?.id ? "active" : ""}"
                  data-template-id="${template.id}"
                >
                  <div class="template-card-header">
                    <div class="template-card-title">${template.name}</div>
                    <span class="template-difficulty-badge ${template.difficulty}">
                      ${template.difficulty}
                    </span>
                  </div>
                  <div class="template-card-description">${template.description}</div>
                </div>
              `,
								)
								.join("")}
            </div>
          `,
						)
						.join("")}
        </div>
      </aside>
    `;
	}

	private renderEditor(): string {
		const currentTemplate = appState.getCurrentTemplate();

		return `
      <div class="editor-pane">
        <div class="editor-toolbar">
          <h2>${currentTemplate ? `Template: ${currentTemplate.name}` : "Blank Prompt"}</h2>
          <div class="editor-toolbar-actions">
            ${currentTemplate ? '<button id="clear-btn">Clear</button>' : ""}
            <button id="copy-btn">Copy</button>
          </div>
        </div>
        <div class="editor-wrapper">
          <textarea
            id="editor"
            placeholder="Start writing your prompt..."
            autofocus
          ></textarea>
        </div>
      </div>
    `;
	}

	private renderPreview(content: string): string {
		const html = marked.parse(content) as string;
		const sanitized = DOMPurify.sanitize(html);

		return `
      <article class="preview-pane">
        ${sanitized || '<p style="color: var(--text-muted);">Preview will appear here...</p>'}
      </article>
    `;
	}

	private groupTemplatesByCategory(): Record<string, typeof allTemplates> {
		const categories: Record<string, typeof allTemplates> = {};

		for (const template of allTemplates) {
			if (!categories[template.category]) {
				categories[template.category] = [];
			}
			const categoryArray = categories[template.category];
			if (categoryArray) {
				categoryArray.push(template);
			}
		}

		return categories;
	}

	private attachEventListeners() {
		// Resize handles
		this.attachResizeHandlers();

		// Template selection
		const templateCards = document.querySelectorAll(".template-card");
		for (const card of templateCards) {
			card.addEventListener("click", () => {
				const templateId = card.getAttribute("data-template-id");
				if (templateId) {
					const template = allTemplates.find((t) => t.id === templateId);
					if (template) {
						appState.loadTemplate(template);
					}
				}
			});
		}

		// Editor input
		const editor = document.getElementById("editor") as HTMLTextAreaElement;
		if (editor) {
			// Set textarea value programmatically to prevent XSS
			editor.value = appState.getEditorContent();

			editor.addEventListener("input", () => {
				appState.updateEditorContent(editor.value);
			});

			// Tab key support
			editor.addEventListener("keydown", (e) => {
				if (e.key === "Tab") {
					e.preventDefault();
					const start = editor.selectionStart;
					const end = editor.selectionEnd;
					editor.value = `${editor.value.substring(0, start)}  ${editor.value.substring(end)}`;
					editor.selectionStart = editor.selectionEnd = start + 2;
					appState.updateEditorContent(editor.value);
				}
			});
		}

		// Copy button
		const copyBtn = document.getElementById("copy-btn");
		if (copyBtn) {
			copyBtn.addEventListener("click", () => {
				const content = appState.getEditorContent();
				navigator.clipboard
					.writeText(content)
					.then(() => {
						copyBtn.textContent = "Copied!";
						setTimeout(() => {
							copyBtn.textContent = "Copy";
						}, 2000);
					})
					.catch(() => {
						copyBtn.textContent = "Failed";
						setTimeout(() => {
							copyBtn.textContent = "Copy";
						}, 2000);
					});
			});
		}

		// Clear button
		const clearBtn = document.getElementById("clear-btn");
		if (clearBtn) {
			clearBtn.addEventListener("click", () => {
				if (confirm("Clear current template and start fresh?")) {
					appState.clearTemplate();
				}
			});
		}
	}

	private attachResizeHandlers() {
		const sidebarHandle = document.querySelector(
			".resize-handle-sidebar",
		) as HTMLElement;
		const editorHandle = document.querySelector(
			".resize-handle-editor",
		) as HTMLElement;

		if (sidebarHandle) {
			this.setupResizeHandler(sidebarHandle, "sidebar");
		}

		if (editorHandle) {
			this.setupResizeHandler(editorHandle, "editor");
		}
	}

	private applyPaneSizes() {
		const container = this.container?.querySelector(".container") as HTMLElement;
		if (container) {
			const paneSizes = appState.getPaneSizes();
			container.style.setProperty("--sidebar-width", `${paneSizes.sidebarWidth}px`);
			container.style.setProperty("--editor-width", `${paneSizes.editorWidth}%`);
		}
	}

	private setupResizeHandler(handle: HTMLElement, type: "sidebar" | "editor") {
		let isResizing = false;
		let startX = 0;
		let startWidth = 0;

		const handleMouseDown = (e: MouseEvent) => {
			isResizing = true;
			startX = e.clientX;
			const paneSizes = appState.getPaneSizes();
			startWidth = paneSizes.sidebarWidth;

			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
			document.body.style.cursor = "col-resize";
			document.body.style.userSelect = "none";
			e.preventDefault();
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isResizing) return;

			const container = this.container?.querySelector(
				".container",
			) as HTMLElement;
			if (!container) return;

			const containerRect = container.getBoundingClientRect();
			const deltaX = e.clientX - startX;

			if (type === "sidebar") {
				const newWidth = startWidth + deltaX;
				const minWidth = 200;
				const maxWidth = containerRect.width * 0.5; // Max 50% of container
				const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

				appState.updatePaneSizes({ sidebarWidth: clampedWidth });
				container.style.setProperty("--sidebar-width", `${clampedWidth}px`);
			} else if (type === "editor") {
				// Calculate editor width as percentage of remaining space
				const sidebarWidth = appState.getPaneSizes().sidebarWidth;
				const availableWidth = containerRect.width - sidebarWidth;
				const editorStartX = sidebarWidth;
				const mouseX = e.clientX - containerRect.left;
				const editorWidthPx = mouseX - editorStartX;
				const editorWidthPercent = (editorWidthPx / availableWidth) * 100;

				const minPercent = 20;
				const maxPercent = 80;
				const clampedPercent = Math.max(
					minPercent,
					Math.min(maxPercent, editorWidthPercent),
				);

				appState.updatePaneSizes({ editorWidth: clampedPercent });
				container.style.setProperty("--editor-width", `${clampedPercent}%`);
			}
		};

		const handleMouseUp = () => {
			isResizing = false;
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			document.body.style.cursor = "";
			document.body.style.userSelect = "";
		};

		handle.addEventListener("mousedown", handleMouseDown);
	}
}
