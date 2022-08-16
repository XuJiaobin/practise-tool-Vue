<template>
  <el-container>
    <el-row>
      <el-col :span="11">
        <!-- 上方输入框 -->
        <toolTextarea
          v-model="Base64topInput"
          placeholder="请输入BASE64编码的内容"
        ></toolTextarea>
        <!-- 转换按钮 -->
        <div class="button-wrap">
          <el-button @click="base64encode">编码</el-button>
          <i class="el-icon-sort"></i>
          <el-button @click="base64decode">解码</el-button>
        </div>
        <!-- 下方输入框 -->
        <toolTextarea
          v-model="Base64bottomInput"
          placeholder="请输入BASE64解码的内容"
        ></toolTextarea>
      </el-col>
      <el-col :span="11" :offset="1">
        <div class="upload">
          <div class="avatar-uploader">
            <img v-if="imgBase64" :src="imgBase64" class="avatar-img" />
            <div tabindex="0" class="el-upload el-upload--text" v-else>
              <label>
                <i class="el-icon-plus avatar-uploader-icon"></i>
                <input
                  type="file"
                  name="file"
                  class="el-upload__input"
                  id="imgBase64"
                  @change="getBase64"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="button-wrap">
          <el-button @click="imgBase64 = ''">清空结果</el-button>
        </div>
        <toolTextarea
          v-model="imgBase64"
          placeholder="请输入BASE64图片内容"
        ></toolTextarea>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import toolTextarea from "@/components/tool-textarea.vue";
import { Base64 } from "js-base64";
export default {
  name: "toolBase64",
  components: {
    toolTextarea,
  },
  data() {
    return {
      Base64topInput: "",
      Base64bottomInput: "",
      imgBase64: "",
    };
  },
  methods: {
    base64encode() {
      this.Base64bottomInput = Base64.encode(this.Base64topInput);
    },
    base64decode() {
      this.Base64topInput = Base64.decode(this.Base64bottomInput);
    },
    getBase64(file) {
      if (file.target.files[0].size / 1024 / 1024 > 2) {
        this.$message.error("上传图片大小大于2MB");
        return;
      }
      if (!file.target.files.length) return;
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.target.files[0]);
        reader.onload = (e) => {
          this[file.target.id] = reader.result;
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          this.$bus.$emit("warnMessage", "出错啦，上传失败"), reject(error);
        };
      });
    },
  },
};
</script>

<style scoped>
.upload {
  height: 200px;
  margin-bottom: 1rem;
}
.avatar-img {
  max-width: 100%;
  max-height: 100%;
}
.avatar-uploader {
  height: inherit;
  width: inherit;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  cursor: pointer;
}
.avatar {
  width: 200px;
  height: 200px;
  display: block;
}
</style>