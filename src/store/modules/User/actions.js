import Vue from 'vue'
import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

Vue.use(axios)

const getListUser = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + '/users')
      .then(response => {
        commit('SET_LIST', response.data)
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

export default {
  getListUser
}