import { ref } from 'vue'
import MessagesError from '@/globals/MessagesError.js'
const getMessageErrorByResponse = (error) => {
  const status = error?.response?.status || error?.statusCode
  if (status === 401) {
    return MessagesError.unauthenticated
  }
  let message =
    error?.response?.data?.message ||
    error?.response?.message ||
    error?.statusMessage ||
    error?.message

  if (MessagesError[message]) {
    message = MessagesError[message]
  }
  return message || MessagesError.somethingWentWrong
}

/*
const a = {
  data: {
    data: {},
  },
}

const b = {
  data: {
    data: [],
    meta: [],
  }
}

const c = {
  data: {
    id: 1,
  }
}

const d = {
  id: 1,
}

getData(a) === {};                       // data?.data
getData(b) === { data: [], meta: [], };  // data
getData(c) === { id: 1, };               // data
getData(d) === { id: 1, };               // res
*/

export const getData = (res) => {
  const data = res?.data

  if (data && Object.keys(data).length !== 1) {
    /**/
    return data
  }

  return data?.data || data || res
}

const defaultOptions = {
  loading: false,
  initData: {},
  getData
}

const useHandleLoadingAndError = (options = defaultOptions) => {
  const mergeOptions = { ...defaultOptions, ...options }
  const loading = ref(mergeOptions.loading)
  const data = ref(mergeOptions.initData)
  const error = ref(null)

  const handler = async (callBack = () => Promise.resolve()) => {
    // callback = function || promise
    try {
      loading.value = true
      error.value = null
      const res = await (typeof callBack === 'function' ? callBack() : callBack)
      data.value = mergeOptions.getData(res)
    } catch (e) {
      error.value = getMessageErrorByResponse(e)
    } finally {
      loading.value = false
    }
    return {
      error: error.value,
      data: data.value
    }
  }
  return { loading, data, error, handler, getData }
}

export default useHandleLoadingAndError
