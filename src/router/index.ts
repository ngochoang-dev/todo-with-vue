import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import EditTodo from "../views/EditTodo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: { requireAuth: true },
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/edit/:id",
    name: "EditTodo",
    meta: { requireAuth: true },
    component: EditTodo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
