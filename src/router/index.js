/*
 * @Author: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @Date: 2023-03-20 22:54:27
 * @LastEditors: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @LastEditTime: 2023-06-22 00:21:19
 * @FilePath: \my-blog\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "/",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "",
        name: "",
        component: () => import("../views/layout/index.vue"),
        redirect: "/home",
        children: [
          {
            path: "/home",
            name: "home",
            component: () => import("../views/home/index.vue"),
          },
          {
            path: "/liuyan",
            name: "liuyan",
            component: () => import("../views/liuyan/index.vue"),
          },
          {
            path: "/upmessage",
            name: "upmessage",
            component: () => import("../views/upmessage/index.vue"),
          },
          {
            path: "myinfo",
            name: "myinfo",
            component: () => import("../views/myinfo/index.vue"),
          },
          {
            path: "ariticle",
            name: "ariticle",
            component: () => import("../views/ariticle/index.vue"),
          },
          {
            path: "write",
            name: "write",
            component: () => import("../views/write/index.vue"),
          },
          {
            path: "search",
            name: "search",
            component: () => import("../views/search/index.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("../views/404/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
