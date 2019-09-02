<template>
    <label>
        {{ label }}
        <a-select v-on="$listeners" :style="userStyle"
                  v-bind="$attrs" >
            <a-select-option v-for="option in options" :key="option.value" :value="option.value">{{ option.name  }}</a-select-option>
        </a-select>
    </label>
</template>

<script>
    export default {
        name: "Select",
        inheritAttrs: false,
        props: {
            label: String,
            userStyle: Object,
            options: Array,
        },
    }
</script>

<style scoped>
    .ant-select {
        width: 200px;
        margin-left: 10px;
    }
</style>