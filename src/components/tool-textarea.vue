<template>
    <div class="textarea">
        <el-input
            class="topInput"
            ref="topInput"
            type="textarea"
            @input="$emit('parentVal', $event)"
            :value="value"
            :placeholder="placeholder"
            :clearable="true"
            resize="none"
            :readonly="readonly"
        />
    </div>
</template>

<script>
export default {
    name: "toolTextarea",
    props: ["value", "placeholder", "readonly"],
    model: {
        prop: "value",
        event: "parentVal",
    },
};
</script>

<style scoped>
.textarea .el-textarea >>> textarea {
    height: 200px;
}
</style>
