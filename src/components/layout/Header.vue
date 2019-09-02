<template>
    <div class="header">
        <div class="logo"></div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less" scoped>
    .header {
        width: 100%;
        padding: 30px;
        height: @header-height;
        border-bottom: solid 1px #e5e5e5;
    }

    .header .logo {
        width: 132px;
        height: 40px;
        background: url("../../assets/images/logo.jpg") no-repeat center;
        background-size: cover;
    }
</style>