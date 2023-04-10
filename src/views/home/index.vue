<template>
  <div class="home" v-infinite-scroll="load">
    <div class="card" v-for="(item, index) in menu.articleList" :key="item.id" @click="Lookfile(item.id)">
      <div class="left">
        <!-- 标题 -->
        <h3 style="color: #4d81ad; line-height: 0px; text-align: left">
          {{ item.title }}
        </h3>
        <!-- 内容文本 -->
        <span class="text"> {{ item.content }}</span>
        <!-- 作者-创建时间-分类-观看数-点赞数 -->
        <div style="margin-top: 0.5rem; display: flex">
          <p style="color: #e76e16">🙎‍♂️{{ item.nickname }}</p>
          <p style="margin-left: 2%">
            🕛{{ filters.filterTimes(item.creat_time) }}
          </p>
          <p style="margin-left: 2%">📚{{ item.type }}</p>
          <p style="margin-left: 2%">👀{{ item.likenum }}</p>
          <p style="margin-left: 2%">👍{{ item.likenum }}</p>
        </div>
        <!-- <el-divider /> -->
      </div>
      <div class="right">
        <img class="right_img" :src="item.imgurl" />
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script setup>
// import author from "/svg/作者.svg";
import { ref, reactive } from "vue";
import { GetCates } from "../../api/artcate";
import router from "../../router";
// 文章列表数据
const articleList = [];
let menu = reactive({ articleList });
const getcates = async () => {
  const res = await GetCates();
  // console.log(res);
  menu.articleList = res.data;
  // console.log(articleList);
};
getcates();
// 跳转文章页面
const Lookfile = (id)=>{
   console.log(id);
   router.push({
    path:'/ariticle',
    query:{
      id:id
    }
   })
}
// 懒加载
const load = () => {
  console.log("load了");
};
</script>

<style scoped>
.infinite-list {
  /* height: 300px; */
  padding: 0;
  margin: 0;
  list-style: none;
}
.bottom {
  position: relative;
  height: 24px;
  overflow: hidden;
  top: 120%;
  display: flex;
  margin-left: 1%;
  margin-right: -1%;
}
.bottom::after {
  content: "";
  flex: 1;
  height: 1.5px;
  background: rgb(113, 138, 170);
}
.home {
  height: 100%;
  width: 60vw;
  background-color: #eeeeeef6;
  border-radius: 10px;
  min-width: 600px;
  /* z-index: 99; */
}
.card {
  /* width: 60vw; */
  height: 13vh;
  position: relative;
}
.left {
  position: absolute;
  left: 5%;
  top: 15%;
  width: 60%;
}
.right {
  position: absolute;
  right: 2%;
  top: 15%;
}
.text {
  height: 3.5rem;
  text-align: left;
  line-height: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #949794;
}
.right_img {
  width: 12.5rem;
  height: 8rem;
  border-radius: 5%;
  object-fit: cover;
}
</style>
