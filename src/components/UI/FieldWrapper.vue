<template>
  <div :class="wrapperClass" >
    <slot />
    <label v-if="label" :class="labelClass">
      {{ label }}
    </label>
    <span v-if="hasError" class="text-red-600">
      {{ errorText }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  errors: [String, Array],
  label: String,
  variant: {
    type: String,
    default: "default",
  },
  labelPosition: {
    type: String,
    default: "top",
  },
});

const hasError = computed(() => {
  return Array.isArray(props.errors) ? props.errors.length > 0 : props.errors;
});

const errorText = computed(() => {
  if (Array.isArray(props.errors)) {
    return props.errors[0];
  }
  return props.errors;
});

const wrapperClass = computed(() => {
  return [
    "input-wrapper",
    "w-full",
    "relative",
    "max-w-screen-md",
    "mx-auto",
    "border-2",
    "p-4",
    "mb-6",
    {
      outlined: props.variant === "outlined",
      contained: props.variant === "contained",
    },
  ];
});

 const labelClass = computed(() => {
   return [
     "pointer-events-none",
     "bg-white",
     "left-3",
     {
       "top-0": props.labelPosition === "top",
       "right-0": props.labelPosition === "right",
     },
   ];
 });


</script>