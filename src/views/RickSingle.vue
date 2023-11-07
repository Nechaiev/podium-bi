<template>
  <div v-if="loading">
    loading...
  </div>
  <div v-else class="container mx-auto">
    <h1 class="text-3xl text-blue-700 italic p-5 border mb-5">Single post {{ post.id }}</h1>
    <h2 class="text-2xl text-gray-800 font-bold mb-3">{{ post.title }}</h2>
    <h3 class="text-lg text-gray-600 mb-5">{{ post.userId }}</h3>
    <div class="p-5 border bg-white text-gray-800">{{ post.body }}</div>
    <div class="comments mt-5">
      <h4 class="text-2xl text-gray-800 font-bold mb-3">Comments:</h4>
      <!-- {{ commentData }} -->
    </div>
    <ul class="grid gap-7">
      <li v-for="comment in commentData" :key="comment.id" class="p-5 border bg-white">
        <span class="text-gray-800">
          {{ comment.name }}
        </span>
      </li>
    </ul>

    <pre class="text-sm text-gray-600">route.params >>>> {{$route.params}}</pre>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// import apiClient from '../api/apiClient.js'
import apiRouter from '../servis/apiRouter'
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";

const route = useRoute();
const {loading, handler} = useHandleLoadingAndError()

const post = ref({});
const commentData = ref([]);

const fetchPost = async () => {
  const response = await apiRouter.posts.show(route.params.id) //apiClient.get(`episode/${route.params.id}`);
  post.value = response.data;
};

const fetchComment = async  () => {
  const responseComments = await apiRouter.comments.index(route.params.id)
  commentData.value = responseComments.data;
}
const fetchData = async () => {
 await handler(() => Promise.all([fetchComment(), fetchPost()]))
};
watch(()=> route.params.id, fetchData, { immediate: true })

</script>