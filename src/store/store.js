import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  stateA: 0,
  stateb: '',
  showdialog: false,
  count: 0
}

const mutations = {
  showdialog (state, statea) {
    // console.log('mutations showdialog...' + statea)
    state.stateA = statea
    state.showdialog = true
    // console.log('mutations showdialog...' + state.stateA)
  },
  dismisdialog () {
    state.showdialog = false
  },
  increment () {
    state.count++
  }
}

const getters = {
  testGetter () {
    console.log('getters testGetter...' + state.stateA)
    return state.stateA + 100
  },
  testGetter2 () {
    return getters.testGetter + 100
  }
}

// 一般执行异步操作
const actions = {
  increment ({commit}) {
    setTimeout(() => {
      commit('increment')
    }, 2000)
  },
  testPromise ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 2000)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions

})
