import "@/assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import VeeValidatePlugin from "./includes/validation";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(VeeValidatePlugin);
app.mount("#app");
