import {defineStore} from "pinia";
import {ref} from "vue";
import apiRouter from '@/api/apiRouter';
import {getData} from "@/composables/useHandleLoadingAndError";

export const useCoursesStore = defineStore('coursesStore', () => {
  const coursesData = ref(null)

  const getCourses = async (params) => {
    const res = await apiRouter.admin.courses.index(params)
    coursesData.value = getData(res)
  }

  const getSearchCourses = async (searchQuery, params) => {
    const res = await apiRouter.admin.courses.search({...params, search: searchQuery})
    coursesData.value = getData(res)
  }

  const getSortCourses = async (sortQuery, params) => {
    console.log(sortQuery, params)
    const res = await apiRouter.admin.items.sort({
      order_by: sortQuery,
      sort_by: params,
    });
    coursesData.value = getData(res);
  };

  /*const getSortCourses = async (sortQuery, params) => {
      const res = await apiRouter.admin.items.sort({ ...params, sort: sortQuery })
      coursesData.value = getData(res)
  }*/

  return {getCourses, getSearchCourses, getSortCourses, coursesData}
})