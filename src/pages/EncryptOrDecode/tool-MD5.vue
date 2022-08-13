<template>
    <div class="encode-wrap">
        <!-- 上方输入框 -->
        <toolTextarea v-model="topInput" placeholder="请输入要转换的内容"></toolTextarea>
        <!-- 转换按钮 -->
        <div class="button-wrap">
            <el-button type="primary" @click="md5">MD5转换</el-button>
        </div>
        <!-- 下方输入框 -->
        <toolTextarea v-model="bottomInput" placeholder="请输入要转换的内容" :readonly="true"></toolTextarea>
    </div>
</template>

<script>
import md5 from "md5";
import toolTextarea from "@/components/tool-textarea.vue";
export default {
    name: "toolMD5",
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
        md5() {
            this.bottomInput = md5(this.topInput);
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
