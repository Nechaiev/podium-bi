<template>
  <div class="container mx-auto" v-show="!loading">
    <h1 class="text-title_1 mb-5">Courses list:</h1>
    <b v-if="loading">Loading...</b>
    <ul class=" grid grid-cols-3 gap-8">
      <li v-for="course in courses" :key="course.id" class="p-5 border">
        {{ course.title }}
        <router-link :to="'/courses/' + course.id" class="flex items-center justify-center font-bold border shadow-xl rounded cursor-pointer min-h-[42px] bg-primaryAccent border-primaryColor text-textColor hover:text-white hover:bg-primaryColor">
          <b> {{ 'courses:' + course.id}}</b>
        </router-link>
      </li>
    </ul>
    <div v-if="next || prev">
      <button v-if="prev" @click="onSetFilter('cursor', prev)" class="px-6 py-3 border bg-amber-300">prev</button>
      <button v-if="next" @click="onSetFilter('cursor', next)" class="px-6 py-3 border bg-amber-300">next</button>
    </div>
    <input @change="onSetFilter('per_page', $event.target.value)" type="number" :value="filter.per_page">
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError'
import { useCoursesStore } from '@/stores/coursesStore.js';

const coursesStore = useCoursesStore();
const {loading, handler} = useHandleLoadingAndError();
const filter = reactive({cursor: "",  per_page: 2});


const courses = computed(()=> coursesStore.coursesData?.data)
const prev = computed(()=> coursesStore.coursesData?.meta.prev_cursor);
const next = computed(()=> coursesStore.coursesData?.meta.next_cursor);

const fetchData = async () => {
  await handler(coursesStore.getCourses(filter))
  console.log(coursesStore.coursesData)
};

const onSetFilter =( key, value )=>{
  if(key !== "cursor" && filter.cursor) {
    filter.cursor = "";
  }
  filter[key] = value;
  fetchData()
}

/*const fetchData = async (params = {}) => {
  await handler(coursesStore.getCourses({
    ...params,
    per_page: 2,
  }))
  console.log(coursesStore.coursesData)
};*/

fetchData();
</script>