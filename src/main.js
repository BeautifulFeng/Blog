/*
 * @Author: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @Date: 2023-03-20 22:20:54
 * @LastEditors: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @LastEditTime: 2023-06-22 00:25:36
 * @FilePath: \my-blog\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// 公共JS库
import utils from "./assets/utils";
// 路由守卫
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
utils(app);
app.use(router);
app.use(createPinia());
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.mount("#app");

