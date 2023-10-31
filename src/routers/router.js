import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import PodiumBiPortal from "@/views/PodiumBiPortal.vue";
import WalmartRetailData from "@/views/WalmartRetailData.vue";
import {useAuthStore} from "@/stores/store.js";
import Login from "@/components/Login.vue";

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
      component: WalmartRetailData,
      meta: {
        private: true,
      },
    },
    {
      path: "/login",
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: true
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.path !== "/login" && to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next();
  }
});



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