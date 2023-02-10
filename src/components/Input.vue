<template>
  <div class="input-wrapper">
    <input
      class="input-form"
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeholder"
      v-model="value"
    />
    <div class="eye-off" v-if="props.type === 'password'">
      <EyeOff />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps, watch, defineEmits } from "vue";
  import EyeOff from "../components/Icons/EyeOff.vue";

  type Props = {
    type: string;
    name: string;
    placeholder: string;
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

<style scoped lang="scss">
  .input-wrapper {
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(39, 39, 39, 0.5);
    margin-bottom: 16px;
    border-radius: 12px;
    overflow: hidden;

    .input-form {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      font-size: 16px;
      font-weight: 400;
      padding: 10px 16px;
      color: rgba(39, 39, 39, 0.5);
    }

    .eye-off {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
