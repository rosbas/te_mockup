<template>
  <div class="bg-yellow-400">
    <div class="bg-yellow-400 pb-10 m-auto md:pb-0 transition-all">
      <div class="text-3xl bg-yellow-400 p-3 m-auto flex items-center justify-center"> การจองสำเร็จ!</div>
      <div class="text-2xl bg-yellow-400 p-4 m-auto flex items-center justify-center"> คิวของคุณ</div>
      <div class="bg-yellow-400 h=1/12 w=full">
          <div class="py-2"></div>
      </div>
    </div>
    <div class='max-w-sm -mt-6 w-full h-auto justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col px-5 pt-5 space-y-5 border-b-2 border-dashed border-yellow-400'>
        <div>
          <span class="text-lg pt-4 pb-9 px-1 left-1 w-28">หมายเลขคิวของคุณ</span>
          <br>
          <span class="text-3xl pt-4 pb-9 px-1 left-1 w-30">{{queuenumber}}</span>
          <div class="flex flex-auto">
            <span class="text-lg pt-5 px-1 left-1 w-25">จำนวนที่นั่ง</span>
            <span class="text-lg pt-5 pl-20 pr-5 left-1 w-20">{{seats}}</span>
          </div>
          <div class="flex flex-auto">
            <span class="text-lg pb-2 px-1 left-1 w-30">เวลาที่จอง</span>
            <span class="text-lg pb-2 pl-10 pr-5 left-1 w-35">{{date}} - {{appointedtime}}</span>
          </div>
        </div>
    </div>
    <div class='max-w-sm mb-10 w-full h-auto justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col px-5 pb-5 space-y-5'>
        <div class = 'pt-10 px-5 pb-5 m-auto content-center'>
          <img :src="qrcodeurl" class = 'w-30 h-30'>
        </div>
    </div>
    <div class="bg-yellow-400 h=1/12 w=full">
          <div class="py-5"></div>
      </div>
  </div>
    
  
</template>

<script>
export default {
  computed:{
    data:{
      qr_src: 'qrcodeurl'
    },
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
    queuenumber:{
      get () {
        return this.$store.state.queuenumber
      }
    },
    qrcodeurl:{
      get () {
        return this.$store.state.qrcodeurl
      }
    },
    seats:{
      get () {
        return this.$store.state.seats
      }
    }
    }
  };
  
</script>
