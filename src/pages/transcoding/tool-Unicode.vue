<template>
    <div class="unicode-wrap">
        <!-- 上方输入框 -->
        <toolTextarea v-model="topInput" placeholder="请输入要转换的内容"></toolTextarea>
        <div class="button-wrap">
            <el-button @click="Native2Unicode">Native 转换 Unicode</el-button>
            <el-button @click="native2ascii">Native 转换 ASCII</el-button>
            <el-button @click="Native2UTF8">Native 转换 UTF-8</el-button>
            <i class="el-icon-sort"></i>
            <el-button @click="Unicode2Native">Unicode 转换 Native</el-button>
            <el-button @click="ascii2native">ASCII 转换 Native</el-button>
            <el-button @click="UTF82Native">UTF-8 转换 Native</el-button>
        </div>
        <!-- 下方输入框 -->
        <toolTextarea v-model="bottomInput" placeholder="请输入要转换的内容"></toolTextarea>
    </div>
</template>

<script>
import toolTextarea from "@/components/tool-textarea.vue";
export default {
    name: "toolUnicode",
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
        //Native 转换 Unicode
        Native2Unicode() {
            if ("" == this.topInput) {
                this.$bus.$emit("warnMessage", "请输入Native字符串");
                return;
            }
            this.bottomInput = "";
            for (var i = 0; i < this.topInput.length; i++) this.bottomInput += "&#" + this.topInput.charCodeAt(i) + ";";
        },
        //Unicode 转换 Native
        Unicode2Native() {
            var code = this.bottomInput.match(/&#(\d+);/g);
            if (code == null) {
                this.$bus.$emit("warnMessage", "请输入正确的Unicode代码！");
                return;
            }
            this.topInput = "";
            for (var i = 0; i < code.length; i++) this.topInput += String.fromCharCode(code[i].replace(/[&#;]/g, ""));
        },
        //Native 转换 UTF-8
        Native2UTF8() {
            if ("" == this.topInput) {
                this.$bus.$emit("warnMessage", "请输入Native字符串");
                return;
            }
            this.bottomInput = this.topInput.replace(/[^\u0000-\u00FF]/g, function ($0) {
                return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;");
            });
        },
        //UTF-8 转换 Native
        UTF82Native() {
            this.topInput = unescape(this.bottomInput.replace(/&#x/g, "%u").replace(/;/g, ""));
        },
        //Native 转 ASCII
        native2ascii() {
            var character = this.topInput.split("");
            var ascii = "";
            for (var i = 0; i < character.length; i++) {
                let code = Number(character[i].charCodeAt(0));
                if (code > 127) {
                    let charAscii = code.toString(16);
                    charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
                    ascii += "\\u" + charAscii;
                } else {
                    ascii += character[i];
                }
            }
            this.bottomInput = ascii;
        },
        //ASCII 转 Native
        ascii2native() {
            var character = this.bottomInput.split("\\u");
            var native1 = character[0];
            for (var i = 1; i < character.length; i++) {
                var code = character[i];
                native1 += String.fromCharCode(parseInt("0x" + code.substring(0, 4)));
                if (code.length > 4) {
                    native1 += code.substring(4, code.length);
                }
            }
            this.topInput = native1;
        },
    },
};
</script>
<style>
.unicode-wrap input,
.unicode-wrap textarea {
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
