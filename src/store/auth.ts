import { defineStore } from "pinia";
import { getInLocalStorage } from "../utils/localStorage";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    async checkAuthenticated() {
      const res = await getInLocalStorage("authenticated");
      this.authenticated = !!res;
    },
    loginSuccess() {
      this.authenticated = true;
    },
  },
});
