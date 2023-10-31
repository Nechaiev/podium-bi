import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(username, password) {
      if (username === "admin" && password === "admin123") {
        this.isAuthenticated = true;
        this.user = { username };
      } else {
        console.log("Неправильні дані для входу");
        //додати трай кетч
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
