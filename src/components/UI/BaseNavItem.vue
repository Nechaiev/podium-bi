<template>
  <li :class="classes">
    <base-link
      :href="href"
      :to="to"
      :target="target"
      v-bind="$attrs"
      :variant="variant"
    >
      {{icon}}
      <slot name="link-text">
        {{text}}
      </slot>
    </base-link>
    <base-nav v-if="children" :items="children"/>
  </li>
</template>

<script setup>
import {computed, defineAsyncComponent} from "vue";
import BaseLink from "@/components/UI/BaseLink.vue";

const BaseNav = defineAsyncComponent(() => import("@/components/UI/BaseNav.vue"))

defineOptions({
  inheritAttrs: false, // запретить любой v-bind с родительского компонента в тег обёртку <li>  для того что бы всё передавалось в тег <a>
})

const props = defineProps({
  text: String,
  href: String,

  to: [Object, String],
  target: String,
  icon: String,
  children: Array,
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
    return 'mb-[6px]'
  }
  if(props.variant === "testNav") {
    return 'mb-2'
  }
  return ''
})
</script>