<template>
  <div class="container mx-auto" v-show="!loading">
     <h1 class="text-title_1 mb-5">Courses list:</h1>
      <b v-if="loading">Loading...</b>
    <ul class=" grid grid-cols-5 gap-6">
      <li v-for="cours in coursesData" :key="cours.id" class="p-5 border">
        {{ cours.title }}
        <router-link :to="'/courses/' + cours.id" class="flex flex-col h-full hover:text-primaryColor">
          <b> {{ 'courses:' + cours.id}}</b>
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
import { useCoursesStore } from '@/stores/coursesStore.js';

const coursesStore = useCoursesStore();
const {loading, handler} = useHandleLoadingAndError();
const coursesData = computed(()=> coursesStore.coursesData)
const prev = computed(()=> coursesData.value?.info?.prev);
const next = computed(()=> coursesData.value?.info?.next);

const fetchData = (url) => {
  handler(coursesStore.getCourses(url))
};

fetchData();
</script>