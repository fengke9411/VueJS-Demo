import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  stateA: 0,
  stateb: '',
  showdialog: false
}

const mutations = {
  showdialog () {
    // console.log('mutations showdialog...' + statea)
    // state.stateA = statea
    state.showdialog = true
    // console.log('mutations showdialog...' + state.stateA)
  },
  dismisdialog () {
    state.showdialog = false
  }
}

export default new Vuex.Store({
  state,
  mutations
})
