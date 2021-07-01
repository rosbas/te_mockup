<template>
    <div>
      <div class="ml-2 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h2 class="pl-6 text-2xl font-bold mb-4">{{seat_txt}}</h2>
      </div>
      <Table/>
      <div>- 2 +</div>
      <p>{{explain_text}}</p>
      <button class="py-6 px-20 mx-auto max-w-md rounded-xl shadow-md bg-red-400 flex items-center">จองคิว</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
        seat_txt: "จำนวนที่นั่ง",
        explain_text: "การจองโต๊ะผ่านระบบจองของแอพพลิเคชั่นไลน์ คุณสามารถทำการจองจำนวนที่นั่งได้ 1-8 ที่ หากท่านที่ความต้องการจองจำนวนที่นั่งมากกว่า คุณสามารถจองคิวได้ที่เคาน์เตอร์หน้าร้าน"
      }
    }
}
</script>