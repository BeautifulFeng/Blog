<template>
  <div class="home">
    <div class="contentbody">
      <button class="back" @click="goBack">
        <el-icon :size="25">
          <Back />
        </el-icon>
      </button>
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
          <span>讨论</span>
          <el-divider style="margin-top: 0.75rem" />
          <!-- 主体内容 -->
          <div class="Forum" v-for="item in reply" :key="item.id">
            <!-- 头像 -->
            <div class="Forum-headimg">
              <!-- <el-icon size="32"><Avatar /></el-icon> -->
              <img :src="item.imgurl" alt="" />
            </div>
            <div class="Forum-content">
              <div class="Forum-content-author">
                <span class="author">{{ item.user_id }}</span>
              </div>
              <div class="Forum-content-text">
                <p>{{ item.text }}</p>
              </div>
              <div class="Forum-content-other">
                <span class="date">
                  <time
                    class="b2timeago"
                    :datetime="item.time"
                    itemprop="datePublished"
                    >{{ formatTime(item.time) }}</time
                  >
                  <a
                    class="b2timeago-a"
                    v-if="userStore.id === 2 || nickname === item.user_id"
                    >删除</a
                  >
                </span>
                <div>
                  <button class="reply iconbutton">
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
        </el-card>
      </div>
    </div>
  </div>
  <!-- 回到顶部 -->
  <div class="totop">
    <button @click="tolow">去到底部</button>
    <button @click="totop">回到顶部</button>
  </div>
</template>

<script setup>
import { ref, reactive, h } from "vue";
import { useRoute } from "vue-router";
import { getArt, getReply, getNickname } from "../../api/artcate";
import {
  Back,
  ChatRound,
  Star,
  Avatar,
  Message,
} from "@element-plus/icons-vue";
import router from "../../router";
import { ElMessage } from "element-plus";
import { useUserStore } from "../../store/user";
import { addReplying } from "../../api/article";
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
const getreply = async () => {
  const res = await getReply({ id: route.query.id });
  // console.log(res);
  if (res.status == 200) {
    const userIds = res.data.map((item) => item.user_id); // 获取所有用户的id
    const users = await getNickname(userIds); // 查询所有用户的昵称
    // console.log(users);
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
      };
    });
  }
};
getreply();

const goBack = () => {
  router.back();
};
//讨论时间函数
function formatTime(time) {
  // console.log(time);
  const now = new Date();
  const diff = (now - new Date(time)) / 1000; // 计算时间差，单位为秒
  if (diff < 60) {
    return "刚刚";
  } else if (diff < 3600) {
    return Math.floor(diff / 60) + "分钟前";
  } else if (diff < 86400) {
    return Math.floor(diff / 3600) + "小时前";
  } else {
    return Math.floor(diff / 86400) + "天前";
  }
}
//回复框输入的内容
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
        ElMessage.error("回复失败");
      } else {
        getreply();
      }
    };
    addreplying();
  }
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
  height: 2rem;
  width: 2rem;
  /* object-fit: contain; */
}

.Forum-content {
  flex: 1;
}

.author {
  font-size: 13px;
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
  height: 120px;
  /* background-color: red; */
  position: fixed;
  right: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.totop > button {
  background-color: rgba(238, 238, 238, 0.933);
  height: 56px;
  width: 56px;
  font-size: 12px;
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
</style>
