import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getData } from '@/composables/useHandleLoadingAndError'
import apiRouter from '@/api/apiRouter'

export const useSingleCoursesStore = defineStore('singleCoursesStore', () => {
  const course = ref(null)

  const fetchCourse = async (id) => {
    const res = await apiRouter.admin.courses.show(id)
    course.value = getData(res)
    return course.value
  }

  const updateCourse = (data) => {
    course.value = data
  }

  return {
    course,
    fetchCourse,
    updateCourse
  }
})
