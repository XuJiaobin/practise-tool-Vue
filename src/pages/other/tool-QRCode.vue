<template>
    <el-container>
        <el-row>
            <el-col :xl="20" :lg="18">
                <el-input type="textarea" placeholder="请输入内容" v-model="textarea" resize="none"></el-input>
                <div class="button-wrap">
                    <el-button type="primary" @click="createdQR">生成二维码</el-button>
                </div>
            </el-col>
            <el-col :xl="3" :lg="5" :offset="1" class="qrcode-wrap">
                <div v-show="!qrShow" class="qrPreview">此处预览二维码</div>
                <div class="qrcode" v-show="qrShow">
                    <vue-qr
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
                </div>
            </el-col>
        </el-row>
        <!-- 弹窗 -->
        <el-dialog title="更多设置" :visible="qrMoreDialog" width="70%" center :lock-scroll="false" :append-to-body="true">
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
                                <el-col :span="3" :offset="2" class="slider_label">外边距</el-col>
                                <el-col :span="18"><el-slider v-model="QRconfig.margin" :min="0" :max="50"></el-slider></el-col>
                            </div>
                            <div class="dialog_option_wrap">
                                <el-col :span="4" :offset="1" class="slider_label">二维码数据比例：</el-col>
                                <el-col :span="18"><el-slider v-model="QRconfig.dotScale" :min="0" :max="1" :step="0.1"></el-slider></el-col>
                            </div>
                            <!-- <el-divider content-position="center">容错级别</el-divider>
              <el-divider content-position="center">外边距</el-divider>
              <el-divider content-position="center"
                >二维码数据比例（默认1）</el-divider
              > -->
                        </el-tab-pane>
                        <el-tab-pane label="颜色" name="second">
                            <el-divider content-position="center">码颜色</el-divider>
                            <el-divider content-position="center">码背景色</el-divider>
                            <el-divider content-position="center">码背景图</el-divider>
                        </el-tab-pane>
                        <el-tab-pane label="logo" name="third">
                            <el-divider content-position="center">logo边距</el-divider>
                            <el-divider content-position="center">logo图片</el-divider>
                            <el-divider content-position="center">logo大小</el-divider>
                            <el-divider content-position="center">logo圆角</el-divider>
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
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>

<script>
import VueQr from "vue-qr";
export default {
    name: "toolQRCode",
    data() {
        return {
            QRconfig: {
                size: 400,
                text: "www.jl.gov.cn",
                correctLevel: 2,
                margin: 20,
                colorDark: "#000",
                backgroundColor: "#fff",
                bgSrc: "",
                logoMargin: 0,
                logoSrc: null,
                logoScale: 0.2,
                logoCornerRadius: 0,
                dotScale: 1,
            },
            textarea: "",
            qrMoreDialog: true,
            qrShow: true,
            tabsActive: "first",
        };
    },
    components: { VueQr },
    methods: {
        createdQR() {
            this.qrShow = true;
            this.QRconfig.text = this.textarea;
        },
        qrMoreSetting() {
            this.qrMoreDialog = true;
        },
        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    resolve(reader.result);
                };
                reader.onerror = (error) => reject(error);
            });
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
</style>

<style>
.el-radio__input.is-checked .el-radio__inner::after {
    transform: translate(-50%, -50%) scale(1);
}
.el-select {
    position: relative;
}
.el-select__tags {
    position: inherit;
    transform: translateY(0);
    padding: 3px 0;
    min-height: 28px;
}
.el-select__tags ~ .el-input {
    height: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
.el-input__inner {
    min-height: 20px;
    height: 100% !important;
}
.el-select__input.is-mini {
    min-height: 20px;
}
.slider_label{
  line-height: 38px;
}
</style>
