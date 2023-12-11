<template>
  <div class="container mx-auto my-5">
    <!-- CREAT COMPONENT LOADING & ERROR-->
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">
      {{error}}
    </div>
    <!-- CREAT COMPONENT LOADING & ERROR -->
    <div v-else class=" p-5 border mb-5">
      <form-course-update
        :course-id="course.id"
        :source="course"
        @success="singleCoursesStore.updateCourse"
      ></form-course-update>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError';
import { useSingleCoursesStore } from '@/stores/singleCoursesStore';
import FormCourseUpdate from "@/components/wigets/forms/FormCourseUpdate.vue";


const singleCoursesStore = useSingleCoursesStore();
const route = useRoute();
const {handler, loading, error} = useHandleLoadingAndError({loading: true});

const course = computed(()=>{
  return singleCoursesStore.course
})
console.log(course)
onMounted (()=> handler(singleCoursesStore.fetchCourse(route.params.id)))
</script>

<style>
</style>