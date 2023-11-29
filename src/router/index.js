import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PodiumBiPortalView from '@/views/PodiumBiPortalView.vue'
import WalmartRetailDataView from '@/views/WalmartRetailDataView.vue'
import ContactView from '@/views/ContactView.vue'
import EpisodesView from '@/views/EpisodesView.vue'
import SingleEpisodes from '@/views/SingleEpisodes.vue'
import BlogView from '@/views/BlogView.vue'
import CustomLayout from '@/layouts/CustomLayout.vue'
import LoginView from '@/views/LoginView.vue'
import CoursesView from '@/views/CoursesView.vue'
import SingleCoursesView from "@/views/SingleCoursesView.vue";
/*import useAuthStore from "@/stores/authStore"

const authStore = useAuthStore()
console.log(authStore.isAuth)*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/podium-bi-portal',
      name: 'podium-bi-portal',
      component: PodiumBiPortalView,
     
    },
    {
      path: '/walmart-retail-data',
      name: 'walmart-retail-data',
      component: WalmartRetailDataView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    // {
    //   path: '/to-do-list',
    //   name: 'ToDoList',
    //   component: ToDoListView,
    // },
    {
      path: '/posts',
      name: 'posts',
      component: EpisodesView,
    },
    {
      path: '/posts/:id',
      name: 'SingleEpisodes',
      meta: {
        isAuth: true,
      },
      component: SingleEpisodes,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        private: true,
        layout: CustomLayout,
      }
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesView,
      meta: {
        private: true,
      },
    },
    {
      path: '/courses/:id',
      name: 'SingleCourses',
      component: SingleCoursesView,
      meta: {
        private: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ],
})

window.isAuth = true;
router.beforeEach((to, from, next) => {
  if (to.meta.private && !window.isAuth) {
    console.log(to.meta);
    next('/login');
  } else {
    next();
  }
})
export default router
