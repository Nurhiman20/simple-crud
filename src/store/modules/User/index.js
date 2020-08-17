import actions from './actions'
import mutations from './mutations'

const state = {
  userList: [],
  dataUser: {},
  selectedUser: {},
  selectedIdUser: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
