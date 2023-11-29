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
import useAuthStore from '@/stores/authStore.js'
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";
import TemplateNav from "@/components/ui/TemplateNav.vue";

const authStore = useAuthStore();
const fullName = computed(()=> authStore.fullName)
const isAuth = computed(()=> authStore.isAuth)
const {handler, loading} = useHandleLoadingAndError()
const onLogout = ()=> {
  handler(authStore.logOut)
}

const nav = [
  {
    text: 'Home',
    to: {name: 'home'},
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
    to: {name: 'courses'}
  },
]
</script>

<style scoped>

</style>