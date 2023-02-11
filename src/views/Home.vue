<template>
  <div class="wrapper home-container pt-50 margin-distance">
    <header class="home-header">
      <h1 class="font-2 s-24 orange title-header">TO DO LIST</h1>
      <Setting />
    </header>
    <article class="filter-wrapper mt-40">
      <div class="left-side">
        <List />
        <p class="title font-2 s-36 pink ml-9">List of todo</p>
      </div>
      <div class="right-side">
        <Filter class="click" />
      </div>
    </article>
    <PlusCircle class="click icon-plus" />
    <div v-if="!!data.length" class="todo-item mt-30">
      <TodoItem
        v-for="(todo, index) in data"
        :key="index"
        class="mb-16 click"
        :title="todo.title"
        :content="todo.content"
        :is_finished="todo.is_finished"
        :created_at="todo.created_at"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import Setting from "../components/Icons/Setting.vue";
  import List from "../components/Icons/List.vue";
  import Filter from "../components/Icons/Filter.vue";
  import PlusCircle from "../components/Icons/PlusCircle.vue";
  import TodoItem from "../components/TodoItem.vue";
  import { getTodoApi } from "../http/todo";
  import { useTodoStore } from "../store/todo";

  const todoStore = useTodoStore();

  const { loading, data, totalCount } = storeToRefs(todoStore);

  onMounted(() => {
    getTodoApi({ page: 1 });
  });
</script>

<style lang="scss" scoped>
  .home-container {
    position: relative;
    min-height: 100vh;
    .home-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title-header {
        letter-spacing: 2px;
        font-weight: normal;
      }
    }

    .filter-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-side {
        display: flex;
        align-items: center;
      }
    }

    .icon-plus {
      position: absolute;
      bottom: 24px;
      right: 24px;
    }
  }
</style>
