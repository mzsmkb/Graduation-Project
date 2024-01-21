<template>
  <div class="login_register">
    <div class="back_img"></div>
    <div class="container">
      <div class="input_info">
        <h1>重置密码</h1>
        <input type="text" class="input_msg" v-model="loginInfo.email" placeholder="输入邮箱">
        <input type="text" class="input_msg" v-model="loginInfo.veryfiyCode" placeholder="输入验证码">
        <button @click="sendCode">发送验证码</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PasswordReset',
  data() {
    return{
      loginInfo:{
        phoneNumber:'',
        veryfiyCode:'',
        email:'',
      }
    }
  },
  methods: {
    sendCode(){
      console.log("正在发送验证码~",this.loginInfo.email)
      axios.post('http://localhost:3000/resetPassword/sendEmail',this.loginInfo)
          .then(response => {
            console.log("后端接口返回的数据",response)
          })
    }
  },
}

</script>

<style scoped>
.login_register {
  position: relative;
  top: 100px;
  width: 1100px;
  height: 550px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .8);
  display: flex;
  margin: 20px 200px;
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
</style>
