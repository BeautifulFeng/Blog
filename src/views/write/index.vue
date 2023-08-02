<template>
  <div class="home">
    <el-card style="margin-bottom: 0.3rem">
      <v-md-editor
        v-model="form.text"
        :disabled-menus="[]"
        @upload-image="handleUploadImage"
        height="500px"
      />
    </el-card>
    <el-card class="card">
      <el-form :model="form" label-width="120px">
        <el-form-item label="文章名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章简述">
          <el-input v-model="form.content" />
        </el-form-item>
        <el-form-item label="文章封面">
          <el-upload
            class="avatar-uploader"
            :action="uploadurl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="form.url" :src="form.url" class="avatar" />
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定发布</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { upimg } from "../../api/artcate";
import { addArt } from "../../api/article";
import router from "../../router";
// 上传地址
const uploadurl = `${import.meta.env.VITE_PUBLIC_PATH}/artcate/upartimg`;
console.log(uploadurl);
const form = reactive({
  name: "",
  text: "",
  type: [],
  url: "",
  content: "",
});
// const text = ref("");
// const imageUrl = ref("");
const options = [
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "JavaScript",
    label: "JavaScript",
  },
  {
    value: "CSS",
    label: "CSS",
  },
  {
    value: "React",
    label: "React",
  },
  {
    value: "综合",
    label: "综合",
  },
];
const handleUploadImage = async (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  event.preventDefault();
  let file = files[0];
  let formData = new FormData();
  formData.append("file", file);
  const res = await upimg(formData);
  // console.log(res);
  // 此处只做示例
  insertImage({
    url: res.url,
    // width: 'auto',
    // height: 'auto',
  });
};
// 文章封面事件
const handleAvatarSuccess = (response, uploadFile, uploadFiles) => {
  console.log(response);
  form.url = response.url;
  console.log(form.url);
  // imageUrl.value = response.url;
};
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("上传头像图片大小不能超过 2MB!");
    return false;
  }
  return true;
};
const onSubmit = async () => {
  const res = await addArt(form);
  console.log(res);
  if (res.status === 200) {
    ElMessage.success("发布文章成功！");
    router.push("/home");
  }
};
</script>

<style>
.home {
  height: 100%;
  width: 60vw;
  background-color: #eeeeeef6;
  border-radius: 10px;
  min-width: 600px;
  /* z-index: 99; */
}
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
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  object-fit: contain;
}
.class {
  /* margin-top: 10rem; */
}
</style>
