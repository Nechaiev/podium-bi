<template>
  <div class="w-full relative mx-auto py-4">
    <input class="border border-cyan-500 p-4 w-full rounded-lg peer"
           :name="name"
           :type="type"
           :checked="checked"
           :value="checked ? checkedValue : uncheckedValue"
           @change="handleChange"
    />
    <label v-if="label">
      {{ label }}
    </label>
    <ErrorMessage class="text-red-600" :name="name"/>
  </div>
</template>

<script setup>
import {useField, ErrorMessage} from 'vee-validate';

const props = defineProps({
  label: String,
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "checkbox",
    validator: (val) => ['checkbox', 'radio'].includes(val)
  },
  checkedValue: {
    type: Boolean,
    default: true,
  },
  uncheckedValue: {
    type: Boolean,
    default: false,
  }
})

const {handleChange, checked} = useField(() => props.name, undefined, {
  type: props.type,
  checkedValue: props.checkedValue,
  uncheckedValue: props.uncheckedValue,
})
</script>>