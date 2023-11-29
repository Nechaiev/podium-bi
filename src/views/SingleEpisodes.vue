<template>
  <div class="container mx-auto my-5">
    <div v-if="loading">
      Loading...
    </div>
    <div  v-else class=" p-5 border mb-5">
      <h1 class="text-title_1 italic">Single post {{ post.id }}</h1>
      <h2 class="text-title_4 ">{{ post.title }}</h2>
      <h3 class="text-title_4 ">{{ post.userId }}</h3>
      <div>
        {{ post.body }}
      </div>
     
      <div class="border p-10">
      <h3 class="text-title_4">coments:</h3>
      <!-- {{ commentData }} -->
      <ul class="grid gap-7">
        <li v-for="comment in commentData" :key="comment.id" class="p-5 border">
          <div class="grid" >
            <div>
              {{ comment.email }}
            </div>
            <div>
              {{ comment.body }}
            </div>
          </div>
        </li>
      </ul>  
      </div>
        <pre>route.params >>>> {{$route.params}}</pre>
    </div>
</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import apiRouter from '@/api/apiRouter'
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError'
import { useSinglePostStore } from '@/stores/singlePostStore';

const postStore = useSinglePostStore();
const route = useRoute();
const {loading, handler} = useHandleLoadingAndError();
 
const post = ref({ post: [] });  
const commentData = ref({ results: [], info: {} });  

const fetchPost = async (url) => {
    const response = await apiRouter.posts.show(route.params.id) //apiClient.get(`episode/${route.params.id}`);
    post.value = response.data;

    handler(postStore.getPosts(url))
}

const fetchComment = async () => {
    const responseComents = await apiRouter.comments.index(route.params.id)  
    commentData.value = responseComents.data;
}

const fetchData = async () => {
  await handler(()=> Promise.all([fetchPost(), fetchComment()]))
};

console.log(loading);
watch(()=> route.params.id, fetchData, { immediate: true })

</script>
