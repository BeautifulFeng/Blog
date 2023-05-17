import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import filters from "./assets/filters";
import "./router/permission.js";
// MD编辑器
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";
// MD预览
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
// highlightjs
import hljs from "highlight.js";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
const app = createApp(App);

filters(app);
app.use(router);
app.use(createPinia());
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.mount("#app");
