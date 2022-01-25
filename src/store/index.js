import { createStore } from 'vuex'
import UsersService from '../services/users.service';

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

    getUsersFromApi() {
      return new Promise((resolve, reject) => {
        UsersService
          .usersList()
          .then(responce => {
            this.commit('SET_DATA', responce.data)
            return resolve(responce.data)
          })
          .catch(error => reject(error))
      })
    },
  },
  modules: {
  }, 
  getters: {
    USERS(state) {
      return state.users;
    }
  }
})
