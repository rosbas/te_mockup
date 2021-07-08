<template>
  <li
    class="calendar-day" 
    :class="{
      'calendar-day--today': isToday,
      'calendar-day-bfToday': afToday,
      'hi': isDayOfOtherMonth 
    }"
    @click="onClick"
  >
  <!-- <li
    class="relative p-5 min-h-0 h-24 bg-white" 
    :class="{
      '.calendar-day--today' : isToday,
      'text-base': afToday,
      'text-gray-500': noCase

    }"
    @click="onClick"
  > -->
    <span class="flex justify-center items-center absolute right-1 w-5 h-4">{{ label }}</span>
  </li>
</template>

<script>
import dayjs from "dayjs";
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
var isToday = require('dayjs/plugin/isToday')
dayjs.extend(isSameOrAfter)
dayjs.extend(isToday)

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true
    },

    isCurrentMonth: {
      type: Boolean,
      default: false
    },

    isToday: {
      type: Boolean,
      default: false
    },
    selectedDate: {
      type: Object,
      required: true
    }
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    },
    afToday(){
      return dayjs(this.day.date).isAfter(dayjs().format("YYYY-MM-DD"))
    },
    isDayOfOtherMonth(){
        return this.day.isCurrentMonth
    }

  },
  methods: {
    onClick(){
      console.log(this.day)
    }
  },
};
</script>

<style scoped>

/* class="relative min-h-full text-sm bg-white p-5" */
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #fff;
  padding: 5px;
}

/* class="flex justify-center items-center absolute right-px" */
.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  color: rgb(161, 161, 161);
  width: var(--day-label-size);
  height: var(--day-label-size);
}
/* relative text-base bg-white p-1 min-h-8 */
.calendar-day--not-current {
  background-color: var(--grey-100);
  color: var(--grey-300);
}
/* bg-gray-100 text-gray-600 */
.calendar-day--today {
  padding-top: 4px;
}
/*pt-1*/

.calendar-day--today > span {
  color: rgb(220, 38, 38);
  border-radius: 9999px;
  background-color: var(--grey-800);
}

.calendar-day-afToday{
  padding-top: 4px;
}
.calendar-day-afToday > span{
  color: rgb(0, 0, 0);
  border-radius: 9999px;
  background-color: var(--grey-800);
}

</style>