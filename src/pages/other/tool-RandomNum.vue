<template>
    <el-container>
        <el-row>
            <div class="dialog_option_wrap">
                <el-col :span="2">指定范围</el-col>
                <el-col :span="5">
                    <el-input v-model.number="min" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="1">~</el-col>
                <el-col :span="5">
                    <el-input v-model.number="max" placeholder="请输入内容"></el-input>
                </el-col>
            </div>
            <div class="dialog_option_wrap">
                <el-col :span="2">生成个数</el-col>
                <el-col :span="5">
                    <el-input v-model.number="number" placeholder="请输入内容"></el-input>
                </el-col>
            </div>
            <div class="dialog_option_wrap">
                <el-col :span="1" :offset="2"><el-button type="primary" @click="randomCompute">计算</el-button></el-col>
            </div>
            <div class="dialog_option_wrap radio" v-if="randomArr.length">
                <div>
                    <el-radio-group v-model="radio" size="medium">
                        <el-radio-button label="数组模式"></el-radio-button>
                        <el-radio-button label="表格模式"></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="arrMode" v-if="radio == '数组模式'">{{ randomArr }}</div>
                <div class="tableMode" v-if="radio == '表格模式'">
                    <table>
                        <thead>
                            <tr>
                                <td>序号</td>
                                <td>数字</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in randomArr" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </el-row>
    </el-container>
</template>

<script>
import random from "random";
export default {
    name: "toolRandomNum",
    data() {
        return {
            randomArr: [],
            min: 1,
            max: 100,
            number: 1,
            radio: "数组模式",
        };
    },
    methods: {
        randomCompute() {
            this.randomArr = [];
            if (this.number != 0) {
                for (let i = 0; i < this.number; i++) {
                    this.randomArr.push(random.int(this.min, this.max));
                }
            }
        },
    },
};
</script>

<style scoped>
.dialog_option_wrap {
    width: 100%;
    display: block;
    overflow: hidden;
    margin-bottom: 20px;
    line-height: 40px;
    text-align: center;
}
table thead,
table tr td {
    border: 1px solid #a8bfde;
}
table {
    border: 1px solid #a8bfde;
    width: 15%;
    display: inline-table;
    text-align: center;
}

/* Padding and font style */
table td,
table th {
    padding: 5px 10px;
    font-size: 12px;
    font-family: Verdana;
    color: #5b7da3;
}
table tr td:nth-child(1){
  width: 49%;
}
table tr td:nth-child(2){
  width: 49%;
}
.radio,.arrMode,.tableMode{
  margin-top: 20px;
}
/* Alternating background colors */
table tr:nth-child(even) {
    background: #d3dfed;
}
table tr:nth-child(odd) {
    background: #fff;
}
</style>
