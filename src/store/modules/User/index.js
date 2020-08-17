import actions from './actions'
import mutations from './mutations'

const state = {
  userList: [],
  lengthUserList: null,
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
