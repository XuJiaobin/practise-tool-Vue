<template>
  <el-container>
    <el-row>
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="card-header">
            <span>知乎热榜</span>
            <span v-cloak>{{zhihu.update_time}}</span>
          </div>
          <div v-for="(item, index) in zhihu.list" :key="index" class="text item">
            <div class="images">
              <a :href="item.url" target="_blank"><el-image fit="contain" :src="item.pic"></el-image></a>
            </div>
            <div class="title">
                <p><a :href="item.url" target="_blank">{{item.title}}</a><i class="el-icon-magic-stick"></i><span class="hot">{{item.hot}}</span></p></a>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card class="box-card">
          <div slot="header" class="card-header">
            <span>36氪</span>
            <span v-cloak>{{ke36.update_time}}</span>
          </div>
          <div v-for="(item, index) in ke36.list" :key="index" class="text item">
            <div class="images">
              <a :href="item.url" target="_blank"><el-image fit="contain" :src="item.pic"></el-image></a>
            </div>
            <div class="title">
                <p><a :href="item.url" target="_blank">{{item.title}}</a><i class="el-icon-magic-stick"></i><span class="hot">{{item.hot}}</span></p></a>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card class="box-card">
          <div slot="header" class="card-header">
            <span>IT之家热榜</span>
            <span v-cloak>{{IThome.update_time}}</span>
          </div>
          <div v-for="(item, index) in IThome.list" :key="index" class="text item">
            <div class="title">
                <p><a :href="item.url" target="_blank">{{item.title}}</a></p></a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { format, render, cancel, register } from "timeago.js";
import axios from "axios";
export default {
  name: "tool-index",
  data() {
    return {
      zhihu: {
        list: [],
        update_time: "",
      },
      ke36: {
        list: [],
        update_time: "",
      },
      IThome: {
        list: [],
        update_time: "",
      },
    };
  },
  mounted() {
    function getZhihu() {
      return axios.get("https://api.vvhan.com/api/hotlist?type=zhihuHot");
    }
    function get36ke() {
      return axios.get("https://api.vvhan.com/api/hotlist?type=36Ke");
    }
    function getIThome() {
      return axios.get("https://api.vvhan.com/api/hotlist?type=itInfo");
    }
    // console.log(format("2022-08-18 08:56:02", "zh_CN"));
    // axios.get("https://api.vvhan.com/api/hotlist?type=zhihuHot").then((ret) => {
    //   this.zhihu.list = ret.data.data;
    //   this.zhihu.update_time = format(ret.data.update_time, "zh_CN") + "更新";
    // });
    axios.all([getZhihu(), get36ke(), getIThome()]).then(
      axios.spread((zhihu, ke36, IThome) => {
        this.zhihu.list = zhihu.data.data;
        this.zhihu.update_time =
          format(zhihu.data.update_time, "zh_CN") + "更新";
        this.ke36.list = ke36.data.data;
        this.ke36.update_time = format(ke36.data.update_time, "zh_CN") + "更新";
        this.IThome.list = IThome.data.data;
        this.IThome.update_time =
          format(IThome.data.update_time, "zh_CN") + "更新";
      })
    );
  },
};
</script>

<style scoped>
.text {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  padding-top: 10px;
}
.text:first-of-type {
  padding-top: 0;
}
.images {
  text-align: center;
  padding: 10px 0;
}
.images >>> img {
  width: 200px;
  max-height: 230px;
  border-radius: 5px;
}
.el-col .el-card a {
  color: #606266;
  text-decoration: none;
}
.el-col .el-card .hot{
    color: #606266;
}
.el-col .el-card a:hover {
  color: #409eff;
}
.el-col .el-card >>> .el-card__body {
  height: calc(84vh - 100px - 9rem);
  overflow-y: auto;
}
.card-header {
  display: flex;
  justify-content: space-between;
}
</style>
