<template>
  <ul :class="classes">
    <template-nav-item v-for="(item, index) in items" v-bind="item" :key="index" :variant="variant">
      <template #link-text="data">
        <slot name="link-text" v-bind="data"/>
      </template>
    </template-nav-item>
  </ul>
</template>

<script setup>
import TemplateNavItem from "@/components/ui/TemplateNavItem.vue";
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

<style scoped>

ul li {
  position: relative;
}

ul li ul {
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 24px;
  min-width: 250px;
  background: blueviolet;
  padding: 12px;
}

</style>