<template>
  <div class="input-wrapper relative grid mx-auto border-2 p-4 w-full">
      <slot
       :id="id"
       :placeholder="placeholder"
       ></slot>
      <base-label :for="labelForInput" :label="label" :class="labelPosition" />
      <slot name="errorMessage">
        <ErrorMessage class="text-red-600" v-if="name" :name="name"/>
      </slot>
      <!-- <i class="fas fa-pen-nib absolute left-8 top-14"></i>
      <i class="fas fa-pen-nib absolute right-8 top-14"></i>
      <i class="fas fa-pen-nib absolute right-[50%] top-14"></i> -->
  </div>
</template>

<script setup>
    import {computed} from 'vue'
    import BaseLabel from "@/components/ui/BaseLabel.vue";
    import {ErrorMessage} from 'vee-validate'

    const props = defineProps({
      type: String,
      id: String,
      inputLabel: String,
      placeholder: String,
      labelForInput: String,
      label: String,
      class: String,
      name: String, 
      labelPosition: {
          type: String,
          validator(value) {
            return ['topLeft', 'topRight','BottomLeft', 'BottomRight'].includes(value)
          },
          default: 'topLeft',
        }
    });
 
    const labelPosition = computed(() => {
      return {
        topLeft: "order-first",
        topRight: "order-first ml-auto",
        BottomLeft: "",
        BottomRight: "ml-auto",
      } [props.labelPosition]
    })

</script>
 