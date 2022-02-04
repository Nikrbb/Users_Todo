import { createStore } from 'vuex'
import UsersService from '../services/users.service';
import router from '../router'

export default createStore({

  state: {
    users: [],
    userById: null,
  },
  mutations: {
    SET_DATA(state, payload) {
      state.users = payload;
    },

    SET_USER(state, payload) {
      state.userById = payload;
    },

    REMOVE_DATA (state, index) {
      state.users.splice(index, 1);
    }
  },
  actions: {

    getUsersFromApi({commit}, amount) {
      return new Promise((resolve, reject) => {
        UsersService
          .usersList(amount)
          .then(response => {
            commit('SET_DATA', response.data.users)
            return resolve(response.data)
          })
          .catch(error => reject(error))
      })
    },

    getUserById({commit}, id) {
      return new Promise((resolve, reject) => {
        UsersService
          .usersId(id)
          .then(response => {
            commit('SET_USER', response.data)
            return resolve(response.data)
          })
          .catch(error => {
            router.replace({ path: `/404` })
            return reject(error)
          })
      })
    },
  },
  modules: {
  }, 
  getters: {
    USERS: state => state.users,
    userById: state => state.userById,
  }, 
  
})
