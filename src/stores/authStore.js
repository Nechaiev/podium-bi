import {defineStore} from "pinia"
import {ref} from "vue";

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
  const isAuth = ref(false);

  const setAuth = (auth) => {
    isAuth.value = auth
  }

  const getUser = (email) => {
    // return getUsersStore().find(item=> item.email === email)
    return users.value.find(item => item.email === email)
  }

  /* onLogin*/
  const onLogin = async (form) => {
    console.log(form);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = getUser(form.email)
        if (!user || form.password !== user.password) {
          return reject(new Error("invalid data"))
        }
        resolve(true);
      }, 1000);
    })
    isAuth.value = true;
    console.log(isAuth.value, form);
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
    users, isAuth, setAuth, onLogin, onLogout, onRegister,
  }
}, {
  persist: {
    paths: ['isAuth', 'users'],
  },
})
export default useAuthStore;