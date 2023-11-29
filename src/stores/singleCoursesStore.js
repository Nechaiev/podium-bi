import {defineStore} from "pinia";
import {ref} from "vue";
import { useRoute } from 'vue-router';
import { getData } from "@/composables/useHandleLoadingAndError";
import apiRouter from '@/servis/apiRouter';
import apiClient from "@/servis/apiClient";

export const useSingleCoursesStore = defineStore('singleCoursesStore', () => {
  const singleCoursesData = ref(null)
  const route = useRoute();
  const  courses = ref({  courses: [] });

  const getCourses = async (url) => {
    if(!singleCoursesData.value) {
      // const response = await apiRouter.admin.courses.show(route.params.id)
      const response =  await ( url ? apiClient.get(url) : apiRouter.admin.courses.show(route.params.id))
      courses.value = getData(response)
    }
  }

  return getCourses
})