import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/index.scss";
import App from "./App.vue";
import router from "./router/index";
import { useAuthStore } from "./store/auth";

createApp(App).use(router).use(createPinia()).mount("#app");

const useStore = useAuthStore();

console.log(useStore.$state.authenticated);

router.beforeEach(async (to, from) => {
  const authenticated = useStore.$state.authenticated;
  console.log(to.meta.requireAuth);
  if (!authenticated && to.meta.requireAuth && to.name !== "Login") {
    return { name: "Login" };
  }

  if (authenticated && to.name === "Login") {
    router.push(from.path);
  }
});
