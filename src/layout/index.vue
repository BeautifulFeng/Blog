<template>
  <div>
    <!-- 背景canvas -->
    <keep-alive>
      <BackgroundCanvas></BackgroundCanvas>
    </keep-alive>
    <!-- 樱花背景 -->
    <!-- <skuraCanvas></skuraCanvas> -->
    <!-- 导航 -->
    <div class="blogbar">
      <!-- 吸顶 -->
      <el-affix :offset="0" @scroll="changeMenu">
        <!-- 菜单 -->
        <div class="menu" ref="menuref">
          <!-- 左侧logo -->
          <div class="logo">
            <span @click="HideDom">
              <button class="leftbutton logoclass">LOGO</button>
            </span>
          </div>
          <!-- 中间搜索 -->
          <div class="search">
            <div class="input__container">
              <div class="shadow__input"></div>

              <input
                type="text"
                name="text"
                class="input__search"
                placeholder="搜索点什么..."
                v-model="searchinput"
                @keyup.enter="searchOK"
              />
              <button class="input__button__shadow" @click="searchOK">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  height="20px"
                  width="20px"
                >
                  <path
                    d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                    fill-rule="evenodd"
                    fill="#17202A"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- 右侧东西 -->
          <div class="text">
            <!-- 首页 -->
            <button @click="router.push('/home')" class="rightbutton">
              <span class="menutext">首页</span>
              <span class="menusvg"
                ><svg
                  t="1685352586778"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1654"
                  width="30"
                  height="30"
                >
                  <path
                    d="M468.906667 57.941333a68.394667 68.394667 0 0 1 86.165333 0l399.936 322.624c30.058667 24.234667 35.136 68.693333 11.328 99.328a69.269333 69.269333 0 0 1-37.802667 24.768l-3.712 0.810667 0.021334 361.514667c0 59.370667-44.48 108.48-102.528 113.877333l-4.736 0.362667-4.949334 0.106666H211.370667c-59.84 0-109.056-47.808-112.106667-109.312l-0.106667-5.034666-0.021333-361.514667-2.453333-0.490667c-29.696-6.848-52.16-33.088-53.909334-64.96L42.666667 436.010667c0-21.610667 9.685333-42.026667 26.325333-55.466667z m46.72 50.026667a5.76 5.76 0 0 0-7.253334 0L108.864 431.146667a6.058667 6.058667 0 0 0-2.218667 4.693333c0 3.328 2.624 6.016 5.866667 6.016h18.816c17.536-0.021333 31.744 14.506667 31.744 32.405333v392.533334l0.064 3.392C164.437333 896.533333 185.792 917.333333 211.712 917.333333h599.765333l3.328-0.085333c25.770667-1.322667 46.101333-23.146667 46.101334-49.621333V474.282667c0-17.92 14.208-32.426667 31.744-32.426667h18.816c1.792 0 3.477333-0.832 4.608-2.261333a6.101333 6.101333 0 0 0-0.96-8.426667z m138.133333 564.693333a32 32 0 0 1-3.754667 45.098667C610.858667 750.890667 568.106667 768 522.666667 768c-45.44 0-88.192-17.109333-127.36-50.24a32 32 0 1 1 41.386666-48.853333C464.704 692.650667 493.056 704 522.666667 704c29.589333 0 57.941333-11.349333 85.973333-35.093333a32 32 0 0 1 45.12 3.754666z"
                    fill="#ffffff"
                    p-id="1655"
                  ></path>
                </svg>
              </span>
            </button>
            <!-- 留言板 -->
            <button class="rightbutton" @click="router.push('/liuyan')">
              <span class="menutext">留言板</span>
              <span class="menusvg"
                ><svg
                  t="1685352759602"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1868"
                  width="30"
                  height="30"
                >
                  <path
                    d="M621.653333 96a32 32 0 0 1 0 64H257.578667A97.578667 97.578667 0 0 0 160 257.578667v508.842666a97.578667 97.578667 0 0 0 97.578667 97.578667h507.264a97.578667 97.578667 0 0 0 97.578666-97.152l1.578667-356.928a32 32 0 0 1 64 0.277333l-1.578667 356.928a161.578667 161.578667 0 0 1-161.578666 160.874667H257.578667A161.578667 161.578667 0 0 1 96 766.421333V257.578667A161.578667 161.578667 0 0 1 257.578667 96H621.653333z"
                    fill="#ffffff"
                    p-id="1869"
                  ></path>
                  <path
                    d="M753.258667 113.557333L455.552 409.6a64 64 0 0 0-18.88 45.376v53.845333a67.242667 67.242667 0 0 0 65.770667 67.242667l50.986666 1.109333a64 64 0 0 0 45.738667-17.813333L902.826667 267.946667a107.946667 107.946667 0 0 0 3.242666-152.490667l-1.450666-1.493333a107.029333 107.029333 0 0 0-151.338667-0.426667z m106.538666 46.144a43.946667 43.946667 0 0 1-1.322666 62.08L554.88 513.194667l-51.008-1.130667a3.242667 3.242667 0 0 1-3.178667-3.242667v-53.845333L798.378667 158.933333a43.029333 43.029333 0 0 1 58.112-2.346666l3.306666 3.114666z"
                    fill="#ffffff"
                    p-id="1870"
                  ></path>
                  <path
                    d="M772.330667 154.858667l94.677333 95.274666-45.397333 45.098667-94.677334-95.253333z"
                    fill="#ffffff"
                    p-id="1871"
                  ></path>
                </svg>
              </span>
            </button>
            <!-- 赞助 -->
            <el-dropdown style="margin-top: -3px">
              <button class="rightbutton zanzhubutton">
                <span class="menutext zanzhu"
                  >赞助<svg
                    t="1685381649398"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2371"
                    width="17"
                    height="17"
                  >
                    <path
                      d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                      p-id="2372"
                      fill="#ffffff"
                    ></path></svg></span
                ><arrow-down />
                <span class="menusvg">
                  <el-dropdown trigger="click">
                    <!-- <button style="padding: 0"> -->
                    <svg
                      t="1685356501087"
                      class="icona"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1869"
                      width="37"
                      height="37"
                    >
                      <path
                        d="M150.058667 254.378667l-1.493334 1.493333a196.266667 196.266667 0 0 0 0 277.568L522.666667 907.562667l374.101333-374.122667a196.266667 196.266667 0 0 0 3.968-273.493333l-5.461333-5.568-4.096-3.968a196.266667 196.266667 0 0 0-273.493334 3.968L522.666667 349.397333l-95.018667-95.018666a196.266667 196.266667 0 0 0-277.546667 0z m43.754666 46.762666l1.493334-1.493333a132.266667 132.266667 0 0 1 187.072 0l140.266666 140.245333 140.309334-140.266666a132.266667 132.266667 0 0 1 187.050666 0l4.885334 5.013333a132.266667 132.266667 0 0 1-3.370667 183.552L522.645333 817.024 193.813333 488.192a132.266667 132.266667 0 0 1 0-187.050667z"
                        fill="#ffffff"
                        p-id="1870"
                      ></path>
                    </svg>
                    <!-- </button> -->
                    <template #dropdown>
                      <img
                        src="/img/微信图片_20230322213949.jpg"
                        style="width: 15rem"
                      />
                    </template>
                  </el-dropdown>
                </span>
              </button>
              <template #dropdown>
                <img
                  src="/img/微信图片_20230322213949.jpg"
                  style="width: 15rem"
                />
              </template>
            </el-dropdown>
            <!-- 更新日志 -->
            <button @click="router.push('/upmessage')" class="rightbutton">
              <span class="menutext">更新日志</span>
              <span class="menusvg gengxinsvg"
                ><svg
                  t="1685352831039"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2192"
                  width="30"
                  height="30"
                >
                  <path
                    d="M618.666667 288a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h298.666667zM704 480a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384zM533.333333 672a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h213.333333z"
                    fill="#ffffff"
                    p-id="2193"
                  ></path>
                  <path
                    d="M768 85.333333a128 128 0 0 1 128 128v597.333334a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V213.333333a128 128 0 0 1 128-128h512z m0 64H256a64 64 0 0 0-64 64v597.333334a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V213.333333a64 64 0 0 0-64-64z"
                    fill="#ffffff"
                    p-id="2194"
                  ></path>
                </svg>
              </span>
            </button>
            <!-- 登录+头像 -->
            <div v-if="AvatarShow" class="touxiang">
              <el-dropdown class="headsvg">
                <span
                  ><img
                    style="
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                      border-radius: 50%;
                    "
                    :src="userStore.headurl" /><arrow-down
                /></span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item
                      v-if="Writeshow"
                      @click="router.push('/write')"
                      >写东西</el-dropdown-item
                    >
                    <el-dropdown-item @click="router.push('/myinfo')"
                      >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item @click="Outlogin"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-dropdown trigger="click" class="headsvg-phone">
                <span
                  ><img
                    style="
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                      border-radius: 50%;
                    "
                    :src="userStore.headurl" /><arrow-down
                /></span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item
                      v-if="Writeshow"
                      @click="router.push('/write')"
                      >写东西</el-dropdown-item
                    >
                    <el-dropdown-item @click="router.push('/myinfo')"
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
              <button class="denglubutton" @click="TurnToDenglu">
                <span class="menutext">登录</span>
                <span class="menusvg denglusvg">
                  <svg
                    t="1685358221593"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3139"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M512 590.75c-142.5 0-258.75-116.25-258.75-258.75s116.25-262.5 258.75-262.5 258.75 116.25 258.75 258.75-116.25 262.5-258.75 262.5zM512 144.5c-101.25 0-183.75 82.5-183.75 183.75s82.5 183.75 183.75 183.75 183.75-82.5 183.75-183.75-82.5-183.75-183.75-183.75z"
                      p-id="3140"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M170.75 950.75c-18.75 0-37.5-15-37.5-37.5 0-7.5 0-11.25 0-15 0-210 172.5-382.5 382.5-382.5 22.5 0 37.5 15 37.5 37.5s-15 37.5-37.5 37.5c-168.75 0-307.5 138.75-307.5 307.5v11.25c0 22.5-18.75 41.25-37.5 41.25v0z"
                      p-id="3141"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M853.25 947v0c-22.5 0-37.5-15-37.5-37.5v-11.25c0-168.75-138.75-307.5-307.5-307.5-22.5 0-37.5-15-37.5-37.5s15-37.5 37.5-37.5c210 0 382.5 172.5 382.5 382.5 0 3.75 0 7.5 0 11.25 0 22.5-15 37.5-37.5 37.5z"
                      p-id="3142"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </span>
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
import { ref, reactive, watch } from "vue";
import router from "../router";
import { Reguser, Login } from "../api/user";
import { useUserStore } from "../store/user";
import { Base64 } from "js-base64";
import BackgroundCanvas from "./background.vue";
// import skuraCanvas from "./skura.vue";

