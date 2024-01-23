<template>
  <div>
    <h1>ID:{{ loginuserInfo.id }}</h1>
    <h1>用户名：{{ loginuserInfo.username }}</h1>
    <h1>角色：{{ loginuserInfo.role }}</h1>
    <h1>注册时间：{{ loginuserInfo.registration_time }}</h1>
    <h1>联系方式：{{ loginuserInfo.phone }}</h1>
    <h1>邮箱：{{ loginuserInfo.email }}</h1>
    <h1>性别：{{ loginuserInfo.gender }}</h1>
    <button @click="edituserInfo">修改个人信息</button>
    <template v-if="showEditView">
      <input type="text" v-model="loginuserInfo.username" placeholder="修改用户名" />
      <input type="text" v-model="loginuserInfo.phone" placeholder="修改联系方式" />
      <button @click="commintEdit">确认修改</button>
    </template>

    <button>我的订单</button>
    <button>我的消息通知</button>
  </div>
</template>

<script>
import axios from "axios";

export default{
  name:"userInfo",
  components:{
  },
  data(){
    return{
      loginuserInfo:{
        username:'',
      },
      showEditView:false,

    }
  },
  methods:{
    getUserInfo(){
      console.log("正在从后端获取当前用户的所有信息~~",this.loginuserInfo.username)
      axios.post('http://localhost:3000/getuserinfo',this.loginuserInfo)
          .then(response => {
            console.log("后端返回的数据",response.data);
            this.loginuserInfo=Object.assign(this.loginuserInfo,response.data)
            console.log("this.loginuserInfo",this.loginuserInfo)
          })
          .catch(error => {
            console.error('error',error.response.data)
          });
    },
    edituserInfo(){
      this.showEditView = true
    },
    commintEdit(){
      console.log("正在向后端发送修改后的数据~~",this.loginuserInfo.phone)
      axios.post('http://localhost:3000/editUserInfo',this.loginuserInfo)
          .then(response => {
            console.log("后端返回的数据",response.data);
          })
          .catch(error => {
            console.error('error',error.response.data)
            this.showPwdErr = true
          });
    }
  },
  mounted() {
    this.loginuserInfo.username = this.$route.query.username; // 从$route中获取传递过来的username
    this.getUserInfo()
  }
}

</script>


<style>

</style>
