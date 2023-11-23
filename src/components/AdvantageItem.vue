<template>
  <li :class="iconPosition">
    <i :class="iconMargin">
      <slot name="icon"></slot>
    </i>
    <slot name="advantage">
      {{text}}
    </slot>
  </li>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  text: String,
  iconPosition: {
    type: String,
    validator(value) {
      return ['left', 'right'].includes(value)
    },
    default: 'left',
  }
})

const iconPosition = computed(() => {
  return {
    left: 'flex items-center mx-[50px]',
    right: 'flex items-center mx-[50px] flex-row-reverse',
  } [props.iconPosition]
})

const iconMargin = computed(() => {
  if (props.iconPosition === 'right') {
    return 'inline-flex justify-center items-center w-5 h-5 text-black rounded-full ml-[10px]';
  }
  return 'inline-flex justify-center items-center w-5 h-5 text-black rounded-full mr-[10px]';
});
</script>


<style scoped>
i {
  background: linear-gradient(135deg, #0CC6B3 0%, #1CADCD 100%);
}
</style>