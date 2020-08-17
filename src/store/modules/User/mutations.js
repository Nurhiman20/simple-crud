const SET_LIST = (state, payload) => {
  state.userList = payload
}

const SET_NEW_USER = (state, payload) => {
  state.dataNewUser = payload
}

export default {
  SET_LIST,
  SET_NEW_USER
}
