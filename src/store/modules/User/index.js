import actions from './actions'
import mutations from './mutations'

const state = {
  userList: [],
  dataNewUser: {}
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
