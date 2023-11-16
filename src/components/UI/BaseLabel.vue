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