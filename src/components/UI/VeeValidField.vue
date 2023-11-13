<template>
  <div class="w-full relative mx-auto py-4">
    <Field :name="name"
           :type="type"
           @input="$emit('input', $event.target.value)"
           @change="$emit('change', $event.target.value)"
           class="border border-cyan-500 p-4 w-full rounded-lg peer"
    />
    <base-label  label="Write task" v-if="label" />
    <ErrorMessage class="text-red-600" :name="name"/>
  </div>
</template>

<script setup>
import {Field, ErrorMessage} from 'vee-validate';
import BaseLabel from "@/components/ui/BaseLabel.vue";

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