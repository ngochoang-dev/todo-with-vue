import { defineStore } from "pinia";
import { TodoType } from "../types";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    loading: false,
    data: [] as TodoType[],
    totalCount: 0,
  }),
  actions: {
    getTodoSuccess: function (results: { data: TodoType[]; count: number }) {
      this.loading = false;
      this.data = results.data;
      this.totalCount = results.count;
    },
  },
});
