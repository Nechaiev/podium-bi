import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import PodiumBiPortal from "@/views/PodiumBiPortal.vue";
import WalmartRetailData from "@/views/WalmartRetailData.vue";
import {useAuthStore} from "@/stores/store.js";
import SingleViewPost from "@/views/SingleViewPost.vue";
import EpisodesViewPosts from "@/views/EpisodesViewPosts.vue";
import Login from "@/components/Login.vue";
import ToDoListView from "@/views/ToDoListView.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'EpisodesViewPosts',
      component: EpisodesViewPosts,
    },
    {
      path: '/posts/:id',
      name: 'SingleViewPost',
      meta: {
        isAuth: true,
      },
      component: SingleViewPost,
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
    {
      path: '/to-do-list',
      name: 'ToDoList',
      component: ToDoListView,
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