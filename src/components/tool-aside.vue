<template>
  <el-aside width="auto">
    <section class="logo" style="text-align: center">
      <img src="@/assets/logo.png" alt="" />
    </section>
    <el-menu
      :default-openeds="['1']"
      :default-active="defatltActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">开发工具</span>
        </template>
        <el-menu-item-group>
          <span slot="title">编码转码</span>
          <el-menu-item index="/transcoding/unicode"
            >Unicode编码转换</el-menu-item
          >
          <el-menu-item index="/transcoding/urlCoding"
            >URL-16进制编码</el-menu-item
          >
          <el-menu-item index="/transcoding/unixTime"
            >unix时间戳转换</el-menu-item
          >
          <el-menu-item index="/transcoding/encodeuri"
            >encodeURI/decodeURI</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">加密解密</span>
          <el-menu-item index="/EncryptOrDecode/Base64"
            >Base64编码/解码</el-menu-item
          >
          <el-menu-item index="/EncryptOrDecode/MD5">MD5加密</el-menu-item>
          <el-menu-item index="/EncryptOrDecode/Sha1">sha1加密</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">其他</span>
          <el-menu-item index="/other/QRCode">二维码生成</el-menu-item>
          <el-menu-item index="/other/Regular">正则测试工具</el-menu-item>
          <el-menu-item index="/other/RandomNum">随机数生成</el-menu-item>
          <el-menu-item index="/other/base">进制转换</el-menu-item>
          <el-menu-item index="/other/bytes">字节转换</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "tool-aside",
  data() {
    return {
      isCollapse: false,
      defatltActive: "/",
    };
  },
  created() {
    this.defatltActive = this.$route.path;
  },
};
</script>

<style scoped>
.logo img {
  width: 90%;
}
.el-aside {
  min-width: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: calc(100% - 1px);
  /* min-height: 400px; */
}
.el-menu-item.is-active {
  background-color: #ecf5ff;
}
</style>
