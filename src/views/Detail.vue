<template>
  <Loading v-if="loading" />
  <div v-if="todoItem" class="wrapper margin-distance">
    <header class="pt-16">
      <div class="back-home">
        <router-link to="/" class="back-home-link click">
          <ArrowLeft />
        </router-link>
      </div>
      <div class="option">
        <Clock class="click" stroke="#000" :width="20" :height="20" />
        <Pencil class="ml-10 mr-10 click" />
        <Trash class="click" @click="openModal = true" />
      </div>
    </header>
    <article class="mt-30">
      <h1 class="font-2 s-26 black title">{{ todoItem?.title }}</h1>
    </article>
    <section class="mt-24 pb-40">
      <p class="content s-16 black">{{ todoItem?.content }}</p>
    </section>
    <footer class="bg-white">
      <p class="created-at s-14 black">
        Created at {{ handleFormatDate(todoItem?.created_at) }}
      </p>
    </footer>
  </div>
  <div v-if="openModal" class="overlay">
    <div class="wrapper">
      <Button @click="deleteTodo">
        <span class="s-14 orange"> Delete TODO </span>
      </Button>
      <Button class="mt-16" @click="openModal = false">
        <span class="s-14 green"> Cancel </span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref, computed, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { storeToRefs } from "pinia";
  import { useTodoStore } from "../store/todo";
  import ArrowLeft from "../components/Icons/ArrowLeft.vue";
  import Clock from "../components/Icons/Clock.vue";
  import Pencil from "../components/Icons/Pencil.vue";
  import Trash from "../components/Icons/Trash.vue";
  import Button from "../components/Button.vue";
  import Loading from "../components/Loading.vue";
  import { deleteTodoApi, getTodoApi } from "../http/todo";
  import { handleFormatDate } from "../utils";
  import renderToast from "../utils/toast";

  const route = useRoute();
  const router = useRouter();
  const todoStore = useTodoStore();
  const { loading, data } = storeToRefs(todoStore);
  const todoId = route.params.id as string;
  const openModal = ref(false);

  const todoItem = computed(() => data.value.find((e) => e._id === todoId));

  const deleteTodo = () => {
    openModal.value = false;

    const callback = () => {
      router.push("/");
    };

    deleteTodoApi(todoId, callback);
  };

  watch(
    () => data.value,
    () => {
      if (!todoItem.value) {
        router.push("/");
        renderToast({
          type: "error",
          path: ["todo", "notFound"],
        });
      }
    }
  );

  onBeforeMount(() => {
    if (!data.value.length) {
      getTodoApi();
    }
  });
</script>

<style scoped lang="scss">
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .back-home {
      a {
        display: block;
        width: fit-content;
      }
    }
  }

  .article {
    .title {
      letter-spacing: 0.01em;
      line-height: 31px;
    }
  }

  section {
    .content {
      letter-spacing: 0.01em;
      line-height: 170%;
      font-weight: 400;
      white-space: pre-line;
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .created-at {
      letter-spacing: 0.01em;
      line-height: 170%;
    }
  }

  .overlay {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;

    .wrapper {
      width: 300px;
      position: absolute;
      bottom: 55px;
    }
  }
</style>
