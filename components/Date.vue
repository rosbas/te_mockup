<template>
    <div>
      <div class="ml-2 pt-3 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="pl-6 text-2xl font-bold mb-4 items-center">เลือกเวลา</h2>
      </div>
      <div class="relative h-10 input-component mb-5 space-y-8 mb-10">
        <label for="date" class="absolute left-2 transition-all bg-white px-1">
          วัน
        </label>
        <input 
          name="date"
          id="date"
          type="date"
          placeholder="วันนี้"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-300 focus:ring-2">
      </div>
      <div class="grid grid-cols-4 gap-4">
        <button v-for="(time, index) in times" :key="index" @click='hi(time)' class="py-4 px-1 rounded-md text-xl shadow-md text-center bg-white-100">
          {{ time }}
        </button>
        <!-- https://tailwindcomponents.com/component/custom-radio-button -->
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        times: ["10:00","12:00","14:00","16:00","18:00","20:00"],
        select: ''
      }
    },
    methods:{
      hi(x){
        this.select = x
      }
    }
}
</script>