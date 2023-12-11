<template>
  <div class="container mx-auto px-4" v-show="!loading">
    <h1 class="text-title_1 mt-8 mb-12">Courses list:</h1>
    <b v-if="loading">Loading...</b>
    <form class="grid grid-cols-1  lg:grid-cols-3 gap-4 lg:gap-8 mb-10">
      <input @change="onSetSearch($event.target.value)" class="p-4 border mb-2 lg:mb-4  :placeholder-text-slate-500 min-h-[60px] w-full]" type="search" placeholder="Search">
      <select
        @change="onSetSort($event.target.value)"
        class="p-4 border mb-2 lg:mb-4 text-slate-500 min-h-[60px]  min-h-[60px] w-full"
      >
        <option value="description" selected>Order by description</option>
        <option value="id">Order by id</option>
        <option value="title">Order by title</option>
      </select>
      <input @change="onSetFilter('per_page', $event.target.value)" type="number" :value="filter.per_page" class="p-4 border  mb-2 lg:mb-4 text-slate-500 min-h-[60px]  min-h-[60px] w-full">
    </form>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="course in courses" :key="course.id" class="flex flex-col p-5 border">
        <img src="public/assets/img/courses.webp" class="mb-6" alt="courses">
        <h3 class="text-title_4 font-bold mb-4">{{ course.title }}</h3>
        <h5>{{course.description}}</h5>
        <h6>{{course.price}}</h6>
        <div class="flex justify-between mt-auto">
          <router-link :to="'/courses/' + course.slug" class="inline-flex items-center justify-center font-bold border shadow-xl rounded cursor-pointer min-h-[42px] bg-purple-500 text-white hover:bg-purple-700 rounded-none py-2 px-6">
            <b>See more</b>
          </router-link>


          <div class="text-title_4 text-slate-500">{{ '#' + course.id}}</div>
        </div>
      </div>
    </div>
    <div v-if="next || prev" class="flex justify-center my-24 gap-4">
      <BaseButton v-if="prev" @click="onSetFilter('cursor', prev)" color="success"   size="md">prev</BaseButton>
      <BaseButton v-if="next" @click="onSetFilter('cursor', next)"  color="success"   size="md">next</BaseButton>
    </div>

  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError'
import { useCoursesStore } from '@/stores/coursesStore.js';
import BaseButton from "@/components/ui/BaseButton.vue";

const coursesStore = useCoursesStore();
const {loading, handler} = useHandleLoadingAndError();
const filter = reactive({cursor: "",  per_page: 9});

const courses = computed(()=> coursesStore.coursesData?.data)
const prev = computed(()=> coursesStore.coursesData?.meta.prev_cursor);
const next = computed(()=> coursesStore.coursesData?.meta.next_cursor);

const fetchData = async () => {
  await handler(coursesStore.getCourses(filter))
};

const onSetFilter = ( key, value )=>{
  if(key !== "cursor" && filter.cursor) {
    filter.cursor = "";
  }
  filter[key] = value;
  fetchData()
}

const onSetSearch = async (query) => {
  console.log(query)
  filter.search = query;
  await fetchData();
}

const onSetSort = async (value) => {
  filter.order_by = 'asc';
  filter.sort_by = value;
  await fetchData();
}

fetchData();
</script>