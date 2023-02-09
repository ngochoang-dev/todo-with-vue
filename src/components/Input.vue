<template>
  <input :type="props.type" :name="props.name" v-model="value" />
</template>

<script setup lang="ts">
  import { ref, defineProps, watch, defineEmits } from "vue";

  type Props = {
    type: string;
    name: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    type: "text",
  });

  const value = ref("");
  const emit = defineEmits(["value"]);

  watch(value, (newValue) => {
    emit("value", { [props.name]: newValue });
  });
</script>

<style scoped lang="scss"></style>
