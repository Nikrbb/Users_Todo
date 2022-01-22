import axios from 'axios'
import { createStore } from 'vuex'
import ApiClient from '../apiClient';

export default createStore({

  state: {
    users: [],
  },
  mutations: {
    SET_DATA(state, payload) {
      state.users = payload;
    }
  },
  actions: {

    // async GET_USERS_FROM_API() {
    //   return await ApiClient.get()
    // },
    async GET_USERS_FROM_API({commit}) {
      return await axios('https://jsonplaceholder.typicode.com/users',{
        method: "GET"
      })
      .then(response => {
        commit('SET_DATA', response.data)
        return response
      })
      .catch(error => {
        console.log(error)
        return error
      })
    },
  },
  modules: {
  }, 
  getters: {
    USERS(state) {
      return state.users
    }
  }
})
