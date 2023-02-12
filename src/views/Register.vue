<template>
  <Loading v-if="loading" />
  <div class="register-container margin-distance mt-100 pt-80 mb-46">
    <div class="logo">
      <Logo />
    </div>
    <div class="register-form mt-100 pt-70">
      <Form @submit="submitForm" :validation-schema="formValid">
        <Input type="text" name="username" placeholder="User Name" />
        <Input type="password" name="password" placeholder="Password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        <Button class="bg-orange white mt-24" type="'submit'">
          <span class="s-14"> SIGN IN </span>
        </Button>
      </Form>
    </div>
    <div class="mt-15 valiable-acc-wrapper">
      <p class="s-12 valiable-acc">
        Have an account?
        <router-link to="/login" class="orange click">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
  import { Form } from "vee-validate";
  import * as Yup from "yup";
  import { storeToRefs } from "pinia";
  import Input from "../components/Input.vue";
  import Logo from "../components/Icons/Logo.vue";
  import Button from "../components/Button.vue";
  import Loading from "../components/Loading.vue";
  import { useAuthStore } from "../store/auth";
  import { registerApi } from "../http/auth";

  const authStore = useAuthStore();
  const { loading } = storeToRefs(authStore);

  const formValid = Yup.object().shape({
    username: Yup.string().required("User name is a required field"),
    password: Yup.string().required("Password is a required field"),
    confirmPassword: Yup.string()
      .required("Confirm password is a required field")
      .oneOf([Yup.ref("password")], "Password do not match"),
  });

  const submitForm = (values) => {
    registerApi(values);
  };
</script>

<style lang="scss" scoped>
  .register-container {
    .logo {
      width: 100%;
      text-align: center;
    }
  }

  .valiable-acc-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    .valiable-acc {
      color: rgba(39, 39, 39, 0.4);
    }
  }
</style>
