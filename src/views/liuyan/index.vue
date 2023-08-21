<template>
  <div class="danmu-bg" ref="bkg">
    <vue-danmaku
      ref="danmuqiang"
      id="danmuqiang"
      v-model:danmus="danmus"
      style="height: 80%; width: 100%"
      :loop="true"
      :autoplay="true"
      :randomChannel="true"
      :speeds="200"
      :fontSize="26"
      :debounce="100"
      :isSuspend="true"
      :extraStyle="`color: black`"
    >
    </vue-danmaku>
    <!-- <el-alert title="发送成功" type="success" show-icon center /> -->
    <div class="send-input">
      <el-input
        v-model="danmutext"
        class="w-50 m-2"
        placeholder="输入弹幕"
      ></el-input>
      <el-button @click="sendanmu" class="w-51">发射</el-button>
    </div>
    <!-- <div class="reply">
      <el-card>
        <div class="re-bg"></div>
      </el-card>
    </div> -->
  </div>
</template>

<script setup>
// import ref from "vue";
import vueDanmaku from "vue3-danmaku";
import { ref, reactive, onMounted } from "vue";
import { SenDanmu, GetDanmu } from "../../api/message";
const danmus = ref([]);
const danmutext = ref("");
const isMessageShown = ref(false);
const getdanmu = async () => {
  const res = await GetDanmu();
  // console.log(res.data);
  res.data.forEach((item) => {
    danmus.value.push(item.msg);
  });
  // console.log(danmus.value);
};
getdanmu();
const sendanmu = async () => {
  if (isMessageShown.value) {
    return;
  }
  isMessageShown.value = true;
  if (!danmutext.value) {
    ElMessage({
      showClose: true,
      message: "请输入弹幕",
      type: "warning",
      duration: 1000,
      customClass: "message-el",
      onClose: () => {
        isMessageShown.value = false;
      },
    });
    return;
  }
  if (danmutext.value.length > 20) {
    ElMessage({
      showClose: true,
      message: "弹幕太长了",
      type: "warning",
      offset: 750,
      duration: 2000,
      customClass: "message-el",
      onClose: () => {
        isMessageShown.value = false;
      },
    });
    return;
  }
  const res = await SenDanmu({
    msg: danmutext.value,
  });
  if (res.status === 200) {
    danmus.value.push(danmutext.value);
    danmutext.value = "";
    ElMessage({
      showClose: true,
      message: "弹幕已发射",
      type: "success",
      offset: 750,
      duration: 500,
      customClass: "message-el",
      onClose: () => {
        isMessageShown.value = false;
      },
    });
  } else {
    ElMessage({
      showClose: true,
      message: "请重新登录",
      type: "warning",
      offset: 750,
      duration: 3000,
      customClass: "message-el",
      onClose: () => {
        isMessageShown.value = false;
      },
    });
  }
};
const bkg = ref(null);
// onMounted(() => {
//   const height = window.innerHeight - 120;
//   console.log(height);
//   bkg.value.style.height = `${height}px`;
// });
</script>

<style lang="scss" scoped>
.bkg {
  margin-top: 1vw;
  display: flex;
  justify-content: center;
  position: relative;
}
.danmu-bg {
  margin-top: 60px;
  background-color: transparent;
  height: calc(100vh - 120px);
  width: 100%;
  // margin-bottom: 60px;
  .send-input {
    display: flex;
    justify-content: center;
    .w-50 {
      width: 10%;
    }
    .w-51 {
      margin-left: -0.2rem;
      z-index: 10;
    }
  }
}
.reply {
  margin-top: 6rem;
  height: 100%;
  width: 100%;
  background: transparent;
  .re-bg {
    height: 600px;
    width: 300px;
  }
}
@media screen and (max-width: 530px) {
  .danmu-bg {
    margin-top: 0;
    height: 100vh;

    .send-input {
      .w-50 {
        width: 30%;
      }
    }
  }
}
</style>
