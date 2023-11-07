<template>
<app-layout>
    <router-view/>
</app-layout>
</template>

<script setup>
import AppLayout from "./layouts/AppLayout.vue";
import useAuthStore from '@/stores/authStore';

import {onMounted} from 'vue'
const authStore = useAuthStore();

onMounted(()=>{
  window.addEventListener("storage", (event) => {
    if(event.key === "appAuth") {
      const data = JSON.parse(event.newValue)
      authStore.setAuth(data.isAuth)
    }
  });
})
</script>