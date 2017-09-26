import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import todo from './modules/todo'

Vue.use(Vuex)

//Imports on top

const state = {
  // Initial state of your store
  count: 0,
}

const getters = {
  // Getters to access your store values
}

const actions = {
  // Asynchronous mutations commits to modify your store
}

const mutations = {
  // Synchronous modifications of  your store
  ADD(state) {
    state.count++
  },
  MINUS(state) {
    state.count--
  },
}

const modules = {
  counter,
  todo,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
})
