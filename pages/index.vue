<template>
  <div>
    <Header/>
    <div class='max-w-sm -mt-6 mb-10 w-full h-auto justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col p-5 space-y-5'>
      <Name/>
      <Date/>
      <button @click="onClickingselectDate" class="px-6 py-4 m-auto bg-pink-200 rounded-xl text-white shadow-lg hover:bg-pink-900" >เลือกวันที่</button>
      <!-- <div @click="toggleDateModal = !toggleDateModal" v-if="toggleDateModal" class="absolute z-40 inset-0 opacity-25 bg-black"></div> -->
      <Seat/>
      <button @click="onSubmited" class="py-6 px-20 mx-auto max-w-md rounded-xl shadow-md bg-red-400 flex items-center">จองคิว</button>
    </div>
    <CalendarMonth></CalendarMonth>
    <!-- <div v-if="toggleDateModal" class="fixed overflow-x-hidden overflow-y-auto inset-0">
      <button @click="toggleDateModal = !toggleDateModal">Hi</button>
      <CalendarMonth></CalendarMonth>
    </div> -->
    <ConfirmPopup></ConfirmPopup>
  </div>
</template>

<script>
import ConfirmPopup from '../components/ConfirmPopup.vue'
import CalendarMonth from '../components/CustomCalendar/CalendarMonth.vue'

  export default {
    // computed:{
    //   name(){
    //     return this.$store.state.name
    //   },
    //   date(){
    //     return this.$store.state.date
    //   },
    //   seats(){
    //     return this.$store.state.seats
    //   },
    // },
    components:{
      ConfirmPopup,
      CalendarMonth
    },
    data() {
      return {
        toggleDateModal: false
      }
    },
    methods:{
      onSubmited(){
        var data = {
          name:this.$store.state.name,
          date:this.$store.state.date,
          appointedtime:this.$store.state.appointedtime,
          seats:this.$store.state.seats
        }
        console.log(data)
        //show confirmation modals
        //this.popupData.display = "block";
        this.$store.commit('changeConfirmpopupDisplay',"block")
      },
      //mounted(){
        //this.popupData.display = "block";
      //}
      onClickingselectDate(){
        console.log("onClickingselectDate Clicked")
        this.$store.commit('changeCalendarDisplay',"block")
      }
    }
  }
</script>
