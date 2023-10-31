<template>
  <ul :class="classes">
    <base-nav-item v-for="(item, index) in items" v-bind="item" :key="index" :variant="variant">
      <template #link-text="data">
        <slot name="link-text" v-bind="data"/>
      </template>
    </base-nav-item>
  </ul>
</template>

<script setup>
import BaseNavItem from "@/components/UI/BaseNavItem.vue";
import {computed} from "vue";

const props = defineProps({
  items: Array,
  horizontal: Boolean,
  variant: {
    type: String,
    validator(value) {
      return ['header', 'footer', 'testNav'].includes(value)
    },
    default: 'header'
  }
})

const classes = computed(() => {
  if(props.variant === "footer") {
    return 'flex-col'
  }
  if(props.variant === "testNav") {
    return 'mb-12'
  }
  return 'mx-auto flex w-full justify-center'
})
</script>