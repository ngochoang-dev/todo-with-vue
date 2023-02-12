import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ChangePassword from "../views/ChangePassword.vue";
import EditTodo from "../views/EditTodo.vue";
import CreateTodo from "../views/CreateTodo.vue";
import Detail from "../views/Detail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: { requireAuth: true },
    component: Home,
  },
  {
    path: "/create-todo",
    name: "CreateTodo",
    meta: { requireAuth: true },
    component: CreateTodo,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    meta: { requireAuth: true },
    component: Detail,
  },
  {
    path: "/edit/:id",
    name: "EditTodo",
    meta: { requireAuth: true },
    component: EditTodo,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: ChangePassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
