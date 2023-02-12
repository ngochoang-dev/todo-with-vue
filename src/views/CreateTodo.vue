<template>
  <Loading v-if="loading" />
  <div class="create-wrapper margin-distance bg-orange">
    <div class="back-home pt-16">
      <router-link to="/" class="back-home-link click">
        <ArrowLeft :stroke="'white'" />
      </router-link>
    </div>
    <div class="todo-form mt-20">
      <Form @submit="submitForm" :validation-schema="formValid">
        <Input
          type="text"
          name="title"
          placeholder="Title"
          class-name="input-type-2"
        />
        <TextArea name="content" placeholder="Description" />

        <DatePicker ref="datePickerRef" name="deadline" />

        <Button type="submit" class="btn-submit mt-16">
          <span class="orange s-14"> ADD TODO </span>
        </Button>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { storeToRefs } from "pinia";

  import * as Yup from "yup";
  import { Form } from "vee-validate";
  import { createTodoApi } from "../http/todo";
  import Input from "../components/Input.vue";
  import TextArea from "../components/TextArea.vue";
  import Button from "../components/Button.vue";
  import DatePicker from "../components/DatePicker.vue";
  import ArrowLeft from "../components/Icons/ArrowLeft.vue";
  import Loading from "../components/Loading.vue";
  import { useTodoStore } from "../store/todo";

  const todoStore = useTodoStore();
  const { loading } = storeToRefs(todoStore);

  const datePickerRef = ref<InstanceType<typeof DatePicker> | null>(null);

  const formValid = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required(),
    deadline: Yup.string().required(),
  });

  const submitForm = (values: any, { resetForm }: any) => {
    const callback = () => {
      resetForm();
      datePickerRef.value?.resetDate();
    };

    createTodoApi(values, callback);
  };
</script>

<style scoped lang="scss">
  .create-wrapper {
    height: 100vh;
    .back-home {
      a {
        display: block;
        width: fit-content;
      }
    }

    .todo-form {
      .btn-submit {
        span {
          font-weight: 500;
          letter-spacing: 0.05em;
        }
      }
    }
  }
</style>
