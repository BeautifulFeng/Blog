<template>
  <div class="home" v-infinite-scroll="load">
    <div class="card" v-for="(item, index) in articleList" :key="item.id">
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
      </div>
      <div class="right">
        <img
          class="right_img"
          :src="
            item.imgurl
              ? item.imgurl
              : 'https://image.uisdc.com/wp-content/uploads/2013/09/1379411391_1436653066_9750_imageAddr.jpg'
          "
          @click="Lookfile(item.id)"
        />
      </div>
    </div>
  </div>
  <div class="rightcontent">
    <keep-alive>
      <div class="musicCloud">
        <iframe
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          width="280"
          height="100"
          src="//music.163.com/outchain/player?type=2&id=441491410&auto=1&height=66"
        ></iframe>
      </div>
    </keep-alive>
    <div class="rili">
      <div>更新日志</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { GetCates } from "../../api/artcate";
import router from "../../router";
// 文章列表数据
const articleList = ref([]);
const getcates = async () => {
  const res = await GetCates();
  console.log(res.data);
  articleList.value = res.data;
  // articleList.datalist = res.data
  console.log(articleList.value);
};
getcates();
// 跳转文章页面
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
function load() {
  console.log("load了");
  // articleList[0].push({
  // content: "Flex布局大全",
  // creat_time: 1684759735365,
  // id: 17,
  // imgurl: "http://localhost:5177/articleimg/1684759733974.png",
  // likenum: 0,
  // looknum: 0,
  // nickname: "好男人",
  // text: "![Description](http://localhost:5177/articleimg/1684759638770.png)",
  // title: "Flex布局大全",
  // type: "CSS"
  // });
  // console.log(typeof(articleList.value));
  // console.log(articleList.value);
}
const rili = new Date();
</script>

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
  width: 9rem;
  height: 7rem;
  border-radius: 5%;
  object-fit: contain;
  /* object-fit:initial; */
  cursor: pointer;
}
.musicCloud {
  margin-left: 1rem;
}
.rightcontent {
  display: flex;
  flex-direction: column;
}
.rili {
  margin-left: 1rem;
  background: red;
  text-align: center;
}
@media screen and (max-width: 939px) {
  .left {
    width: 80%;
  }
  .right {
    display: none;
  }
  .xiangqing {
    display: none;
  }
  .timu {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: x-large;
  }
}
@media screen and (max-width: 590px) {
  .musicCloud {
    display: none;
  }
  .rili {
    display: none;
  }
}
@media screen and (max-width: 530px) {
  .home {
    width: 400px;
  }
}
</style>
