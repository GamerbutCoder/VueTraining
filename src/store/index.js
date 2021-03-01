import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    todos: []
  },
  getters:{
    islogin(state){
      return state.isLogin
    },
    getTodos(state){
      return state.todos.data
    }
    
  },
  mutations: {
    setLogin (state,value){
      state.isLogin = value
    },
    setTodo(state,values){
      state.todos = values
    }
  },
  actions: {
    setLoginAction ({commit}, value){
      commit('setLogin',value)
      const axiosConfig = {
        // `url` is the server URL that will be used for the request
        url: '/',
        // `method` is the request method to be used when making the request
        method: 'get', // default
        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL: 'https://jsonplaceholder.typicode.com/todos',
        // `responseType` indicates the type of data that the server will respond with
        // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType: 'json', // default
      }
      axios(axiosConfig)
      .then(
        e=>{
          console.log(e)
          commit('setTodo',e)
        }
        ).catch(err => console.error(err))
    }
  },
})

//state - > using direct state 
// mutation -> using commit
// actions -> using dispatch