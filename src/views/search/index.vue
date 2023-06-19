<style scoped>
.home {
  height: 100%;
  background-color: #eeeeeef6;
  border-radius: 10px;
  width: 800px;
}
.card {
  height: 13vh;
  position: relative;
  border-bottom: 0.1rem solid rgb(167, 167, 167);
}

.left {
  position: absolute;
  left: 5%;
  top: 15%;
  width: 60%;
}
.timu {
  color: rgb(77, 129, 173);
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  font-size: large;
}
.xiangqing {
  margin-top: 0.5rem;
  display: flex;
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
  cursor: pointer;
}
.right_img {
  width: 12.5rem;
  height: 8rem;
  border-radius: 5%;
  object-fit: contain;
  /* object-fit: cover; */
  cursor: pointer;
}
</style>

<template>
  <div class="home" v-infinite-scroll="load">
    <div class="card" v-for="(item, index) in listdata" :key="item.id">
      <div class="left">
        <!-- 标题 -->
        <span @click="Lookfile(item.id)" class="timu">
          {{ item.title }}
        </span>
        <!-- 内容文本 -->
        <span class="text" @click="Lookfile(item.id)"> {{ item.content }}</span>
        <!-- 作者-创建时间-分类-观看数-点赞数 -->
        <div class="xiangqing">
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
        <img class="right_img" :src="item.imgurl" @click="Lookfile(item.id)" />
      </div>
    </div>
    <!-- <div class="rili"></div> -->
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { searchart } from "../../api/artcate";
import router from "../../router";
const route = useRoute();
const val = ref(route.query.val);
// 文章列表数据
const listdata = ref([]);
const search = async (a) => {
  const res = await searchart(a ? a : { val: val.value });
  // console.log(res);
  listdata.value = res.data;
  // console.log(listdata.value);
};
search();
watch(
  () => route.query.val,
  (newValue, oldValue) => {
    // 处理路由参数变化
    search({ val: newValue });
    // console.log('val发生了变化');
  }
);
const Lookfile = (id) => {
  console.log(id);
  router.push({
    path: "/ariticle",
    query: {
      id: id,
    },
  });
};
// 懒加载
const load = () => {
  console.log("load了");
};
</script>
