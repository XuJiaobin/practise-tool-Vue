<template>
  <div>
    <p class="showUnix"  v-cloak>
      当前的Unix时间戳是：<span>{{ timeStamp }}</span>
    </p>
    <div class="unix2date">Unix时间戳（Unix timestamp）：
      <el-input class="unix2dateFinal"/>
      <el-select placeholder="请选择" v-model="selectVal">
        <el-option value="秒"></el-option>
        <el-option value="毫秒"></el-option>
      </el-select>
      <el-button type="primary">转换</el-button>
      </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "toolUnixTimeCoding",
  data() {
    return {
      timeStamp: "",
      selectVal:''
    };
  },
  mounted() {
    console.log(dayjs.unix(1659000285).format('YYYY-MM-DD HH:mm:ss'))
    this.timeStamp = Math.round(new Date().getTime() / 1000);
    setInterval(() => {
      this.timeStamp = Math.round(new Date().getTime() / 1000);
    }, 1000);
  },
};
</script>

<style scoped>
.showUnix {
  text-align: center;
  border-bottom: 1px solid #d7dae2;
  padding-bottom: 20px;
}
.showUnix span {
  color: #ff6200;
}
[v-cloak] {
  display: none;
}
.unix2date{
  padding-top: 20px;
}
.unix2dateFinal{
  display: inline-block;
  width: 20%;
}
</style>