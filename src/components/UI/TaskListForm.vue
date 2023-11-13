<template>
  <div v-if="loading" class="">loading...</div>
  <div class="flex" v-else>
    <ul class="grid text-[12px] leading-3">
      <li tabindex="0" v-for="user in toDoData" :key="user.id">
        <pre>{{ user }}</pre>
      </li>
    </ul>
    <div class="border border-cyan-800 p-7 w-full mw-[700px] mx-auto rounded-lg grid gap-5 mb-5">
      <h4 class="text-title_2">Task list:</h4>
      <div class="borderp-7 mx-auto rounded-lg grid gap-5 w-full">
        <edit-task-form
          class="flex items-center"
          v-for="task in toDoData" :key="task.id"
          :title="task.title"
          :toDoId="task.id"
          :completed="task.completed"
        >
        </edit-task-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import useTodoStore from "@/stores/todoStore.js"
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";
import EditTaskForm from '@/components/ui/EditTaskForm.vue';

const todoStore = useTodoStore();
const {loading, handler} = useHandleLoadingAndError();
const toDoData = computed(() => todoStore.tasks)

const fetchData = (url) => {
  handler(() => todoStore.getToDoData(url));          // function
};

fetchData();
</script>

<style>
@keyframes loading {
  0% {
    @apply bg-yellow-400;
  }
  100% {
    @apply bg-green-400;
  }
}
</style>