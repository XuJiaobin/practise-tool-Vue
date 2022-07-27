<template>
    <div>
        <div class="top">
            <el-input
                class="topInput"
                ref="topInput"
                type="textarea"
                v-model="topInput"
                placeholder="请输入要转换的内容"
                :clearable="true"
                resize="none"
            />
        </div>
        <div class="button-wrap">
            <el-popover placement="top" width="200" trigger="manual" v-model="popover.isEncodeURI">
                <el-button slot="reference" @click="handleEncodeURI">encodeURI</el-button>
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isEncodeURI = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleEncodeURI">转</el-button>
                </div>
            </el-popover>
            <el-popover placement="top" width="200" trigger="manual" v-model="popover.isEncodeURIComponent">
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isEncodeURIComponent = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleEncodeURIComponent">转</el-button>
                </div>
                <el-button slot="reference" @click="handleEncodeURIComponent">encodeURIComponent</el-button>
            </el-popover>
            <i class="el-icon-sort"></i>
            <el-popover placement="bottom" width="200" trigger="manual" v-model="popover.isDecodeURI">
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isDecodeURI = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleDecodeURI">转</el-button>
                </div>
                <el-button slot="reference" @click="handleDecodeURI">decodeURI</el-button>
            </el-popover>
            <el-popover placement="bottom" width="200" trigger="manual" v-model="popover.isDecodeURIComponent">
                <p>再转换一次？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="popover.isDecodeURIComponent = false">不转</el-button>
                    <el-button type="primary" size="mini" @click="handleDecodeURIComponent">转</el-button>
                </div>
                <el-button slot="reference" @click="handleDecodeURIComponent">decodeURIComponent</el-button>
            </el-popover>
            <!-- <el-button plain @click="handleEncodeURI">encodeURI</el-button>
            <el-button plain @click="handleEncodeURIComponent">encodeURIComponent</el-button>
            <i class="el-icon-sort"></i>
            <el-button plain @click="handleDecodeURI">decodeURI</el-button>
            <el-button plain @click="handleDecodeURIComponent">decodeURIComponent</el-button> -->
        </div>
        <div class="buttom">
            <el-input type="textarea" v-model="bottomInput" placeholder="请输入要转换的内容" :clearable="true" resize="none" />
        </div>
    </div>
</template>

<script>
export default {
    name: "toolEncodeURICoding",
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
        handleEncodeURI(el) {
            if (el.target.innerText == "转") {
                this.topInput = this.bottomInput;
                this.popover.isEncodeURI = false;
            }
            if (this.topInput) {
                this.bottomInput = encodeURI(this.topInput);
                //判断是否显示弹出框
                if (this.topInput.match(/[\u4e00-\u9fa5]/)) {
                    setTimeout(() => {
                        this.popover.isEncodeURI = true;
                    }, 1000);
                    setTimeout(() => {
                        this.popover.isEncodeURI = false;
                    }, 6000);
                }
            } else {
                this.warnMessage();
            }
        },
        handleEncodeURIComponent(el) {
            if (el.target.innerText == "转") {
                this.topInput = this.bottomInput;
                this.popover.isEncodeURIComponent = false;
            }
            if (this.topInput) {
                this.bottomInput = encodeURIComponent(this.topInput);
                //判断是否显示弹出框
                if (this.topInput.match(/[\u4e00-\u9fa5]/)) {
                    setTimeout(() => {
                        this.popover.isEncodeURIComponent = true;
                    }, 1000);
                    setTimeout(() => {
                        this.popover.isEncodeURIComponent = false;
                    }, 6000);
                }
            } else {
                this.warnMessage();
            }
        },
        handleDecodeURI(el) {
            if (el.target.innerText == "转") {
                this.bottomInput = this.topInput;
                this.popover.isDecodeURI = false;
            }
            if (this.bottomInput) {
                this.topInput = decodeURI(this.bottomInput);
                //判断是否显示弹出框
                if (this.bottomInput.indexOf("%25") != -1) {
                    setTimeout(() => {
                        this.popover.isDecodeURI = true;
                    }, 1000);
                    setTimeout(() => {
                        this.popover.isDecodeURI = false;
                    }, 6000);
                }
            } else {
                this.warnMessage();
            }
        },
        handleDecodeURIComponent(el) {
            if (el.target.innerText == "转") {
                this.bottomInput = this.topInput;
                this.popover.isDecodeURIComponent = false;
            }
            if (this.bottomInput) {
                this.topInput = decodeURIComponent(this.bottomInput);
                //判断是否显示弹出框
                if (this.bottomInput.indexOf("%25") != -1) {
                    setTimeout(() => {
                        this.popover.isDecodeURIComponent = true;
                    }, 1000);
                    setTimeout(() => {
                        this.popover.isDecodeURIComponent = false;
                    }, 6000);
                }
            } else {
                this.warnMessage();
            }
        },
        warnMessage() {
            this.$message({
                message: "请输入内容",
                type: "warning",
                offset: 1,
            });
        },
    },
};
</script>

<style>
input,
textarea {
    height: 200px;
}
</style>
<style scoped>
.button-wrap {
    margin-top: 1rem;
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
