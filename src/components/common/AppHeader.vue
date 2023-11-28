<template>
  <header class=" bg-black text-white">
    <div class="flex w-full max-w-[1464px] mx-auto px-3 py-6 pr-[60px]">
      <app-logo class="mr-[-57px]"></app-logo>
      <base-nav :items="nav" variant="header"></base-nav>
      <div class="grid justify-center items-center">
        <button @click="authStore.onLogout" v-if="authStore.isAuth" class="whitespace-nowrap  hover:text-primaryColor">
          LogOut
        </button>
        <template v-else>
          <login-modal/>
          <registration-modal/>
        </template>
        {{authStore.usersName}}
      </div>
    </div>

    <!--  <header class=" bg-black text-white">-->
    <!--    <div class="flex w-full max-w-[1464px] mx-auto px-3 py-6 pr-[60px]">-->
    <!--&lt;!&ndash;      <router-link to="/login" v-if="!isAuthenticated">Login</router-link>&ndash;&gt;-->
    <!--&lt;!&ndash;      <button @click="handleLogout" v-else>Logout</button>&ndash;&gt;-->
    <!--      <app-logo class="mr-[-57px]"/>-->
    <!--      <base-nav :items="nav" variant="header"/>-->
    <!--      <div class="grid justify-center items-center">-->
    <!--        <button @click="authStore.onLogout" v-if="authStore.isAuth" class="whitespace-nowrap  hover:text-primaryColor">LogOut</button>-->
    <!--        <template v-else>-->
    <!--          <login-modal/>-->
    <!--          <registration-modal/>-->
    <!--        </template>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <ul class="flex flex-wrap gap-3 justify-center px-8 mx-auto">-->
    <!--      <li>-->
    <!--        <base-link :to="{name: 'home'}">-->
    <!--          home-->
    <!--        </base-link>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <base-link :to="{name: 'podiumBiPortal'}">-->
    <!--          podiumBiPortal-->
    <!--        </base-link>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <base-link :to="{name: 'walmartRetailData'}">-->
    <!--          walmartRetailData-->
    <!--        </base-link>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <base-link :to="{name: 'contact'}">-->
    <!--          contact-->
    <!--        </base-link>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <base-link :to="{name: 'blog'}">-->
    <!--          blog-->
    <!--        </base-link>-->
    <!--      </li>-->
    <!--    </ul>-->
  </header>
</template>

<script setup>
import AppLogo from "@/components/UI/AppLogo.vue";
import BaseLink from "@/components/UI/BaseLink.vue";
import BaseNav from "@/components/UI/BaseNav.vue";
import {computed, inject, ref} from "vue";
// import {useAuthStore} from "@/stores/store.js";
import RegistrationModal from "@/components/UI/RegistrationModal.vue";
import RegistrationForm from "@/components/UI/RegistrationForm.vue";
import LoginModal from "@/components/UI/LoginModal.vue";
import useAuthStore from '@/stores/authStore.js'
// const isAuthenticated = computed(() => useAuthStore().isAuthenticated);

const authStore = useAuthStore();
const handleLogout = () => {
  useAuthStore().logout();
};

const nav = [
  {
    text: 'Home',
    to: {name: 'home'},
    children: [
      {
        name: 'Nested nav',
        href: 'https://google.com',
      }
    ]
  },
  {
    text: 'PodiumBiPortal',
    to: {name: 'podiumBiPortal'}
  },
  {
    text: 'WalmartRetailData',
    to: {name: 'walmartRetailData'}
  },
  {
    text: 'Contact',
    to: {name: 'contact'}
  },
  {
    text: 'Blog',
    to: {name: 'blog'}
  },
  {
    text: 'EpisodesViewPosts',
    to: {name: 'EpisodesViewPosts'}
  },
  {
    text: 'ToDoList',
    to: {name: 'ToDoList'}
  },
]
</script>

<style scoped>

</style>