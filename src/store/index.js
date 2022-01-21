import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null,
  },
  mutations: {
    SET_DATA(state, payload) {
      state.users = payload;
      console.log(state.users);
    }
  },
  actions: {
    async loadUsers() {
      await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(responce  => this.commit('SET_DATA', responce.data))
      .catch(error => console.log(error))
    }
  },
  modules: {
  }, 
  getters: {
    getData(state) {
      return state.users
    }
  }
})
