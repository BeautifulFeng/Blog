import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import filters from "./assets/filters";
import "./router/permission.js";
const app = createApp(App);

filters(app);
app.use(router);
app.use(createPinia());

app.mount("#app");
