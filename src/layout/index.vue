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
                    :src="userStore.headurl" /><arrow-down
                /></span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="GoToMyinfo"
                      >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item @click="Outlogin"
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
    style="max-width: 400px"
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
            :model="userinfo"
            class="demo-ruleForm"
            inline="ture"
            :rules="rule"
          >
            <!-- 账号密码  -->

            <el-form-item label="账号:" prop="username">
              <el-input
                v-model="userinfo.username"
                type="username"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input
                v-model="userinfo.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
            <div style="position: absolute; right: 0; top: 6vh">
              <el-checkbox v-model="checked1" label="记住密码" size="small" />
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="2" disabled="true">
          手机登录
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="display: flex; justify-content: center">
      <el-button style="color: black; width: 6.7775rem" @click="reguser"
        >注册</el-button
      >
      <el-button
        type="primary"
        style="color: white; width: 6.7775rem"
        @click="login"
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
import { Reguser, Login } from "../api/user";
import { useUserStore } from "../store/user";
import { Base64 } from "js-base64";

const userStore = useUserStore();
console.log(userStore.nickname);
console.log(userStore.username);
console.log(userStore.headurl);

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
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 3 + 1;
    this.radius = Math.random() * 10 + 5;
    this.color = this.getRandomColor();
  }
  getRandomColor() {
    // const colors = ["#FFB6C1", "#FF69B4", "#FF1493"];
    const colors = ["#F8BBD0", "#FFCDD2", "#E57373", "#FF8A80", "#FF5252"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
  draw() {
    const ctx = this.ctx;
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
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > this.canvas.height) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
  }
}
const canvas = ref(null);
onMounted(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.value.width = width;
  canvas.value.height = height;
  const cherryBlossoms = Array.from(
    { length: 100 },
    () => new CherryBlossom(canvas.value)
  );
  const ctx = canvas.value.getContext("2d");
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (const cherryBlossom of cherryBlossoms) {
      cherryBlossom.update();
      cherryBlossom.draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
});

// 登录文本
const AvatarShow = ref(false);
if (userStore.token) {
  AvatarShow.value = true;
}
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
const menuref = ref(null);
const changeMenu = () => {
  if (document.documentElement.scrollTop > 10) {
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
const userinfo = reactive({
  username: localStorage.getItem("GARBAGED")
    ? Base64.decode(localStorage.getItem("GARBAGED"))
    : "",
  // password: "",
  password: localStorage.getItem("GARBAGE")
    ? Base64.decode(localStorage.getItem("GARBAGE"))
    : "",
});
const rule = {
  password: [
    // { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 6, max: 12, message: "长度在 6 到 12 ", trigger: "blur" },
  ],
};
const editableTabsValue = ref("1");
// 其他方式登录
const GoTobaidu = () => {
  window.open("https://www.baidu.com/");
};
// 记住密码model值
const checked1 = ref(true);

// 注册
const reguser = async () => {
  // console.log([...userinfo.password]);
  if ([...userinfo.password].length < 6) {
    return;
  }
  const res = await Reguser(userinfo);
  console.log(res);
  if (res.status === 200) {
    ElMessage.success(res.message);
  }
};
// 登录
const login = async () => {
  // console.log([...userinfo.password]);
  if ([...userinfo.password].length < 6) {
    return;
  }
  localStorage.setItem("GARBAGED", Base64.encode(userinfo.username));
  const res = await Login(userinfo);
  const data = res.data[0];
  console.log(res);
  if (res.status === 200) {
    if (checked1.value === true) {
      const password = Base64.encode(userinfo.password);
      localStorage.setItem("GARBAGE", password);
    } else {
      localStorage.removeItem("GARBAGE");
    }
    userStore.setToken(res.token, JSON.stringify(data));
    ElMessage.success(res.message);
    router.go(0);
  }
};
// 退出登录
const Outlogin = () => {
  userStore.clearToken();
  router.go(0);
  // AvatarShow.value =false
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
  z-index: 99;
  pointer-events: none;
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
  justify-content: center;
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
  margin-right: 20vw;
}
.logo > span {
  color: #eeee;
}
.text {
  margin-left: 5vw;
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
