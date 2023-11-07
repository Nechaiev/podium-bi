import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import PodiumBiPortal from "@/views/PodiumBiPortal.vue";
import WalmartRetailData from "@/views/WalmartRetailData.vue";
import {useAuthStore} from "@/stores/store.js";
import RickSingle from "@/views/RickSingle.vue";
import EpisodesView from "@/views/EpisodesView.vue";
import Login from "@/components/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/EpisodesView',
      name: 'EpisodesView',
      component: EpisodesView,
    },
    {
      path: '/EpisodesView/:id',
      name: 'RickSingle',
      meta: {
        isAuth: true,
      },
      component: RickSingle,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,

    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/podiumBiPortal',
      name: 'podiumBiPortal',
      component: PodiumBiPortal,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/walmartRetailData',
      name: 'walmartRetailData',
      component: WalmartRetailData,
      meta: {
        requiresAuth: true
      },
    },
    // {
    //   path: "/login",
    //   name: 'login',
    //   component: Login,
    // },
  ]
});

// router.beforeEach((to, from) => {
//   const authStore = useAuthStore();
//   if (to.path !== "/login"
//     && to.matched.some((record) => record.meta.requiresAuth)
//     && !authStore.isAuthenticated) {
//     return {path: "/login"};
//   }
// });


// add middleware to router
// window.isAuth = true;

// router.beforeEach((to, from) => {
//   console.log(to, from)
//   if (to.meta.private) {
//     return window.isAuth
//   }
// })
//
export default router