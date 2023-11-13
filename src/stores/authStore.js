import {defineStore} from "pinia"
import {ref} from "vue";

const useAuthStore = defineStore('appAuth', () => {   //'appAuth' unique id. Can't be the same
  const users = ref([])
  const isAuth = ref(false);
  const usersData = ref(null)
  const profile = ref({
    id: 7,
  })
  const setAuth = (auth) => {
    isAuth.value = auth
  }

  const getUser = (email) => {
    return users.value.find(item => item.email === email)
  }

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
  }

}, {
  persist: {
    paths: ['isAuth', 'users'],
  },
})

export default useAuthStore;