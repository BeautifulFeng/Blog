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
