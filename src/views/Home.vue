<template>
  <Loading v-if="loading" />
  <div class="wrapper home-container pt-50 margin-distance">
    <header class="home-header">
      <h1 class="font-2 s-24 orange title-header">TO DO LIST</h1>
      <Setting class="click" />
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
    <router-link to="/create-todo" class="click icon-plus">
      <PlusCircle />
    </router-link>
    <div v-if="!!data.length" class="todo-item mt-30">
      <TodoItem
        v-for="(todo, index) in data"
        class="mb-16 click"
        :key="index"
        :id="todo._id"
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
  import Loading from "../components/Loading.vue";
  import { getTodoApi } from "../http/todo";
  import { useTodoStore } from "../store/todo";

  const todoStore = useTodoStore();
  const { loading, data, totalCount } = storeToRefs(todoStore);

  onMounted(() => {
    getTodoApi();
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
      width: fit-content;
      height: fit-content;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
