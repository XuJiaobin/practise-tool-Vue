<template>
  <el-container style="border: 1px solid #eee">
    <el-row>
      <el-col :lg="3"><toolAside></toolAside></el-col>
      <el-col :lg="19" :offset="1">
        <el-container class="container-right">
          <toolHeader></toolHeader>
          <router-view class="router-view"></router-view>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>
<style scope>
* {
  padding: 0;
  margin: 0;
}
body {
  overflow: hidden;
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
.container-right{
  display: block!important;
}
.router-view{
  padding-top: 1.5rem;
}
</style>

<script>
import toolAside from "./components/tool-aside";
import toolHeader from "./components/tool-header";
export default {
  name: "App",
  components: {
    toolAside,
    toolHeader,
  },
};
</script>
