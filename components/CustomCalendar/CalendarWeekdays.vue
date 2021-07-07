<template>
  <ol class="day-of-week text-md text-gray-400 bg-white pb-1 pt-2 grid grid-cols-7">
    <li class="text-right pr-1"
      v-for="weekday in weekdays"
      :key="weekday"
    >
      {{ weekday }}
    </li>
  </ol>
</template>

<script>
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: 'CalendarWeekdays',

  computed: {
    weekdays() {
      return WEEKDAYS
    }
  }
}
</script>
<!--
<style scoped>

.day-of-week {
  color: var(--grey-800);
  font-size: 18px;
  background-color: #fff;
  padding-bottom: 5px;
  padding-top: 10px;
}

.day-of-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-of-week > * {
  text-align: right;
  padding-right: 5px;
}
</style>
-->