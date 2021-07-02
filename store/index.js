export const state = () => ({
  name: '',
  date: '',
  appointedtime: '',
  seats: 1
})
export const mutations = {
  updateName(state,payload){
      console.log(state)
      console.log(payload)
      state.name = payload
  },
  updateDate(state,payload){
      state.date = payload
  },
  updateappointedTime(state,payload){
    state.appointedtime = payload
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