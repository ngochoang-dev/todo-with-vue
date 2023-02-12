import axios from "axios";
import {
  getInLocalStorage,
  removeLocalStorage,
  setInLocalStorage,
} from "../utils/localStorage";
import { useAuthStore } from "../store/auth";
import { refreshTokenApi } from "./auth";
import router from "../router";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 60000,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getInLocalStorage("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token?.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const token = await getInLocalStorage("token");
    let retry = true;
    const isExpiried =
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized";

    if (token && isExpiried && retry) {
      retry = false;
      const newAccessToken = await refreshTokenApi(token?.refreshToken);
      console.log("newAccessToken", newAccessToken);
      if (!newAccessToken) {
        const authStore = useAuthStore();
        authStore.$state.authenticated = false;
        await removeLocalStorage("token");
        await removeLocalStorage("authenticated");
        return router.push("/login");
      }

      const newToken = {
        accessToken: newAccessToken,
        refreshToken: token?.refreshToken,
      };

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + newAccessToken;

      await setInLocalStorage("token", newToken);
      return instance(error.config);
    }

    return Promise.reject(error);
  }
);

export default instance;
