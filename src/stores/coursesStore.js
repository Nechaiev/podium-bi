import {defineStore} from "pinia";
import {ref} from "vue";
import apiRouter from '@/api/apiRouter';
import apiClient from '@/api/apiClient';
import { getData } from "@/composables/useHandleLoadingAndError";

export const useCoursesStore = defineStore('coursesStore', () => {
    const coursesData = ref(null)

    const getCourses = async (url)=>  {
        if(!coursesData.value) {
            const res = await ( url ? apiClient.get(url) : apiRouter.admin.courses.index())
            coursesData.value = getData(res)
        }
    }

    return { getCourses, coursesData }
})