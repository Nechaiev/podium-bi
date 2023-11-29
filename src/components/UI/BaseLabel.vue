<template>
    <label
        :class="labelPosition"
        :for="labelForInput" 
        >
        {{ label }}
    </label>
</template>
<script setup>
 defineProps({
  label: String,
  labelPosition: String,
});
</script>

<!-- class="left-5 top-0 origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor bg-bgBody" -->