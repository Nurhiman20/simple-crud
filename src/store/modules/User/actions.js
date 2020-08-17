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

const postUser = ({state}) => {
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + '/users', state.dataNewUser,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const deleteUser = ({ state, commit }) => {
  return new Promise((resolve, reject) => {
    axios.delete(baseUrl + '/users/' + state.selectedIdUser)
      .then(response => {
        commit('DELETE_USER', state.selectedIdUser)
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

export default {
  getListUser,
  postUser,
  deleteUser
}