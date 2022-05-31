import get from 'lodash/get'

import {
  CHANGE_CURRENT_PAGE,
  CHANGE_HISTORY_CAN_VIEW,
  LOGIN_HISTORY_ADD_MORE,
  LOGIN_HISTORY_SUCCESS, SET_ERRORS,
  TRIGGER_IN_PROGRESS
} from '@/modules/login-history/mutation-types'
import { IN_PROGRESS, LIST, CAN_VIEW_LOAD_MORE_BUTTON, CURRENT_PAGE, ERRORS } from '@/modules/login-history/constants'
import loginHistoryState from '../modules/login-history/state'

import mockedData from '../modules/login-history/mocked-data.json'

export const state = () => loginHistoryState

export const mutations = {
  [TRIGGER_IN_PROGRESS] (state) {
    state[IN_PROGRESS] = !state.inProgress
  },
  [LOGIN_HISTORY_SUCCESS] (state, data) {
    state[LIST] = data
  },
  [LOGIN_HISTORY_ADD_MORE] (state, data) {
    state[LIST].data = data
  },
  [CHANGE_HISTORY_CAN_VIEW] (state, value) {
    state[CAN_VIEW_LOAD_MORE_BUTTON] = value
  },
  [CHANGE_CURRENT_PAGE] (state, page) {
    state[CURRENT_PAGE] = page
  },
  [SET_ERRORS] (state, errors) {
    state[ERRORS] = errors
  }

}

export const actions = {
  loadLoginHistoryList (context) {
    const { commit } = context
    const currentPage = get(mockedData, 'meta.page', 1)
    const data = get(mockedData, 'data', [])
    commit(CHANGE_CURRENT_PAGE, currentPage)
    commit(LOGIN_HISTORY_SUCCESS, data)
  }
}

export const getters = {
  getLoginHistory (state) {
    return state[LIST]
  }
}
