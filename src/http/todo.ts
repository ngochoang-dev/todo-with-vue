import axios from "./index";
import { useTodoStore } from "../store/todo";
import { DataCreateType } from "types";
import renderToast from "../utils/toast";

export const getTodoApi = async (page?: number) => {
  const todoStore = useTodoStore();
  try {
    todoStore.$state.loading = true;
    const res = await axios.get(`/todo${page ? `?page=${page}` : ""}`);
    todoStore.getTodoSuccess(res.data);
  } catch (error) {
    todoStore.$state.loading = false;
    console.log("error todo", error);
  }
};

export const createTodoApi = async (
  data: DataCreateType,
  callback: () => void
) => {
  const todoStore = useTodoStore();
  try {
    todoStore.$state.loading = true;
    const res = await axios.post("/todo", data);
    if (!res) throw new Error();

    todoStore.$state.loading = false;
    callback();
    renderToast({
      type: "success",
      path: ["create", "success"],
    });
  } catch (error) {
    todoStore.$state.loading = false;
    renderToast({
      type: "error",
      path: ["create", "error"],
    });
    console.log("error create todo", error);
  }
};

export const deleteTodoApi = async (id: string, callback: () => void) => {
  const todoStore = useTodoStore();
  try {
    todoStore.$state.loading = true;
    await axios.delete(`/todo/${id}`);
    todoStore.$state.loading = false;
    renderToast({
      type: "success",
      path: ["delete", "success"],
    });
    callback();
  } catch (error) {
    todoStore.$state.loading = false;
    renderToast({
      type: "error",
      path: ["delete", "error"],
    });
    console.log("error delete todo", error);
  }
};
