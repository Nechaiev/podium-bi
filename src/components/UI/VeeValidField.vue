<template>
  <InputWrapper :label="label">
    <div class="w-full relative mx-auto py-4">
      <Field :name="name"
             :id="id"
             :type="type"
             :placeholder="placeholder"
             @input="$emit('input', $event.target.value)"
             @change="$emit('change', $event.target.value)"
             :class="classes"
             class="border border-cyan-500 p-4 w-full rounded-lg peer"
      />
      <ErrorMessage class="text-red-600" :name="name"/>
    </div>
  </InputWrapper>
</template>

<script setup>
import {computed} from 'vue'
import {Field, ErrorMessage} from 'vee-validate';
import InputWrapper from "@/components/ui/InputWrapper.vue";

const props = defineProps({
  label: String,
  placeholder: String,
  id: String,
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  classes: {
    type: String,
    validator(value) {
      return ['case1', 'case2'].includes(value)
    },
    default: 'case1',
  },
})

const classes = computed(() => {
  return {
    case1: 'border border-cyan-500 p-4 w-full rounded-lg peer',
    case2: 'rounded-none border-gray-500  py-6',
    case3: 'rounded-3xl border-green-500 bg-green-500/10 py-3',
  } [props.classes]
})

defineEmits(['input', 'change'])
</script>