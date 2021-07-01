<template>
    <div>
      <div class="ml-2 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h2 class="pl-6 text-2xl font-bold mb-4">{{seat_txt}}</h2>
      </div>
      <Table/>
      <div class="flex flex-row">
            <button class="py-4 px-4 rounded-md text-xl shadow-md text-center bg-white-100" @click="removeSeat()">-</button>
            <span class="py-4 px-4 rounded-md text-xl shadow-md text-center bg-white-100">
                {{seats}}
            </span>
            <button class="py-4 px-4 rounded-md text-xl shadow-md text-center bg-white-100" @click="addSeat()">+</button>
      </div>
      <p>{{explain_text}}</p>
      <button class="py-6 px-20 mx-auto max-w-md rounded-xl shadow-md bg-red-400 flex items-center">จองคิว</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
        seat_txt: "จำนวนที่นั่ง",
        explain_text: "การจองโต๊ะผ่านระบบจองของแอพพลิเคชั่นไลน์ คุณสามารถทำการจองจำนวนที่นั่งได้ 1-8 ที่ หากท่านที่ความต้องการจองจำนวนที่นั่งมากกว่า คุณสามารถจองคิวได้ที่เคาน์เตอร์หน้าร้าน",
        seats: 1
      }
    },
    methods: {
        addSeat(){
            if(this.seats<8){
                this.seats++
            }
            else{
                alert("No more than 8 seats are allowed.")
            }
        },
        removeSeat(){
            if(this.seats>1){
                this.seats--
            }
            else{
                alert("There must be at least one reserved seat.")
            }
        }
    },
}
</script>