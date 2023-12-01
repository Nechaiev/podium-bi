import {defineStore} from "pinia";
import {ref} from "vue";
import apiRouter from '@/api/apiRouter';
import { getData } from "@/composables/useHandleLoadingAndError";

export const useCoursesStore = defineStore('coursesStore', () => {
    const coursesData = ref(null)

    const getCourses = async (params)=>  {
        const res = await apiRouter.admin.courses.index(params)
        coursesData.value = getData(res)
    }

    return { getCourses, coursesData }
})