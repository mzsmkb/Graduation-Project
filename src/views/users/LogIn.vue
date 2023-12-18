<template>
  <div class="login_register">
    <div class="back_img"></div>
    <div class="container">
      <div class="input_info">
        <h1>Welcome</h1>
        <input type="text" class="input_msg" v-model="loginInfo.username" placeholder="输入用户名">
        <input type="password" class="input_msg" v-model="loginInfo.password" placeholder="输入密码">
        <a v-if="showPwdErr" style="color: red;">用户或密码错误!</a>
        <a @click="toReg" class="forpwd">Forget the passrword?</a>
        <a @click="Login" class="login">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'logIn',
    data() {
        return {
            msg: "这是login界面~~",
            loginInfo:{
                username:'',
                password:'',
            },
            showPwdErr:false
        }
    },
    methods: {
        Login(){
            console.log('dianjidengluanniule',this.loginInfo);
            axios.post('http://localhost:3000/login',this.loginInfo)
                .then(response => {
                    console.log("后端返回的数据",response.data.inputLoginInfo);
                    this.showPwdErr = false
                    this.$router.push({ name: 'index' });
                })
                .catch(error => {
                    console.error('error',error.response.data)
                    this.showPwdErr = true
            });

        }
    },
}

</script>

<style>
body{
    background-image: linear-gradient(to left, #8171ef, #5cbaef);
    display:flex;
    justify-content:center;
}
</style>

<style scoped>
.login_register {
    position: relative;
    top: 100px;
    width: 1100px;
    height: 550px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .8);
    display: flex;
}

.back_img {
    width: 800px;
    height: 550px;
    background-image: url('@/assets/Login/login.png');
    /* 让图片适应大小 */
    background-size: cover;
}

.container {
    width: 300px;
    height: 550px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.input_info {
    width: 250px;
    height: 500px;
}

.input_info h1 {
    font: 900 30px '';
    margin-bottom: 60px;
}

.input_msg {
    width: 230px;
    margin: 20px 0;
    outline: none;
    border: 0;
    padding: 10px;
    border-bottom: 3px solid rgb(80, 80, 170);
    font: 900 16px '';
}

.forpwd {
    float: right;
    margin: 200px 0;
    color: #f5a4a4;
}

.forpwd:hover {
    color: red;
}

.login {
    position: absolute;
    margin: 20px;
    bottom: 40px;
    display: block;
    width: 200px;
    height: 60px;
    font: 900 30px '';
    color: #29292a;
    text-decoration: none;
    line-height: 50px;
    border-radius: 30px;
    background-image: linear-gradient(to left,
    #a6a7a9, #a6a7a9);
    text-align: center;
}

.login:hover {
    color: aliceblue;
}</style>
