<template>
  <form class="flex items-center relative"
        @submit.prevent
        @change="onChange"
  >
    <!-- <div class="absolute bg-gray-700/50 text-white inset-0 flex items-center justify-center z-10" v-if="loading">
        <BaseLoading :loadingStyle="'animation'"/>
    </div> -->
    <vee-valid-field
      name="title"
    />
    <controlled-field
      name="completed"
      label="label"
      :id="'userId-' + toDoId"
    />
    <div class="relative flex cursor-pointer items-center rounded-full p-3">
      <button
        class=" before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-16 before:w-16 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
        type="button"
        @click="onRemoveTask"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" xml:space="preserve">
                            <circle fill="#4D4D4D" cx="64" cy="64" r="64"/>
          <path fill="#FFFFFF"
                d="M100.3,90.4L73.9,64l26.3-26.4c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0L64,54.1L37.7,27.8  c-0.4-0.4-1-0.4-1.4,0l-8.5,8.5c-0.4,0.4-0.4,1,0,1.4L54,64L27.7,90.3c-0.4,0.4-0.4,1,0,1.4l8.5,8.5c0.4,0.4,1.1,0.4,1.4,0L64,73.9  l26.3,26.3c0.4,0.4,1.1,0.4,1.5,0.1l8.5-8.5C100.7,91.4,100.7,90.8,100.3,90.4z"/>
          </svg>
      </button>
    </div>

  </form>
</template>
<script setup>
import {computed, ref} from 'vue'
import {useForm} from 'vee-validate';
import * as yup from "yup";
import VeeValidField from "@/components/ui/VeeValidField.vue";
import ControlledField from "@/components/ui/ControlledField.vue";
import useTodoStore from "@/stores/todoStore.js"
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";

const props = defineProps({
  title: String,
  completed: Boolean,
  toDoId: Number,
})

const todoStore = useTodoStore();
const {loading, handler} = useHandleLoadingAndError();

const initialValues = computed(() => {
  return {
    title: props.title,
    completed: props.completed,
  }
})

const validationSchema = {
  title: yup.string().required(),
};

const {values} = useForm({validationSchema, initialValues})

const onChange = () => {
  handler(todoStore.updateTask(props.toDoId, values))
}

const onRemoveTask = () => {
  handler(todoStore.removeTask(props.toDoId))
}
</script>