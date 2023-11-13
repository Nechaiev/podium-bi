<template>
  <div :class="loadingStyle">
    Loading...
  </div>
</template>
<script setup>
import {computed} from 'vue';
const props = defineProps({
  text: String,
  loadingStyle: {
    type: String,
    validator(value) {
      return ['text', 'animation'].includes(value)
    },
    default: 'text',
  }
})

const loadingStyle = computed(() => {
  return {
    text: 'text222',
    animation: 'animate-bounce',
  } [props.loadingStyle]
})

</script>