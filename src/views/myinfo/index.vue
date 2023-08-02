<template>
  <div>
    <el-card>
      <div style="text-align: center; margin-bottom: 1rem">资料设置</div>
      <el-form :model="form">
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" />
        </el-form-item>
        <el-form-item label="密码" v-if="mimashow">
          <el-input v-model="form.password" />
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="updPassword">{{
          !mimashow ? "更换密码" : "取消更换"
        }}</el-button>
        <el-button @click="centerDialogVisible = true">更换头像</el-button>
      </div>
      <div style="float: right; margin-bottom: 5%; margin-top: 1rem">
        <el-button @click="updateInfo">保存</el-button>
      </div>
    </el-card>
  </div>
  <el-dialog
    v-model="centerDialogVisible"
    title="更换头像"
    width="30%"
    :before-close="handleClose"
  >
    <div style="display: flex">
      <el-upload
        class="avatar-uploader"
        :action="uploadurl"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :headers="headers"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <img
          src="https://img1.baidu.com/it/u=2279237123,3956366328&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          v-else
          class="el-icon-plus avatar-uploader-icon"
        />
      </el-upload>
      <div>
        <img
          style="
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          "
          :src="form.url ? form.url : userstore.headurl"
          alt=""
        />
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleHeadconfig"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useUserStore } from "../../store/user";
import { ElMessage } from "element-plus";
import { updateavatar, updInfo } from "../../api/user";
const uploadurl = `${import.meta.env.VITE_PUBLIC_PATH}/user/upimg`;
const mimashow = ref(false);
const userstore = useUserStore();
const imageUrl = ref("");
const centerDialogVisible = ref(false);
const headers = ref({
  Authorization: localStorage.getItem("token"),
});
// 用户信息
const form = reactive({
  nickname: userstore.nickname,
  password: "",
  url: userstore.headurl,
});
// 监听图片上传成功的事件
// const handleAvatarSuccess = (res, file) => {
//   imageUrl.value = URL.createObjectURL(file.raw);
// };
const handleAvatarSuccess = (response, uploadFile, uploadFiles) => {
  console.log(response);
  form.url = response.url;
};
// 图片规则
const beforeAvatarUpload = (file) => {
  console.log(file);
  const isJPG = file.type === "image/jpeg" || "image/png";
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isJPG) {
    ElMessage.error("上传头像图片只能是 JPG 格式!");
  }
  if (!isLt2M) {
    ElMessage.error("上传头像图片大小不能超过 2MB!");
  }
  return isJPG && isLt2M;
};
// 头像取消
const handleClose = () => {
  centerDialogVisible.value = false;
  setTimeout(() => {
    form.url = "";
  }, 1000);
};
// 头像保存
const handleHeadconfig = async () => {
  await updateavatar({ url: form.url });
  userstore.updAvator(form.url);
  ElMessage.success("更换成功");
  centerDialogVisible.value = false;
};
// 更换密码
const updPassword = () => {
  mimashow.value = !mimashow.value;
  form.password = "";
};
// 确定保存
const updateInfo = async () => {
  // if (!form.password){
  //   delete form.password
  //   console.log(form);
  // }
  // else{console.log(form);}
  delete form.url;
  const res = await updInfo(form);
  console.log(res);
  if (res.status === 200) {
    userstore.updNickname(form.nickname);
    ElMessage.success("更换成功");
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
