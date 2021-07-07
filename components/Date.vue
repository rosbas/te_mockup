<template>
    <div class="pd-20">
      <div class="ml-2 pt-3 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="pl-6 text-2xl font-bold mb-4 items-center">เลือกเวลา</h2>
      </div>
      <!-- Select Date -->
      <div class="relative h-10 input-component space-y-8 mb-14">
        <label for="date" class="absolute left-2 transition-all bg-white px-1">
          วัน
        </label>
        <input 
          name="date"
          id="date"
          :type="type"
          onfocus="(this.type='date')"
          :placeholder="getDateStr()"
          v-model="selectedDate"
          class="dateclass shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-300 focus:ring-2">
      </div>
      <!-- Select Time -->
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(time, index) in times" :key="index">
          <span v-if="time.ava">
          <button class="py-5 px-2 rounded-md text-xl shadow-md text-center bg-white-100" @click='setTime(time.t)' v-bind:class="{'bg-red-100':isSelected==time.t}">
            {{ time.t }}
          </button>
          </span>
          <span v-if="!time.ava">
            <button class="py-4 px-4 rounded-md text-sm shadow-inner-xl text-center bg-gray-300">
              คิวเต็ม<br>
              {{ time.t }}
            </button>
          </span>
        </div>
        <!-- https://tailwindcomponents.com/component/custom-radio-button -->
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        // times: ["10:00","12:00","14:00","16:00","18:00","20:00"],
        times: [
          {t:"10:00",ava:false},
          {t:"12:00",ava:false},
          {t:"14:00",ava:true},
          {t:"16:00",ava:true},
          {t:"18:00",ava:true},
          {t:"20:00",ava:true},
        ],
        isSelected: '',
        type:'text',
      }
    },
    methods:{
      setTime(x){
        this.isSelected = x
        //console.log(this.isSelected)
        this.$store.commit('updateappointedTime',this.isSelected)
      },
      getDateStr(){
         let s = new Date().toLocaleDateString();
        //  "MM-dd-yyyy" => "yyyy-MM-dd"
        
      return s
      },
    },
    computed:{
        selectedDate:{
          get () {
            return this.$store.state.date
          },
          set(value){
            this.$store.commit('updateDate',value)
          }
        }
      }
}
</script>