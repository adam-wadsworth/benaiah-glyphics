import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    canvas: {
      text: 'BENAIAH',
      fontSize: '20px',
      fontFamily: 'benaiah_matheson',
      fontColour: '#000000',
      textAlign: 'center',
      textBaseline: 'top',
      backgroundColour: '#FF0040',
      canvasSize: '0, 0, 800, 500'
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    canvas (state) {
      return state.canvas
    }
  },
  mutations: {
    updateColour: (state, canvas) => {
      Object.assign(state.canvas, canvas)
    },
    updateText: (state, canvas) => {
      Object.assign(state.canvas, canvas)
    },
    SET_LOGGED_IN (state, value) {
      state.user.loggedIn = value
    },
    SET_USER (state, data) {
      state.user.data = data
    }
  },
  actions: {
    fetchUser ({
      commit
    }, user) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email
        })
      } else {
        commit('SET_USER', null)
      }
    }
  }
})
