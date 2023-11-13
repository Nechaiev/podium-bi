<template>
  <div class="container mx-auto my-5">
    <h1 class="text-title_1 mb-5">ToDoList</h1>
    <div class="flex flex-col w-full" v-if="authStore.isAuth">
      <AddTaskForm/>
      <TaskListForm/>
    </div>
    <h2 v-else class="text-title_2">ToDoList is available only to registered users.</h2>
  </div>
</template>

<script setup>
//import apiRouter from '../api/apiRouter';
import useAuthStore from "@/stores/authStore.js"
import AddTaskForm from "@/components/ui/AddTaskForm.vue";
import TaskListForm from "@/components/ui/TaskListForm.vue";

const authStore = useAuthStore();
</script>>