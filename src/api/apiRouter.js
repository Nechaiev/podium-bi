import apiClient, {getCSRF} from "./apiClient"

const createApiRouter = (api = apiClient) => {
  return {
    episode: {
      index: (params)=> api.get("episode", {params}),
      show: (id)=> api.get(`episode/${id}`),
      create: (data)=> api.post("episode", data),
      update: (id, data)=> api.put(`episode/${id}`, data),
      delete: (id)=> api.delete(`episode/${id}`),
    },
    courses: {
      index: (params)=> api.get("courses", {params}),
      show: (id)=> api.get(`courses/${id}`),
    },
    auth: {
      login: async (data)=> {
        await getCSRF()
        /*після успішного виконання логіну, треба в локас-сторедж записати що юзер авторизований*/
        return await api.post("/login", data)
      },
      me: ()=> api.get("/me"), //запит, якщо залогинений
      logout: ()=> api.post("/logout"),
    },
    admin: {
      courses: {
        create: (data)=> api.post("/admin/courses", data),
        index: (params)=>api.get("/admin/courses", {params}),
        show: (courseId)=>api.get("/admin/courses/" + courseId),
        // search: (params)=>api.get("/admin/courses", {params}), order_by: id, order_by: price
        // sort: (params)=>api.get("/admin/courses", {params}),
      },
    },
    posts: {
      index: (params) => api.get("posts", {params}),
      show: (id) => api.get(`posts/${id}`),
    },
    comments: {
      index: (id, params) => api.get(`/posts/${id}/comments`, {params}),
      show: (id) => api.get(`comments/${id}`),
    },
    albums: {
      index: (params) => api.get("albums", {params}),
      show: (id) => api.get(`albums/${id}`),
      photos: {
        index: (id, params) => api.get(`/albums/${id}/photos`, {params}),
        show: (id) => api.get(`photos/${id}`),
      }
    },
    users: {
      index: (params) => api.get("users", {params}),
      show: (id) => api.get(`users/${id}`),
      todos: {
        index: (id, params) => api.get(`users/${id}/todos`, {params}),
        show: (id) => api.get(`todos/${id}`),
        create: (id, data) => api.post( `users/${id}/todos`, data),
        delete: (taskId) => api.delete(`todos/${taskId}`),
        update: (taskId, data) => api.put(`todos/${taskId}`, data),
      }
    },
  }
}

window.apiRouter = createApiRouter();
export default window.apiRouter;