<template>
  <div
    :class="`item-wrapper pt-6 pb-6 pl-16 pr-10 ${
      is_finished ? 'bg-orange' : 'bg-pink'
    }`"
  >
    <div class="item-header">
      <h4 class="white s-16">{{ title }}</h4>
      <Clock v-if="!is_finished" />
    </div>
    <div class="item-content mt-8">
      <p class="white s-14">{{ content }}</p>
    </div>
    <p class="white s-11 item-created">
      Created at {{ handleFormatDate(created_at) }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import Clock from "./Icons/Clock.vue";
  import { handleFormatDate } from "../utils";

  defineProps<{
    title: string;
    content: string;
    is_finished: boolean;
    created_at: string;
  }>();
</script>

<style scoped lang="scss">
  .item-wrapper {
    height: 120px;
    border-radius: 12px;
    position: relative;

    .item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4 {
        font-weight: 600;
        line-height: 170%;
      }
    }

    .item-content {
      p {
        font-weight: 400;
        line-height: 170%;
        white-space: pre-line;

        display: -webkit-box;
        max-height: 45px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .item-created {
      position: absolute;
      bottom: 5px;
      line-height: 13px;
    }
  }
</style>
