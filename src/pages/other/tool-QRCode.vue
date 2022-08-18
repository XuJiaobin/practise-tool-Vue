<template>
    <el-container>
        <el-row>
            <el-col :xl="20" :lg="18">
                <el-input type="textarea" placeholder="请输入内容" v-model="textarea" resize="none" class="qrcode-input"></el-input>
                <div class="button-wrap">
                    <el-button type="primary" @click="createdQR">生成二维码</el-button>
                    <el-button type="primary" @click="defalutConfig" v-if="qrShow">清空配置</el-button>
                </div>
            </el-col>
            <el-col :xl="3" :lg="5" :offset="1" class="qrcode-wrap">
                <div v-show="!qrShow" class="qrPreview">此处预览二维码</div>
                <div class="qrcode" v-show="qrShow">
                    <vue-qr
                        ref="qrcodeMain"
                        :size="QRconfig.size"
                        :text="QRconfig.text"
                        :correctLevel="QRconfig.correctLevel"
                        :margin="QRconfig.margin"
                        :colorDark="QRconfig.colorDark"
                        :colorLight="QRconfig.colorLight"
                        :backgroundColor="QRconfig.backgroundColor"
                        :bgSrc="QRconfig.bgSrc"
                        :logoMargin="QRconfig.logoMargin"
                        :logoSrc="QRconfig.logoSrc"
                        :logoScale="QRconfig.logoScale"
                        :logoCornerRadius="QRconfig.logoCornerRadius"
                        :dotScale="QRconfig.dotScale"
                    ></vue-qr>
                    <el-button type="success" @click="qrMoreSetting" class="qrMoreSetting">更多设置</el-button>
                    <el-button type="primary" @click="downloadFile" class="qrMoreSetting">下载</el-button>
                </div>
            </el-col>
        </el-row>
        <!-- 弹窗 -->
        <el-dialog title="更多设置" :visible="qrMoreDialog" width="70%" center :lock-scroll="false" :append-to-body="true" :show-close="false">
            <el-row>
                <el-col :lg="15" :md="15">
                    <el-tabs v-model="tabsActive" stretch type="border-card">
                        <el-tab-pane label="基本选项" name="first">
                            <div class="dialog_option_wrap">
                                <el-col :span="3" :offset="2">尺寸：</el-col>
                                <el-col :span="18">
                                    <el-radio v-model="QRconfig.size" :label="200">小尺寸</el-radio>
                                    <el-radio v-model="QRconfig.size" :label="400">默认</el-radio>
                                    <el-radio v-model="QRconfig.size" :label="700">大尺寸</el-radio>
                                    <el-radio v-model="QRconfig.size" :label="1000">超大尺寸</el-radio>
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap">
                                <el-col :span="3" :offset="2">容错率：</el-col>
                                <el-col :span="18">
                                    <el-radio v-model="QRconfig.correctLevel" :label="0">7%</el-radio>
                                    <el-radio v-model="QRconfig.correctLevel" :label="1">15%</el-radio>
                                    <el-radio v-model="QRconfig.correctLevel" :label="2">25%</el-radio>
                                    <el-radio v-model="QRconfig.correctLevel" :label="3">30%</el-radio>
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap">
                                <el-col :span="3" :offset="2" class="slider_label">外边距：</el-col>
                                <el-col :span="18"><el-slider v-model="QRconfig.margin" :min="0" :max="50"></el-slider></el-col>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="颜色" name="second">
                            <div class="dialog_option_wrap">
                                <el-col :span="3" :offset="2">码颜色：</el-col>
                                <el-col :span="18">
                                    <el-color-picker v-model="QRconfig.colorDark"></el-color-picker>
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap">
                                <el-col :span="3" :offset="2">码背景色：</el-col>
                                <el-col :span="18">
                                    <el-color-picker v-model="QRconfig.backgroundColor"></el-color-picker>
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap">
                                <el-col :span="3" :offset="2">码背景图：</el-col>
                                <el-col :span="18">
                                    <input type="file" name="bgSrc" id="bgSrc" @change="getBase64" />
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap" v-if="QRconfig.bgSrc">
                                <el-col :span="3" :offset="2" class="slider_label">数据比例：</el-col>
                                <el-col :span="18"><el-slider v-model="QRconfig.dotScale" :min="0.1" :max="1" :step="0.1"></el-slider></el-col>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="logo" name="third">
                            <div class="dialog_option_wrap">
                                <el-col :span="4" :offset="1">LOGO图片：</el-col>
                                <el-col :span="18">
                                    <input type="file" name="logoSrc" id="logoSrc" @change="getBase64" />
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap" v-if="QRconfig.logoSrc">
                                <el-col :span="3" :offset="2" class="slider_label">边距：</el-col>
                                <el-col :span="18">
                                    <el-slider v-model="QRconfig.logoMargin" :min="0" :max="50"></el-slider>
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap" v-if="QRconfig.logoSrc">
                                <el-col :span="3" :offset="2" class="slider_label">大小：</el-col>
                                <el-col :span="18">
                                    <el-slider v-model="QRconfig.logoScale" :min="0.1" :max="0.9" :step="0.1"></el-slider>
                                </el-col>
                            </div>
                            <div class="dialog_option_wrap" v-if="QRconfig.logoSrc">
                                <el-col :span="3" :offset="2" class="slider_label">圆角：</el-col>
                                <el-col :span="18">
                                    <el-slider v-model="QRconfig.logoCornerRadius" :min="0" :max="50"></el-slider>
                                </el-col>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col class="more-qrcode" :lg="6" :md="6" :offset="2">
                    <vue-qr
                        style="width: 100%"
                        :size="QRconfig.size"
                        :text="QRconfig.text"
                        :correctLevel="QRconfig.correctLevel"
                        :margin="QRconfig.margin"
                        :colorDark="QRconfig.colorDark"
                        :colorLight="QRconfig.colorLight"
                        :backgroundColor="QRconfig.backgroundColor"
                        :bgSrc="QRconfig.bgSrc"
                        :logoMargin="QRconfig.logoMargin"
                        :logoSrc="QRconfig.logoSrc"
                        :logoScale="QRconfig.logoScale"
                        :logoCornerRadius="QRconfig.logoCornerRadius"
                        :dotScale="QRconfig.dotScale"
                    ></vue-qr>
                    <p>{{ QRconfig.size }}x{{ QRconfig.size }}</p>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelQRsetting">取 消</el-button>
                <el-button type="primary" @click="enterQRsetting">确 定</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>

