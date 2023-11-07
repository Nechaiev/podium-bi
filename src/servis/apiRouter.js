import apiClient from "./apiClient"

const createApiRouter = (api = apiClient)=> {
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
      index: (params)=> api.get("posts", {params}),
      show: (id)=> api.get(`posts/${id}`),
    },
    comments: {
      index: (params)=> api.get("comments", {params}),
      show: (id)=> api.get(`comments/${id}`),
    },
    albums: {
      index: (params)=> api.get("comments", {params}),
      show: (id)=> api.get(`comments/${id}`),
    }
  }
}

export default createApiRouter();
/* controller */