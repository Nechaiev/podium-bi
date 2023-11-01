<template>
  <div>
    <h2>Authorization</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="User name" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useAuthStore} from "@/stores/store.js";

const authStore = useAuthStore();

const username = ref('');
const password = ref('');

const handleLogin = () => {
  authStore.login(username.value, password.value);
};
</script>
