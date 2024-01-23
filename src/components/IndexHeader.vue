<template>
  <div>
    <nav class="nav-bar">
      <div class="nav-left">
        <a href="#">XX官网</a>
        <router-link to="/">XX商城</router-link>
        <a href="#" @click="shareWebsite">分享网站</a>
      </div>
      <div class="nav-right">
        <a href="#">消息通知</a>
        <a href="#">购物车</a>
        <router-link to="/login">登录</router-link>
        <router-link to="/login">注册</router-link>
        你好，{{username}}
        <a @click="toUserInfoView" class="avatar"></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default{
  name:"IndexHeader",
  components:{
  },
  props:['username'],
  data(){

  },
  methods:{
    shareWebsite() {
      // 复制当前网页链接到剪贴板
      const el = document.createElement('textarea');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      // 弹窗提示
      alert("网址已复制到剪贴板！");
    },
    toUserInfoView(){
      console.log("正在进入个人信息中心")
      this.$router.push({ name: 'userInfo', query: { username:this.username }});
    }
  }
}

</script>


<style>

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left a, .nav-right a, .nav-right .avatar {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  display: inline-block; /* 确保所有元素都是内联块级元素 */
  vertical-align: middle; /* 垂直居中对齐 */
}

.avatar {
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: inline-block; /* 确保头像也是内联块级元素 */
}
</style>
