<template>
  <component
      :is="data.tag"
      :target="target"
      :class="classes"
      :variant="variant"
      v-bind="data.attrs"
  >
  <slot></slot>
  </component>
</template>

<script setup>
import {computed} from "vue";
import {RouterLink} from "vue-router";

const props = defineProps({
  href: String,
  to: [Object, String],
  target: String,
  variant: {
    type: String,
    validator(value) {
      return ['header', 'secondary', 'footer'].includes(value)
    },
    default: 'header'
  }
})

const data = computed(() => {
  if (props.href) {
    return {
      tag: 'a',
      attrs: {
        href: props.href
      }
    }
  }
  return {
    tag: RouterLink,
    attrs: {
      to: props.to
    }
  }
})

const classes = computed(() => {
  return {
    header: 'text-title_5 inline-block p-5 leading-none hover:text-primaryColor',
    secondary: "text-title_3 hover:text-green-500",
    footer: 'text-title_5 hover:text-red-500 p-1'
  }[props.variant]
})
</script>

<style scoped>

</style>