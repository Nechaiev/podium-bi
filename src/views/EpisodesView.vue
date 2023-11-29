<template>
  <div class="container mx-auto" v-show="!loading">
    <h1 class="text-title_1 mb-5">Posts list:</h1>
    <b v-if="loading">Loading...</b>
    <ul class=" grid grid-cols-5 gap-6">
      <li v-for="post in postsData" :key="post.id" class="p-5 border">
        {{ post.title }}
        <router-link :to="'/posts/' + post.id" class="flex flex-col h-full hover:text-primaryColor">
          <b> {{ 'posts:' + post.id}}</b>
        </router-link>
      </li>
    </ul>
    <div v-if="next || prev">
      <button v-if="prev" @click="fetchData(prev)" class="px-6 py-3 border bg-amber-300">prev</button>
      <button v-if="next" @click="fetchData(next)" class="px-6 py-3 border bg-amber-300">next</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError'
import { usePostsStore } from '@/stores/postsStore';

const postsStore = usePostsStore();

console.log(postsStore);

const {loading, handler} = useHandleLoadingAndError();
const postsData = computed(()=> postsStore.postData)
const prev = computed(()=> postsData.value?.info?.prev);
const next = computed(()=> postsData.value?.info?.next);

const fetchData = (url) => {
  handler(postsStore.getPosts(url))          // Promis
  // handler(()=> postsStore.getPosts(url))  // function
  // handler(postsStore.getPosts)            // function
};

fetchData();
</script>