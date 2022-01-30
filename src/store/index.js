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

    REMOVE_DATA (state, index) {
      state.users.splice(index, 1);
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
    USERS: state => state.users,
  }
})
