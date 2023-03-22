<template>
  <div>
    <!-- 爱心樱花 -->
    <canvas ref="canvas"></canvas>
    <!-- 视频背景 -->
    <div class="backG">
      <video src="/video/20230321_182758.mp4" autoplay muted loop></video>
    </div>
    <!-- 导航 -->
    <div class="blogbar">
      <!-- 吸顶 -->
      <el-affix :offset="0" @scroll="changeMenu">
        <!-- 菜单 -->
        <div class="menu" ref="menuref">
          <!-- 左侧logo -->
          <div class="logo">
            <span ref="LOGOref" @click="HideDom"
              >LOGO / {{ SessionShow ? "隐藏" : "显示" }}</span
            >
          </div>
          <!-- 右侧东西 -->
          <div class="text">
            <!-- 首页 -->
            <button style="margin-right: 1vw" ref="listHome" @click="GoHome">
              <span>首页</span>
            </button>
            <!-- 留言板 -->
            <button
              style="margin-right: 1vw"
              ref="listLiuyan"
              @click="GoLiuyan"
            >
              <span>留言板</span>
            </button>
            <!-- 赞助 -->
            <el-dropdown>
              <button style="margin-right: 1vw" ref="listZan">
                <span style="font-size: medium">赞助👍</span><arrow-down />
              </button>
              <template #dropdown>
                <img
                  src="/img/微信图片_20230322213949.jpg"
                  style="width: 400px"
                />
              </template>
            </el-dropdown>
            <!-- 更新日志 -->
            <button
              style="margin-right: 1vw"
              ref="listMessage"
              @click="GoUpMessage"
            >
              <span>更新日志</span>
            </button>
            <!-- 登录+头像 -->
            <div v-if="AvatarShow">
              <el-dropdown>
                <span
                  ><img
                    style="width: 40px; border-radius: 50%"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F22%2F20210622140718_0b391.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682075087&t=979eb08cc4822c81d7c8ddee2b4f5ea8"
                    alt="" /><arrow-down
                /></span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="GoToMyinfo"
                      >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item @click="AvatarShow = false"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div v-else>
              <button @click="TurnToDenglu">
                <span ref="listLogin">登录</span>
              </button>
            </div>
            <!-- --- -->
          </div>
        </div>
      </el-affix>
    </div>
    <!-- 主体内容 -->
    <div class="content" v-show="SessionShow">
      <router-view></router-view>
    </div>
    <!-- 网易云外链 -->
    <div class="musicCloud" v-show="CloudMusicShow">
      <!-- <iframe
        style="width: 16.5vw; height: 40vh"
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        src="//music.163.com/outchain/player?type=0&id=8249683892&auto=1&height=430"
      ></iframe> -->
      <iframe
        style="width: 10vw"
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        width="330"
        height="86"
        src="//music.163.com/outchain/player?type=2&id=482172&auto=1&height=66"
      ></iframe>
    </div>
  </div>
  <el-dialog
    v-model="DengluShow"
    :before-close="handleClose"
    style="max-width: 600px"
  >
    <div>
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        class="demo-tabs"
        @tab-remove="removeTab"
        stretch
      >
        <el-tab-pane label="密码登录" name="1">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            class="demo-ruleForm"
            inline="ture"
          >
            <!-- 账号密码  -->

            <el-form-item label="账号:" prop="username">
              <el-input
                v-model="ruleForm.username"
                type="username"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="2" disabled="true">
          手机登录
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="display: flex; justify-content: center; margin-right: 3vw">
      <el-button style="color: black; width: 10vw">注册</el-button>
      <el-button type="primary" style="color: white; width: 10vw"
        >登录</el-button
      >
    </div>
    <div style="margin-top: 2vh">其他方式登录</div>
    <div style="margin-top: 1vh">
      <img src="/img/微信登录.png" @click="GoTobaidu" class="Other" />
      <img src="/img/qq登录.png" style="margin-left: 2.8vw" class="Other" />
    </div>
  </el-dialog>
</template>

