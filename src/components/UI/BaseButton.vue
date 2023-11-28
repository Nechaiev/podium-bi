<template>
  <component :is="as" :disabled="isDisabled" :class="buttonClass">
    <IconLoading v-if="loading"/>
    <component
      :is="leftIcon"
      :class="[
        'w-5 h-5 mr-2',
         loading && 'invisible'
         ]"
    />
    <span :class="[loading && 'invisible']">
        <slot/>
    </span>
    <slot name="icon">
      <component
        :is="rightIcon"
        v-if="rightIcon"
        :class="[
        'w-5 h-5 ml-2',
         loading && 'invisible'
         ]"
      />
    </slot>
  </component>
</template>

<script setup>
import {computed} from "vue";
import {cva} from "class-variance-authority";
import IconLoading from "@/components/ui/icons/IconLoading.vue";

const props = defineProps({
  as: {
    type: [String, Object],
    default: "button",
  },
  variation: {
    type: String,
    validator: val => [
      "contained",
      "outlined"
    ].includes(val),
    default: "contained",
  },
  color: {
    type: String,
    validator: val => [
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "info",
    ].includes(val),
    default: "primary",
  },
  size: {
    type: String,
    validator: val => [
      'base',
      'md',
      'lg',
    ].includes(val),
    default: "base",
  },
  borderRadius: {
    type: String,
    validator: val => [
      'none',
      'sm',
      'lg'
    ].includes(val),
    default: "none",
  },
  leftIcon: [Object, Function],
  rightIcon: [Object, Function],
  disabled: Boolean,
  loading: Boolean,
})
const isDisabled = computed(() => props.disabled || props.loading)
const buttonClass = computed(() => {
  const cvaProps = {
    disabled: isDisabled.value,
    borderRadius: props.borderRadius,
    size: props.size,

  }
  if (!isDisabled.value) {
    cvaProps[props.variation] = props.color
  }

  return cva("inline-flex items-center justify-center font-bold border shadow-xl rounded cursor-pointer min-h-[42px]",
    {
      variants: {
        contained: {
          primary: "bg-primaryAccent    border-primaryColor     text-textColor      hover:text-white   hover:bg-primaryColor",
          secondary: "bg-secondaryColor   border-secondaryColor   text-textColor   hover:bg-secondaryAccent",
          success: "bg-green-500  border-green-500  text-white hover:bg-green-700",
          warning: "bg-orange-500 border-orange-500 text-white hover:bg-orange-700",
          danger: "bg-red-500    border-red-500    text-white hover:bg-red-700",
          info: "bg-sky-500    border-sky-500    text-white hover:bg-sky-700",
        },
        outlined: {
          primary: "border-primaryAccent    text-textColor   hover:bg-primaryAccent         hover:text-white",
          secondary: "border-secondaryAccent  text-textColor   hover:border-secondaryAccent   hover:bg-secondaryColor",
          success: "border-green-500  text-green-500  hover:bg-green-700   hover:text-white",
          warning: "border-orange-500 text-orange-500 hover:bg-orange-700  hover:text-white",
          danger: "border-red-500    text-red-500    hover:bg-red-700     hover:text-white",
          info: "border-sky-500    text-sky-500    hover:bg-sky-700     hover:text-white",
        },
        disabled: {
          true: "bg-gray-400 !cursor-not-allowed"
        },
        borderRadius: {
          none: 'rounded-none',
          base: "rounded",
          sm: "rounded-lg",
          lg: "rounded-3xl",
        },
        size: {
          base: "py-2 px-6",
          md: "py-4 px-12",
          lg: "py-8 px-16",
        },
      },
    }
  )(cvaProps)
  //props.variation
})
</script>