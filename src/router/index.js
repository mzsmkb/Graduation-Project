import {createRouter,createWebHistory} from "vue-router";
import LogIn from "@/views/users/LogIn.vue";
import InDex from '@/views/users/InDex.vue'

const routes = [
    {
        path:'/login',
        name:'login',
        component:LogIn,
        prps:true,
    },
    {
        path:'/',
        name:'index',
        component:InDex,
        prps:true,
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;

