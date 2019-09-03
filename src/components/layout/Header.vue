<template>
    <div class="header">
        <div class="logo"></div>
        <div class="user">
            <a-avatar icon="user" />
            <a-dropdown :trigger="['click']">
                <span class="ant-dropdown-link">
                    Boyce<a-icon type="down" />
                </span>
                <a-menu slot="overlay">
                    <a-menu-item key="0">
                        <router-link to="/login">로그아웃</router-link>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
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
        padding: 10px;
        height: @header-height;
        border-bottom: solid 1px #e5e5e5;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user {
        margin-right: 30px;
    }

    .header .logo {
        width: 120px;
        height: 30px;
        background: url("../../assets/images/logo.jpg") no-repeat center / cover;
    }

    .ant-avatar {
        background-color: @tealish;
    }

    .ant-dropdown-link {
        cursor: pointer;
        margin-left: 10px;
        color: #000;
    }
</style>