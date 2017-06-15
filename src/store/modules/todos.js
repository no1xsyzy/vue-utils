import * as types from '../mutation-types'

const state = {
  allTodos: []
}

const getters = {
  allTodos: state => state.allTodos
}

const actions = {}

const mutations = {
  [types.ADD_NEW_TODO](state, {content}) {
    state.allTodos.push({content, complete: false, id: new Date().getTime(),})
  },

  [types.DELETE_TODO](state, {id}) {
    state.allTodos.forEach((v, i) => {
      if (v.id === id) {
        state.allTodos.splice(i, 1)
      }
    })
  },

  [types.TOGGLE_COMPLETE](state, {id}) {
    state.allTodos.forEach((v, i) => {
      if (v.id === id) {
        state.allTodos.splice(i, 1, {
          ...v,
          complete: !v.complete,
        })
      }
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
