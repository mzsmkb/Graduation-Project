<template>
  <div class="login_register">
    <div class="back_img"></div>
    <div class="container">
      <div class="input_info">
        <h1>注册</h1>
        <input type="text" class="input_msg" v-model="registerInfo.username" placeholder="输入用户名">
        <input type="text" class="input_msg" v-model="registerInfo.email" placeholder="输入邮箱">
        <input type="text" class="input_msg" v-model="registerInfo.phoneNumber" placeholder="输入手机号">
        <input type="password" class="input_msg" v-model="registerInfo.password" placeholder="输入密码">
        <input type="password" class="input_msg" v-model="registerInfo.passwordRe" placeholder="再次输入密码">
        <button @click="toRegister">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default{
  name:"RegisterView",
  data(){
    return{
      registerInfo:{
        username:"",
        email:'',
        password:'',
        passwordRe:'',
        phoneNumber:'',
        veryfiyCode:'',
        registerTime:"",
      },
    }
  },
  methods:{
    toRegister(){
      if(this.registerInfo.password !== this.registerInfo.passwordRe){
        alert("两次密码输入不一致")
      }else{
        if(this.registerInfo.username && this.registerInfo.email &&this.registerInfo.password){
          // 正式进入到注册处理逻辑
          console.log("这是注册函数")
          // this.registerInfo.registerTime= new Date(); // 获取当前时间
          axios.post('http://localhost:3000/register',this.registerInfo)
              .then(response => {
                console.log("后端接口返回的数据",response)
              })
        }else{
          alert('请输入完整的注册信息')
        }

      }

    },
    validateAndSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 校验通过，提交数据或其他操作
          console.log('表单校验通过');
        } else {
          // 校验不通过，处理错误信息
          console.log('表单校验未通过');
        }
      });
    }
  }
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
