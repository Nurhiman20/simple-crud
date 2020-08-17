import Vue from 'vue'
import Vuex from 'vuex'

// module
import userModule from './modules/User'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    user: userModule,
  }
})
