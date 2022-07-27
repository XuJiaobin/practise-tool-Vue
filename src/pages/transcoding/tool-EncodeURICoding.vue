<template>
  <div>
    <div class="top">
      <el-input
        class="topInput"
        ref="topInput"
        type="textarea"
        v-model="topInput"
        placeholder="请输入要转换的内容"
        :clearable="true"
        resize="none"
      />
    </div>
    <div class="button-wrap">
      <el-button plain @click="handleEncodeURI">encodeURI</el-button>
      <el-button plain @click="handleEncodeURIComponent">
        encodeURIComponent
      </el-button>
      <i class="el-icon-sort"></i>
      <el-button plain @click="handleDecodeURI">decodeURI</el-button>
      <el-button plain @click="handleDecodeURIComponent"
        >decodeURIComponent</el-button
      >
    </div>
    <div class="buttom">
      <el-input
        type="textarea"
        v-model="bottomInput"
        placeholder="请输入要转换的内容"
        :clearable="true"
        resize="none"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "toolEncodeURICoding",
  data() {
    return {
      topInput: "",
      bottomInput: "",
    };
  },
  methods: {
    handleEncodeURI(el) {
      console.log(el);
      if (this.topInput) {
        this.bottomInput = encodeURI(this.topInput);
      } else {
        this.warnMessage();
      }
    },
    handleEncodeURIComponent() {
      if (this.topInput) {
        this.bottomInput = encodeURIComponent(this.topInput);
      } else {
        this.warnMessage();
      }
    },
    handleDecodeURI() {
      if (this.bottomInput) {
        this.topInput = decodeURI(this.bottomInput);
      } else {
        this.warnMessage();
      }
    },
    handleDecodeURIComponent() {
      if (this.bottomInput) {
        this.topInput = decodeURIComponent(this.bottomInput);
      } else {
        this.warnMessage();
      }
    },
    warnMessage() {
      this.$message({
        message: "请输入内容",
        type: "warning",
        offset: 1,
      });
    },
  },
};
</script>

<style>
input,
textarea {
  height: 200px;
}
</style>
<style scoped>
.button-wrap {
  margin-top: 1rem;
}
.el-icon-sort {
  font-size: 24px;
  color: #606266;
  margin: 0 1rem;
}
.buttom {
  margin-top: 1rem;
}
.popover{
    position: absolute;
    background: #FFF;
    min-width: 150px;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    padding: 12px;
    z-index: 2000;
    color: #606266;
    line-height: 1.4;
    text-align: justify;
    font-size: 14px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    word-break: break-all;
}
</style>