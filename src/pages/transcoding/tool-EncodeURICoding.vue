<template>
    <div class="encode-wrap">
        <!-- 上方输入框 -->
        <toolTextarea v-model="topInput" placeholder="请输入要转换的内容"></toolTextarea>
        <!-- 转换按钮 -->
        <div class="button-wrap">
            <!-- encodeuri START -->
            <el-popover placement="top" width="200" trigger="manual" v-model="popover.isEncodeURI">
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isEncodeURI = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleEncodeURI($event, 'isEncodeURI')">转</el-button>
                </div>
                <el-button slot="reference" @click="handleEncodeURI($event, 'isEncodeURI')">encodeURI</el-button>
            </el-popover>
            <el-popover placement="top" width="200" trigger="manual" v-model="popover.isEncodeURIComponent">
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isEncodeURIComponent = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleEncodeURI($event, 'isEncodeURIComponent')">转</el-button>
                </div>
                <el-button slot="reference" @click="handleEncodeURI($event, 'isEncodeURIComponent')">encodeURIComponent</el-button>
            </el-popover>
            <!-- encodeuri END -->
            <i class="el-icon-sort"></i>

            <!-- decodeuri START-->
            <el-popover placement="bottom" width="200" trigger="manual" v-model="popover.isDecodeURI">
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isDecodeURI = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleDecodeURI($event, 'isDecodeURI')">转</el-button>
                </div>
                <el-button slot="reference" @click="handleDecodeURI($event, 'isDecodeURI')">decodeURI</el-button>
            </el-popover>
            <el-popover placement="bottom" width="200" trigger="manual" v-model="popover.isDecodeURIComponent">
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isDecodeURIComponent = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleDecodeURI($event, 'isDecodeURIComponent')">转</el-button>
                </div>
                <el-button slot="reference" @click="handleDecodeURI($event, 'isDecodeURIComponent')">decodeURIComponent</el-button>
            </el-popover>
            <!-- encodeuri END -->
            <!-- <el-button plain @click="handleEncodeURI">encodeURI</el-button>
            <el-button plain @click="handleEncodeURIComponent">encodeURIComponent</el-button>
            <i class="el-icon-sort"></i>
            <el-button plain @click="handleDecodeURI">decodeURI</el-button>
            <el-button plain @click="handleDecodeURIComponent">decodeURIComponent</el-button> -->
        </div>
        <!-- 下方输入框 -->
        <toolTextarea v-model="bottomInput" placeholder="请输入要转换的内容"></toolTextarea>
    </div>
</template>

<script>
import toolTextarea from "@/components/tool-textarea.vue";
export default {
    name: "toolEncodeURICoding",
    components: {
        toolTextarea,
    },
    data() {
        return {
            topInput: "",
            bottomInput: "",
            popover: {
                isEncodeURI: false,
                isEncodeURIComponent: false,
                isDecodeURI: false,
                isDecodeURIComponent: false,
            },
        };
    },
    methods: {
        handleEncodeURI(el, name) {
            if (el.target.innerText == "转") {
                this.topInput = this.bottomInput;
                this.popover[name] = false;
            }
            if (this.topInput) {
                this.bottomInput = name == "isEncodeURI" ? encodeURI(this.topInput) : encodeURIComponent(this.topInput);
                //判断是否显示弹出框
                if (this.topInput.match(/[\u4e00-\u9fa5]/)) {
                    setTimeout(() => {
                        this.popover[name] = true;
                    }, 1000);
                    setTimeout(() => {
                        this.popover[name] = false;
                    }, 6000);
                }
            } else {
                this.$bus.$emit("warnMessage", "请输入内容");
            }
        },
        handleDecodeURI(el, name) {
            if (el.target.innerText == "转") {
                this.bottomInput = this.topInput;
                this.popover[name] = false;
            }
            if (this.bottomInput) {
                this.topInput = name == "isDecodeURI" ? decodeURI(this.bottomInput) : decodeURIComponent(this.bottomInput);
                //判断是否显示弹出框
                if (this.bottomInput.indexOf("%25") != -1) {
                    setTimeout(() => {
                        this.popover[name] = true;
                    }, 1000);
                    setTimeout(() => {
                        this.popover[name] = false;
                    }, 6000);
                }
            } else {
                this.$bus.$emit("warnMessage", "请输入内容");
            }
        },
    },
};
</script>

<style scoped>
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
