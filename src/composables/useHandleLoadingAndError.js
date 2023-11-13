import {ref} from 'vue'

export const getData = (data) => {
  return data?.data || data
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
      const res = await (typeof callBack === "function" ? callBack() : callBack);
      data.value = mergeOptions.getData(res)
    } catch (e) {
      error.value = e
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