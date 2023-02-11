<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { configure } from "vee-validate";
  import { useAuthStore } from "./store/auth";
  import router from "./router/index";
  import { onBeforeMount } from "vue";

  configure({
    validateOnBlur: false,
    validateOnChange: false,
    validateOnInput: false,
    validateOnModelUpdate: false,
  });

  const authStore = useAuthStore();

  router.beforeEach(async (to, from) => {
    const authenticated = authStore.$state.authenticated;
    if (!authenticated && to.meta.requireAuth && to.name !== "Login") {
      return { name: "Login" };
    }

    if (authenticated && to.name === "Login") {
      router.push(from.path);
    }
  });

  onBeforeMount(() => {
    authStore.checkAuthenticated();
  });
</script>

<style scoped></style>
