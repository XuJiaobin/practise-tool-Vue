<template>
    <div class="urlCoding-wrap">
        <!-- 上方输入框 -->
        <toolTextarea v-model="topInput" placeholder="请输入要转换的内容"></toolTextarea>
        <div class="button-wrap">
            <el-button @click="urlCrypt">加密处理</el-button>
            <el-button @click="Empty">清空</el-button>
        </div>
        <!-- 下方输入框 -->
        <toolTextarea v-model="bottomInput" placeholder="请输入要转换的内容" :readonly="true"></toolTextarea>
    </div>
</template>

<script>
import toolTextarea from "@/components/tool-textarea.vue";
export default {
    name: "toolUrl16Coding",
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
        urlCrypt() {
            var str2 = "";
            var str = this.topInput;
            if (str.indexOf("http://") != -1) {
                str2 = "http://";
                str = str.substring(7, str.length);
            } else if (str.indexOf("https://") != -1) {
                str2 = "https://";
                str = str.substring(8, str.length);
            }
            for (let i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) == "47") str2 += "/";
                else if (str.charCodeAt(i) == "63") str2 += "?";
                else if (str.charCodeAt(i) == "38") str2 += "&";
                else if (str.charCodeAt(i) == "61") str2 += "=";
                else if (str.charCodeAt(i) == "58") str2 += ":";
                else str2 += "%" + str.charCodeAt(i).toString(16);
            }
            this.bottomInput = str2;
        },
        Empty() {
            this.topInput = "";
            this.bottomInput = "";
        },
    },
};
</script>
<style>
.urlCoding-wrap input,
.urlCoding-wrap textarea {
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
</style>
