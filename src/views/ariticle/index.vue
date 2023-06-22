<template>
  <div class="home">
    <div class="contentbody">
      <div class="art-head">
        <button @click="goBack">
          <el-icon :size="25">
            <Back />
          </el-icon>
        </button>
        <span style="float: right; margin: 1rem 1rem"
          >阅读量:{{ $route.query.look }}</span
        >
      </div>
      <h2 style="text-align: center; color: #4d81ad">{{ title }}</h2>
      <!-- 回复框内容样式 -->
      <v-md-preview :text="text"></v-md-preview>
    </div>
    <!-- 评论区 -->
    <div class="editor">
      <!-- <v-md-editor v-model="replytext" height="200px" mode="edit"></v-md-editor> -->
      <el-card>
        <div class="commentform">
          <el-input
            v-model="replying"
            :rows="3"
            type="textarea"
            placeholder="一个神评的机会"
            class="comment_content"
            resize="none"
            input-style="font-size: 1.3rem;"
          />
          <div style="display: flex; flex-direction: row-reverse">
            <el-button @click="replyfun" type="danger" round>评论</el-button>
          </div>
        </div>
      </el-card>

      <!-- 回复展示区 -->
      <div class="pinglun">
        <el-card>
          <!-- 题目 -->
          <span>评论</span>
          <el-divider style="margin-top: 0.75rem" />
          <!-- 主体内容 -->
          <div class="Forum" v-for="item in reply" :key="item.id">
            <!-- 头像 -->
            <div class="Forum-headimg">
              <!-- <el-icon size="32"><Avatar /></el-icon> -->
              <img :src="item.imgurl" alt="" />
            </div>
            <div class="Forum-content">
              <!-- 回复人的名字 -->
              <div class="Forum-content-author">
                <div class="author">{{ item.user_id }}</div>
                <div v-if="item.level == '博主'" title="博主">
                  <svg
                    t="1687299409866"
                    class="icon"
                    viewBox="500 -140 3222 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="17039"
                    width="128"
                    height="32"
                  >
                    <path
                      d="M2533.50188862 82.339079H1118.88951162L1061.05840562 22.956139H570.12760062L320.70455962 280.294457l490.930806 494.934355L911.20073062 676.196029l1622.301158-0.541765c126.479143 1.625295 230.204161-124.348813 238.394911-275.216559 8.980442-165.366843-99.115426-318.906682-238.394911-318.098626zM403.84251262 280.294457L601.79789062 82.339079h415.708129l197.955377 197.955378L811.63536562 684.092941z"
                      fill="#d81e06"
                      p-id="17040"
                      data-spm-anchor-id="a313x.7781069.0.i35"
                      class="selected"
                    ></path>
                    <path
                      d="M2179.57332062 311.53317q-8.365217 63.597687-54.25913 103.210801-44.075787 37.537878-101.833433 37.537879h-146.129598l-12.37795 94.349731h-86.939489l25.114016-191.27055h241.415939q17.850694 0 31.679472-12.130024t16.454961-32.193689q2.617-20.036118-8.071379-31.642742t-28.566619-11.606624H1814.69008262L1884.81649662 170.793674h175.825659q57.427077 0 91.705184 37.519513 35.56365 39.622296 27.225981 103.219983z m-535.998297 235.070863L1692.91235662 170.793674h86.948672l-49.337333 375.837907z m-222.444987 5.729853q-21.064553 0-36.518626-42.753514L1262.55821162 170.793674h94.42319l82.642101 232.48141L1576.36863062 170.793674H1671.44377562l-204.034163 339.346828q-25.24257 42.239296-46.288758 42.239296zM2308.89902462 348.483372H2555.71424862v221.554288h-331.27545V170.793674H2555.71424862v36.19724h-246.815224zM2471.23565662 533.84042V384.671429h-162.336632v149.168991z"
                      fill="#FFFFFF"
                      p-id="17041"
                    ></path>
                    <path
                      d="M605.01174962 240.580336l1.303909-3.920908c3.920909-13.084999 18.309816-20.926816 32.689542-17.005908 6.537908 2.617 11.771908 6.537908 14.388908 13.075817a25.710876 25.710876 0 0 1-2.617 28.768633c-1.313091 0-1.313091 1.313091-2.617 2.617 19.613725 11.771908 37.923542 23.534634 56.224175 33.975086 6.537908 3.920909 14.388908 9.182456 20.926817 13.075816a4.930979 4.930979 0 0 0 7.841817-1.313091l1.313091-1.303909c22.230725-39.22745 43.157541-78.464083 65.379084-118.995441a25.830248 25.830248 0 0 1-15.692817-23.534634q0-11.781091 7.851-19.613725c10.458817-10.467999 26.151633-9.182456 36.61045 0l1.303909 1.303908c10.467999 13.075817 6.537908 28.768633-10.458817 40.540542 5.234 10.458817 10.458817 20.917634 16.996725 30.072542 15.692817 28.768633 31.385633 57.537267 47.07845 84.992809 3.920909 6.537908 6.537908 7.851 11.771908 3.920908 24.79263-14.379725 48.382358-30.072542 73.220901-44.452267l3.920908-2.617c-5.224817-3.920909-7.841817-10.458817-9.182455-16.996725-1.313091-14.388908 10.458817-26.160816 23.534633-27.464725 11.771908-1.303909 22.230725 6.537908 26.151634 18.309816 0 3.920909 1.303909 5.224817 1.303908 6.537909v9.182455c-3.920909 13.075817-13.075817 20.917634-27.455542 20.917634 0 1.303909-1.303909 2.617-1.303908 5.234L942.35680262 422.392957c-1.303909 6.537908-3.920909 7.841817-10.458817 7.841817H687.38755862c-6.537908 0-9.182456-1.303909-10.458817-7.841817-11.771908-39.22745-23.534634-78.4549-33.975085-118.995442-2.607817-10.458817-6.537908-20.917634-9.182456-32.689542a29.769521 29.769521 0 0 1-24.847725-13.075817c-1.303909-3.920909-2.617-5.234-3.920908-7.841817V240.580336z m205.29216 214.474615h115.074533c10.458817 0 19.613725 7.851 19.613725 18.309817 0 9.182456-6.537908 18.300634-15.692817 19.613725h-234.060792a19.66882 19.66882 0 0 1-18.309817-13.075817c-2.617-7.851 0-16.996725 6.537909-20.926816a22.129718 22.129718 0 0 1 13.075816-3.920909c37.923542-1.303909 75.837901 0 113.761443 0z"
                      fill="#FFF142"
                      p-id="17042"
                    ></path>
                    <path
                      d="M809.65195462 139.095837a26.629121 26.629121 0 0 1 18.309817 7.823452l1.303908 1.303909c10.458817 13.084999 6.537908 28.768633-10.458817 40.540541 5.234 10.458817 10.458817 20.926816 16.996726 30.072542 15.692817 28.768633 31.385633 57.537267 47.078449 85.001992 3.920909 6.537908 6.537908 7.841817 11.762726 3.920908 24.847725-14.388908 48.382358-30.072542 73.230083-44.46145l3.920909-2.617c-5.224817-3.920909-7.841817-10.458817-9.182456-16.996725-1.303909-14.379725 10.467999-26.151633 23.543816-27.455542 11.762726-1.313091 22.230725 6.537908 26.151634 18.300634 0 1.313091 1.303909 2.617 1.303909 3.920909v9.182455c-3.920909 13.075817-13.075817 20.926816-27.455543 20.926816 0 1.303909-1.313091 2.617-1.313091 5.224818l-43.157541 146.460166c-1.303909 6.537908-3.920909 7.841817-10.458817 7.841817h-121.575712V139.095837z m0 313.828785H924.72648762c10.458817 0 19.613725 7.841817 19.613726 18.300633 0 9.182456-6.537908 18.309816-15.692817 19.622908H810.95586362"
                      fill="#FFC41F"
                      p-id="17043"
                    ></path>
                  </svg>
                </div>
                <div v-else title="游客">
                  <svg
                    t="1687299741016"
                    class="icon"
                    viewBox="1300 -50 1204 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="22150"
                    data-spm-anchor-id="a313x.7781069.0.i43"
                    width="128"
                    height="32"
                  >
                    <path
                      d="M1247.119 391.831l2.1 1.663q-1.035-0.875-2.1-1.663zM-33.29 394.223l3.792-3.004c-4.553 3.167-8.267 7.216-10.964 11.922z"
                      p-id="22151"
                    ></path>
                    <path
                      d="M100.094 1025.202c-0.335 2.246-0.686 4.478-0.991 6.738 0.632-2.397 1.004-5.153 1.025-7.992zM66.475 1057.29zM32.898 1021.133q0.365-2.523 0.758-5.046c-0.512 2.136-0.819 4.598-0.846 7.124z"
                      p-id="22152"
                    ></path>
                    <path
                      d="M1183.934 1013.3c0.422 2.64 0.802 5.294 1.181 7.948-0.106-3.188-0.621-6.214-1.497-9.083zM1116.45 1030.643c-0.291-2.086-0.597-4.157-0.919-6.228 0.164 2.851 0.645 5.522 1.408 8.070z"
                      p-id="22153"
                    ></path>
                    <path
                      d="M838.858 313.771h-46.031l-24.591 139.174h41.743q41.29 0 66.012-18.581t30.848-53.265q11.887-67.326-67.982-67.326z"
                      p-id="22154"
                      data-spm-anchor-id="a313x.7781069.0.i42"
                      class="selected"
                      fill="#dbdbdb"
                    ></path>
                    <path
                      d="M983.722 204.992h-750.886c-0.008 0-0.018 0-0.027 0-31.855 0-57.681 25.807-57.715 57.653v374.76c0.031 31.85 25.86 57.656 57.715 57.656 0.010 0 0.019 0 0.029 0h750.885c0.012 0 0.027 0 0.045 0 31.852 0 57.675-25.809 57.7-57.654v-374.76c-0.023-31.849-25.848-57.656-57.7-57.656-0.014 0-0.029 0-0.047 0zM329.58 622.995l-64.278-348.869h50.102l45.9 272.748c1.11 6.693 1.744 14.404 1.744 22.263 0 3.179-0.105 6.334-0.309 9.463l1.145-0.426c6.755-22.046 17.464-41.111 31.416-57.305l126.091-246.742h48.293l-190.019 348.869h-50.086zM657.27 312.195l-48.131 272.748h33.546l-6.695 38.053h-112.307l6.723-38.068h33.619l48.131-272.748h-33.546l6.723-38.068h112.307l-6.723 38.068h-33.648zM954.537 379.288q-9.072 51.355-51.253 83.21t-96.642 30.104h-45.361l-23.030 130.393h-45.185l61.638-348.869h99.283q56.635 0 83.137 27.246t17.416 77.945z"
                      p-id="22155"
                      data-spm-anchor-id="a313x.7781069.0.i40"
                      class=""
                      fill="#dbdbdb"
                    ></path>
                  </svg>
                </div>
              </div>
              <!-- 回复的内容 -->
              <div class="Forum-content-text">
                <p>{{ item.text }}</p>
              </div>
              <!-- 回复的时间 -->
              <div class="Forum-content-other">
                <span class="date">
                  <time
                    class="b2timeago"
                    :datetime="item.time"
                    itemprop="datePublished"
                    >{{ $utils.formatTime(item.time) }}</time
                  >

                  <a
                    class="b2timeago-a"
                    v-if="userStore.id === 2 || nickname === item.user_id"
                    >删除</a
                  >
                </span>
                <!-- 其他回复 -->
                <div>
                  <button class="reply iconbutton" @click="Tworeply">
                    <el-icon size="12">
                      <ChatRound />
                    </el-icon>
                    <b>{{ item.reply }}</b>
                  </button>
                  <button class="givelike iconbutton">
                    <el-icon size="12">
                      <Star />
                    </el-icon>
                    <b>{{ item.good }}</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!reply" style="text-align: center">暂无评论</div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="pageDate.pageTotal * 10"
            @current-change="changepage"
            :hide-on-single-page="true"
          />
        </el-card>
      </div>
    </div>
  </div>
  <!-- 回到顶部 -->
  <div class="totop">
    <button @click="tolow">去到底部</button>
    <button @click="totop">回到顶部</button>
    <button @click="dialogVisible = true" v-if="userid == 2">删除文章</button>
    <button style="margin-top: 20rem" @click="Addone" @click.left="liking">
      点赞文章
    </button>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="提示！"
    width="30%"
    :before-close="handleClose"
  >
    <span>你确定要删除这个文章吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="todelete"> 确定删除 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, h, reactive } from "vue";
