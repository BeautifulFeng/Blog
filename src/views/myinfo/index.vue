<template>
  <div>
    <el-card>
      <div style="text-align: center">资料设置</div>
      <el-form :model="form">
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="centerDialogVisible = true">更换头像</el-button>
      </div>
      <div style="float: right; margin-bottom: 5%">
        <el-button>保存</el-button>
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
        action="http://127.0.0.1:5177/user/upimg"
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
        <el-button type="primary" @click="handleHeadconfig">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useUserStore } from "../../store/user";
import { ElMessage } from "element-plus";
import { updateavatar } from "../../api/user";
const userstore = useUserStore();
const imageUrl = ref("");
const centerDialogVisible = ref(false);
const headers = ref({
  Authorization: localStorage.getItem("token"),
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

const form = reactive({
  nickname: userstore.nickname,
  password: "",
  url: "",
});
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
