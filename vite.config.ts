import { defineConfig } from "vite";

export default defineConfig({
	build: {
		target: "es2020",
		rollupOptions: {
			output: {
				manualChunks: {
					codemirror: ["codemirror", "@codemirror/view", "@codemirror/state"],
					markdown: ["marked", "dompurify"],
				},
			},
		},
	},
});
