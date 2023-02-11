import axios from "axios";
import { getInLocalStorage } from "../utils/localStorage";

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
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
