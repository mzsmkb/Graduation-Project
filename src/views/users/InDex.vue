<template>
  <div class="app">
    <a-layout>
      <a-layout-header class="nav-bar">
        <a href="#" class="logo">
          <img src="@/assets/logo.png" alt="logo">
        </a>
        <a-input-search :placeholder="'搜索商品...'" class="search-bar" />
        <a-menu mode="horizontal" :defaultSelectedKeys="['1']" class="menu">
          <a-menu-item key="1">首页</a-menu-item>
          <a-menu-item key="3">购物车</a-menu-item>
          <a-menu-item key="4">我的订单</a-menu-item>
          <a-menu-item key="5">个人中心</a-menu-item>
          <a-menu-item key="6" @click="backToLogin">登录</a-menu-item>
          <a-menu-item key="7" @click="backToLogin">注册</a-menu-item>
          <a-menu-item key="8">关于我们</a-menu-item>
        </a-menu>

      </a-layout-header>
      <a-layout-content class="product-list">
        <a-row :gutter="[16, 16]">
          <a-col :span="6" v-for="product in products" :key="product.id">
            <a-card :cover="product.cover" :hoverable="true">
              <a-card-meta :title="product.title" :description="product.description" />
              <a-divider />
              <a-space>
                <a-text strong>¥{{product.price}}</a-text>
                <a-button type="primary">加入购物车</a-button>
              </a-space>
            </a-card>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { Layout, Menu, MenuItem, Input, Row, Col, Card, Divider, Space, Button, Typography } from 'ant-design-vue';

export default {
  name: 'App',
  components: {
    'a-layout': Layout,
    'a-layout-header': Layout.Header,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-input-search': Input.Search,
    'a-layout-content': Layout.Content,
    'a-row': Row,
    'a-col': Col,
    'a-card': Card,
    'a-card-meta': Card.Meta,
    'a-divider': Divider,
    'a-space': Space,
    'a-button': Button,
    'a-text': Typography.Text,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: '商品1',
          description: '这是商品1的描述',
          price: 99.00,
        },
        {
          id: 2,
          title: '商品2',
          description: '这是商品2的描述',
          price: 199.00,
        },
        {
          id: 3,
          title: '商品3',
          description: '这是商品3的描述',
          price: 299.00,
        },
        {
          id: 4,
          title: '商品4',
          description: '这是商品4的描述',
          price: 399.00,
        },
        {
          id: 5,
          title: '商品5',
          description: '这是商品4的描述',
          price: 399.00,
        },
        {
          id: 6,
          title: '商品6',
          description: '这是商品4的描述',
          price: 399.00,
        },
        {
          id: 7,
          title: '商品7',
          description: '这是商品4的描述',
          price: 399.00,
        },
        {
          id: 8,
          title: '商品8',
          description: '这是商品4的描述',
          price: 399.00,
        },
        {
          id: 9,
          title: '商品9',
          description: '这是商品4的描述',
          price: 399.00,
        },
      ]
    }
  },
  methods:{
    backToLogin(){
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style scoped>
.app {
  height: 100vh;
  width: 1100px;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
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

.product-list {
  padding: 24px;
}

.product-list a-card {
  width: 100%;
  height: 100%;
}

.product-list a-card-meta-title {
  font-size: 16px;
  font-weight: bold;
}

.product-list a-card-meta-description {
  font-size: 14px;
}

.product-list a-card-cover {
  height: 200px;
  background-size: cover;
  background-position: center;
}
</style>
