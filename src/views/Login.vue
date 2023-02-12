<template>
  <Loading v-if="loading" />
  <div class="login-container margin-distance mt-100 pt-80 mb-46">
    <div class="logo">
      <Logo />
    </div>
    <div class="login-form mt-100 pt-70">
      <Form @submit="submitForm" :validation-schema="formValid">
        <Input type="text" name="username" placeholder="User Name" />
        <Input type="password" name="password" placeholder="Password" />

        <div class="forgot-pw">
          <router-link
            to="/change-password"
            :class="'forgot-pw-link s-12 click'"
            >Forgot Password?</router-link
          >
        </div>
        <Button class="bg-orange white mt-16" :type="'submit'">
          <span class="s-14"> SIGN UP </span>
        </Button>
      </Form>
    </div>
    <div class="mt-15 valiable-acc-wrapper">
      <p class="s-12 valiable-acc">
        Don't have an account?
        <router-link to="/register" class="orange click">Sign up</router-link>
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
  import { loginApi } from "../http/auth";

  const authStore = useAuthStore();
  const { loading } = storeToRefs(authStore);

  const formValid = Yup.object().shape({
    username: Yup.string().required("User name is a required field"),
    password: Yup.string().required("Password is a required field"),
  });

  const submitForm = (values) => {
    loginApi(values);
  };
</script>

<style lang="scss" scoped>
  .login-container {
    .logo {
      width: 100%;
      text-align: center;
    }
  }

  .login-form {
    .forgot-pw {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .forgot-pw-link {
        color: rgba(39, 39, 39, 0.5);
        text-decoration: none;
        line-height: 15px;
      }
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
