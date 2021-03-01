import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  getters:{
    islogin(state){
      return state.isLogin
    }
  },
  mutations: {
    setLogin (state,value){
      state.isLogin = value
    }
  },
  actions: {
    setLoginAction ({commit}, value){
      commit('setLogin',value)
    }
  },
})

//state - > using direct state 
// mutation -> using commit
// actions -> using dispatch