const userStore = useUserStore();
const Writeshow = ref(false);
if (userStore.username === "576652406") {
  Writeshow.value = true;
}

document.documentElement.scrollTop = 0;
// 隐藏页面元素
const SessionShow = ref(true);
const CloudMusicShow = ref(true);
const HideDom = () => {
  SessionShow.value = !SessionShow.value;
  CloudMusicShow.value = !CloudMusicShow.value;
};

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
// 菜单栏 吸附以及绑定scroll事件 监听滚动条
const menuref = ref(null);
const changeMenu = () => {
  if (document.documentElement.scrollTop > 10) {
    menuref.value.style.backgroundColor = "#eeee";
  } else {
    menuref.value.style.backgroundColor = "";
  }
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
  // console.log(res);
  if (res.status === 200) {
    ElMessage.success(res.message);
    login();
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
      // if (data.level === "博主") {
      //   Writeshow.value = true;
      // }
    } else {
      localStorage.removeItem("GARBAGE");
    }
    userStore.setToken(res.token, JSON.stringify(data));
    ElMessage.success(res.message);
    router.go(0);
    // DengluShow.value = false;
  }
};

// 退出登录
const Outlogin = () => {
  userStore.clearToken();
  Writeshow.value = false;
  router.go(0);
  // AvatarShow.value =false
};

