<template>
  <div>
    <Header/>
    <div class='max-w-sm -mt-6 mb-10 w-full h-auto justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col p-5 space-y-5'>
      <Name/>
      <Date/>
      <Seat/>
      <button @click="onSubmited" class="py-6 px-20 mx-auto max-w-md rounded-xl shadow-md bg-red-400 flex items-center">จองคิว</button>
    </div>
    <ConfirmPopup></ConfirmPopup>
  </div>
</template>

<script>
import ConfirmPopup from '../components/ConfirmPopup.vue'

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
      ConfirmPopup
    },
    //data() {
      //return {
        //popupData : {
          //"display" : "none"
        //}
      //}
    //},
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
    }
  }
</script>
