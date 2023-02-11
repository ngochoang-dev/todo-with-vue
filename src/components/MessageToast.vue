<template>
  <div class="wrapper s-16">{{ message }}</div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { ToastOptions } from "vue3-toastify";

  const props = defineProps<{
    message: string;
    toastProps: ToastOptions;
  }>();

  const color = ref(
    props.toastProps.type === "success"
      ? "#28b478"
      : props.toastProps.type === "error"
      ? "#d20a0a"
      : "#333"
  );
</script>

<style lang="scss" scoped>
  .wrapper {
    text-align: center;
    white-space: pre-line;
    color: v-bind(color);
    line-height: 20px;
  }
</style>
