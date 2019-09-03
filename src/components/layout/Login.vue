<template>
    <div class="login">
        <div class="login-form">
            <div class="form">
                <img src="../../assets/images/logo.jpg" />
                <p>환영합니다, <br/>계정으로 로그인해주세요.</p>
                <label>이메일 주소<br/>
                    <input type="text" name="username" />
                </label>
                <label>비밀번호<br/>
                    <input type="password" name="password" />
                </label>
                <a-button>로그인</a-button>
            </div>
            <div class="bg-image"></div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped lang="less">
    label,
    input {
        width: 100%;
    }

    input {
        border: none;
        outline: none;
        border-bottom: 1px solid @light-grey;
        font-weight: bold;
        font-size: 16px;
        color: #000;
    }

    label {
        font-weight: normal;
        font-size: 12px;
        color: #666;
    }

    .login {
        position: relative;
        width: 100%;
        height: 100%;
        background: #f9fafc;
    }
    .login-form {
        position: absolute;
        width: 50%;
        max-width: 1000px;
        min-width: 500px;
        max-height: 500px;
        min-height: 300px;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 30px 40px 0 rgba(0,0,0,.1);
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-form > div {
        height: 100%;
    }
    .login-form > div.form {
        width: 60%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .login-form div.form img {
        width: 66px;
        height: 20px;
    }

    .login-form > div.bg-image {
        width: 40%;
        background: url("../../assets/images/login-bg.png") no-repeat center / cover;
    }

    button {
        width: 100%;
        background: @light-tealish;
        color: #fff;
    }
    button:hover {
        background: @tealish;
        color: #fff;
    }

    p {
        font-size: 18px;
        font-weight: bold;
    }
</style>