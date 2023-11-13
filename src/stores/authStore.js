import {defineStore} from "pinia"
import {ref} from "vue";
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";
import apiClient from "@/servis/apiClient.js";
import apiRouter from "@/servis/apiRouter.js";
// const storageKey = "users"
// const getUsersStore = ()=> {
//     const itemUsers = localStorage.getItem(storageKey)
//     return itemUsers? JSON.parse(itemUsers) : []
// }

// const setUsersStore = (data) => {
//     localStorage.setItem(storageKey, JSON.stringify(data));
// };

const useAuthStore = defineStore('appAuth', () => {   //'appAuth' unique id. Can't be the same
  const users = ref([])
  const newTaskArr = ref([])
  const isAuth = ref(false);
  const newTask = ref("")
  const usersData = ref(null)
  const profile = ref({
    id: 6,
  })
  const {handler, getData} = useHandleLoadingAndError()

  const setAuth = (auth) => {
    isAuth.value = auth
  }

  const getUser = (email) => {

    // return getUsersStore().find(item=> item.email === email)
    return users.value.find(item => item.email === email)
  }

  /*<ToDoList>*/
  const getToDoData = async (url) => {
    if (!usersData.value) {
      const res = await handler(url ? apiClient.get(url) : apiRouter.users.todos.index(profile.value.id))
      usersData.value = getData(res)
      newTaskArr.value.push(res)
    }
  };

  // const updateUserStatus = (user) => {
  //   console.log('updateUserStatus');
  //   user.completed = !user.completed;
  //     newTaskArr.value = newTaskArr.value.map((item) => {
  //       if (item.id === user.id) {
  //         return {
  //           ...item,
  //           completed: !user.completed,
  //         }
  //       }
  //       return item
  //     })
  // };

  const addTask = async (form) => {
    const res = await apiRouter.users.todos.create(profile.value.id, form);
    const lastItemId = usersData.value[usersData.value.length - 1].id;
    const newItam = {
      ...res.data,
      id: lastItemId >= res.data.id ? lastItemId + 1 : res.data.id
    }

    usersData.value.push(newItam);
    return newItam;
  }

  const updateTask = async (idTask, form) => {
    const res = await apiRouter.users.todos.update(idTask, form);
    usersData.value = usersData.value.map(item => item.id === idTask ? res.data : item)
    return res.data;
  }
  /* old */
  // const removeTask = (taskId) => {
  //   const index = usersData.value.findIndex((user) => user.id === taskId);
  //   if (index !== -1) {
  //     usersData.value.splice(index, 1);  }
  // }

  const removeTask = async (taskId) => {
    // Виклик методу delete з apiRouter
    await handler(apiRouter.users.todos.delete(profile.value.id, taskId));
    const index = usersData.value.findIndex((user) => user.id === taskId);
    if (index !== -1) {
      usersData.value.splice(index, 1);
    }
  }
  /*</ToDoList>*/
  /* onLogin*/
  const onLogin = async (form) => {
    console.log(form);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = getUser(form.email)
        console.log(typeof user);
        if (!user || form.password !== user.password) {
          return reject(new Error("invalid data"))
        }
        resolve(true);

      }, 1000);
    })

    isAuth.value = true;
    console.log(isAuth.value, form);
    // console.log(mockAuth);
  }

  /*onLogout isAuth.value = false*/
  const onLogout = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        isAuth.value = false
        resolve(isAuth.value);
      }, 1000);
    })
    console.log(isAuth.value);
  }

  const onRegister = async (form) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (getUser(form.email)) {
          return reject(new Error('error юсер існє'))
        }
        // const users = getUsersStore();
        users.value.push(form)
        // setUsersStore(users);
        resolve(true);
      }, 1000);
    })
    isAuth.value = true;
    console.log(isAuth);
  }

  return {
    profile,
    users,
    isAuth,
    usersData,
    setAuth,
    onLogin,
    onLogout,
    onRegister,
    // updateUserStatus,
    removeTask,
    addTask,
    getToDoData,
    updateTask,
  }

}, {
  persist: {
    paths: ['isAuth', 'users'],
  },
})

export default useAuthStore;