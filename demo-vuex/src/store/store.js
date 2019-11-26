import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)     

export const store = new Vuex.Store({
  state: {
    count : 0
  },
  getters: {
    doubleCount : state => {
      return state.count * 2
    },
    stringClick : state => {
      return state.count + ' click'
    }
  },
  mutations: {
    increment : (state , payload) => {
      state.count += payload
    },
    decrement : (state , payload) => {
      state.count -= payload
    }
  },
  actions: {
    increment: ({commit},payload) =>{
      commit('increment',payload)      
    },
    decrement: ({commit},payload) =>{
      commit('decrement',payload)
    },
    asyncIncrement: ({commit},payload) =>{
      setTimeout(() => {
        commit('increment',payload.by)
      }, payload.duration);
    },
    asyncDecrement: ({commit},payload) =>{
      setTimeout(() => {
        commit('decrement',payload.by)
      }, payload.duration);
    }
  }
})