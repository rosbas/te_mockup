<template>
  <div class="flex">
    <div class="text-2xl font-semibold text-gray-800">{{ selectedDayOfWeek }}</div>
    <div class="text-2xl font-semibold text-gray-800">{{ selectedDay }}</div>
    <div class="text-2xl font-semibold text-gray-800">{{ selectedMonth }}</div>
  </div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },

  computed: {
    selectedDayOfWeek() {
      //translate into thai.
      return this.selectedDate.format("dd");
    },
      selectedDay(){
        return this.selectedDate.format("D")
      },
    selectedMonth() {
      return this.selectedDate.format("MMM");
    },

  }
};
</script>