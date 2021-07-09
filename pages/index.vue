<template>
  <div>
    <Header/>
    <div class='max-w-sm -mt-6 mb-10 w-full h-auto justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col p-5 space-y-5'>
      <Name/>
      <Date/>
      <Seat/>
      <button @click="onSubmited" class="py-6 px-20 mx-auto max-w-md rounded-xl shadow-md bg-red-400 flex items-center">จองคิว</button>
    </div>
    <CalendarMonth></CalendarMonth>
    <ConfirmPopup></ConfirmPopup>
  </div>
</template>

<script>
import ConfirmPopup from '../components/ConfirmPopup.vue'
import CalendarMonth from '../components/CustomCalendar/CalendarMonth.vue'

  export default {
    
    components:{
      ConfirmPopup,
      CalendarMonth
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
        this.$store.commit('changeConfirmpopupDisplay',"block")
      }
    }
  }
</script>
