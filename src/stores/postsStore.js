import {defineStore} from "pinia";
import {ref} from "vue";
import apiRouter from '../api/apiRouter';
import apiClient from '../api/apiClient';
import { getData } from "../composables/useHandleLoadingAndError";

export const usePostsStore = defineStore('postsStore', () => {
  const postData = ref(null)

  const getPosts = async (url)=>  {
    if(!postData.value) {
      const res = await ( url ? apiClient.get(url) : apiRouter.posts.index())
      postData.value = getData(res)
    }
  }



  return { getPosts, postData }
})