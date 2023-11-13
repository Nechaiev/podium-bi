<template>
  <div class="w-full relative mx-auto py-4">
    <Field :name="name"
           :type="type"
           @input="$emit('input', $event.target.value)"
           @change="$emit('change', $event.target.value)"
           class="border border-cyan-500 p-4 w-full rounded-lg peer"
    />
    <label v-if="label"
           class="absolute left-5 top-0 origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor bg-white">
      {{ label }}
    </label>
    <ErrorMessage class="text-red-600" :name="name"/>
  </div>
</template>

<script setup>
import {Field, ErrorMessage} from 'vee-validate';

defineProps({
  label: String,
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
})

defineEmits(['input', 'change'])
</script>