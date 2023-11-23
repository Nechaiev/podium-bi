<template>
  <label
    :class="labelPosition"
    :for="labelForInput"
  >
    {{ labelForInput }}
  </label>
</template>

<script setup>
defineProps({
  labelForInput: String,
  labelPosition: String,
});
</script>