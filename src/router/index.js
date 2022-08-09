import VueRouter from "vue-router";
import toolIndex from "../pages/tool-index";
import toolBase64 from "../pages/EncryptOrDecode/tool-Base64.vue";
import toolMD5 from "../pages/EncryptOrDecode/tool-MD5";
import toolSha1 from "../pages/EncryptOrDecode/tool-sha1";
import toolEncodeURICoding from "../pages/transcoding/tool-EncodeURICoding.vue";
import toolUnicode from "../pages/transcoding/tool-Unicode.vue";
import toolunixTimeCoding from "../pages/transcoding/tool-UnixTimeCoding";
import toolURLCoding from "../pages/transcoding/tool-URLCoding.vue";
import toolUTF8Coding from "../pages/transcoding/tool-UTF8Coding.vue";
import toolQRCode from "../pages/other/tool-QRCode.vue";
import toolRandomNum from "../pages/other/tool-RandomNum.vue";
import toolRegular from "../pages/other/tool-toolRegular";
import base from "../pages/other/tool-BaseConversion.vue";
import bytes from "../pages/other/tool-bytesCoding";
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: toolIndex,
            meta: { title: "首页" },
        },
        {
            path: "/transcoding",
            //如父级没有component可以用以下写法
            component: { render: (e) => e("router-view") },
            meta: { title: "编码转码" },
            children: [
                {
                    path: "encodeuri",
                    component: toolEncodeURICoding,
                    meta: { title: "encodeURI/decodeURI" },
                },
                {
                    path: "unicode",
                    component: toolUnicode,
                    meta: { title: "unicode" },
                },
                {
                    path: "unixTime",
                    component: toolunixTimeCoding,
                    meta: { title: "unix时间戳转换" },
                },
                {
                    path: "urlCoding",
                    component: toolURLCoding,
                    meta: { title: "URL转码" },
                },
            ],
        },
        {
            path: "/encryptOrDecode",
            component: { render: (e) => e("router-view") },
            meta: { title: "加密解密" },
            children: [
                {
                    path: "Base64",
                    component: toolBase64,
                    meta: { title: "BASE64加密解密" },
                },
                {
                    path: "MD5",
                    component: toolMD5,
                    meta: { title: "MD5加密" },
                },
                {
                    path: "sha1",
                    component: toolSha1,
                    meta: { title: "sha1加密" },
                },
            ],
        },
        {
            path: "/other",
            //如父级没有component可以用以下写法
            component: { render: (e) => e("router-view") },
            meta: { title: "其他" },
            children: [
                {
                    path: "QRCode",
                    component: toolQRCode,
                    meta: { title: "二维码生成" },
                },
                {
                    path: "RandomNum",
                    component: toolRandomNum,
                    meta: { title: "随机数生成" },
                },
                {
                    path: "Regular",
                    component: toolRegular,
                    meta: { title: "正则测试工具" },
                },
                {
                    path: "base",
                    component: base,
                    meta: { title: "进制转换" },
                },
                {
                    path: "bytes",
                    component: bytes,
                    meta: { title: "字节转换" },
                },
            ],
        },
    ],
});
router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title; //修改网页的title
    } else {
        document.title = "欢迎";
    }
});
export default router;
