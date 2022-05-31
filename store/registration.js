import { COUNTRY_LIST } from '@/modules/registration/constants'
import { SELECTED_COUNTRY_LIST } from '@/modules/registration/constants'
import {
  GET_COUNTRY_LIST,
  GET_SELECTED_COUNTRY_LIST
} from '@/modules/registration/getter-types'
import {
  CHANGE_SELECTED_COUNTRY_LIST
} from '@/modules/registration/mutation-types'

export const state = () => ({
  [COUNTRY_LIST]: [
    {
      label: 'Indonesia',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/indonesia.svg'
    },
    {
      label: 'Malaysia',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
    }
  ],
  [SELECTED_COUNTRY_LIST]: {
    label: 'Malaysia',
    image: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
  }
})

export const getters = {
  [GET_COUNTRY_LIST] (state) {
    return state[COUNTRY_LIST]
  },
  [GET_SELECTED_COUNTRY_LIST] (state) {
    return state[SELECTED_COUNTRY_LIST]
  }
}

export const mutations = {
  [CHANGE_SELECTED_COUNTRY_LIST] (state, selected) {
    state[SELECTED_COUNTRY_LIST] = selected
  }
}

export const actions = {
  [CHANGE_SELECTED_COUNTRY_LIST] ({ commit }, value) {
    commit(CHANGE_SELECTED_COUNTRY_LIST, value)
  }
}
