import actions from './actions'
import mutations from './mutations'

const state = {
  userList: [],
  dataNewUser: {},
  selectedIdUser: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
