<template>
    <el-container>
        <el-row>
            <el-col :span="13">
                <div class="regular-input">
                    <div class="input-group" style="width: 100%">
                        <span class="input-group-text">
                            <i class="fa fa-exclamation-triangle" aria-hidden="true" style="display: none; color: red"></i> /</span
                        >
                        <el-input type="text" placeholder="在此输入正则表达式" v-model="userRegExp" />
                        <span class="input-group-text">/{{ regularModifier }}</span>
                        <el-dropdown trigger="click" :hide-on-click="false">
                            <el-button>修饰符<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-checkbox-group v-model="regularChecked">
                                    <el-dropdown-item><el-checkbox label="g">全局搜索 -g</el-checkbox></el-dropdown-item>
                                    <el-dropdown-item><el-checkbox label="i">忽略大小写 -i</el-checkbox></el-dropdown-item>
                                    <el-dropdown-item><el-checkbox label="m">多行模式 -m</el-checkbox></el-dropdown-item>
                                    <el-dropdown-item><el-checkbox label="s">包含换行符 -s</el-checkbox></el-dropdown-item>
                                </el-checkbox-group>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-button @click="handleReg" class="handleReg">正则匹配</el-button>
                    </div>
                </div>
                <!-- 上方输入框 -->
                <div class="top">
                    <el-input
                        class="topInput"
                        ref="topInput"
                        type="textarea"
                        v-model="userText"
                        placeholder="在此输入待匹配的内容"
                        :clearable="true"
                        resize="none"
                    />
                </div>
                <!-- 下方输入框 -->
                <div v-html="resultShow" class="resultShow"></div>
                <div class="result" v-html="result"></div>
            </el-col>
            <el-col :span="10" :offset="1">
                <iframe v-if="iframeShow" frameborder="0" width="100%" height="200" :src="iframeSrc"></iframe>
                <RegDoc class="regdoc"></RegDoc>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
import RegDoc from '../../components/tool-regDoc.vue'
export default {
    name: "toolRegular",
    components:{
      RegDoc,
    },
    data() {
        return {
            regularChecked: [],
            userText: "",
            userRegExp: "",
            result: "" || "匹配结果",
            resultShow: "" || "匹配结果",
            iframeSrc: "",
            iframeShow: false,
        };
    },
    computed: {
        regularModifier() {
            let checkboxList = ["g", "i", "m", "s"];
            return checkboxList.filter((item) => this.regularChecked.includes(item)).join("");
        },
    },
    methods: {
        //开始正则匹配
        handleReg() {
            this.iframeShow = false;
            let pattern;
            pattern = new RegExp(this.userRegExp, this.regularModifier);
            let iframeSrc = pattern.toString().replace(/^\/|\/$/g, "");
            this.iframeSrc = "https://jex.im/regulex/#!embed=true&flags=&re=" + encodeURIComponent(iframeSrc);
            let regRes = this.userText.match(pattern);
            this.resultShow = regRes
                ? this.userText.replace(
                      pattern,
                      `<b style="color: #409EFF;border-color: #c6e2ff;background-color: #ecf5ff;">${pattern.exec(this.userText)[0]}</b>`
                  )
                : "(没有匹配)";
            if (null == regRes || 0 == regRes.length) {
                this.result = "（没有匹配）";
                return false;
            }
            if (this.regularModifier.indexOf("g") != -1) {
                var strResult = "共找到 " + regRes.length + " 处匹配：\r\n";
                for (let i = 0; i < regRes.length; ++i) strResult = strResult + regRes[i] + "\r\n";
                this.result = strResult;
            } else {
                this.result = "匹配位置：" + pattern.lastIndex + "\r\n匹配结果：" + regRes[0];
            }
            this.$nextTick(function() {
                this.iframeShow = true;
            });
        },
    },
};
</script>

<style scoped>
.resultShow,
.result {
    height: 200px;
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #eee;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin-top: 1rem;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.regular-input {
    margin-bottom: 1rem;
}
.regular-input .el-input >>> .el-input__inner {
    border-left: 0;
    border-right: 0;
    border-radius: 0;
}
.regular-input .el-dropdown,
.regular-input .handleReg {
    margin-left: 1%;
}
.regular-input .input-group {
    display: flex;
    justify-content: space-between;
}
.regular-input .input-group span {
    font-size: 18px;
    font-weight: bold;
    line-height: 38px;
    border-radius: 3px;
    text-align: center;
    white-space: nowrap;
    background-color: #f8f5f0;
    border: 1px solid #ced4da;
    padding: 0 2%;
}
</style>
