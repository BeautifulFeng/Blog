<template>
  <router-view></router-view>
</template>

<script setup>
//判断是手机端
// import { isMobile } from "./assets/isMobile";
// if (isMobile()) {
//   //重定向到另一个端口
//   console.log(isMobile());
//   window.location.href = "http://127.0.0.1:8003/";
// }
</script>

<style>
.message-el {
  position: relative !important;
  top: -120px !important ; /* 调整这一行的值以改变 ElMessage 的位置 */
}
</style>
