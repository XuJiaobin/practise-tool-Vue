<template>
  <el-container>
    <el-row>
      <el-col :span="5">
        <span class="demonstration">bit(b)</span>
        <el-input
          placeholder="请输入内容"
          @input="handlebit($event, 'bit', 'bit')"
          v-model="bit"
        ></el-input>
      </el-col>
      <el-col :span="5" :offset="1">
        <span class="demonstration">Byte(B)</span>
        <el-input
          placeholder="请输入内容"
          @input="handlebit($event, 'B', 'Byte')"
          v-model="Byte"
        ></el-input>
      </el-col>
      <el-col :span="5" :offset="1">
        <span class="demonstration">KiloByte(KB)</span>
        <el-input
          placeholder="请输入内容"
          @input="handlebit($event, 'KiB', 'KiloByte')"
          v-model="KiloByte"
        ></el-input>
      </el-col>
      <el-col :span="5" :offset="1">
        <span class="demonstration">MegaByte(MB)</span>
        <el-input
          placeholder="请输入内容"
          @input="handlebit($event, 'MiB', 'MegaByte')"
          v-model="MegaByte"
        ></el-input>
      </el-col>
      <el-col :span="5">
        <span class="demonstration">GigaByte(GB)</span>
        <el-input
          placeholder="请输入内容"
          @input="handlebit($event, 'GiB', 'GigaByte')"
          v-model="GigaByte"
        ></el-input>
      </el-col>
      <el-col :span="5" :offset="1">
        <span class="demonstration">TeraByte(TB)</span>
        <el-input
          placeholder="请输入内容"
          @input="handlebit($event, 'TiB', 'TeraByte')"
          v-model="TeraByte"
        ></el-input>
      </el-col>
      <el-col :span="5" :offset="1">
        <span class="demonstration">PetaByte(PB)</span>
        <el-input
          placeholder="请输入内容"
          @input="handlebit($event, 'PiB', 'PetaByte')"
          v-model="PetaByte"
        ></el-input>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import convert from "convert-pro";
export default {
  name: "toolBytesCoding",
  data() {
    return {
      bit: "",
      Byte: "",
      KiloByte: "",
      MegaByte: "",
      GigaByte: "",
      TeraByte: "",
      PetaByte: "",
    };
  },
  methods: {
    handlebit(event, bytes, dataName) {
      if (event == "") {
        this.bit = "";
        this.Byte = "";
        this.KiloByte = "";
        this.MegaByte = "";
        this.GigaByte = "";
        this.TeraByte = "";
        this.PetaByte = "";
      }else{
        this.bit = convert.bytes([parseInt(this[dataName]), bytes], "bit");
        this.Byte = convert.bytes([parseInt(this[dataName]), bytes], "B");
        this.KiloByte = convert.bytes([parseInt(this[dataName]), bytes], "KiB");
        this.MegaByte = convert.bytes([parseInt(this[dataName]), bytes], "MiB");
        this.GigaByte = convert.bytes([parseInt(this[dataName]), bytes], "GiB");
        this.TeraByte = convert.bytes([parseInt(this[dataName]), bytes], "TiB");
        this.PetaByte = convert.bytes([parseInt(this[dataName]), bytes], "PiB");
      }
    },
  },
};
</script>

<style scoped>
.el-col {
  margin-bottom: 20px;
}
</style>