// 搜索
const searchinput = ref("");
const searchOK = () => {
  // console.log("搜索了", searchinput.value);
  if (searchinput.value) {
    router.push({
      path: "/search",
      query: {
        val: searchinput.value,
      },
    });
  }
};
</script>

<style scoped>
.Other {
  cursor: pointer;
}
.menu {
  width: 100%;
  height: 60px;
  /* min-width: 900px; */
  display: flex;
  justify-content: center;
}

.content {
  margin-top: 1vw;
  display: flex;
  justify-content: center;
}

.zanzhu {
  font-size: 1.0625rem;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
  /* font-size: inherit; */
}

.leftbutton {
  overflow: hidden;
  outline: none;
  border: none;
  z-index: 1;
  position: relative;
  outline: none;
  border: none;
}

/* .leftbutton:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
} */
.leftbutton::after {
  content: "";
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  animation: shine 1s ease-in infinite;
}

/* .leftbutton:hover::after {
  transition: transform 0.75s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
} */
@keyframes shine {
  0% {
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  100% {
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
}

.denglubutton {
  position: relative;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5em 1em;
  outline: none;
  border: none;
}

.denglubutton:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(0.9, 1.1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }

  75% {
    transform: scale(0.95, 1.05);
  }
}

.menutext {
  mix-blend-mode: difference;
}

.menusvg {
  mix-blend-mode: difference;
}

.denglubutton:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
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
  position: relative;
  border: none;
}

