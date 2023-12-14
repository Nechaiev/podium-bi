import { defineStore } from 'pinia'
import { reactive } from 'vue'
import apiRouter from '@/api/apiRouter'
import { getData } from '@/composables/useHandleLoadingAndError'

const useCashStore = defineStore('cashStore', () => {
  const cashData = reactive({
    selects: {}
  })
  const getSelects = async (params) => {
    const res = await apiRouter.admin.getSelects(params)
    cashData.selects = getData(res)
  }

  return { cashData, getSelects }
})
export default useCashStore
