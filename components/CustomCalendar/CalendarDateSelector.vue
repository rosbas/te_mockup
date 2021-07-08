<template>
  <div class="calendar-date-selector flex justify-between w-20 text-color-gray-800">
    <span class="cursor-pointer select-none" @click="selectPrevious">﹤</span>
    <span class="cursor-pointer select-none" @click="selectCurrent">Today</span>
    <span class="cursor-pointer select-none" @click="selectNext">﹥</span>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarDateSelector",

  props: {
    currentDate: {
      type: String,
      required: true
    },

    selectedDate: {
      type: Object,
      required: true
    }
  },

  methods: {
    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    },

    selectCurrent() {
      let newSelectedDate = dayjs(this.currentDate);
      this.$emit("dateSelected", newSelectedDate);
    },

    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    }
  }
};
</script>

<style scoped>
/*
.calendar-date-selector {
  display: flex;
  justify-content: space-between;
  width: 80px;
  color: var(--grey-800);
}

.calendar-date-selector > * {
  cursor: pointer;
  user-select: none;
}
*/
</style>