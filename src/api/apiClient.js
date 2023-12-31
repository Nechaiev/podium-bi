import axios from 'axios'
import { getCookie } from '@/utils'
import useAuthStore from '@/stores/authStore'

export const apiURL = 'https://s.staging.yourcourses.kalyna.dev'

const apiClient = axios.create({
  baseURL: apiURL + '/api/v1',
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
})

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      console.log('Не авторизований')
      useAuthStore().reset()
    }
    console.log('apiClient.interceptors >>>', error)
    return Promise.reject(error)
  }
)

apiClient.interceptors.request.use((config) => {
  config.headers['X-XSRF-TOKEN'] = decodeURIComponent(getCookie('XSRF-TOKEN'))
  return config
})

export const getCSRF = () => apiClient.get(apiURL + '/sanctum/csrf-cookie')
// const apiClient2 = axios.create({
//     baseURL: "https://s.staging.yourcourses.kalyna.dev/api/v1/",
//     headers: {
//         Accept: "application/json",
//     },

// })

// console.log(apiClient2.get('courses'));

window.apiClient = apiClient
export default apiClient
