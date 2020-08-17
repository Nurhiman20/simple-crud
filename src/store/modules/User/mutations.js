const SET_LIST = (state, payload) => {
  state.userList = payload
  state.lengthUserList = payload.length
}

const SET_DATA_USER = (state, payload) => {
  state.dataUser = payload
}

const SET_SELECTED_ID = (state, payload) => {
  state.selectedIdUser = payload
}

const SET_SELECTED_USER = (state, payload) => {
  state.selectedUser = payload
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
  SET_DATA_USER,
  SET_SELECTED_ID,
  SET_SELECTED_USER,
  DELETE_USER
}
