<template>
  <div class="login-container margin-distance">
    {{ form }}
    <div class="logo">
      <Logo />
    </div>
    <div class="login-form">
      <form @submit.prevent="submitForm">
        <Input
          :type="'text'"
          :name="'username'"
          :placeholder="'Email'"
          @value="onChange"
        />
        <Input
          :type="'password'"
          :name="'password'"
          :placeholder="'Password'"
          @value="onChange"
        />

        <div class="forgot-pw">
          <router-link to="/" :class="'forgot-pw-link s-12'"
            >Forgot Password?</router-link
          >
        </div>
        <button type="submit">Submit</button>
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

  const submitForm = () => {
    console.log(form.value);
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

  .login-form {
    .forgot-pw {
      .forgot-pw-link {
        font-family: "Montserrat", sans-serif;
        color: rgba(39, 39, 39, 0.5);
        text-decoration: none;
        line-height: 15px;
      }
    }
  }
</style>
