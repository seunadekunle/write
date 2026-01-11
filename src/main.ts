import "./styles/variables.css";
import "./styles/global.css";
import "./styles/sidebar.css";
import "./styles/editor.css";
import "./styles/preview.css";

import { App } from "./app";

const app = new App();
const appElement = document.getElementById("app");
if (appElement) {
	app.mount(appElement);
} else {
	throw new Error("App element not found");
}