<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";
import router from "../router";
document.documentElement.scrollTop = 0;
// 隐藏页面元素
const SessionShow = ref(true);
const CloudMusicShow = ref(true);
const HideDom = () => {
  SessionShow.value = !SessionShow.value;
  CloudMusicShow.value = !CloudMusicShow.value;
};
// 樱花类
class CherryBlossom {
  constructor(canvas, { x, y, size, speed }) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed ? speed : Math.random() * 10 + 5;
    this.angle = Math.random() * Math.PI * 2;
    this.color = this.getRandomColor();
    this.radius = Math.random() * 10 + 5;
  }

  getRandomColor() {
    // const colors = ["#FFB6C1", "#FF69B4", "#FF1493"];
    const colors = ["#F8BBD0", "#FFCDD2", "#E57373", "#FF8A80", "#FF5252"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    // 风向
    // this.angle += Math.random() * 0.2 - 0.1;
    // this.angle += 0.01;
    if (this.y - this.size > this.canvas.height) {
      this.x = Math.random() * this.canvas.width;
      this.y = -this.size;
    }
  }

  draw() {
    const gradient = this.ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "white");
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    const petal = new Path2D();
    petal.moveTo(this.x, this.y, this.size, 0, Math.PI * 1);
    petal.bezierCurveTo(
      this.x + this.radius * 0.6,
      this.y - this.radius * 1.4,
      this.x + this.radius * 1.5,
      this.y + this.radius * 0.1,
      this.x,
      this.y + this.radius
    );
    petal.bezierCurveTo(
      this.x - this.radius * 0.6,
      this.y + this.radius * 1,
      this.x - this.radius * 1.1,
      this.y - this.radius * 0.9,
      this.x,
      this.y - this.radius
      // this.x - this.radius * 0.7,
      // this.y + this.radius * 0.5,
      // this.x - this.radius * 0.7,
      // this.y - this.radius * 0.9,
      // this.x,
      // this.y - this.radius
    );
    this.ctx.fill(petal);
    this.ctx.closePath();
  }
}
const canvas = ref(null);
const menuref = ref();
let cherryBlossoms = [];
//
const createCherryBlossom = () => {
  for (let i = 0; i < 100; i++) {
    const cherryBlossom = new CherryBlossom(canvas.value, {
      x: Math.random() * canvas.value.width,
      y: -Math.random() * canvas.value.height,
      // size: 1,
      size: Math.random() * 3 + 10,
      // speed: 2.8,
      speed: Math.random() * 3 + 0.5,
    });
    cherryBlossoms.push(cherryBlossom);
  }
};
const animate = () => {
  requestAnimationFrame(animate);
  const ctx = canvas.value.getContext("2d");
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  cherryBlossoms.forEach((cherryBlossom) => {
    cherryBlossom.update();
    cherryBlossom.draw();
  });
};
onMounted(() => {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  createCherryBlossom();
  const ctx = canvas.value.getContext("2d");
  ctx.value = canvas.value.getContext("2d");
  animate();
  //   setInterval(createCherryBlossom, 1000);
});
onUnmounted(() => {
  cherryBlossoms = [];
});
// 登录文本
const AvatarShow = ref(false);
// 登录界面
const DengluShow = ref(false);
// 登录处理函数 跳到登录页面
const TurnToDenglu = () => {
  DengluShow.value = true;
};
// 菜单栏目
const listLiuyan = ref();
const listHome = ref();
const listMessage = ref();
const LOGOref = ref();
const listZan = ref();
const listLogin = ref();
// 菜单栏 吸附以及绑定scroll事件 监听滚动条
const changeMenu = () => {
  if (document.documentElement.scrollTop > 0) {
    menuref.value.style.backgroundColor = "#eeee";
    listLiuyan.value.style.color = "black";
    listHome.value.style.color = "black";
    listMessage.value.style.color = "black";
    LOGOref.value.style.color = "black";
    listZan.value.style.color = "black";
    if (AvatarShow.value === false) {
      listLogin.value.style.color = "black";
    }
  } else {
    menuref.value.style.backgroundColor = "";
    listLiuyan.value.style.color = "#eeee";
    listHome.value.style.color = "#eeee";
    listMessage.value.style.color = "#eeee";
    LOGOref.value.style.color = "#eeee";
    listZan.value.style.color = "#eeee";
    if (AvatarShow.value === false) {
      listLogin.value.style.color = "#eeee";
    }
  }
};
// 菜单跳转事件
const GoHome = () => {
  router.push("/home");
};
const GoLiuyan = () => {
  router.push("/liuyan");
};
const GoUpMessage = () => {
  router.push("/upmessage");
};
const GoToMyinfo = () => {
  router.push("/myinfo");
};
// form登录表单
const ruleFormRef = ref();
const ruleForm = reactive({
  username: "",
  password: "",
});
const editableTabsValue = ref("1");
// 其他方式登录
const GoTobaidu = () => {
  window.open("https://www.baidu.com/");
};
</script>

<style scoped>
.Other {
  cursor: pointer;
}
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.backG {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}

video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
}
.musicCloud {
  position: fixed;
  left: 0;
  top: 7.5%;
}

.menu {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.content {
  margin-top: 1vw;
  display: flex;
  justify-content: center;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
}
.logo > span {
  color: #eeee;
}
.text {
  margin-right: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 60px; */
}
.text > div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  color: #eeee;
}
:focus {
  outline: 0;
}
.el-dropdown-menu {
  padding: 0 !important;
}
</style>
