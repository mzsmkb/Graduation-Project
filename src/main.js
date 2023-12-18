import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000'
import router from '@/router'
import Antd from 'ant-design-vue'
import  { version } from 'ant-design-vue'
console.log('ant-design-vue version:', version)
import 'ant-design-vue/dist/reset.css'

createApp(App).use(Antd).use(router).mount('#app')
