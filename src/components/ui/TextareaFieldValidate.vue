<template>
    <v-textarea
        :label="label"
        :placeholder="placeholder"
        :variant="variant"
        :type="type"
        v-model="innerValue"
        :error="!!hasError"
        :error-messages="errorText"
        class="w-full"
        v-bind="$attrs"
    >

    </v-textarea>
</template>

<script setup>
import {useField} from "vee-validate";
import {useGetFieldError} from "@/composables/helpers";

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
  variant: {
    type: String,
    default: "outlined"
  }
});
defineEmits(["update:modelValue"]);

const {value: innerValue, errors} = useField(
    () => props.name,
    props.validationSchema,
    {
      syncVModel: props.syncVModel,
    },
);

const {hasError, errorText} = useGetFieldError(errors)
</script>