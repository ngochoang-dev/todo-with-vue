<template>
  <div v-if="errorMessage && name !== 'title'" class="mb-10">
    <span class="s-14 pink">※{{ errorMessage }}</span>
  </div>
  <div
    :class="`input-wrapper mb-16 ${errorMessage ? 'error' : ''} ${
      className || ''
    }`"
  >
    <input
      class="input-form"
      :name="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
    />
    <div class="eye-off" v-if="type === 'password'">
      <EyeOff />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useField } from "vee-validate";
  import EyeOff from "../components/Icons/EyeOff.vue";

  type Props = {
    type: string;
    name: string;
    value?: string;
    placeholder: string;
    className?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    type: "text",
    value: "",
  });

  const {
    value: inputValue,
    errorMessage,
    handleChange,
  } = useField(props.name, undefined, {
    initialValue: props.value,
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
    border-radius: 12px;
    overflow: hidden;

    &.error {
      border: 1px solid red;
    }

    .input-form {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      font-size: 16px;
      font-weight: 400;
      padding: 10px 16px;
      color: rgba(39, 39, 39, 0.5);
      background-color: transparent;
      &::placeholder {
        color: rgba(39, 39, 39, 0.5);
        opacity: 1;
      }
      &:-ms-input-placeholder {
        color: rgba(39, 39, 39, 0.5);
      }
      &::-ms-input-placeholder {
        color: rgba(39, 39, 39, 0.5);
      }
    }

    &.input-type-2 {
      border: 2px solid #ffffff;
      .input-form {
        color: #ffffff;
        &::placeholder {
          color: #ffffff;
          opacity: 1;
        }
        &:-ms-input-placeholder {
          color: #ffffff;
        }
        &::-ms-input-placeholder {
          color: #ffffff;
        }
      }

      &.error {
        border: 2px solid red;
      }
    }

    .eye-off {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
