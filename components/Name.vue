<template>
    <div>
      <div class="ml-2 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h2 class="pl-6 text-2xl font-bold mb-4">ข้อมูลผู้จอง</h2>
      </div>
      <div class="relative h-10 input-component mb-5 space-y-8">
        <label for="name" class="absolute left-2 transition-all bg-white px-1">
          ชื่อ
        </label>
        <input 
          name="name"
          id="username"
          type="text"
          placeholder="ชื่อ"
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-300 focus:ring-2">
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      name:''
    }
  }
}
</script>
