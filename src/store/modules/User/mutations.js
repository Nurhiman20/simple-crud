const SET_LIST = (state, payload) => {
  state.userList = payload
}

const SET_NEW_USER = (state, payload) => {
  state.dataNewUser = payload
}

const SET_SELECTED_ID = (state, payload) => {
  state.selectedIdUser = payload
}

const DELETE_USER = (state, payload) => {
  state.userList.forEach((element, index) => {
    if (element.id == payload) {
      state.userList.splice(index, 1)
    }
  })
}

export default {
  SET_LIST,
  SET_NEW_USER,
  SET_SELECTED_ID,
  DELETE_USER
}
