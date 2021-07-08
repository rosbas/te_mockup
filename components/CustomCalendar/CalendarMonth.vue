<template>
  <!-- Main -->
  <div id="CalendarMonth" :style="{display : calendardisplay}">
    <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div class="overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div class="container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="calendar-month relative bg-white border-1 border-grey-300">
          <!-- Closing Tabs + Title -->
          <div class="flex bg-red-700">
            <button @click="closeCalendar" class="py-1 px-1 text-white">X</button>
            <div class="pl-1 pr-5 w-full text-white text-center m-auto">เลือกวัน</div>
          </div>
          <!-- Header -->
          <div class="flex items-right bg-red-700 p-2 text-white border-t-2 border-red-400">
            <span>วันที่คุณเลือก</span>
          </div>
          <div class="flex items-center justify-center bg-red-700 p-2 text-white">
            <CalendarDateIndicator
              :selected-date="selectedDate"
              class="flex justify-between bg-red-700 selected-month"
            />
          </div>
          <!-- <today>
          <CalendarDateSelector
              :current-date="today"
              :selected-date="selectedDate"
              @dateSelected="selectDate"
            />
          -->

        <!-- Show weekdays (sun-sat) -->
        <CalendarWeekdays/>
          <!-- Grid days -->
          <ol class="days-grid h-full relative border-t-2 border-red-500 grid grid-cols-7 ">
            <CalendarMonthDayItem
              v-for="day in days"
              :key="day.date"
              :day="day"
              :is-today="day.date === today"
            />
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import CalendarMonthDayItem from "./CalendarMonthDayItem";
import CalendarDateIndicator from "./CalendarDateIndicator";
import CalendarDateSelector from "./CalendarDateSelector";
import CalendarWeekdays from "./CalendarWeekdays";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
  name: "CalendarMonth",

  components: {
    CalendarMonthDayItem,
    CalendarDateIndicator,
    CalendarDateSelector,
    CalendarWeekdays
  },

  data() {
    return {
      selectedDate: dayjs(),
      nextSelectedMonth: dayjs().add(1,'month')
    };
  },

  computed: {
    selectedDateJS:{
      get(){
        return this.$store.state.selectedDateJS
      }
    },
    calendardisplay: {
      get () {
        return this.$store.state.calendardisplay
      },
      set(value){
        this.$store.commit('changeCalendarDisplay',value)
      }
    },

    days() {
      return [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays
      ];
    },

    today() {
      return dayjs().format("YYYY-MM-DD");
    },

    month() {
      return Number(this.selectedDate.format("M"));
    },

    year() {
      return Number(this.selectedDate.format("YYYY"));
    },

    numberOfDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },

    currentMonthDays() {
      return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
            "YYYY-MM-DD"
          ),
          isCurrentMonth: true
        };
      });
    },

    previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      );

      // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() +
                1}-${previousMonthLastMondayDayOfMonth + index}`
            ).format("YYYY-MM-DD"),
            isCurrentMonth: false
          };
        }
      );
    },

    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      );

      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false
        };
      });
    }
  },

  methods: {
    getWeekday(date) {
      return dayjs(date).weekday();
    },

    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate;
    },

    setNextMonth(nextMonth){
      this.nextSelectedMonth = nextMonth
    },

    closeCalendar(){
      this.$store.commit('changeCalendarDisplay',"none")
    },

    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
      this.selectDate(newSelectedDate)
      this.setNextMonth(dayjs(this.nextSelectedMonth).subtract(1, "month"))
    },

    selectCurrent() {
      let newSelectedDate = dayjs(this.currentDate);
      this.selectDate(newSelectedDate)
    },

    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
      this.selectDate(newSelectedDate)
      this.setNextMonth(dayjs(this.nextSelectedMonth).add(1, "month"))
    }
  }
};
</script>

<style scoped>

/*
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}


.days-grid {
  height: 100%;
  position: relative;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  border-top: solid 1px var(--grey-200);
}
*/
</style>