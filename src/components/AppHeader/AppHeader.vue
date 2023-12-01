<template>
  <header class=" bg-black text-white">
    <div class="flex w-full max-w-[1464px] mx-auto px-3 py-6 pr-[60px]">
      <app-logo class="mr-[-57px]"></app-logo>
      <template-nav :items="nav" variant="header"></template-nav>
      <div v-if="isAuth" class="grid justify-center items-center">
        <span>{{fullName}}</span>
        <button @click="onLogout" class="whitespace-nowrap  hover:text-primaryColor" :disabled="loading">LogOut</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import {computed} from "vue";
import AppLogo from "@/components/ui/AppLogo.vue";
import TemplateNav from "@/components/ui/TemplateNav.vue";
import useAuthStore from '@/stores/authStore.js'
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";

const authStore = useAuthStore();
const fullName = computed(()=> authStore.fullName)
const isAuth = computed(()=> authStore.isAuth)
const {handler, loading} = useHandleLoadingAndError()
const onLogout = ()=> {
  handler(authStore.logOut)
}
const nav = computed(()=>{
  return [
    {
      text: 'Home',
      to: {name: 'home'},
      scope: true,
      /*children: [
        {
          text: 'Nested nav',
          href: 'https://google.com',
        },
        {
          text: 'Nested nav',
          href: 'https://google.com',
        },
        {
          text: 'Nested nav',
          href: 'https://google.com',
        },
        {
          text: 'Nested nav',
          href: 'https://google.com',
        },
      ]*/
    },
    {
      text: 'podium-bi-portal',
      to: {name: 'podium-bi-portal'}
    },
    /* {
       text: 'walmart-retail-data',
       to: {name: 'walmart-retail-data'}
     },*/
    {
      text: 'contact',
      to: {name: 'contact'}
    },
    /*{
      text: 'ToDoList',
      to: {name: 'ToDoList'}
    },*/
    {
      text: 'posts',
      to: {name: 'posts'}
    },
    {
      text: 'blog',
      to: {name: 'blog'}
    },
    {
      text: 'courses',
      to: {name: 'courses'},
      auth: true,
    },
    {
      text: 'creat courses',
      to: {name: 'creat-courses'},
      auth: true,
    },
    {
      text: 'login',
      to:  {name: 'login'},
      auth: false,
    },
  ].filter(item => {
    /*case 0*/
    if(typeof item.auth === "boolean") {
      return item.auth === isAuth.value
    }
    return true;

    /*case 1*/
    // if ([undefined, isAuth.value].includes(item.auth)) {
    //   return true
    // }
    // if (item.auth === !isAuth.value) {
    //   return false
    // }

    /*case 2*/
    // if (item.auth === undefined) {
    //   return true
    // }
    // if (item.auth === isAuth.value) {
    //   return true
    // }
    // if (item.auth === !isAuth.value) {
    //   return false
    // }
  })
})



</script>

<style scoped>

</style>