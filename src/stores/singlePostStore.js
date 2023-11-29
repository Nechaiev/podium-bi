import {defineStore} from "pinia";
import {ref} from "vue";
import { useRoute } from 'vue-router';
import apiRouter from '../api/apiRouter';
// import apiClient from '../api/apiClient';
import { getData } from "../composables/useHandleLoadingAndError";



// export const usePostsStore = defineStore('postsStore', () => {
//   const postData = ref(null)

//   const getPosts = async (url)=>  {
//     if(!postData.value) {
//       const res = await ( url ? apiClient.get(url) : apiRouter.posts.index())
//       postData.value = getData(res)
//     }
//   }


//   return { getPosts, postData }
// })
export const useSinglePostStore = defineStore('singlePostStore', () => {
  const singlePostData = ref(null)
  const route = useRoute();
  const post = ref({ post: [] });  

  const getPost = async () => {
    if(!singlePostData.value) {
      const response = await apiRouter.posts.show(route.params.id) //apiClient.get(`episode/${route.params.id}`);
      post.value = getData(response)
    }
  }
  return getPost
})

 