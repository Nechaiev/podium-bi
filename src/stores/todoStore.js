import {defineStore} from "pinia"
import {ref} from "vue";
import apiRouter from "@/servis/apiRouter.js";
import useAuthStore from "@/stores/authStore.js"

const useTodoStore = defineStore('todoStore', () => {   //'todoStore' unique id. Can't be the same
  const tasks = ref([])
  const authStore = useAuthStore();

  /*<>*/
  const getToDoData = async () => {
    const res = await apiRouter.users.todos.index(authStore.profile.id)
    tasks.value = res.data
  };

  const addTask = async (form) => {
    const res = await apiRouter.users.todos.create(authStore.profile.id, form);
    const lastItemId = tasks.value[tasks.value.length - 1].id;
    const newItam = {
      ...res.data,
      id: lastItemId >= res.data.id ? lastItemId + 1 : res.data.id
    }

    tasks.value.push(newItam);
    return newItam;
  }

  const updateTask = async (form) => {
    const res = await apiRouter.users.todos.update(authStore.profile.id, form);
    tasks.value = tasks.value.map(item => item.id === authStore.profile.id ? res.data : item)
    return res.data;
  }

  const removeTask = async (taskId) => {
    // Виклик методу delete з apiRouter
    await apiRouter.users.todos.delete(authStore.profile.value.id, taskId);
    const index = tasks.value.findIndex((user) => user.id === taskId);
    if (index !== -1) {
      tasks.value.splice(index, 1);
    }
  }

  return {
    tasks,
    addTask,
    getToDoData,
    updateTask,
    removeTask,
  }
})

export default useTodoStore;