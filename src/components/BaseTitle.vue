
<template>
  <div class="text-center mb-[60px]">
    <h1 :class="classes">{{ title }}</h1>
    <h3 class="text-title_2">{{ subtitle }}</h3>
  </div>
</template>

<script setup>
import {computed} from 'vue';


const props = defineProps({
  title: String,
  subtitle: String,
  titleSize: {
    type: String,
    validator(value) {
      return ['default', 'large'].includes(value)
    },
    default: 'default',
  }
   
})

const classes = computed(()=>{
  return {
    default: 'text-title_1 mb-[10px]',
    large: 'text-[128px] leading-[147.19px] mb-[10px]',
  }[props.titleSize]
})
</script>
