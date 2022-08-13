<template>
    <div>
        <p class="showUnix" v-cloak>
            当前的Unix时间戳是：<span>{{ timeStamp }} </span>当前时间：<span>{{ currentTime }}</span>
        </p>
        <div class="unix2date">
            Unix时间戳（Unix timestamp）：
            <el-input class="unix2dateEnter" v-model="unix2dateEnter" />
            <el-select placeholder="请选择" v-model="selectVal">
                <el-option value="秒"></el-option>
                <el-option value="毫秒"></el-option>
            </el-select>
            <el-button type="primary" @click="convertDateTime">转换</el-button>
            <el-input class="unix2dateResult" readonly v-model="unix2dateResult" />
        </div>
        <div class="date2unix">
            时间（年/月/日 时:分:秒）：
            <el-date-picker v-model="date2unixEnter" :value="date2unixEnter" type="datetime" placeholder="选择日期时间" format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
            <el-button type="primary" @click="convertTimeStamp">转换成Unix时间戳</el-button>
            <el-input class="unix2dateResult" readonly v-model="date2unixResult" />
            <el-select placeholder="请选择" v-model="date2UnixSelectVal">
                <el-option value="秒"></el-option>
                <el-option value="毫秒"></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";
export default {
    name: "toolUnixTimeCoding",
    data() {
        return {
            timeStamp: "",
            selectVal: "秒",
            currentTime: "",
            unix2dateEnter: "",
            unix2dateResult: "",
            date2UnixSelectVal: "秒",
            date2unixEnter: "",
            date2unixResult: "",
        };
    },
    mounted() {
        this.timeStamp = dayjs().unix();
        this.currentTime = dayjs().format("YYYY年MM月DD日 HH:mm:ss");
        setInterval(() => {
            this.timeStamp = dayjs().unix();
            this.currentTime = dayjs().format("YYYY年MM月DD日 HH:mm:ss");
        }, 1000);
    },
    methods: {
        convertDateTime() {
            if (this.selectVal == "秒") {
                this.unix2dateResult = dayjs.unix(parseInt(this.unix2dateEnter)).format("YYYY年MM月DD日 HH:mm:ss");
            } else {
                this.unix2dateResult = dayjs(parseInt(this.unix2dateEnter)).format("YYYY年MM月DD日 HH:mm:ss");
            }
        },
        convertTimeStamp() {
            if (this.date2UnixSelectVal == "秒") {
                this.date2unixResult = dayjs(this.date2unixEnter).unix();
            } else {
                this.date2unixResult = dayjs(this.date2unixEnter).valueOf();
            }
        },
    },
    watch: {
        date2UnixSelectVal(newVal) {
            if (this.date2unixResult != "") {
                if (newVal == "毫秒") {
                    this.date2unixResult = dayjs(this.date2unixEnter).valueOf();
                } else {
                    this.date2unixResult = dayjs(this.date2unixEnter).unix();
                }
            }
        },
    },
};
</script>

<style scoped>
.showUnix {
    text-align: center;
    border-bottom: 1px solid #d7dae2;
    padding-bottom: 20px;
}
.showUnix span {
    color: #ff6200;
}
[v-cloak] {
    display: none;
}
.unix2date {
    padding-top: 20px;
}
.unix2dateEnter {
    display: inline-block;
    width: 20%;
}
.el-select {
    margin: 0 1%;
    width: 6%;
    display: inline-block;
}
.unix2dateResult {
    width: 15%;
    margin-left: 1%;
}
.date2unix {
    margin-top: 1%;
}
.date2unix,
.unix2date {
    text-align: center;
}
</style>
<style lang="css">
.unix2date .el-input input {
    height: 40px;
}
</style>
