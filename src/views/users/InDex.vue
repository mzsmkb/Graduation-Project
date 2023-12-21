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
          <a-col :span="6" v-for="product in phoneList" :key="product.id">
            <a-card :cover="product.id" :hoverable="true">
              <img src="@/assets/imgs/2.jpg">
              <a-card-meta :title="product.name" :description="product.description" />
              <a-space>
                <a-text strong>¥{{product.price}}</a-text>
              </a-space>
            </a-card>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>


    <a-upload
      name="imgFile"
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :multiple="true"
      :show-upload-list="false"
      :before-upload="beforeUpload"
      :custom-request="customRequest"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <!--      @change="handleUpload"-->
<!--      <button>上传图片</button>-->
      <div>
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>

    <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img :src="previewImg" style="width: 100%" alt="example">
    </a-modal>

  </div>
</template>

<script>
import { Layout, Menu, MenuItem, Input, Row, Col, Card, Divider, Space, Button, Typography } from 'ant-design-vue';
import axios from "axios";
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
      ],
      phoneList:'',

    //   上传图片并预览
      fileList:[],
      previewVisible:false,
      previewImg:'',
      previewTitle:'',
    }
  },
  methods:{
    backToLogin(){
      this.$router.push({name:'login'})
    },

    // 获取到数据库中的商品信息
    getphoneList(){
      console.log('正在获取数据库中的手机数据')
      axios.get('http://localhost:3000/getphone')
          .then(response => {
            console.log("后端返回的数据",response);
            this.phoneList = response.data.backResToFront
            console.log("赋值给this.phoneList的数据",this.phoneList);
          })
          .catch(error => {
            console.error('error',error.response)
          });
    },
    getpadList(){
      console.log('正在获取数据库中的平板数据')
    },
    getlaptopList(){
      console.log('正在获取数据库中的平板数据')
    },
    getwearkitList(){
      console.log('正在获取数据库中的穿戴数据')
    },

    // 上传文件方法
    handleUpload(info){
      console.log("lllllllllllllllllll",info)
      const {status,response} = info.file;
      if (status === 'done'){
        this.fileList = [info.file];
        this.previewImg = response.url;
        this.previewVisible = true;
      }
    },
    beforeUpload(info){
      console.log("这是beforeUpload的info：",info)
    },
    customRequest(info,date){
      console.log("这是customRequest的info和date：",info,date)
    },
    getBase64(file){
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
    ,
    async handlePreview(file) {
      console.log("这是handlePreview的file：", file)
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
    },
    handleCancel(){
      console.log("这是handleCancel")
      previewVisible.value = false;
      previewTitle.value = '';
    },
  },
  created() {
    this.getphoneList()
    this.getpadList()
    this.getlaptopList()
    this.getwearkitList()
  }
}
</script>

<style scoped>
.app {
  height: 100vh;
  width: 86vw;
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
