<template>
  <form @submit.prevent="onAddTask(newTask)"
        class="border border-cyan-800 p-7 w-full mw-[700px] mx-auto rounded-lg grid gap-5 mb-5">
    <h4 class="text-title_2">Add task:</h4>
    <input name="title" class="border border-cyan-500 p-4 w-full rounded-lg" v-model="newTask">
    <p>{{ newTask }}</p>
    <button class="border border-green-500 p-4 w-full rounded-lg hover:bg-green-500">add item
    </button>
  </form>
</template>
<script setup>
import useAuthStore from "@/stores/authStore.js"
import {ref} from 'vue';

const newTask = ref("")
const authStore = useAuthStore();

const onAddTask = (task) => {
  authStore.addTask(task)
  newTask.value = ""
}
</script>