/* butto动画 */
.rightbutton::before,
.rightbutton::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #fc2f70;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.rightbutton::before {
  top: 0;
  transform-origin: center right;
}

.rightbutton:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

.rightbutton::after {
  bottom: 0;
  transform-origin: center left;
}

.rightbutton:hover::after {
  transform-origin: center right;
  transform: scaleX(1);
}

:focus {
  outline: 0;
}

.el-dropdown-menu {
  padding: 0 !important;
}

/* 搜索框 */
.search {
  margin-top: 0.3rem;
}

.input__container {
  position: relative;
  background: rgba(255, 255, 255, 0.664);
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* gap: 5px; */
  border-radius: 22px;
  width: 200px;
  max-width: 300px;
  transition: transform 400ms;
  /* transform-style: preserve-3d; */
  /* transform: rotateX(15deg) rotateY(-20deg); */
  perspective: 500px;
}

/* Visit https://democoding.in/ for more free css animation */

.shadow__input {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
  filter: blur(30px);
  border-radius: 20px;
  background-color: #999cff;
  background-image: radial-gradient(
      at 85% 51%,
      hsla(60, 60%, 61%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 74% 68%, hsla(235, 69%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 64% 79%, hsla(284, 72%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 75% 16%, hsla(283, 60%, 72%, 1) 0px, transparent 50%),
    radial-gradient(at 90% 65%, hsla(153, 70%, 64%, 1) 0px, transparent 50%),
    radial-gradient(at 91% 83%, hsla(283, 74%, 69%, 1) 0px, transparent 50%),
    radial-gradient(at 72% 91%, hsla(213, 75%, 75%, 1) 0px, transparent 50%);
}

.input__button__shadow {
  cursor: pointer;
  border: none;
  background: none;
  transition: transform 400ms, background 400ms;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 5px;
}

.input__button__shadow:hover {
  background: rgba(255, 255, 255, 0.411);
}

.input__search {
  width: 100%;
  border-radius: 20px;
  outline: none;
  border: none;
  padding: 8px;
  position: relative;
}

.icon {
  margin-top: 2px;
}

.menusvg {
  display: none;
}

.logoclass {
  mix-blend-mode: difference;
}

.denglusvg {
  margin-left: -10px;
}

.gengxinsvg {
  margin-left: -5px;
}

.zanzhubutton {
  margin-top: 2.8px;
}

.headsvg-phone {
  display: none;
}

/*媒体查询 */
@media screen and (max-width: 939px) {
  .input__search {
    display: none;
  }

  .input__container {
    width: 50px;
  }
}

@media screen and (max-width: 530px) {
  .menu {
    justify-content: unset;
  }

  .logo {
    margin: 0;
  }

  .text {
    margin: 0;
  }

  .input__container {
    width: 10px;
    padding: 1px 10px;
    /* margin-top: 10px; */
  }

  .search {
    margin: 15px 8px;
  }

  .menutext {
    display: none;
  }

  .rightbutton {
    padding: 1em !important;
  }

  .menusvg {
    display: block;
  }

  .headsvg-phone {
    display: block;
  }

  .zanzhu {
    display: none;
  }

  .headsvg {
    display: none;
  }
}

@media screen and (max-width: 418px) {
}
</style>
