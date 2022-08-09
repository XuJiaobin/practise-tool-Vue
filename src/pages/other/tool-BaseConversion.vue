<template>
        <el-container>
            <el-row>
                <el-col :span="5">
                    <span class="demonstration">二进制</span>
                    <el-input placeholder="请输入内容" v-model="binary"></el-input>
                </el-col>
                <el-col :span="5" :offset="1">
                    <span class="demonstration">八进制</span>
                    <el-input placeholder="请输入内容" v-model="octal"></el-input>
                </el-col>
                <el-col :span="5" :offset="1">
                    <span class="demonstration">十进制</span>
                    <el-input placeholder="请输入内容" v-model="decimal"></el-input>
                </el-col>
                <el-col :span="5" :offset="1">
                    <span class="demonstration">十六进制</span>
                    <el-input placeholder="请输入内容" v-model="hex"></el-input>
                </el-col>
            </el-row>
        </el-container>
</template>

<script>
export default {
    name: "toolBaseConversion",
    data() {
        return {
            number: "",
        };
    },
    computed: {
        binary: {
            get() {
                return this.number.toString(2);
            },
            set(e) {
                if (!e.match(/^[0-1]*$/)) {
                    this.$bus.$emit("warnMessage", "跟我念“二进制”😒😒");
                } else {
                    this.number = e == "" ? "" : parseInt(e, 2);
                }
            },
        },
        octal: {
            get() {
                return this.number.toString(8);
            },
            set(e) {
                if (!e.match(/^[0-7]*$/)) {
                    this.$bus.$emit("warnMessage", "哎哎，看好哦，这是八进制🤯🤯");
                } else {
                    this.number = e == "" ? "" : parseInt(e, 8);
                }
            },
        },
        decimal: {
            get() {
                return this.number.toString(10);
            },
            set(e) {
                if (!e.match(/^[0-9]*$/)) {
                    this.$bus.$emit("warnMessage", "啊喂，十进制我就不说什么了🤪🤪");
                } else {
                    this.number = e == "" ? "" : parseInt(e, 10);
                }
            },
        },
        hex: {
            get() {
                return this.number.toString(16);
            },
            set(e) {
                if (!e.match(/^[0-9a-fA-F]*$/)) {
                    this.$bus.$emit("warnMessage", "啊喂，想想它为什么叫十六进制🤔🤔");
                } else {
                    this.number = e == "" ? "" : parseInt(e, 16);
                }
            },
        },
    },
};
</script>

<style scoped>
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
}
</style>
