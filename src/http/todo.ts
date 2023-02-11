import axios from "./index";
import { useTodoStore } from "../store/todo";

export const getTodoApi = async ({ page }: { page: number }) => {
  const todoStore = useTodoStore();
  try {
    const res = await axios.get(`/todo?page=${page}`);
    todoStore.$state.loading = true;
    todoStore.getTodoSuccess(res.data);
  } catch (error) {
    todoStore.$state.loading = false;
    console.log("error todo", error);
  }
};
