<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
  type Props = {
    width?: number;
    height?: number;
    stroke?: string;
  };

  withDefaults(defineProps<Props>(), {
    width: 24,
    height: 24,
    stroke: "#272727",
  });
</script>
