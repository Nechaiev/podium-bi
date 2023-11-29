<template>
  <field-wrapper :label="label" :errors="errors">
    <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :class="fieldClasses"
        v-model="innerValue"
        value="andrew@easlerlaw.com"
    />
  </field-wrapper>
</template>

<script setup>
import FieldWrapper from "@/components/ui/FieldWrapper.vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
  modelValue: String,
  validationSchema: null,
  syncVModel: Boolean,
});
defineEmits(["update:modelValue"]);

const { value: innerValue, errors } = useField(
    () => props.name,
    props.validationSchema,
    {
      syncVModel: props.syncVModel,
    },
);


const fieldClasses =
    "peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] placeholder-black::placeholder outline-none transition-all duration-200 ease-linear motion-reduce:transition-none";
</script>
