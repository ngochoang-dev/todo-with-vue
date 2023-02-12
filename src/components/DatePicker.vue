<template>
  <Datepicker
    v-model="dateValue"
    auto-apply
    hide-offset-dates
    month-name-format="long"
    :enable-time-picker="false"
    @update:model-value="handleDate"
  >
    <template #trigger>
      <div class="datepicker-wrapper mt-16 pl-16 pr-16 click">
        <span class="label s-16 white">{{
          dateValue ? handleFormatDate(dateValue) : "Deadline (Optional)"
        }}</span>
        <Calendar />
      </div>
    </template>
  </Datepicker>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useField } from "vee-validate";
  import Calendar from "./Icons/Calendar.vue";
  import { handleFormatDate } from "../utils";

  const props = defineProps<{
    date?: Date;
    name: string;
  }>();

  const dateValue = ref(props.date);

  const { errorMessage, handleChange } = useField(props.name, undefined, {});

  const resetDate = () => {
    dateValue.value = undefined;
  };

  defineExpose({
    resetDate,
  });

  const handleDate = (datePicked: Date) => {
    dateValue.value = datePicked;
    handleChange(datePicked);
  };

  const opacity = computed(() => {
    return dateValue.value ? "1" : "0.5";
  });

  const borderColor = computed(() => {
    return errorMessage.value ? "red" : "#ffffff";
  });
</script>

<style scoped lang="scss">
  .datepicker-wrapper {
    width: 100%;
    height: 48px;
    border: 2px solid v-bind(borderColor);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: v-bind(opacity);

    .label {
      line-height: 170%;
    }
  }
</style>