import { useRoute } from "vue-router";
import { getArt, getReply, getNickname, artliking } from "../../api/artcate";
import router from "../../router";
import { ElMessage } from "element-plus";
import { useUserStore } from "../../store/user";
import { addReplying, artDelete } from "../../api/article";
import { Back, ChatRound, Star } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import { throttle } from "../../assets/utils";
const userStore = useUserStore();
const nickname = ref(userStore.nickname);
const route = useRoute();
// 去底部
const tolow = () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  let clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  let step = Math.floor((scrollHeight - scrollTop) / 20); // 计算每次滚动的距离
  let timer = setInterval(function () {
    scrollTop += step;
    if (scrollTop + clientHeight >= scrollHeight) {
      clearInterval(timer);
      window.scrollTo(0, scrollHeight);
    } else {
      window.scrollTo(0, scrollTop);
    }
  }, 10); // 每10毫秒执行一次滚动
};
// 回顶部
const totop = () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let step = Math.floor(scrollTop / 20);
  let timer = setInterval(function () {
    scrollTop -= step;
    if (scrollTop <= 0) {
      clearInterval(timer);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, scrollTop);
    }
  }, 10);
};
// 点赞事件的特效
const Addone = (e) => {
  // 动画特效
  const $i = document.createElement("span");
  $i.textContent = "+1";
  $i.style.zIndex = 999;
  // $i.style.top = e.pageY - 50 + "px";
  $i.style.left = e.pageX - 10 + "px";
  $i.style.position = "absolute";
  $i.style.fontWeight = "bold";
  $i.style.color = "#ff6651";
  $i.style.fontSize = "1.2rem";
  $i.style.pointerEvents = "none";
  document.body.appendChild($i);
  $i.animate(
    [
      { top: e.pageY - 60 + "px", opacity: 1 },
      { top: e.pageY - 280 + "px", opacity: 0 },
    ],
    {
      duration: 1000,
      fill: "forwards",
    }
  ).onfinish = () => {
    $i.remove();
  };
};
//删除文章
const userid = ref(userStore.id);
const dialogVisible = ref(false);
const todelete = async () => {
  if (userid.value == 2) {
    const res = await artDelete({ id: route.query.id });
    dialogVisible.value = false;
    if (res.status == 200) {
      ElMessage.success("删除文章成功");
      router.push("/home");
    }
  }
};
// 点赞事件的post请求
const liking = throttle(async () => {
  await artliking({ id: route.query.id });
}, 60000);
// 文章内容
const title = ref("");
const text = ref("");
//获取当前文章内容
const getarts = async () => {
  const res = await getArt({ id: route.query.id });
  title.value = res.data.title;
  text.value = res.data.text;
  // console.log(res.data);
};
getarts();
//获取当前文章讨论
const reply = ref();
//分页
const pageDate = reactive({
  currentPage: 1, // 当前页 默认是第一页
  pageSize: 5, // 每页大小 默认每页10条数据
  pageTotal: 1, // 总数据量 默认为 0
});
//获取当前文章讨论
const getreply = async () => {
  const res = await getReply({
    id: route.query.id,
    pageDate,
  });
  console.log(res);
  if (res.status == 200) {
    pageDate.pageTotal = res.total;
    const userIds = res.data.map((item) => item.user_id); // 获取所有用户的id
    const users = await getNickname(userIds); // 查询所有用户的昵称
    console.log(users);
    reply.value = res.data.map((item) => {
      const user = users.data.find((u) => u.id === item.user_id); // 查找当前回复的用户
      const imgurl =
        users.data.find((u) => u.id === item.user_id)?.headimgurl ||
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4bc638ef-a1b1-4fbb-bce8-e9184387d798%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687972272&t=332aa322b014a1f0514f16b0a5678944";
      // console.log(imgurl);
      return {
        id: item.id,
        text: item.text,
        time: item.time,
        reply: item.reply,
        good: item.good,
        user_id: user ? user.nickname : "未知用户", // 如果找到了用户，返回用户的昵称；否则，返回“未知用户”
        imgurl: imgurl,
        level: user ? user.level : "游客",
      };
    });
  }
};
getreply();
const changepage = (val) => {
  pageDate.currentPage = val;
  getreply();
};
const goBack = () => {
  router.back();
};
//评论区输入的内容
const replying = ref("");
const replyfun = () => {
  const id = userStore.id;
  // console.log(id);
  if (!localStorage.getItem("token") || !id) {
    ElMessage({
      message: h("p", null, [
        h("span", null, "请用户先 "),
        h("i", { style: "color: teal" }, "登录"),
      ]),
      type: "error",
    });
  } else {
    // 发送回复评论
    const addreplying = async () => {
      const res = await addReplying({
        userid: id,
        text: replying.value,
        artid: route.query.id,
      });
      if (res.status !== 200) {
        ElMessage({
          showClose: true,
          message: "发送失败.",
          type: "error",
          offset: 300,
        });
      } else {
        replying.value = "";
        ElMessage({
          showClose: true,
          message: "发送成功.",
          type: "success",
          offset: 300,
        });
        getreply();
      }
    };
    addreplying();
  }
};
//回复函数
const Tworeply = () => {
  console.log("我点击了回复");
};
</script>

