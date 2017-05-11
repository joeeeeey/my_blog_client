import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

  state: {
    currentMember: {}
  },
  mutations: {
    setMember (state, payload) {
      // 变更状态
      state.currentMember = payload  
    }
  }
})
