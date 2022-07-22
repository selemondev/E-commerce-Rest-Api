import { defineStore } from "pinia";
import { loginUrl } from "../utils/urls";
import axios from "axios";
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    loginLoading: false,
    logOutLoading: false,
  }),

  getters: {

  },

  actions: {
    async loginUser(email, password) {
      this.loginLoading = true;
      const response = await axios.post(loginUrl, {email, password});
      this.loginLoading = false;
      this.user = response.data.admin;
      localStorage.setItem('user', JSON.stringify(response.data.admin));
    },

    async logOut() {
      this.logOutLoading = true;
      this.user = null;
      this.logOutLoading = false;
      localStorage.removeItem('user');
    }
  }
});
