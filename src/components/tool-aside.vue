<template>
  <el-aside width="auto">
    <section class="logo" style="text-align: center">奇怪的工具箱</section>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "tool-aside",
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>

<style scope>
.el-aside {
  min-width: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: calc(100% - 1px);
  /* min-height: 400px; */
}
</style>