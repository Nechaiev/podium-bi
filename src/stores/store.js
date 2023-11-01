import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const user = ref(null);
  const login = (username, password) => {
    if (username && password) {
      isAuthenticated.value = true;
      user.value = { username };
    } else {
      window.alert("Login and password are required");
    }
  };
  const logout = () => {
    isAuthenticated.value = false;
    user.value = null;
  };
  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
});


// export const useAuthStore = defineStore("auth", {
//   state: () => ({
//     isAuthenticated: false,
//     user: null,
//   }),
//   actions: {
//     login(username, password) {
//       this.isAuthenticated = true;
//       this.user = {username};
//     },
//     logout() {
//       this.isAuthenticated = false;
//       this.user = null;
//     },
//   },
// });

// export const useAuthStore = defineStore("auth", {
//   state: () => ({
//     isAuthenticated: false,
//     user: null,
//   }),
//   actions: {
//     login(username, password) {
//       if (username === "admin" && password === "admin123") {
//         this.isAuthenticated = true;
//         this.user = { username };
//       } else {
//         console.log("Неправильні дані для входу");
//       }
//     },
//     logout() {
//       this.isAuthenticated = false;
//       this.user = null;
//     },
//   },
// });
