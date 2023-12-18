<template>
  <div class="nav-bar">
    <a href="#" class="logo">
      <img src="@/assets/logo.png" alt="logo">
      <a>xx品牌商场</a>
    </a>
    <a-input-search :placeholder="'搜索商品...'" class="search-bar" />
    <a-menu mode="horizontal" :defaultSelectedKeys="['1']" class="menu">
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">商品导航</a-menu-item>
      <a-menu-item key="3">购物车</a-menu-item>
      <a-menu-item key="4">我的订单</a-menu-item>
      <a-menu-item key="5" @click="backToLogin">登录</a-menu-item>
      <a-menu-item key="6" @click="backToLogin">注册</a-menu-item>
      <a-menu-item key="7">关于我们</a-menu-item>
    </a-menu>

  </div>
</template>

<script>
import { Menu, MenuItem, Input, Layout } from 'ant-design-vue';
export default {
  name: 'Navbar',
  components: {
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-input-search': Input.Search,
    'a-layout-header': Layout.Header
  },
  methods:{
    backToLogin(){
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 1100px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 32px;
}

.menu {
  display: flex;
  justify-content: center;
}

.search-bar {
  width: 200px;
}

a{
  text-decoration: none;
  color: black;
}

.logo a {
  margin-left: 30px;
}

</style>
