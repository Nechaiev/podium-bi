import {defineStore} from "pinia"
import {ref, computed} from "vue";
import apiRouter from "@/api/apiRouter.js";
import {getData} from "@/composables/useHandleLoadingAndError";

const useAuthStore = defineStore('appAuth', () => {   //'appAuth' unique id. Can't be the same
  const isAuth = ref(false)
  const user = ref({});

  const fullName = computed(()=>{
     return user.value.first_name + " " + user.value.last_name
  })
    const reset = ()=>{
      isAuth.value = false;
      user.value = {};
    }
    const logIn = async (data)=>{
      const res = await apiRouter.auth.login(data)
      isAuth.value = true
      user.value = getData(res)

      return res
    }

    const fetchUser = async () => {
       if(isAuth.value) {
         const res = await apiRouter.auth.me();
         user.value = getData(res);
       }
    }

    const logOut = async () => {
      if(isAuth.value) {
        await apiRouter.auth.logout()
        reset()
      }
    }

    return {
      isAuth,
      user,
      fullName,
      reset,
      logIn,
      fetchUser,
      logOut
    }

}, {
  persist: {
    paths: ['isAuth'],
  },
})

export default useAuthStore;