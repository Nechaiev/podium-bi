<template>
  <ul :vertical="vertical" :class="direction">
    <advantage-item v-for="(item, index) in items" v-bind="item" :key="index" :iconPosition="'right'">
      <template #icon>
        <icon-check />
      </template>
      <template #advantage></template>
    </advantage-item>
  </ul>
</template>

<script setup>
import {computed} from 'vue';
import IconCheck from "@/components/UI/icons/IconCheck.vue";
import AdvantageItem from "@/components/AdvantageItem.vue";

const props = defineProps({
  items: Array,
  vertical: Boolean,
  classes: String,
})

const direction = computed(() => {
  if (props.vertical === true) {
    return 'grid gap-3 w-fit mx-auto';
  }
  return 'flex justify-center mx-auto '
})
</script>
