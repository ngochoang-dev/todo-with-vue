<template>
  <div class="change-pw-container margin-distance mt-100 pt-80 mb-46">
    <div class="logo">
      <Logo />
    </div>
    <div class="register-form mt-100 pt-70">
      <form @submit.prevent="submitForm">
        <Input
          :type="'password'"
          :name="'password'"
          :placeholder="'Password'"
          @value="onChange"
        />
        <Input
          :type="'password'"
          :name="'password'"
          :placeholder="'Confirm Password'"
          @value="onChange"
        />
        <Button class="bg-orange white mt-24" :type="'submit'">
          <span class="s-14"> CHANGE PASSWORD </span>
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup>
  import Input from "../components/Input.vue";
  import Logo from "../components/Icons/Logo.vue";
  import Button from "../components/Button.vue";
  import { ref } from "vue";

  const form = ref({
    username: "",
    password: "",
  });

  const onChange = (event) => {
    form.value = { ...form.value, ...event };
  };

  const submitForm = () => {
    console.log(form.value);
  };
</script>

<style lang="scss" scoped>
  .change-pw-container {
    .logo {
      width: 100%;
      text-align: center;
    }
  }
</style>
