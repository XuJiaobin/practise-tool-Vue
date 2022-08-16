<template>
  <el-container style="border: 1px solid #eee">
    <el-row>
      <el-col :xl="3" :lg="4" :md="5"><toolAside></toolAside></el-col>
      <el-col :xl="20" :lg="19" :md="18" :offset="1" class="main_col_right">
        <el-container class="container-right">
          <toolHeader></toolHeader>
          <router-view class="router-view"></router-view>
          <toolFooter></toolFooter>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>
<style>
* {
  padding: 0;
  margin: 0;
}
.main_col_right {
  box-sizing: border-box;
  padding-right: 4.16667%;
  overflow-y: auto;
}
body {
  overflow: hidden;
  scrollbar-width: none; /* firefox */
}
.el-aside::-webkit-scrollbar{
  display: none;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
  height: 100vh;
  padding: 2vh 0;
}
.container-right {
  height: 100vh;
  padding-top: 5vh;
}
.el-row {
  width: 100%;
}
.container-right {
  display: block !important;
}
.router-view {
  margin-top: 1.5rem;
  box-sizing: border-box;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: none !important;
  border: 1px solid #d7dae2;
  border-radius: 4px;
}
.top input,
.top textarea,
.buttom input,
.buttom textarea {
  height: 200px;
}
</style>

<script>
import toolAside from "./components/tool-aside";
import toolFooter from "./components/tool-footer";
import toolHeader from "./components/tool-header";
export default {
  name: "App",
  components: {
    toolAside,
    toolHeader,
    toolFooter,
  },
  methods: {
    warnMessage(msg) {
      this.$message({
        message: msg,
        type: "warning",
        offset: 1,
      });
    },
  },
  mounted() {
    this.$bus.$on("warnMessage", this.warnMessage);
  },
  beforeDestroy() {
    this.$bus.$off("warnMessage", this.warnMessage);
  },
};
</script>
