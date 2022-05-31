import {
  ACTIVE_ITEM_MENU,
  LIGHT_THEME
} from '@/modules/menu/constants.js'
import {
  CHANGE_ACTIVE_ITEM_MENU,
  CHANGE_LIGHT_THEME
} from '@/modules/menu/mutation-types'
import {
  GET_ACTIVE_ITEM_MENU,
  GET_LIGHT_THEME
} from '@/modules/menu/getter-types'

export const state = () => ({
  [ACTIVE_ITEM_MENU]: 'Home',
  [LIGHT_THEME]: false
})

export const getters = {
  [GET_ACTIVE_ITEM_MENU] (state) {
    return state[ACTIVE_ITEM_MENU]
  },
  [GET_LIGHT_THEME] (state) {
    return state[LIGHT_THEME]
  }
}

export const mutations = {
  [CHANGE_ACTIVE_ITEM_MENU] (state, value) {
    state[ACTIVE_ITEM_MENU] = value
  },
  [CHANGE_LIGHT_THEME] (state, value) {
    state[LIGHT_THEME] = value
  }
}

export const actions = {
  [CHANGE_ACTIVE_ITEM_MENU] ({ commit }, value) {
    commit(CHANGE_ACTIVE_ITEM_MENU, value)
  }
}
