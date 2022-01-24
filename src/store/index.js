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
    },

    REMOVE_DATA (state, id) {
      state.users = state.users.filter(elem => elem.id !== id);
    }
  },
  actions: {

    // async GET_USERS_FROM_API() {
    //   return await ApiClient.get()
    // },
    async GET_USERS_FROM_API({commit}) {
      // const req = await axios('https://jsonplaceholder.typicode.com/users',{
      //   method: "GET"
      // });
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

    INIT_REMOVE_ITEM({commit}, id) {
      commit('REMOVE_DATA', id)
    }
  },
  modules: {
  }, 
  getters: {
    USERS(state) {
      return state.users
    }
  }
})
