import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import PodiumBiPortal from "@/views/PodiumBiPortal.vue";
import WalmartRetailData from "@/views/WalmartRetailData.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/podiumBiPortal',
            name: 'podiumBiPortal',
            component: PodiumBiPortal
        },
        {
            path: '/walmartRetailData',
            name: 'walmartRetailData',
            component: WalmartRetailData
        },
    ]
})

export default router