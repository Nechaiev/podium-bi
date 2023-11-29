<template>
  <div class="container mx-auto my-5">
    <div v-if="loading">
      Loading...
    </div>
    <div  v-else class=" p-5 border mb-5">
      <h1 class="text-title_1 italic">Single course {{ courses.id }}</h1>
      <h2 class="text-title_4 ">{{ courses.title }}</h2>
      <img :src="courses.thumbnail" :alt="courses.title">
      <pre>route.params {{$route.params}}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import apiRouter from '@/api/apiRouter'
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError'
import { useSingleCoursesStore } from '@/stores/singleCoursesStore';

const singleCoursesStore = useSingleCoursesStore();
const route = useRoute();
const {loading, handler} = useHandleLoadingAndError();
const courses = ref({ courses: [] });
const fetchCourses = async (url) => {
  const response = await apiRouter.admin.courses.show(route.params.id)
  courses.value = response.data.data;

  handler(singleCoursesStore.getCourses(url))

}

const fetchData = async () => {
  await handler(()=> Promise.all([fetchCourses()]))
};

watch(()=> route.params.id, fetchData, { immediate: true })

</script>
