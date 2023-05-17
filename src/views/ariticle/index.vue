<template>
  <div class="home">
    <!-- <el-page-header @back="goBack" :icon="ArrowLeft">
      <template #content>
        <h3 style="color: #4d81ad; line-height: 0px">
          {{ title }}
        </h3>
      </template>
    </el-page-header> -->
    <button class="back" @click="goBack">
      <el-icon :size="25"><Back /></el-icon>
    </button>
    <h2 style="text-align: center; color: #4d81ad">{{ title }}</h2>
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getArt } from "../../api/artcate";
import { Back } from "@element-plus/icons-vue";
const route = useRoute();
// 文章内容
const title = ref("");
const text = ref("");
const getarts = async () => {
  const res = await getArt({ id: route.query.id });
  title.value = res.data.title;
  text.value = res.data.text;
  // console.log(res.data);
};
getarts();
const goBack = () => {
  history.back();
};
</script>

<style>
.home {
  height: 100%;
  width: 60vw;
  background-color: #eeeeeef6;
  border-radius: 1rem;
  min-width: 600px;
  /* z-index: 99; */
}
</style>
