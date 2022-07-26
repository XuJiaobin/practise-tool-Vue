<template>
  <el-header style="text-align: left; font-size: 14px">
    今天是：{{todayChineseCalendar}}
  </el-header>
</template>

<script>
import solarLunar from "solarlunar";
export default {
  name: "tool-header",
  data() {
    return {};
  },
  computed:{
    todayChineseCalendar(){
        let date = new Date();
        const lunar = solarLunar.lunar2solar(date.getFullYear, date.getMonth, date.getDate);
        return `${lunar.cYear}年${lunar.cMonth}月${lunar.cDay}日 ${lunar.ncWeek} 农历：${lunar.monthCn}${lunar.dayCn}` 
    }
  },

};
</script>

<style scope>
.el-header{
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background: none!important;
    border: 1px solid #d7dae2;
    border-radius: 4px
}
</style>
