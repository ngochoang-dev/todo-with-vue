<template>
  <button class="click" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  type Props = {
    type?: "button" | "submit" | "reset";
    width?: number;
    height?: number;
  };

  const props = withDefaults(defineProps<Props>(), {
    type: "button",
  });
</script>

<style scoped>
  button {
    width: 100%;
    height: 48px;
    border-radius: 12px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