<script>
import VueQr from "vue-qr";
import dayjs from "dayjs";
export default {
    name: "toolQRCode",
    data() {
        return {
            QRconfig: {
                size: 400,
                text: "",
                correctLevel: 2,
                margin: 20,
                colorDark: "#000",
                colorLight: "#fff",
                backgroundColor: "#fff",
                bgSrc: "",
                logoMargin: 0,
                logoSrc: null,
                logoScale: 0.2,
                logoCornerRadius: 0,
                dotScale: 1,
            },
            // 默认配置
            defalutQRconfig: {
                size: 400,
                text: "",
                correctLevel: 2,
                margin: 20,
                colorDark: "#000",
                colorLight: "#fff",
                backgroundColor: "#fff",
                bgSrc: "",
                logoMargin: 0,
                logoSrc: null,
                logoScale: 0.2,
                logoCornerRadius: 0,
                dotScale: 1,
            },
            tempQRconfig: {},
            textarea: "",
            qrMoreDialog: false,
            qrShow: false,
            tabsActive: "first",
            dotScaleMessage: true,
            localStorageData: false,
        };
    },
    components: { VueQr },
    mounted() {
        let local = localStorage.getItem("QRSaveConfig");
        let { text, ...config } = JSON.parse(local);
        this.QRconfig = { ...config, text: "" };
        this.localStorageData = true;
    },
    watch: {
        // 监听码颜色如果为空传黑色
        "QRconfig.colorDark"(newVal, oldVal) {
            if (!newVal) {
                this.QRconfig.colorDark = "#000";
            }
        },
        // 监听背景色如果为空传白色
        "QRconfig.backgroundColor"(newVal, oldVal) {
            if (!newVal) {
                this.QRconfig.backgroundColor = "#fff";
            } else {
                this.QRconfig.colorLight = newVal;
            }
        },
        // 监听dotScale是否小于0.5并提示
        "QRconfig.dotScale"(newVal, oldVal) {
            console.log(newVal < 0.5 && this.dotScaleMessage);
            if (newVal < 0.5 && this.dotScaleMessage) {
                this.dotScaleMessage = false;
                this.$bus.$emit("warnMessage", "小于0.5可能会无法扫描，请核对后再保存");
            }
            if (newVal > 0.5) {
                this.dotScaleMessage = true;
            }
        },
    },
    methods: {
        // 创建二维码
        createdQR() {
            this.$message.success("已使用上次配置，如不需要请点击下方清空配置");
            this.qrShow = true;
            this.QRconfig.text = this.textarea;
            this.defalutQRconfig.text = this.textarea;
        },
        defalutConfig() {
            let { text, ...config } = this.defalutQRconfig;
            text = this.QRconfig.text;
            this.QRconfig = { ...config, text };
            this.$message.success("已清空配置");
        },
        // 更多设置index
        qrMoreSetting() {
            this.qrMoreDialog = true;
        },
        // 取消设置
        cancelQRsetting() {
            this.qrMoreDialog = false;
            if (!this.tempQRconfig.size && !this.deepEqual(this.QRconfig, this.defalutQRconfig)) {
                this.QRconfig = { ...this.defalutQRconfig };
            }
            if (this.tempQRconfig.size) {
                this.QRconfig = { ...this.tempQRconfig };
            }
        },
        // 确定设置
        enterQRsetting() {
            this.qrMoreDialog = false;
            if (!this.deepEqual(this.QRconfig, this.defalutQRconfig)) {
                this.tempQRconfig = { ...this.QRconfig };
            }
        },
        // 如点击取消返回上次配置
        isObject(object) {
            return object != null && typeof object === "object";
        },
        deepEqual(object1, object2) {
            const keys1 = Object.keys(object1);
            const keys2 = Object.keys(object2);
            if (keys1.length !== keys2.length) {
                return false;
            }
            for (let index = 0; index < keys1.length; index++) {
                const val1 = object1[keys1[index]];
                const val2 = object2[keys2[index]];
                const areObjects = this.isObject(val1) && this.isObject(val2);
                if ((areObjects && !this.deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
                    return false;
                }
            }

            return true;
        },
        // 图片转换base64
        getBase64(file) {
            if (!file.target.files.length) return;
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.target.files[0]);
                reader.onload = (e) => {
                    this.QRconfig[file.target.id] = reader.result;
                    resolve(reader.result);
                };
                reader.onerror = (error) => {
                    this.$bus.$emit("warnMessage", "出错啦，上传失败"), reject(error);
                };
            });
        },
        // 下载
        downloadFile() {
            localStorage.setItem("QRSaveConfig", JSON.stringify(this.QRconfig));
            let content = this.$refs.qrcodeMain.imgUrl;
            let aLink = document.createElement("a");
            let blob = this.base64ToBlob(content); // new Blob([content]);
            let evt = document.createEvent("HTMLEvents");
            evt.initEvent("click", true, true); // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
            aLink.download = "二维码" + dayjs().format("YYYY年MM月DD日 HH:mm:ss");
            aLink.href = URL.createObjectURL(blob);
            // aLink.dispatchEvent(evt);
            aLink.click();
        },
        // base64转blob
        base64ToBlob(code) {
            let parts = code.split(";base64,");
            let contentType = parts[0].split(":")[1];
            let raw = window.atob(parts[1]); // 解码base64得到二进制字符串
            let rawLength = raw.length;
            let uInt8Array = new Uint8Array(rawLength); // 创建8位无符号整数值的类型化数组
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i); // 数组接收二进制字符串
            }
            return new Blob([uInt8Array], { type: contentType });
        },
    },
};
</script>

<style scoped>
.button-wrap {
    margin-top: 1rem;
}
.qrcode-wrap {
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
}
.qrcode-wrap .qrcode,
.qrcode-wrap .qrcode img {
    width: 100%;
    height: 100%;
}
.qrMoreSetting {
    margin: 5% 0;
}
.qrPreview {
    height: 190px;
    line-height: 190px;
    color: #e6e6e6;
}
.more-qrcode {
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    background: #eee;
    border-radius: 3px;
}
.el-tab-pane {
    width: 100%;
    overflow: hidden;
}
.dialog_option_wrap {
    width: 100%;
    overflow: hidden;
    margin: 20px 0;
}
.qrcode button {
    width: 80%;
    margin: 5px 0;
}
</style>

<style>
.qrcode-input textarea {
    height: 204px;
}
.slider_label {
    line-height: 38px;
}
</style>
