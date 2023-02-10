import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/index.scss";
import "./assets/css/color.scss";
import "./assets/css/fontSize.scss";
import "./assets/css/reset.scss";
import App from "./App.vue";
import router from "./router/index";
import { useAuthStore } from "./store/auth";

createApp(App).use(router).use(createPinia()).mount("#app");

const useStore = useAuthStore();

router.beforeEach(async (to, from) => {
  const authenticated = useStore.$state.authenticated;
  if (!authenticated && to.meta.requireAuth && to.name !== "Login") {
    return { name: "Login" };
  }

  if (authenticated && to.name === "Login") {
    router.push(from.path);
  }
});
