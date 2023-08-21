import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";
import viteCompression from "vite-plugin-compression";
import vueDevTools from "vite-plugin-vue-devtools";
import imagemin from "unplugin-imagemin/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { autoComplete, Plugin as importToCDN } from "vite-plugin-cdn-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    imagemin(),
    visualizer({
      emitFile: false,
      filename: "analysis-chart.html", // 分析图生成的文件名
      open: true, // 如果存在本地服务端口，将在打包后自动展示
    }),
    // importToCDN({
    //   // prodUrl：可选，默认指向 https://cdn.jsdelivr.net/npm/{name}@{version}/{path}
    //   // 可使用这种格式 https://cdn.jsdelivr.net/npm/element-plus@2.2.32 查看是否存在 例如打开浏览器访问得到  https://cdn.jsdelivr.net/npm/element-plus@2.2.32/dist/index.full.js
    //   // 也可指向 'https://unpkg.com/{name}@{version}/{path}'、本地根目录、获取自己的服务器 等
    //   // prodUrl: '/{path}', // 根目录 需要格外注意配置路径是否正确，且需要把资源先down下来
    //   // prodUrl: 'https://xxx.com/{name}@{version}/{path}', // 自己的服务器上
    //   // prodUrl: 'https://unpkg.com/{name}@{version}/{path}', // https://unpkg.com/
    //   modules: [
    //     autoComplete("vue"),
    //     autoComplete("axios"),
    //     autoComplete("lodash"),
    //     // {
    //     //   name: "highlight.js",
    //     //   var: "highlight",
    //     //   path: "https://cdn.jsdelivr.net/npm/highlight.js@11.8.0",
    //     // },
    //     // {
    //     //   name: 'element-plus',
    //     // ElementPlus 为什么不是同下面第二种配置的elementPlus是因为这个配置同CDN资源一致，而下面的配置同需同main.ts的引入名称一致
    //     //   var: 'ElementPlus', // 外部化的依赖提供一个全局变量 同rollupOptions配置中的globals的值
    //     // https://unpkg.com/element-plus@2.2.32/dist/index.full.js 或者 dist/index.full.js
    //     //   path: 'dist/index.full.js',
    //     // 可选
    //     //   css: 'dist/index.css'
    //     // },
    //     // {
    //     //   name: 'vue-i18n',
    //     //   var: 'VueI18n',
    //     //   path: 'dist/vue-i18n.global.prod.js',
    //     // },
    //     // {
    //     //   name: 'vue-router',
    //     //   var: 'VueRouter',
    //     //   path: 'dist/vue-router.global.js'
    //     // },
    //     // VueDemi这个是pinia用来判断是vue2还是vue3所需要的，要额外引入一下
    //     // {
    //     //   name: 'vue-demi',
    //     //   var: 'VueDemi',
    //     //   path: 'https://unpkg.com/vue-demi@0.13.1/lib/index.iife.js'
    //     // },
    //     // {
    //     //   name: 'pinia',
    //     //   var: 'Pinia',
    //     //   path: 'dist/pinia.iife.js'
    //     // },
    //     // echarts，只有配置全局的时候有效，不然构建的时候还是会打包执行。也可以把echarts处理成按需引入
    //     // {
    //     //   name: 'echarts',
    //     //   var: 'echarts',
    //     //   path: 'dist/echarts.js'
    //     // },
    //     // echarts 内使用了
    //     // {
    //     //   name: 'zrender',
    //     //   var: 'zrender ',
    //     //   path: 'dist/zrender.js'
    //     // },
    //   ],
    // }),
    // imagemin({
    //   // Default mode squoosh. support squoosh and sharp
    //   mode: "sharp",
    //   // Default configuration options for compressing different pictures
    //   compress: {
    //     jpg: {
    //       quality: 70,
    //     },
    //     jpeg: {
    //       quality: 70,
    //     },
    //     png: {
    //       quality: 70,
    //     },
    //     webp: {
    //       quality: 70,
    //     },
    //   },
    //   // The type of picture converted after the build
    //   conversion: [
    //     { from: "png", to: "jpeg" },
    //     { from: "jpeg", to: "webp" },
    //   ],
    // }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5177",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/api-prod": {
        target: "http://114.132.188.196:5177/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-prod/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        // additionalData: '@import "@/assets/scss/global.scss";'
        // additionalData: '@use "@/assets/scss/global.scss" as *;'
      },
    },
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer,
        postCssPxToRem({
          rootValue: 16, // rem 相对于 px 转换的基准值
          propList: ["*"], // 需要转换的 CSS 属性，* 表示全部
          unitPrecision: 5, // 转换后的小数位数
        }),
      ],
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
