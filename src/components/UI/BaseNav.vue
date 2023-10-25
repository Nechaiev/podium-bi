<template>
  <ul class="mx-auto">
    <base-nav-item v-for="item in items" v-bind="item">
      <template #link-text="data">
        <slot name="link-text" v-bind="data"/>
      </template>
    </base-nav-item>
  </ul>
</template>

<script setup>
import BaseNavItem from "@/components/UI/BaseNavItem.vue";

defineProps({
  items: Array,
  horizontal: Boolean,
})
</script>