import { computed } from 'vue'

const useGetFieldError = (errors) => {
  const hasError = computed(() => {
    return !!errors.value?.length
  })

  const errorText = computed(() => {
    if (Array.isArray(errors.value)) {
      return errors.value[0]
    }
    return errors.value
  })
  return { hasError, errorText }
}

export { useGetFieldError }