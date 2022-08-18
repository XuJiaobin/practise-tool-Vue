<template>
  <footer>
    <p>
      Copyright © 2022 xujiaobin 版权所有
      <a href="https://beian.miit.gov.cn/" target="_blank">吉ICP备2022004874号</a>
      <router-link to="/about" class="about">关于本站</router-link>
    </p>
  </footer>
</template>

<script>
export default {
  name: "tool_footer",
};
</script>

<style scoped>
footer {
  line-height: 40px;
  border-top: 1px solid #ccc;
  text-align: center;
  color: #333;
  overflow: hidden;
    width: 100%;
    margin: 3rem 0;
}
footer a {
  color: inherit;
  text-decoration: none;
}
.about{
  padding-left: 0.5rem;
}
</style>