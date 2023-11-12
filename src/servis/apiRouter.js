import apiClient from "./apiClient"

const createApiRouter = (api = apiClient) => {
  return {
    // episode: {
    //   index: (params)=> api.get("episode", {params}),
    //   show: (id)=> api.get(`episode/${id}`),
    //   // create: (data)=> api.post("episode", data),
    //   // update: (id, data)=> api.put(`episode/${id}`, data),
    //   // delete: (id)=> api.delete(`episode/${id}`),
    // },
    // courses: {
    //   index: (params)=> api.get("courses", {params}),
    //   show: (id)=> api.get(`courses/${id}`),
    // },
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
        delete: (id, taskId) =>  api.post(`/users/${id}/todos/${taskId}`),
        update: (id, taskId) =>  api.post(`/users/${id}/todos/${taskId}`),
      }
    },

  }
}

export default createApiRouter();
/* controller */