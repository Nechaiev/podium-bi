<template>
  <field-wrapper :label="label" :errors="errors">
    <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :class="fieldClasses"
        v-model="innerValue"
    />
  </field-wrapper>
</template>

<script setup>
import FieldWrapper from "@/components/ui/FieldWrapper.vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
});

const { value: innerValue, errors } = useField(() => props.name);

const fieldClasses =
    "peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] placeholder-black::placeholder outline-none transition-all duration-200 ease-linear motion-reduce:transition-none";
</script>

<style scoped></style>