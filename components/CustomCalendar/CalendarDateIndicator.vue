<template>
  <div class="inline-block">
    <div class="pb-4 text-2md align-middle font-semibold text-center text-gray-100">{{ selectedDayOfWeek }}</div>
    <div class="py-1 text-2xl align-middle font-semibold text-center text-gray-100">{{ selectedDay }}</div>
    <div class="pt-4 text-2md align-middle font-semibold text-center text-gray-100">{{ selectedMonth }}</div>
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