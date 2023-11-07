<template>
  <div class="container mx-auto">
    <h1 class="text-title_1 mb-5">Single post</h1>


    <ul class=" grid grid-cols-5 gap-6">
      <li v-for="post in posts" :key="post" class=" p-5 border bg-black">
        <router-link :to="'/posts/' + post"
                     class="flex flex-col text-center h-full text-white hover:text-primaryColor">
          <div><strong>ID:</strong> {{ posts.id }}</div>
          <div><strong>Назва:</strong> {{ posts.title }}</div>
          <div><strong>Опис:</strong> {{ posts.body }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';
// import apiClient from '../api/apiClient.js'
import apiRouter from '../servis/apiRouter'

console.log('script setup');
const route = useRoute();

const loading = ref(false);
const posts = ref({post: []});

const fetchData = async () => {
  try {
    loading.value = true;
    const response = await apiRouter.posts.show(route.params.id) //apiClient.get(`episode/${route.params.id}`);
    posts.value = response.data;
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log('finally');
    loading.value = false;
  }
};
console.log(route.params.id);
watch(() => route.params.id, fetchData, {immediate: true})

</script>