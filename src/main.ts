import { createApp } from "vue";
import { createPinia } from "pinia";
import Datepicker from "@vuepic/vue-datepicker";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";

import "./assets/css/reset.scss";
import "./assets/css/index.scss";
import "./assets/css/color.scss";
import "./assets/css/fontSize.scss";
import "./assets/css/space.scss";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import router from "./router/index";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Vue3Toastify, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: false,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "colored",
    limit: 1,
    closeButton: true,
  } as ToastContainerOptions)
  .component("Datepicker", Datepicker)
  .mount("#app");
