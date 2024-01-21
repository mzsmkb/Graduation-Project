import {createRouter,createWebHistory} from "vue-router";
import LogIn from "@/views/users/LogIn.vue";
import InDex from '@/views/users/InDex.vue'
import adminIndex from "@/views/admin/adminIndex.vue";
import userInfo from "@/views/users/UserInfo.vue";
import PasswordReset from "@/components/PasswordReset.vue";
import RegisterView from "@/components/RegisterView.vue";

const routes = [
    {
        path:'/',
        name:'index',
        component:InDex,
        prps:true,
    },
    {
        path:'/login',
        name:'login',
        component:LogIn,
        prps:true,
    },
    {
        path:'/register',
        name:'register',
        component:RegisterView,
        prps:true,
    },
    {
        path:'/passwordReset',
        name:'passwordReset',
        component:PasswordReset,
        prps:true,
    },
    {
        path:'/userInfo',
        name:'userInfo',
        component:userInfo,
        prps:true,
    },
    {
        path:'/admin',
        name:'admin',
        component:adminIndex,
        prps:true,
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;

