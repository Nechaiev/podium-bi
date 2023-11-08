<template>
  <div class="container mx-auto" v-show="!loading">
    <h1 class="text-title_1 mb-5">Posts list:</h1>
    <b v-if="loading">Loading...</b>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="post in postData" :key="post.id" class="p-5 border h-full">
        <div class="h-full flex flex-col justify-between">
          <router-link :to="'/posts/' + post.id" class="text-center flex-grow hover:text-primaryColor">
            <div class="h-full flex flex-col justify-between">
              <h3 class="text-lg font-bold mb-2">{{ post.title }}</h3>
              <span class="text-sm">{{ 'posts:' + post.id}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="next || prev" class="flex justify-center mt-4">
      <button v-if="prev" @click="fetchData(prev)" class="px-6 py-3 border bg-amber-300 mr-3">Prev</button>
      <button v-if="next" @click="fetchData(next)" class="px-6 py-3 border bg-amber-300">Next</button>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import apiRouter from '../servis/apiRouter';
import apiClient from '../servis/apiClient';
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";

const {loading, data: postData, handler} = useHandleLoadingAndError()
const posts = computed(()=> postData.value?.results || [])
const prev = computed(()=> postData.value?.info?.prev);
const next = computed(()=> postData.value?.info?.next);

const fetchData = async (url) => {
 const hand = await handler(() => ( url ? apiClient.get(url) : apiRouter.posts.index()));
  console.log(hand)
};

fetchData();
</script>