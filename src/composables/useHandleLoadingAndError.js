import {ref} from 'vue'
import MessagesError from '@/globals/MessagesError.js'
const getMessageErrorByResponse = (error) => {
  const status = error?.response?.status || error?.statusCode;
  if (status === 401) {
    return MessagesError.unauthenticated;
  }
  let message =
    error?.response?.data?.message ||
    error?.response?.message ||
    error?.statusMessage ||
    error?.message;

  if (MessagesError[message]) {
    message = MessagesError[message];
  }
  return message || MessagesError.somethingWentWrong;
};

export const getData = (res) => {
  return res?.data?.data || res?.data || res
}

const defaulOptions = {
  loading: false,
  initData: {},
  getData
}

const useHandleLoadingAndError = (options = defaulOptions) => {
  const mergeOptions = {...defaulOptions, ...options};
  const loading = ref(mergeOptions.loading);
  const data = ref(mergeOptions.initData);
  const error = ref(null);

  const handler = async (callBack = () => Promise.resolve()) => { // callback = function || promise
    try {
      loading.value = true;
      error.value = null;
      const res = await (typeof callBack === "function" ? callBack() : callBack);
      data.value = mergeOptions.getData(res)
    } catch (e) {
      error.value = getMessageErrorByResponse(e)
    } finally {
      loading.value = false;
    }
    return {
      error: error.value,
      data: data.value
    }
  }
  return {loading, data, error, handler, getData}
}

export default useHandleLoadingAndError