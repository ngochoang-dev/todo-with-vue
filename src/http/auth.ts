import axios from "./index";
import { useAuthStore } from "../store/auth";
import router from "../router/index";
import { setInLocalStorage } from "../utils/localStorage";
import renderToast from "../utils/toast";

export const registerApi = async (data: {
  username: string;
  password: string;
}) => {
  const authStore = useAuthStore();
  try {
    authStore.$state.loading = true;
    await axios.post("/user", data);
    renderToast({
      type: "success",
      path: ["register", "success"],
    });
    authStore.$state.loading = false;
    router.push("/login");
  } catch (error) {
    authStore.$state.loading = false;
    renderToast({
      type: "error",
      path: ["register", "error"],
    });
    console.log("error auth", error);
  }
};

export const loginApi = async (data: {
  username: string;
  password: string;
}) => {
  const authStore = useAuthStore();
  try {
    authStore.$state.loading = true;
    const res = await axios.post("/user/sign-in", data);
    setInLocalStorage("token", res.data);
    setInLocalStorage("authenticated", true);

    authStore.loginSuccess();
    renderToast({
      type: "success",
      path: ["login", "success"],
    });
    router.push("/");
  } catch (error) {
    authStore.$state.loading = false;
    renderToast({
      type: "error",
      path: ["login", "error"],
    });

    console.log("error auth", error);
  }
};

export const refreshTokenApi = async (token: string) => {
  try {
    const res = await axios.post("/user/reissue", {
      refreshToken: token,
    });

    return res.data;
  } catch (error) {
    console.log("error auth", error);
  }
};
