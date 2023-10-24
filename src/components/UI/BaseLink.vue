<template>
  <component :is="data.teg" :target="target" v-bind="data.attrs" :class="classes">
    <slot/>
  </component>
</template>

<script setup>
import {computed} from "vue";
import {RouterLink} from "vue-router";

const props = defineProps({
  href: String,
  to: [Object, String],
  target: String,
  color: {
    type: String,
    validator(value) {
      return ['base', 'secondary'].includes(value)
    },
    default: 'base'
  }
})

const data = computed(() => {
  if (props.href) {
    return {
      teg: 'a',
      attrs: {
        href: props.href
      }
    }
  }
  return {
    teg: RouterLink,
    attrs: {
      to: props.to
    }
  }
})

const classes = computed(() => {
  return {
    base: 'hover:text-teal-600',
    secondary: '',
  }[props.color]
})
</script>

<style scoped>

</style>