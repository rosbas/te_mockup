<template>
    <div>
      <div class="ml-2 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h2 class="pl-6 text-2xl font-bold mb-4">{{seat_txt}}</h2>
      </div>
        <div v-if="seats<5" class="mx-20 grid grid-rows-6 grid-cols-5 gap-2">
          <button v-if="seats >= 1" class = "row-start-1 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-1 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 2" class = "row-start-1 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-1 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 1" class = "row-start-3 col-start-1 row-span-2 col-span-5 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-3 col-start-1 row-span-2 col-span-5 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 3" class = "row-start-6 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-6 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 4" class = "row-start-6 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-6 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
        </div>
        <div v-else class="grid grid-rows-6 grid-cols-11 gap-2">
          <button v-if="seats >= 1" class = "row-start-1 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-1 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 2" class = "row-start-1 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-1 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 1" class = "row-start-3 col-start-1 row-span-2 col-span-5 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-3 col-start-1 row-span-2 col-span-5 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 3" class = "row-start-6 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-6 col-start-2 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 4" class = "row-start-6 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-6 col-start-4 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          
          <button v-if="seats >= 5" class = "row-start-1 col-start-8 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-1 col-start-8 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 6" class = "row-start-1 col-start-10 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-1 col-start-10 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 5" class = "row-start-3 col-start-7 row-span-2 col-span-5 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-3 col-start-7 row-span-2 col-span-5 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 7" class = "row-start-6 col-start-8 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-6 col-start-8 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
          <button v-if="seats >= 8" class = "row-start-6 col-start-10 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-red-300"></button>
          <button v-else class = "row-start-6 col-start-10 py-3 px-3 rounded-md text-sm shadow-inner-xl text-center bg-gray-300"></button>
        </div>
      <div class="flex flex-row m-4">
        <div class="m-auto">
            <button class="py-4 px-4 rounded-md text-xl shadow-md text-center bg-white-100" @click="removeSeat()">-</button>
            <span class="py-4 px-4 rounded-md text-xl shadow-md text-center bg-white-100">{{seats}}</span>
            <button class="py-4 px-4 rounded-md text-xl shadow-md text-center bg-white-100" @click="addSeat()">+</button>
        </div>
      </div>
      <p>{{explain_text}}</p>
    </div>
</template>

<script>
export default {
    data() {
      return {
        seat_txt: "จำนวนที่นั่ง",
        explain_text: "การจองโต๊ะผ่านระบบจองของแอพพลิเคชั่นไลน์ คุณสามารถทำการจองจำนวนที่นั่งได้ 1-8 ที่ หากต้องการจองจำนวนที่นั่งมากกว่า 8 ที่ ท่านสามารถจองคิวได้ที่เคาน์เตอร์หน้าร้าน",
      }
    },
    methods: {
        addSeat(){
            this.$store.commit('addSeat')
        },
        removeSeat(){
            this.$store.commit('removeSeat')
        }
    },
    computed:{
      seats:{
        get(){
          return this.$store.state.seats
        },
      }
    }
}
</script>