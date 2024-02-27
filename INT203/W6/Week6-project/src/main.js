import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
console.log("At main.js before createApp");
createApp(App).mount("#app");
console.log("At main.js after createApp");
