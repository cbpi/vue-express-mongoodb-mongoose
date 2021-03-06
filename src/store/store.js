import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  num: 12
}

const mutations = {
  add (state) {
    state.num++
  },
  minus (state) {
    state.num--
  }
}

export default new Vuex.Store({
  state,
  mutations
})
