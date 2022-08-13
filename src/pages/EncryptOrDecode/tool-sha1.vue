<template>
    <div class="encode-wrap">
        <!-- 上方输入框 -->
        <toolTextarea v-model="topInput" placeholder="请输入要转换的内容"></toolTextarea>
        <!-- 转换按钮 -->
        <div class="button-wrap">
            <el-button @click="sha('sha1')">sha1</el-button>
            <el-button @click="sha('sha224')">sha224</el-button>
            <el-button @click="sha('sha256')">sha256</el-button>
            <el-button @click="sha('sha384')">sha384</el-button>
            <el-button @click="sha('sha512')">sha512</el-button>
        </div>
        <!-- 下方输入框 -->
        <toolTextarea v-model="bottomInput" placeholder="请输入要转换的内容" :readonly="true"></toolTextarea>
    </div>
</template>

<script>
import shajs from "sha.js";
import toolTextarea from "@/components/tool-textarea.vue";
export default {
    name: "toolSha",
    components: {
        toolTextarea,
    },
    data() {
        return {
            topInput: "",
            bottomInput: "",
        };
    },
    methods: {
        sha(name) {
            this.bottomInput = shajs(name).update(this.topInput).digest("hex");
        },
    },
};
</script>

<style>
.button-wrap {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.button-wrap span:nth-of-type(2n) {
    margin-left: 10px;
}
.el-icon-sort {
    font-size: 24px;
    color: #606266;
    margin: 0 1rem;
}
.buttom {
    margin-top: 1rem;
}
.popover {
    position: absolute;
    background: #fff;
    min-width: 150px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
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
