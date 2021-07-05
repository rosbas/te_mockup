<template>
    <div id="Confirmpopup" :style="{display : popupData.display}">
        <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div class="container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                 <div class="py-4 px-4 rounded-md shadow-md bg-white-100">
                    <div class="text-center items-center">
                        <span class="py-2 px-2 text-2xl font-bold">{{popupData.header}}</span>
                        <div class="py-2 px-2 text-gray-400">{{popupData.body}}</div>
                        <div class="py-2 px-2">
                            <div>{{popupData.footer}}</div>
                            <div>ชื่อ: {{popupData.pname}}</div>
                            <div>วันที่จอง: {{popupData.pdate}}</div>
                            <div>เวลาที่จอง: {{popupData.pappointedtime}}</div>
                            <div>จำนวนที่นั่ง: {{popupData.pseats}}</div>

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
    props : ["popupData","pname","pdate","pappointedtime","pseats"],
    methods : {
        closeFunction(){
            this.popupData.display = "none";
        }
    }
}
</script>