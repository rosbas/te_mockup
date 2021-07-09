import dayjs from "dayjs";
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export const state = () => ({
  name: '',
  date: '',
  appointedtime: '',
  calendardisplay: 'none',
  confirmpopupdisplay: 'none',
  seats: 1,
  queuenumber: 'PSB_70RONI',
  qrcodeurl: 'http://www.tshirtsbye2.com/qrcode/images/dummy-qr.png',
  selectedDateJS: dayjs()
})
export const mutations = {
  setSelectedDate(state,payload){
    state.selectedDateJS = dayjs(payload,'YYYY-MM-DD').format('YYYY-MM-DDTHH:mm:ss.sss[Z]') 
  },
  updateName(state,payload){
      state.name = payload
  },
  updateDate(state,payload){
      state.date = payload
  },
  updateQueueNumber(state,payload){
    state.queuenumber = payload
  },
  changeQRcodeUrl(state,payload){
    state.qrcodeurl = payload
  },
  updateappointedTime(state,payload){
    state.appointedtime = payload
  },
  changeCalendarDisplay(state,payload){
    state.calendardisplay = payload
  },
  changeConfirmpopupDisplay(state, payload){
    state.confirmpopupdisplay = payload
  },
  addSeat(state){
      if(state.seats < 8){
        state.seats++
      }
  },
  removeSeat(state){
      if(state.seats > 1){
          state.seats--
        }
  }
}
//   actions:{},
//   modules:{},

// export const getters={
//       getCurrentName: state => state.name
//   }


// }