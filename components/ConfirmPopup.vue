<template>
    <div id="Confirmpopup" :style="{display : confirmpopupdisplay}">
        <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div class="container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                 <div class="py-4 px-4 rounded-md shadow-md bg-white-100">
                    <div class="text-center items-center">
                        <span class="py-2 px-2 text-2xl font-bold">ยืนยันการจอง</span>
                        <div class="py-2 px-2 text-gray-400">โปรดยืนยันข้อมูลการจองของท่าน</div>
                        <div class="py-2 px-2">
                            <div>รายละเอียดการจอง:</div>
                            <div>ชื่อ: {{name}}</div>
                            <div>วันที่จอง: {{date}}</div>
                            <div>เวลาที่จอง: {{appointedtime}}</div>
                            <div>จำนวนที่นั่ง: {{seats}}</div>

                        </div>
                    </div>
                    <div class = "flex">
                        <button class="py-4 px-2 mx-auto max-w-md rounded-xl shadow-md bg-green-200 flex items-center" @click="closeFunction">ยืนยัน</button>
                        <button class="py-4 px-2 mx-auto max-w-md rounded-xl shadow-md bg-red-200 flex items-center" @click="closeFunction">ยกเลิก</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ["popupData"],
    computed:{
    name:{
      get () {
        return this.$store.state.name
      }
    },
    date:{
      get () {
        return this.$store.state.date
      }
    },
    appointedtime:{
      get () {
        return this.$store.state.appointedtime
      }
    },
    confirmpopupdisplay:{
      get () {
        return this.$store.state.confirmpopupdisplay
      },
      set(value){
        this.$store.commit('changeConfirmpopupDisplay',value)
      }
    },
    seats:{
      get () {
        return this.$store.state.seats
      }
    }
    },
    methods : {
        closeFunction(){
            //this.popupData.display = "none";
            this.$store.commit('changeConfirmpopupDisplay',"none")
            
        }
    }
}
</script>