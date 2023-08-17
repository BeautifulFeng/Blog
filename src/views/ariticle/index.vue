<template>
  <div class="bkg">
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
        <!-- 文章内容样式 -->
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
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-bottom: 6px;
              "
            >
              <!-- 表情 -->
              <el-dropdown trigger="click">
                <div class="biaoqing">
                  <svg
                    t="1687882510654"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2523"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M318.85312 401.08032h102.0928v40.96h-102.0928zM603.05408 401.08032h102.11328v40.96h-102.11328z"
                      fill=""
                      p-id="2524"
                    ></path>
                    <path
                      d="M511.97952 867.84c-196.1984 0-355.81952-159.62112-355.81952-355.84S315.78112 156.16 511.97952 156.16c196.21888 0 355.86048 159.62112 355.86048 355.84S708.1984 867.84 511.97952 867.84z m0-670.72C338.35008 197.12 197.12 338.37056 197.12 512s141.23008 314.88 314.85952 314.88c173.64992 0 314.90048-141.23008 314.90048-314.88S685.62944 197.12 511.97952 197.12z"
                      fill=""
                      p-id="2525"
                    ></path>
                    <path
                      d="M511.97952 732.63104c-97.11616 0-176.128-78.99136-176.128-176.14848h40.96a135.33184 135.33184 0 0 0 135.168 135.18848 135.3728 135.3728 0 0 0 135.20896-135.18848h40.96c0 97.15712-79.03232 176.14848-176.16896 176.14848z"
                      fill=""
                      p-id="2526"
                    ></path>
                  </svg>
                </div>
                <template #dropdown>
                  <!-- <el-dropdown-menu> -->
                  <div class="comment-smile-box b2-show" bis_skin_checked="1">
                    <button
                      class="text smily-button"
                      @click="insertEmoji('😁')"
                    >
                      😁</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😊')"
                    >
                      😊</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😎')"
                    >
                      😎</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😤')"
                    >
                      😤</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😥')"
                    >
                      😥</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😂')"
                    >
                      😂</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😍')"
                    >
                      😍</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😏')"
                    >
                      😏</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😙')"
                    >
                      😙</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😟')"
                    >
                      😟</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😖')"
                    >
                      😖</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😜')"
                    >
                      😜</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😱')"
                    >
                      😱</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😲')"
                    >
                      😲</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😭')"
                    >
                      😭</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('😚')"
                    >
                      😚</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('💀')"
                    >
                      💀</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('👻')"
                    >
                      👻</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('👍')"
                    >
                      👍</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('💪')"
                    >
                      💪</button
                    ><button
                      class="text smily-button"
                      @click="insertEmoji('👊')"
                    >
                      👊
                    </button>
                  </div>
                  <!-- </el-dropdown-menu> -->
                </template>
              </el-dropdown>
              <!-- 回复 -->
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
            <Forum
              class="Forum"
              v-for="item in reply"
              :key="item.id"
              :item="item"
              @refresh="getreply"
            >
            </Forum>
            <div v-if="!reply" style="text-align: center">暂无评论</div>
            <div></div>
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
    <div class="tobutton">
      <div class="totop">
        <button @click="tolow">去到底部</button>
        <button @click="totop">回到顶部</button>
        <button @click="dialogVisible = true" v-if="userid == 2">
          删除文章
        </button>
        <button style="margin-top: 20rem" @click="Addone" @click.left="liking">
          点赞文章
        </button>
      </div>
    </div>
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
import Forum from "./reply/Forum.vue";
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
  // console.log(res);
  if (res.status == 200) {
    pageDate.pageTotal = res.total;
    const userIds = res.data.map((item) => item.user_id); // 获取所有用户的id
    const users = await getNickname(userIds); // 查询所有用户的昵称
    console.log(userIds);
    reply.value = res.data.map((item) => {
      const user = users.data.find((u) => u.id === item.user_id); // 查找当前回复的用户
      const imgurl =
        users.data.find((u) => u.id === item.user_id)?.headimgurl ||
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4bc638ef-a1b1-4fbb-bce8-e9184387d798%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687972272&t=332aa322b014a1f0514f16b0a5678944";
      // console.log(imgurl);
      // 将字符串转换为数组
      // console.log(item.good_userid);
      const goodUserIds = item.good_userid.split(",");
      // 判断当前用户的id是否在数组中
      if (userStore.id) {
        const currentUser = userStore.id.toString();
        // console.log(goodUserIds, currentUser);
        const isCurrentUserGood = goodUserIds.includes(currentUser);
        // 输出结果
        // console.log(isCurrentUserGood); // true 或者 false
        return {
          id: item.id,
          text: item.text,
          time: item.time,
          reply: item.reply,
          good: item.good,
          user_id: user ? user.nickname : "未知用户", // 如果找到了用户，返回用户的昵称；否则，返回“未知用户”
          imgurl: imgurl,
          level: user ? user.level : "游客",
          goodshow: isCurrentUserGood,
        };
      } else {
        return {
          id: item.id,
          text: item.text,
          time: item.time,
          reply: item.reply,
          good: item.good,
          user_id: user ? user.nickname : "未知用户", // 如果找到了用户，返回用户的昵称；否则，返回“未知用户”
          imgurl: imgurl,
          level: user ? user.level : "游客",
          goodshow: false,
        };
      }
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
  // console.log(replying.value);
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
//表情函数
const insertEmoji = (emoji) => {
  replying.value += emoji;
};
</script>

<style scoped lang="scss">
.bkg {
  margin-top: 1vw;
  display: flex;
  justify-content: center;
  position: relative;
}
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
.tobutton {
  position: relative;
}
.totop {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
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
.Forum-content-repling {
  display: flex;
  position: relative;
  background-color: #f5f6f7;
  /* height: 100px; */
  flex-direction: column;
}
.commentform {
  padding: 1rem 1rem 0.3rem 1rem;
}
.comment-smile-box {
  display: flex;
  align-items: center;
  justify-items: center;
  z-index: 3;
  flex-flow: wrap;
  width: 230px;
  height: 102px;
  padding: 2px;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.11);
  background-color: #fff;
}
.smily-button {
  width: 14.2857%;
  height: 33px;
  background: #f5f6f7;
  border: 1px solid #fff;
  font-size: 19px;
  line-height: 33px;
  padding: 0;
}
.but {
  font-size: 13px;
  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s;
  }
}
.send {
  background: #1e73be;
  border: 1px solid #1e73be;
  border-radius: 6px;
  color: #fff;
}
.biaoqing {
  cursor: pointer;
  margin-left: 1rem;
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
