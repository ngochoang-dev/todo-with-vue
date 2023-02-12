<template>
  <textarea
    :name="name"
    :value="inputValue"
    :placeholder="placeholder"
    @input="handleChange"
    :class="`textarea pl-16 pr-16 pt-10 pb-10 s-16  ${
      errorMessage ? 'error' : ''
    } ${className || ''}`"
  >
  </textarea>
</template>

<script setup lang="ts">
  import { useField } from "vee-validate";
  type Props = {
    name: string;
    value?: string;
    placeholder: string;
    className?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    value: "",
  });

  const {
    value: inputValue,
    errorMessage,
    handleChange,
    meta,
  } = useField(props.name, undefined, {
    initialValue: props.value,
  });
</script>

<style scoped lang="scss">
  textarea {
    color: #ffff;
    width: 100%;
    line-height: 170%;
    resize: none;
    height: 400px;
    border: 2px solid #ffffff;
    border-radius: 12px;
    background-color: transparent;
    outline: none;

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

    &.error {
      border: 2px solid red;
    }
  }
</style>
