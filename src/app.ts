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

	mount(element: HTMLElement) {
		this.container = element;
		this.render();

		// Restore previous state
		appState.restore(allTemplates);

		// Subscribe to state changes
		appState.subscribe(() => this.render());
	}

	private render() {
		if (!this.container) return;

		const editorContent = appState.getEditorContent();

		this.container.innerHTML = `
      <div class="container">
        ${this.renderSidebar()}
        ${this.renderEditor()}
        ${this.renderPreview(editorContent)}
      </div>
    `;

		this.attachEventListeners();
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
		const editorContent = appState.getEditorContent();

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
			categories[template.category].push(template);
		}

		return categories;
	}

	private updatePreview(content: string) {
		const preview = document.querySelector(".preview-pane");
		if (!preview) return;

		const html = marked.parse(content) as string;
		const sanitized = DOMPurify.sanitize(html);
		preview.innerHTML =
			sanitized || '<p style="color: var(--text-muted);">Preview will appear here...</p>';
	}

	private attachEventListeners() {
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
				this.updatePreview(editor.value);
			});

			// Save content when editor loses focus
			editor.addEventListener("blur", () => {
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
					this.updatePreview(editor.value);
				}
			});
		}

		// Copy button
		const copyBtn = document.getElementById("copy-btn");
		if (copyBtn) {
			copyBtn.addEventListener("click", () => {
				const editor = document.getElementById("editor") as HTMLTextAreaElement;
				const content = editor?.value || appState.getEditorContent();
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
					const editor = document.getElementById("editor") as HTMLTextAreaElement;
					if (editor) {
						editor.value = "";
					}
					appState.clearTemplate();
				}
			});
		}
	}
}
