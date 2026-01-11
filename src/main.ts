import "./styles/variables.css";
import "./styles/global.css";
import "./styles/sidebar.css";
import "./styles/editor.css";
import "./styles/preview.css";

import { App } from "./app";

const app = new App();
app.mount(document.getElementById("app")!);
