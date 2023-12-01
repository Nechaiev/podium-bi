import {defineStore} from "pinia"
import apiRouter from "@/api/apiRouter.js";
import {getData} from "@/composables/useHandleLoadingAndError";
import {ref} from "vue";

const useCreatCoursesStore = defineStore('creatCoursesStore', () => {   //'appAuth' unique id. Can't be the same
  const creatCoursesData = ref(null)
  const creatCourses = async (data)=> {
    console.log('store: ', data)
    const res = await apiRouter.admin.courses.create(data)
    creatCoursesData.value = getData(res)
  }

  return {
    creatCourses,
  }
})

export default useCreatCoursesStore;