import {defineStore} from "pinia"
import {ref} from "vue";
import {getData} from "@/composables/useHandleLoadingAndError";
import apiRouter from "@/api/apiRouter.js";

const useUpdateStore = defineStore('appUpdate', () => {
    const course = ref({});

    const update = async (key, value)=>{
        const res = await apiRouter.admin.thumbnail.create(key, value)
        course.value = getData(res)
        return res
    }

    return {
        course,
        update,
    }
})

export default useUpdateStore;