<style scoped>
:root {
  --bodywidth: 60%;
}

b {
  color: #8590a6;
  font-size: 12px;
  margin-left: 2px;
}

.editor {
  margin: 0 25px 10px;
}

.home {
  height: 100%;
  max-width: 55vw;
  background-color: #eeeeeef6;
  border-radius: 1rem;
  /* min-width: 600px; */
  /* z-index: 99; */
}

.contentbody {
  min-width: 55vw;
}
/* .art-head {
  display: flex;
  justify-content: space-between;
} */
.pinglun {
  margin-top: 1rem;
}

.iconbutton {
  padding: 0;
}

.reply {
  margin-right: 0.625rem;
}

.Forum {
  border-bottom: 0.0625rem solid #efefef;
  margin-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
}

.Forum-headimg {
  padding: 0 0.625rem;
}

.Forum-headimg > img {
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  /* object-fit: contain; */
}

.Forum-content {
  flex: 1;
}
.Forum-content-author {
  display: flex;
}
.author {
  font-size: 13px;
  line-height: 2rem;
}

.Forum-content-other {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.b2timeago {
  font-size: 12px;
  color: #8590a6;
}
.b2timeago-a {
  font-size: 12px;
  color: #8590a6;
  margin-left: 0.6rem;
  cursor: pointer;
  display: none;
}
.Forum:hover .b2timeago-a {
  display: inline;
}
.totop {
  /* width: 56px; */
  height: 100%;
  /* background-color: red; */
  position: fixed;
  right: 1vw;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

.totop > button {
  background-color: rgba(238, 238, 238, 0.933);
  height: 3.5rem;
  width: 3.5rem;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  text-align: center;
}

.totop > button:hover {
  background-color: #f3f2f2;
}

@media screen and (max-width: 1000px) {
  .home {
    max-width: 55vw;
  }

  .contentbody {
    min-width: 55vw;
  }
}

@media screen and (max-width: 800px) {
  .home {
    max-width: 80%;
  }

  .contentbody {
    min-width: 80%;
  }

  .totop {
    display: none;
  }
}

@media screen and (max-width: 530px) {
  .home {
    max-width: 400px;
  }

  .contentbody {
    min-width: 400px;
  }
}
@keyframes Addone {
  /* 0% {
    transform: translateY(0);
  } */
  100% {
    transform: translateY(-100px);
  }
}
</style>
