import axios from "./index";
import { useAuthStore } from "../store/auth";
import router from "../router/index";
import { setInLocalStorage } from "../utils/localStorage";
import renderToast from "../utils/toast";

export const registerApi = async (data: {
  username: string;
  password: string;
}) => {
  try {
    await axios.post("/user", data);
    renderToast({
      type: "success",
      message: "Thành công!\n Hãy đăng nhập với tài khoản đã tạo",
    });
  } catch (error) {
    renderToast({
      type: "error",
      message: "Thất bại!\n Hãy thử lại với tên khác",
    });
    console.log("error auth", error);
  }
};

export const loginApi = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const authStore = useAuthStore();
    const res = await axios.post("/user/sign-in", data);
    setInLocalStorage("token", res.data);
    setInLocalStorage("authenticated", true);

    authStore.loginSuccess();
    renderToast({
      type: "success",
      message: "Thành công!\n Hãy đăng nhập với tài khoản đã tạo",
    });

    router.push("/");
  } catch (error) {
    renderToast({
      type: "error",
      message: "Thất bại!\n Hãy thử lại với tên khác",
    });

    console.log("error auth", error);
  }
};
