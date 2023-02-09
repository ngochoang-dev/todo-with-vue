<template>
  <div class="login-container">
    {{ form }}
    <div class="logo">
      <Logo />
    </div>
    <div class="login-form">
      <form>
        <Input :type="'text'" :name="'username'" @value="onChange" />
        <Input :type="'password'" :name="'password'" @value="onChange" />
      </form>
    </div>
  </div>
</template>

<script setup>
  import Input from "../components/Input.vue";
  import Logo from "../components/Icons/Logo.vue";
  import { ref } from "vue";

  const form = ref({
    username: "",
    password: "",
  });

  const onChange = (event) => {
    form.value = { ...form.value, ...event };
  };
</script>

<style lang="scss" scoped>
  .login-container {
    margin-top: 180px;
    .logo {
      width: 100%;
      text-align: center;
    }
  }
</style>
