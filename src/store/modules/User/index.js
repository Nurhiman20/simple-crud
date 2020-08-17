import actions from './actions'
import mutations from './mutations'

const state = {
  userList: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
