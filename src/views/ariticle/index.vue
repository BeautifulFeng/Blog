<template>
  <div class="home">
  <el-page-header @back="goBack" :icon="ArrowLeft">
    <template #content>
      <h3 style="color: #4d81ad; line-height: 0px; text-align: left">{{title}}</h3>
    </template>
    <p class="mt-4 text-sm">
<b>{{ content }}</b>
      </p>
  </el-page-header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getArt } from '../../api/artcate'
import { ArrowLeft } from '@element-plus/icons-vue'
const route = useRoute()
// 文章内容
const title=ref('')
const content=ref('')
const getarts = async()=>{
  const res = await getArt({id:route.query.id})
  title.value=res.data.title
  content.value=res.data.content
  console.log(res.data);
 
}
getarts()
const goBack = () => {
  history.back()
}

</script>

<style>
.home {
  height: 100%;
  width: 60vw;
  background-color: #eeeeeef6;
  /* border-radius: ; */
  min-width: 600px;
  /* z-index: 99; */
}
</style>
