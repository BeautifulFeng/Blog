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
        ],
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
